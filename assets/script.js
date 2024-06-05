const menuToggle = document.querySelector(".hamburger input");
const nav = document.querySelector("header nav ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
