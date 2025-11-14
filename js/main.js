let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("carousel-slide");
  const dots = document.getElementsByClassName("dot");

  if (slides.length === 0) return;

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
    dots[i].classList.remove("dot-active");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("dot-active");
}

setInterval(() => {
  plusSlides(1);
}, 4000);

// 🧠 Анімація появи при скролі
window.addEventListener("load", () => {
  const revealElements = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    revealElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 80) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("load", revealOnScroll);
  window.addEventListener("scroll", revealOnScroll);
});

// 📩 Форма зворотного зв'язку
function sendMessage(e) {
  e.preventDefault();
  const status = document.getElementById("form-status");
  status.textContent = "⏳ Надсилаємо...";
  setTimeout(() => {
    status.textContent = "✅ Повідомлення успішно надіслано! Дякуємо 💬";
  }, 1500);
}

// 🍔 Меню бургер
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const menuOverlay = document.getElementById("menu-overlay");

menuToggle.addEventListener("click", () => {
  const isActive = menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  menuOverlay.classList.toggle("active");
  document.body.classList.toggle("menu-open", isActive);
});

// Закриття при кліку на пункт меню або фон
document.querySelectorAll(".nav-links a, #menu-overlay").forEach((el) => {
  el.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    menuOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});
