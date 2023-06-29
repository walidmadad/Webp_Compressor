var fileInput = document.getElementById('fileInput');
    
    function compress() {
      var file = fileInput.files[0];
      
      if (!file) {
        alert('Aucun fichier sélectionné');
        return;
      }
      
      var reader = new FileReader();
      
      reader.onload = function(event) {
        var image = new Image();
        
        image.onload = function() {
          var canvas = document.createElement('canvas');
          canvas.width = image.width;
          canvas.height = image.height;
          
          var context = canvas.getContext('2d');
          context.drawImage(image, 0, 0);
          
          var compressedImage = canvas.toDataURL('image/webp', 0.7);
          
          var downloadLink = document.getElementById('downloadLink');
          downloadLink.href = compressedImage;
          downloadLink.download = 'compressed.webp';
          downloadLink.style.display = 'block';
        };
        
        image.src = event.target.result;
      };
      
      reader.readAsDataURL(file);
    }
    
    function clearFile() {
      fileInput.value = '';
      var downloadLink = document.getElementById('downloadLink');
      downloadLink.style.display = 'none';
    }