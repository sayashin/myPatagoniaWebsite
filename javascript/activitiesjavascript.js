/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

///URLs for each image
var imageLinks = [
  "underConstruction.html",
  "underConstruction.html",
  "underConstruction.html",
  "underConstruction.html",
  "underConstruction.html",
  "underConstruction.html",
];

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");

  // Check if n is out of bounds and reset it if necessary
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  // Create a caption container with a link and a description
  var captionContainer = document.createElement("div");
  captionContainer.className = "caption-container";

  var link = document.createElement("a");
  link.href = imageLinks[slideIndex - 1];
  link.textContent = dots[slideIndex - 1].alt;
  link.className = "caption";

  var description = document.createElement("p");
  description.className = "description";

  captionContainer.appendChild(link);
  captionContainer.appendChild(description);

  // Clear the caption container and add the link and description
  captionText.innerHTML = "";
  captionText.appendChild(captionContainer);
}

//showslide 2

//URLs for each image
var imageLinks2 = [
  "underConstruction.html",
  "underConstruction.html",
  "underConstruction.html",
  "underConstruction.html",
  "underConstruction.html",
  "underConstruction.html",
];

var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots2 = document.getElementsByClassName("demo2");
  var captionText2 = document.getElementById("caption2");

  // Check if n is out of bounds and reset it if necessary
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }

  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }

  for (i = 0; i < dots2.length; i++) {
    dots2[i].className = dots2[i].className.replace(" active2", "");
  }

  slides2[slideIndex2 - 1].style.display = "block";
  dots2[slideIndex2 - 1].className += " active2";

  // Create a caption container with a link and a description
  var captionContainer2 = document.createElement("div");
  captionContainer2.className = "caption-container";

  var link2 = document.createElement("a");
  link2.href = imageLinks2[slideIndex2 - 1];
  link2.textContent = dots2[slideIndex2 - 1].alt;
  link2.className = "caption2";

  var description2 = document.createElement("p");
  description2.className = "description";

  captionContainer2.appendChild(link2);
  captionContainer2.appendChild(description2);

  // Clear the caption container and add the link and description
  captionText2.innerHTML = "";
  captionText2.appendChild(captionContainer2);
}
