document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a");
  const currentPage = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const animatedTexts = document.querySelectorAll(".animated-text");

  function checkScroll() {
    animatedTexts.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

      if (isVisible && !el.classList.contains("visible")) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Por si ya están visibles al cargar
});



