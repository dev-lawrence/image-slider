//get the slider container from the DOM
const slider = document.querySelector('.slider__container');
// grab all the images inside the slider container
const slides = Array.from(slider.children);
//get the next and the previous buttons
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
// get the size of the first image
const slideSize = slides[0].getBoundingClientRect().width;
// set the current slide to 0
let currentSlide = 0;

// reset slide
function reset() {
  // arraging the slides next to each other
  slides.forEach((slide, index) => {
    slide.style.left = `${slideSize * index}px`;
  });

  // set the image back to the first image in the DOM
  slides[0];
}

reset();

// move the slides
function moveSlide() {
  slider.style.transform = `translateX(-${currentSlide * slideSize}px)`;
}

// move to next slide
function nextSlide() {
  currentSlide++;

  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }

  moveSlide();
}

// move to previous slide
function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  moveSlide();
}

// event listeners for the next and previous buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
