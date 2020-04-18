const carousel = document.querySelector('.carousel');
let cellCount = 9;
let selectedIndex = 0;

function rotateCarousel() {
  let angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-452px) rotateY(' + angle + 'deg)';
}

let prevButton = document.querySelector('.nav-button__prev');
prevButton.addEventListener('click', function() {
  selectedIndex -= 1;
  rotateCarousel();
  console.log(selectedIndex);
});

let nextButton = document.querySelector('.nav-button__next');
nextButton.addEventListener('click', function() {
  selectedIndex += 1;
  rotateCarousel();
  console.log(selectedIndex);
});


let images = document.querySelectorAll('.slider-image');
