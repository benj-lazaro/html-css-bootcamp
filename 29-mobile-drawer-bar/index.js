// Select the element with ID of "btn"
const btn = document.querySelector("#btn");

// Add an Event Listener of 'click' to the element
// Toggle the CSS class 'purple' when clicked
btn.addEventListener("click", () => {
  btn.classList.toggle("purple");
});
