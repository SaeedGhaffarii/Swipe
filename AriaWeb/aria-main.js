// NAVBAR SCROLLING DOWN
const navbar = document.querySelector(".navbar");

// BAR MENU SCRIPT
const barMenu = document.querySelector(".bar-menu");
const bar1 = document.querySelector(".bar-1");
const bar2 = document.querySelector(".bar-2");
const bar3 = document.querySelector(".bar-3");
const mobileNave = document.querySelector(".menu");

barMenu.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNave.classList.toggle("activate-menu");
});

window.onscroll = () => {
  if (window.scrollY > 150) {
    navbar.classList.add("nav-active");
  } else {
    navbar.classList.remove("nav-active");
  }
};
