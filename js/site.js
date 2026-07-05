document.documentElement.classList.add("js-enabled");

window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  initSmartNav();

  if (!document.querySelector(".site-loader")) {
    const loader = document.createElement("div");
    loader.className = "site-loader";
    loader.setAttribute("aria-hidden", "true");
    document.body.prepend(loader);
  }

  const revealTargets = document.querySelectorAll(
    ".page-hero .container, .custom-card, .cat-list-container .list-group-item, .datos, .contact-actions-grid, .contact-map-section, .contact-story-layout, #contOpciones, .contenedor, .spec-producto, .contenedor-principal-tabla, .contenedor-listas"
  );

  revealTargets.forEach((target) => target.classList.add("reveal"));

  const revealItems = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -42px 0px",
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 35, 220)}ms`;
    observer.observe(item);
  });
});

function initSmartNav() {
  const nav = document.querySelector(".navbar.bg-dark");

  if (!nav) {
    return;
  }

  const collapse = nav.querySelector(".navbar-collapse");
  let lastY = window.scrollY;
  let ticking = false;

  const updateNav = () => {
    const currentY = window.scrollY;
    const isOpen = collapse?.classList.contains("show");
    const scrollingDown = currentY > lastY;

    nav.classList.toggle("is-scrolled", currentY > 24);
    nav.classList.toggle("nav-open", Boolean(isOpen));

    if (!isOpen && currentY > 180 && scrollingDown) {
      nav.classList.add("is-hidden");
    } else {
      nav.classList.remove("is-hidden");
    }

    lastY = Math.max(currentY, 0);
    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateNav);
      ticking = true;
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);

  nav.addEventListener("shown.bs.collapse", updateNav);
  nav.addEventListener("hidden.bs.collapse", updateNav);

  updateNav();
}
