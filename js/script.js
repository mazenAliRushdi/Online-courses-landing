document.addEventListener("DOMContentLoaded", function () {
  // ==================== Enhanced Navbar Logic ====================
  const navbar = document.querySelector(".navbar");
  const toggler = document.querySelector(".navbar-toggler");
  const collapse = document.querySelector(".navbar-collapse");

  if (toggler && collapse) {
    // Modern Toggle Logic
    toggler.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !isExpanded);

      // Toggle icon
      if (!isExpanded) {
        this.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        this.innerHTML = '<span class="navbar-toggler-icon"></span>';
      }

      collapse.classList.toggle("show");

      // Add body overlay when menu is open
      if (!isExpanded) {
        document.body.style.overflow = "hidden";
        addOverlay();
      } else {
        document.body.style.overflow = "";
        removeOverlay();
      }
    });

    // Close menu when clicking on nav links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth < 992) {
          toggler.setAttribute("aria-expanded", "false");
          toggler.innerHTML = '<span class="navbar-toggler-icon"></span>';
          collapse.classList.remove("show");
          document.body.style.overflow = "";
          removeOverlay();
        }
      });
    });
  }

  // ==================== ScrollReveal Animations ====================
  if (typeof ScrollReveal !== "undefined") {
    ScrollReveal().reveal(".reveal-left", {
      origin: "left",
      distance: "50px",
      duration: 800,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
      mobile: true,
    });

    ScrollReveal().reveal(".reveal-right", {
      origin: "right",
      distance: "50px",
      duration: 800,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
      mobile: true,
    });

    ScrollReveal().reveal(".reveal-bottom", {
      origin: "bottom",
      distance: "30px",
      duration: 800,
      delay: 200,
      easing: "cubic-bezier(0.5, 0, 0, 1)",
      reset: false,
      mobile: true,
    });
  }

  // ==================== Card Hover Effects ====================
  // Course card hover effect
  document.querySelectorAll(".course-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const img = this.querySelector(".course-img img");
      if (img) img.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", function () {
      const img = this.querySelector(".course-img img");
      if (img) img.style.transform = "scale(1)";
    });
  });

  // Testimonial card hover effect
  document.querySelectorAll(".testimonial-card").forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const img = this.querySelector(".testimonial-img");
      if (img) img.style.transform = "scale(1.1)";
    });

    card.addEventListener("mouseleave", function () {
      const img = this.querySelector(".testimonial-img");
      if (img) img.style.transform = "scale(1)";
    });
  });
});
