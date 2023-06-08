
window.addEventListener('load', function() {
    var slideshowContainer = document.querySelector('.slideshow-container');
    var images = Array.from(slideshowContainer.getElementsByTagName('img'));
    var currentIndex = 0;
  
    // Função para exibir a próxima imagem do slideshow
    function showNextImage() {
      images[currentIndex].style.display = 'none';  // Esconder a imagem atual
      currentIndex = (currentIndex + 1) % images.length;  // Avançar para a próxima imagem
      images[currentIndex].style.display = 'block';  // Exibir a próxima imagem
    }
  
    // Exibir a primeira imagem do slideshow
    images[currentIndex].style.display = 'block';
  
    // Configurar um temporizador para exibir automaticamente as imagens
    setInterval(showNextImage, 2000);  // Altere o valor em milissegundos (atualmente 2 segundos)
  });
  