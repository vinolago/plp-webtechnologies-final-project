// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

// FAQ Accordion
const accordions = document.querySelectorAll('.accordion-header');
accordions.forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;

    if (body.style.maxHeight) {
      body.style.maxHeight = null;
      body.style.padding = "0 1rem";
    } else {
      document.querySelectorAll('.accordion-body').forEach(b => {
        b.style.maxHeight = null;
        b.style.padding = "0 1rem";
      });
      body.style.maxHeight = body.scrollHeight + "px";
      body.style.padding = "1rem";
    }
  });
});

// Testimonials carousel
const testimonials = document.querySelectorAll('.testimonial');
let index = 0;
setInterval(() => {
  testimonials[index].classList.remove('active');
  index = (index + 1) % testimonials.length;
  testimonials[index].classList.add('active');
}, 4000);


