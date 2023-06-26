function compressWebP(file, quality) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = new Image();
        img.src = event.target.result;
        img.onload = function () {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.toBlob(
            function (blob) {
              resolve(blob);
            },
            'image/webp',
            quality
          );
        };
      };
      reader.onerror = function (event) {
        reject(event.target.error);
      };
      reader.readAsDataURL(file);
    });
  }
  