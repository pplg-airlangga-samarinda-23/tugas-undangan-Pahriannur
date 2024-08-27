document.addEventListener('DOMContentLoaded', function () {
    const carousel= document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let currentIndex = 0;   
    
    let intervalld;   
    
    function showImage(index) {    
    images[currentIndex].classList.remove('active');
    images[index].classList.add('active');    
    currentIndex = index;
    
    }
    
    function prevImage() {   
    let index = currentIndex - 1;    
    if (index) index = image.length - 1;    
    showImage(index);
    
    }
    
    function nextImage() {    
    let index = currentIndex + 1;    
    if (index >= images.length) index = 0;    
    showImage(index);
    
    }

    function startAutoSlide() {      
        intervalId = setInterval (nextImage, 3000);  
    }    
        prevBtn.addEventListener('click', function () {
             prevImage();          
      });
        
        nextBtn.addEventListener('click', function () { nextImage();
      });  
        startAutoSlide();
     });