const $first = document.getElementById('first');
const $second = document.getElementById('second');
const $third = document.getElementById('third');
const $fourth = document.getElementById('fourth');
const $fifth = document.getElementById('fifth');
const $dots = document.querySelector('.dots');
const $arrows = document.querySelector('.arrows');
const $nextImage = document.querySelector('.next-image');
const $backImage = document.querySelector('.back-image');
const $carouselImages = document.querySelector(
  '.imageShown'
) as HTMLImageElement;
const $carouselContainer = document.querySelector('.carousel-container');
if (
  !$first ||
  !$second ||
  !$third ||
  !$fourth ||
  !$fifth ||
  !$dots ||
  !$arrows ||
  !$nextImage ||
  !$backImage ||
  !$carouselImages ||
  !$carouselContainer
)
  throw new Error('All dots or $carouselImages query failed');
let currentImage = 0;
const images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];

function displayImage(): void {
  $carouselImages!.src = images[currentImage];
  if (currentImage === 0) {
    $first!.className = 'fa-solid fa-circle';
    $second!.className = 'fa-regular fa-circle';
    $third!.className = 'fa-regular fa-circle';
    $fourth!.className = 'fa-regular fa-circle';
    $fifth!.className = 'fa-regular fa-circle';
  } else if (currentImage === 1) {
    $first!.className = 'fa-regular fa-circle';
    $second!.className = 'fa-solid fa-circle';
    $third!.className = 'fa-regular fa-circle';
    $fourth!.className = 'fa-regular fa-circle';
    $fifth!.className = 'fa-regular fa-circle';
  } else if (currentImage === 2) {
    $first!.className = 'fa-regular fa-circle';
    $second!.className = 'fa-regular fa-circle';
    $third!.className = 'fa-solid fa-circle';
    $fourth!.className = 'fa-regular fa-circle';
    $fifth!.className = 'fa-regular fa-circle';
  } else if (currentImage === 3) {
    $first!.className = 'fa-regular fa-circle';
    $second!.className = 'fa-regular fa-circle';
    $third!.className = 'fa-regular fa-circle';
    $fourth!.className = 'fa-solid fa-circle';
    $fifth!.className = 'fa-regular fa-circle';
  } else if (currentImage === 4) {
    $first!.className = 'fa-regular fa-circle';
    $second!.className = 'fa-regular fa-circle';
    $third!.className = 'fa-regular fa-circle';
    $fourth!.className = 'fa-regular fa-circle';
    $fifth!.className = 'fa-solid fa-circle';
  }
}

function nextSlide(): void {
  currentImage++;
  if (currentImage === 5) {
    currentImage = 0;
  }
  displayImage();
}

let intervalId = setInterval(nextSlide, 3000);

function resumeInterval(): void {
  setTimeout(() => {
    clearInterval(intervalId);
    intervalId = setInterval(nextSlide, 3000);
  }, 3000);
}

function dotClick(event: Event): void {
  const eventTarget = event.target as HTMLElement;
  clearInterval(intervalId);
  if (eventTarget!.id === 'first') {
    currentImage = 0;
  } else if (eventTarget!.id === 'second') {
    currentImage = 1;
  } else if (eventTarget!.id === 'third') {
    currentImage = 2;
  } else if (eventTarget!.id === 'fourth') {
    currentImage = 3;
  } else if (eventTarget!.id === 'fifth') {
    currentImage = 4;
  }
  displayImage();
  resumeInterval();
}

$dots!.addEventListener('click', dotClick);

function leftArrowClick(): void {
  clearInterval(intervalId);
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  displayImage();
  resumeInterval();
}

function rightArrowClick(): void {
  clearInterval(intervalId);
  currentImage++;
  if (currentImage === 5) {
    currentImage = 0;
  }
  displayImage();
  resumeInterval();
}

$nextImage!.addEventListener('click', rightArrowClick);
$backImage!.addEventListener('click', leftArrowClick);
