function show(element) {
  element.style.display = "flex";
}

function hide(element) {
  element.style.display = "none";
}

function navToggle() {
  var x = document.getElementById("main-nav");
    if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      hide(slides[i]);
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  show(slides[slideIndex-1]);
  dots[slideIndex-1].className += " active";
}

function clickCard(n) {
  console.log("clickCard");
  console.log(document.getElementById("modals").style.display);
  exitModal();
  show(document.getElementById("m"+n));
  show(document.getElementById("background"));
  show(document.getElementById("modals"));
}

function exitModal() {
  console.log("exitModal");
  var currentModal;
  for(var i = 0; i < 6; i++) {
    currentModal = document.getElementById("m"+i);
    hide(currentModal);
  }
  hide(document.getElementById("modals"));
  hide(document.getElementById("background"));
}
