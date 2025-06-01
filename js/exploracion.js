document.addEventListener("DOMContentLoaded", function () {
  // Código existente
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Carrusel
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("activo", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    mostrarSlide(currentSlide);
  });

  nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    mostrarSlide(currentSlide);
  });

  // Auto-cambio cada 6 segundos
  setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    mostrarSlide(currentSlide);
  }, 6000);
});
