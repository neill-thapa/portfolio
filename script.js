// ==== Menu Toggle ====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ==== Project Filter ====
const filterButtons = document.querySelectorAll(".project-filters button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Skills bar animation
// Triggered when the skills section scrolls into view
const skillFills = document.querySelectorAll(".skill-fill");

const animateSkills = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      skillFills.forEach((fill) => {
        const level = fill.dataset.level; // e.g. "0.65"
        fill.style.width = level * 100 + "%"; // sets to e.g. "65%"
      });
      observer.disconnect(); // only animate once
    }
  });
};

const skillsSection = document.querySelector(".skills");
const skillsObserver = new IntersectionObserver(animateSkills, {
  threshold: 0.2,
});
skillsObserver.observe(skillsSection);
