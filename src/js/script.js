// dark and light mode
const toggleBtn = document.getElementById("theme-toggle");
const html = document.documentElement;
const iconMoon = document.getElementById("icon-moon");
const iconSun = document.getElementById("icon-sun");

function updateIcon() {
  if (html.classList.contains("dark")) {
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  } else {
    iconMoon.classList.remove("hidden");
    iconSun.classList.add("hidden");
  }
}

console.log(document.documentElement.classList);

toggleBtn.addEventListener("click", () => {
  html.classList.toggle("dark");

  const theme = html.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);

  updateIcon();
});

// Hamburger btn toggle
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// fiter bidang
const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".service-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    cards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});
