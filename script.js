const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

document.addEventListener('DOMContentLoaded', function() {
    navLinks.classList.toggle('show');
  });

  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    }
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  
  // Automatically advance the slideshow
  setInterval(() => {
    plusSlides(1);
  }, 3000);


  