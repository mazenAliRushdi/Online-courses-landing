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
});
