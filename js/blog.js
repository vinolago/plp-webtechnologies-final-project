// Blog filter logic
const tabs = document.querySelectorAll(".blog-filter .tab");
const cards = document.querySelectorAll(".blog-card");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const filter = tab.dataset.filter;
    cards.forEach(card => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Scroll-trigger for blog cards
document.addEventListener("DOMContentLoaded", () => {
  const slideUps = document.querySelectorAll(".slide-up");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  slideUps.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});
