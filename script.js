const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const slides = document.querySelectorAll(".carousel-slide");
const dots = document.querySelectorAll(".dot");
const caption = document.querySelector(".carousel-caption");
const prevButton = document.querySelector(".carousel-arrow.prev");
const nextButton = document.querySelector(".carousel-arrow.next");

const captions = [
  "Brochosome-inspired antireflective materials",
  "Superhydrophobic nanostructures",
  "Micro/nano fabrication"
];

let currentSlide = 0;

function showSlide(index) {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");

  currentSlide = (index + slides.length) % slides.length;

  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
  caption.textContent = captions[currentSlide];
}

prevButton.addEventListener("click", () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener("click", () => {
  showSlide(currentSlide + 1);
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

/* Image carousel auto-advance every 10 seconds */
/*

setInterval(() => {
  showSlide(currentSlide + 1);
}, 10000);

*/
