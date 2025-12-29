console.log("NAV JS LOADED");

document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".bx-menu");
  const cancel = document.querySelector(".bx-x");
  const navLinks = document.querySelector(".nav-links");

  if (!menu || !navLinks) return;

  menu.addEventListener("click", () => {
    navLinks.classList.add("show");
    navLinks.style.zIndex = "9999";
  });

  cancel.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
