// This function intercepts page loading routines to check theme states instantly
(function applyThemeImmediately() {
  // Read local storage prior to DOM processing so page doesn't flash white unexpectedly
  var cachedTheme = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", cachedTheme);
})();

document.addEventListener("DOMContentLoaded", () => {
  initThemeManager();
  initNavigationContext();
  initMobileMenuControl();
  initProjectFilteringSystem();
  initSkillNodeAnimations();
  initContactValidationForm();
});

//Global Light/Dark LocalStorage Caching Theme Manager
function initThemeManager() {
  const switchWidget = document.getElementById("globalThemeToggler");
  if (!switchWidget) return;

  // Read correct saved memory configurations state parameters
  const activeTheme = localStorage.getItem("portfolio-theme") || "dark";
  document.documentElement.setAttribute("data-theme", activeTheme);
  updateThemeIcon(switchWidget, activeTheme);

  // Bind interactive click parameters
  switchWidget.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const nextTheme = currentTheme === "dark" ? "light" : "dark";

    // Commit updates to active page view elements
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme); // Saves configuration to local memory cache block
    updateThemeIcon(switchWidget, nextTheme);
  });
}

//Icon update utility module helper
function updateThemeIcon(widget, theme) {
  const icon = widget.querySelector("i");
  if (theme === "light") {
    icon.className = "fas fa-moon"; // Displays dark moon icon if light configurations are initialized
  } else {
    icon.className = "fas fa-sun"; // Displays solar radiant engine symbol in dark viewports
  }
}

//Active Anchor Link Synchronization Engine
function initNavigationContext() {
  const currentPath = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href");

    // Check baseline directory path matches or standard home mappings
    if (
      currentPath === linkTarget ||
      (currentPath === "" && linkTarget === "index.html")
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

//Mobile Responsive Menu Controller
function initMobileMenuControl() {
  const toggleBtn = document.querySelector(".mobile-toggle");
  const menuContainer = document.querySelector(".nav-menu");

  if (toggleBtn && menuContainer) {
    toggleBtn.addEventListener("click", () => {
      // Dynamic class toggle switches display visibility parameters inside style.css rules
      menuContainer.classList.toggle("mobile-open");

      // Updates standard menu bar icons to visual 'X' cancel keys smoothly
      const iconNode = toggleBtn.querySelector("i");
      iconNode.classList.toggle("fa-bars");
      iconNode.classList.toggle("fa-times");
    });
  }
}

//Client Side Grid Filtration Engine
function initProjectFilteringSystem() {
  const triggers = document.querySelectorAll(".filter-trigger");
  const operationalCards = document.querySelectorAll("[data-project-category]");

  if (triggers.length > 0 && operationalCards.length > 0) {
    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        // Clear styling flags across sibling filter components
        triggers.forEach((t) => t.classList.remove("active"));
        trigger.classList.add("active");

        const selectedTarget = trigger.getAttribute("data-filter-target");

        operationalCards.forEach((card) => {
          const localCategories = card
            .getAttribute("data-project-category")
            .split(" ");

          // Match criteria execution logic
          if (
            selectedTarget === "all" ||
            localCategories.includes(selectedTarget)
          ) {
            card.style.display = "flex";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  }
}

// Procedural Skill Fill Interpolator
function initSkillNodeAnimations() {
  const progressFills = document.querySelectorAll(".progress-fill-node");
  if (progressFills.length > 0) {
    setTimeout(() => {
      progressFills.forEach((fill) => {
        const targetedMetric = fill.getAttribute("data-target-width");
        if (targetedMetric) fill.style.width = targetedMetric; // Triggers modern CSS width transitions safely
      });
    }, 150);
  }
}

// Contact Data Form Validation Channel
function initContactValidationForm() {
  const formNode = document.getElementById("contactFormPipeline");
  if (formNode) {
    formNode.addEventListener("submit", (event) => {
      event.preventDefault();
      const clientName = document.getElementById("clientName").value.trim();
      if (clientName) {
        // Pops up a structured client success notification channel
        alert(
          `Thank you ${clientName}! Message successfully delivered. Samin will connect shortly.`,
        );
        formNode.reset(); // Safely flushes input characters to leave inputs empty and clean
      }
    });
  }
}
