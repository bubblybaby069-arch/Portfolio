// Load sections dynamically
const load = (id, file) => {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;

      // If contact section is loaded, initialize EmailJS
      if (id === "contact") {
        initContactForm();
      }
    });
};

load("navbar", "navbar.html");
load("hero", "hero.html");
load("about", "about.html");
load("skills", "skills.html");
load("contact", "contact.html");
load("project", "project.html");

// Smooth scroll
document.documentElement.style.scrollBehavior = "smooth";

// Skills animation
setTimeout(() => {
  document.querySelectorAll(".skill-bar").forEach(bar => {
    bar.style.width = bar.dataset.percent + "%";
    bar.style.transition = "width 1.5s ease-in-out";
  });
}, 800);

// Mobile Menu Toggle
document.addEventListener("click", function () {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
});


// ===============================
// EMAILJS CONTACT FORM FUNCTION
// ===============================

function initContactForm() {

  // Initialize EmailJS
  emailjs.init("Rg3cHdtR3lqHkPcgP"); // 🔴 Replace with your Public Key

  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      emailjs.sendForm(
        "service_31ro8i5",     // 🔴 Replace
        "template_wlcsx4r",    // 🔴 Replace
        this
      ).then(() => {

        alert("Message sent successfully ✅");
        form.reset();

      }).catch(() => {

        alert("Failed to send message ❌");

      });
    });
  }
}