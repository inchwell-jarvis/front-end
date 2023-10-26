        // 压缩base64位编码 至指定大小
        resizeImageToSize(base64Image, targetSizeKB) {
            const img = new Image();
            img.src = base64Image;

            return new Promise((resolve, reject) => {
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const maxSizeBytes = targetSizeKB * 1024;

                    let quality = 0.7; // 初始 JPEG 质量
                    let dataURL = '';

                    do {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0);

                        dataURL = canvas.toDataURL('image/jpeg', quality);

                        quality -= 0.02;
                    } while (dataURL.length > maxSizeBytes && quality > 0);

                    resolve(dataURL);
                };

                img.onerror = () => reject('无法加载图像');
            });
        }

// 使用
// resizeImageToSize(base64Image, 200)
//     .then(resizedBase64Image => {
//         // 在这里，你可以使用调整大小后的图像数据（base64 编码）
//         console.log("调整大小后的图像数据：", resizedBase64Image);
//     })
//     .catch(error => {
//         console.error("发生错误：", error);
//     });


        // 压缩base64位编码 至指定大小  并返回压缩耗时
       async resizeImageToSize(base64Image, targetSizeKB) {
            const img = new Image();
            img.src = base64Image;

            return new Promise((resolve, reject) => {
                const startTime = Date.now();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');
                    const maxSizeBytes = targetSizeKB * 1024;

                    let quality = 0.7; // 初始 JPEG 质量
                    let dataURL = '';

                    do {
                        canvas.width = img.width;
                        canvas.height = img.height;
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(img, 0, 0);

                        dataURL = canvas.toDataURL('image/jpeg', quality);

                        quality -= 0.02;
                    } while (dataURL.length > maxSizeBytes && quality > 0);

                    const endTime = Date.now();
                    const compressionTime = endTime - startTime; // 压缩耗时

                    resolve({ compressedImage: dataURL, compressionTime: compressionTime });
                };

                img.onerror = () => reject('无法加载图像');
            });
        }

// 使用
//  let rv = await  me.resizeImageToSize(reader.result, 200)
