const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

function updateHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

function closeMenu() {
  header.classList.remove("menu-open");
  document.body.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  header.classList.toggle("menu-open", !isOpen);
  document.body.classList.toggle("nav-open", !isOpen);
  navToggle.setAttribute("aria-expanded", String(!isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});
