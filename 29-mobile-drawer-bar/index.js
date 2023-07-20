// Select the container element holding the hamburger icon & mobile drawwer
const hamburger = document.querySelector(".hamburger");

// Select individual elements that comprise the hamburger icon
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

// Select container element holding the mobile drawer
const mobileNav = document.querySelector(".mobileNav");

// Add a 'click' Event Listener to animate the hamburger icon & mobile drawer
hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
  mobileNav.classList.toggle("openDrawer");
});

