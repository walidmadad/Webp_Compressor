document.getElementById('compressButton').addEventListener('click', async () => {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (!file) {
      alert('Veuillez sélectionner un fichier WebP.');
      return;
    }
    
    const quality = 0.8; // Modifier la valeur de qualité selon vos besoins
    
    try {
      const compressedBlob = await compressWebP(file, quality);
      const downloadLink = document.getElementById('downloadLink');
      const downloadUrl = URL.createObjectURL(compressedBlob);
      downloadLink.href = downloadUrl;
      downloadLink.click();
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error('Erreur lors de la compression du fichier WebP:', error);
      alert('Une erreur est survenue lors de la compression du fichier WebP.');
    }
  });
  