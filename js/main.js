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

  revealOnScroll();

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
