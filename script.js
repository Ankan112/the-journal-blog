const toggleButton = document.querySelector(".navbar-toggle");
const navbarOptions = document.querySelector(".navbar-options");

toggleButton.addEventListener("click", () => {
  navbarOptions.classList.toggle("show");
});
