// Select the hamburger container element from the document
const hamburger = document.querySelector(".hamburger");

// Select individual elements that comprise the hamburger icon
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

// Add a 'click' Event Listener to animate the bars that comprises the hamburger icon
hamburger.addEventListener("click", () => {
  bar1.classList.toggle("animateBar1");
  bar2.classList.toggle("animateBar2");
  bar3.classList.toggle("animateBar3");
});
