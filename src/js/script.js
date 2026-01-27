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
