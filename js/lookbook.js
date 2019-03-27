// ------------- LOOKBOOK ---------------

// Below is the lookbook lightbox script
function openlightbox() {
    document.getElementById('lightbox1').style.display = "block";
  }
  
//   This closes the lightbox
function closelightbox() {
    document.getElementById('lightbox1').style.display = "none";
  }
  
//   Slideshow functionality
var slideShow = 1;
    previewSlides(slideShow);
  
function plusSlides(n) {
    previewSlides(slideShow += n);
}
  
function currentSlide(n) {
    previewSlides(slideShow = n);
}
  
function previewSlides(n) {
    var x;
    var slides = document.getElementsByClassName("hide-lightbox");
    var dots = document.getElementsByClassName("preview");
    // once cliked next slide would show
    if (n > slides.length) {slideShow = 1}
    // once cliked previous slide would show
    if (n < 1) {slideShow = slides.length}
    for (x = 0; x < slides.length; x++) {
        slides[x].style.display = "none";
    }
    for (x = 0; x < dots.length; x++) {
        dots[x].className = dots[x].className.replace(" active", "");
    }
    
    slides[slideShow-1].style.display = "block";
    dots[slideShow-1].className += " active";
}