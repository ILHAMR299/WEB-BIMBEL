// ===== TOGGLE NAVBAR MOBILE =====
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#menu");

// ketika icon menu diklik
if (menu) {
  menu.onclick = () => {
    navbarNav.classList.toggle("active");
  };
}

// klik di luar navbar untuk menutup
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// ===== SLIDER HERO =====
const slides = document.querySelectorAll(".slider .slide");
let currentSlide = 0;
const slideInterval = 4000; // 4 detik

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  if (slides.length === 0) return;
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// mulai auto slide kalau ada slide
if (slides.length > 0) {
  showSlide(currentSlide);           // pastikan slide pertama aktif
  setInterval(nextSlide, slideInterval);
}