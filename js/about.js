// Scroll-trigger fade-in animation
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in, .card");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });
});

// Add CSS classes for animation
const style = document.createElement("style");
style.innerHTML = `
.hidden { opacity: 0; transform: translateY(20px); transition: all 0.8s ease-out; }
.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
