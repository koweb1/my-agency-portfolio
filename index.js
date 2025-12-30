const hamburger = document.getElementById("hamburger");
const close = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  console.log("Hamburger clicked!");
  navLinks.style.opacity = 1;
  hamburger.style.opacity = 0;
});

close.addEventListener("click", () => {
  console.log("Close clicked!");
  navLinks.style.opacity = 0;
  hamburger.style.opacity = 1;
});
