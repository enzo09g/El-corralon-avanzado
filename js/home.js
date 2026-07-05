document.documentElement.classList.add("js-enabled");

window.addEventListener("load", () => {
  document.body.classList.add("is-loaded");
});

document.addEventListener("DOMContentLoaded", () => {
  initSmartNav();

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
      threshold: 0.16,
      rootMargin: "0px 0px -48px 0px",
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 260)}ms`;
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
