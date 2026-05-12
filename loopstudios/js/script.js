const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", navToggle);

function navToggle() {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
}

// Reset menu state when screen size expands past the 'md' breakpoint (768px)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    btn.classList.remove("open");
    menu.classList.remove("flex");
    menu.classList.add("hidden");
  }
});
