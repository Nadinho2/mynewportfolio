/**
 * ==========================================================================
 * Main Script - Nnamdi Amuchie Portfolio
 * Path: assets/js/main.js
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  initActiveNavLink();
  initContactFormFeedback();
  initSmoothScrollFallback();
});

/**
 * 1. Dynamic Active Navigation Highlighting
 * Automatically highlights the current page in the nav bar based on URL path.
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    const linkHref = link.getAttribute("href");
    if (!linkHref) return;

    // Normalize comparison for root index and subfolder paths
    const isHome =
      (currentPath.endsWith("/") || currentPath.endsWith("index.html")) &&
      (linkHref === "index.html" || linkHref === "../index.html");

    const isMatch = !isHome && currentPath.includes(linkHref.replace("../", ""));

    if (isHome || isMatch) {
      navLinks.forEach((el) => el.classList.remove("active"));
      link.classList.add("active");
    }
  });
}

/**
 * 2. Contact Form Interactivity & Validation Feedback
 * Provides immediate visual confirmation upon submission.
 */
function initContactFormFeedback() {
  const contactForm = document.querySelector("form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", () => {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = "Opening Email Client...";

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 2500);
  });
}

/**
 * 3. Smooth Scroll Enhancement
 * Ensures clean anchor jumps for internal section links.
 */
function initSmoothScrollFallback() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}