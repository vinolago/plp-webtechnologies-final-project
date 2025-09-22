const form = document.getElementById("contactForm");
const thankYouMsg = document.getElementById("thankYouMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple validation
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields.");
    return;
  }

  // Show thank you message
  thankYouMsg.style.opacity = "1";

  // Clear form
  form.reset();

  // Hide after delay
  setTimeout(() => {
    thankYouMsg.style.opacity = "0";
  }, 4000);
});
