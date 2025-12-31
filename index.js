const hamburger = document.getElementById("hamburger");
const close = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");

function isMobile() {
  return window.innerWidth <= 800;
}

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

const header = document.querySelector("header");
let previouScrollY = window.scrollY;
const threesHold = 10;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  const threesHolDifference = Math.abs(previouScrollY - currentScrollY);
  if (threesHolDifference < threesHold) return;
  if (currentScrollY > previouScrollY) {
    header.style.top = "-100px"
  } else {
    header.style.top = "0";
  }

   if (isMobile()) {
     navLinks.style.opacity = 0;
     
     hamburger.style.opacity = 1;
   }

  previouScrollY = currentScrollY;
})

