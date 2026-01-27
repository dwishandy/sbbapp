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
