// hamburger

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
}
);

const slides = document.querySelectorAll(".slider img");
const navDots = document.querySelectorAll(".slider-nav a");
let index = 0;
let slideInterval;

// Fungsi tampilkan slide tertentu hometown
function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.remove("active");
    navDots[idx].classList.remove("active");
    if (idx === i) {
      slide.classList.add("active");
      navDots[idx].classList.add("active");
    }
  });
  index = i;
}

// Auto slide 
function startAutoSlide() {
  slideInterval = setInterval(() => {
    index = (index + 1) % slides.length;
    showSlide(index);
  }, 3000);
}

// Klik manual lewat dot
navDots.forEach((dot, i) => {
  dot.addEventListener("click", (e) => {
    e.preventDefault();
    showSlide(i);
    clearInterval(slideInterval);
    startAutoSlide();
  });
});

// Start
showSlide(index);
startAutoSlide();

