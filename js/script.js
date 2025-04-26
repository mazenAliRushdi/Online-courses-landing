document.addEventListener("DOMContentLoaded", function () {
  // ==================== Dark Mode Toggle ====================
  const darkModeToggle = document.getElementById("toggle");

  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", function () {
      if (this.checked) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        localStorage.setItem("darkMode", "disabled");
      }
    });

    // Check for saved preference
    if (localStorage.getItem("darkMode") === "enabled") {
      darkModeToggle.checked = true;
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  }
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

  // ==================== Form Handling ====================
  // Contact form submission
  const contactForm = document.querySelector(".contact-form form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const button = this.querySelector('button[type="submit"]');
      const buttonText = button.textContent;

      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
      button.disabled = true;

      // Simulate form submission
      setTimeout(function () {
        button.innerHTML = '<i class="fas fa-check"></i> Message Sent';
        contactForm.reset();

        // Reset button text after 3 seconds
        setTimeout(function () {
          button.textContent = buttonText;
          button.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = this.querySelector('input[type="email"]');
      const button = this.querySelector('button[type="submit"]');
      const buttonHtml = button.innerHTML;

      button.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
      button.disabled = true;

      // Simulate submission
      setTimeout(function () {
        button.innerHTML = '<i class="fas fa-check"></i>';
        input.value = "";

        // Reset button after 2 seconds
        setTimeout(function () {
          button.innerHTML = buttonHtml;
          button.disabled = false;
        }, 2000);
      }, 1000);
    });
  }
});
