/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "header") {
    x.className += " responsive";
  } else {
    x.className = "header";
  }
}

var slideshowImages = [
  "./images/699125-beautiful-patagonia-wallpapers-1920x1080.jpg",
  "./images/cool-patagonia-wallpapers-1920x1080.jpg",
  "./images/fitz-roy-wallpaper.jpg",
  "./images/perito_moreno_glacier.jpg",
  "./images/mountains-lake-argentina.jpg",
  "./images/an-carlos-de-bariloche.jpg",
  "./images/cerro-torre.jpg",
  "./images/paine-Chile.jpg",
]; //source of pictures: [1] and [2]

var slideshowCaptions = [
  "South Patagonia, Argentina",
  "Torres del Paine Park, Chile",
  "Mount Fitz Roy, Argentina",
  "Perito Moreno Glacier, Argentina",
  "South Patagonia, Argentina",
  "San Carlos de Bariloche, Argentina",
  "Cerro Torre, Argentina",
  "Torres del Paine Park, Chile",
];

document.addEventListener("DOMContentLoaded", function () {
  var currentImageIndex = 0;
  var bgSlideshow = document.querySelector(".bg-slideshow");

  function changeBackgroundImage() {
    bgSlideshow.style.backgroundImage = `url(${slideshowImages[currentImageIndex]})`;
    bgSlideshow.innerHTML = `<div class="slidecaptions">${slideshowCaptions[currentImageIndex]}</div>`;
    currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
  }

  // Change the background image every 5 seconds (5000 milliseconds)
  setInterval(changeBackgroundImage, 5000);

  // Initialize the slideshow
  changeBackgroundImage();
});
