  document.addEventListener("DOMContentLoaded", function () {
    const iconBar = document.querySelector(".icons");
    const navbar = document.querySelector(".navbar");

    iconBar.addEventListener("click", function () {
      // Vérifie si le menu est caché
      if (navbar.style.display === "block") {
        navbar.style.display = "none"; // cache le menu
      } else {
        navbar.style.display = "block"; // affiche le menu
      }
    });
  });