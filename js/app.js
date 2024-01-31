window.onload = function () {
  document
    .getElementById("menu-mobile-button")
    .addEventListener("click", function () {
      document.getElementById("menu").classList.toggle("open");
    });

  document
    .getElementById("menu-mobile-close")
    .addEventListener("click", function () {
      document.getElementById("menu").classList.toggle("open");
    });
};
