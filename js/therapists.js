// Fade-in effect for therapist cards
const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

// Testimonials carousel
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;
setInterval(() => {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}, 4000);
