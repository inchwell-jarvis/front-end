export default async function compressImage(pathOrBase64, targetSizeKB = 100) {
	if (typeof plus === 'object') {
		// 使用 plus 的压缩方法
		return await compressImageUsingPlus(pathOrBase64, targetSizeKB);
	} else {
		// 使用 Canvas 的压缩方法
		const base64Image = await pathToBase64(pathOrBase64);
		return await compressImageInBrowser(base64Image, targetSizeKB);
	}
}

async function compressImageUsingPlus(path, targetSizeKB) {
	if (typeof plus !== 'object') {
		throw new Error('当前环境不支持此功能');
	}

	let quality = 80;

	while (quality > 10) {
		try {
			const compressedPath = '_doc/compressed_' + Date.now() + '_' + path.split('/').pop();

			const e = await new Promise((resolve, reject) => {
				plus.zip.compressImage({
					src: path,
					dst: compressedPath,
					quality: quality
				}, resolve, (error) => reject(new Error('压缩失败: ' + error.message)));
			});

			const entry = await new Promise((resolve, reject) => {
				plus.io.resolveLocalFileSystemURL(e.target, resolve, reject);
			});

			const file = await new Promise((resolve, reject) => {
				entry.file(resolve, reject);
			});

			const base64 = await new Promise((resolve, reject) => {
				const reader = new plus.io.FileReader();
				reader.onload = (data) => resolve(data.target.result);
				reader.onerror = (error) => reject(new Error('文件读取失败: ' + error.message));
				reader.readAsDataURL(file);
			});

			const sizeKB = base64.length / 1024;

			if (sizeKB <= targetSizeKB) {
				return base64;
			}
		} catch (error) {
			console.error(error.message);
		}

		quality -= 10;
	}

	throw new Error('压缩失败: 达到最低质量限制');
}

async function pathToBase64(path) {
	return new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.open('GET', path, true);
		xhr.responseType = 'blob';
		xhr.onload = function() {
			if (this.status === 200) {
				const reader = new FileReader();
				reader.onload = function(e) {
					resolve(e.target.result);
				};
				reader.onerror = reject;
				reader.readAsDataURL(this.response);
			} else {
				reject(new Error('无法获取文件'));
			}
		};
		xhr.onerror = reject;
		xhr.send();
	});
}

async function compressImageInBrowser(base64Image, targetSizeKB) {
	if (typeof base64Image !== 'string' || !base64Image.startsWith('data:image/')) {
		throw new Error('无效的 Base64 图像格式');
	}

	let quality = 0.8;
	const img = new Image();
	img.src = base64Image;

	return new Promise((resolve, reject) => {
		img.onload = () => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0);

			const checkSize = () => {
				const dataURL = canvas.toDataURL('image/jpeg', quality);
				const sizeKB = dataURL.length / 1024;

				if (sizeKB <= targetSizeKB || quality <= 0.1) {
					resolve(dataURL);
				} else {
					quality -= 0.1;
					checkSize();
				}
			};

			checkSize();
		};

		img.onerror = () => reject(new Error('无法加载图像'));
	});
}
