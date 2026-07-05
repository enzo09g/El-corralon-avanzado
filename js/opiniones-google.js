document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#googleReviewsList");

  if (!list) {
    return;
  }

  fetchReviews("json/opiniones-google.json")
    .then((data) => renderGoogleReviews(list, data))
    .catch(() => renderReviewsUnavailable(list));
});

async function fetchReviews(url) {
  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`No se pudieron cargar las opiniones desde ${url}.`);
  }

  return response.json();
}

function renderGoogleReviews(list, data) {
  const reviews = Array.isArray(data.opiniones) ? data.opiniones.filter(isValidReview) : [];
  updateReviewsSummary(data);

  if (reviews.length === 0) {
    renderReviewsUnavailable(list, data);
    return;
  }

  const visibleReviews = reviews.slice(0, 50);

  list.innerHTML = `
    <div class="google-reviews-track" data-review-track>
      ${visibleReviews.map((review, index) => createReviewCard(review, data.perfilUrl, index)).join("")}
    </div>
  `;

  initReviewsRotation(list, visibleReviews.length);
}

function updateReviewsSummary(data) {
  const rating = Number(data.calificacion);
  const total = Number(data.totalOpiniones);
  const ratingTarget = document.querySelector("[data-google-rating]");
  const totalTarget = document.querySelector("[data-google-review-count]");

  if (ratingTarget && Number.isFinite(rating)) {
    ratingTarget.textContent = rating.toFixed(1);
  }

  if (totalTarget && Number.isFinite(total)) {
    totalTarget.textContent = total.toLocaleString("es-UY");
  }
}

function renderReviewsUnavailable(list, data = {}) {
  const profileUrl = data.perfilUrl || "https://www.google.com/maps/search/?api=1&query=El%20Corral%C3%B3n%20Barraca%20de%20Hierros%201%C2%BA%20de%20Mayo%20278%20Salto";

  list.innerHTML = `
    <article class="review-empty-card">
      <span><i class="bi bi-google" aria-hidden="true"></i></span>
      <h3>Las reseñas se consultan en la ficha de Google.</h3>
      <p>Google Places no siempre devuelve textos de reseñas para todos los perfiles. La calificación y el total se mantienen visibles, y podés abrir la ficha para leerlas completas.</p>
      <a class="review-empty-card__link" href="${profileUrl}" target="_blank" rel="noopener">Ver opiniones en Google</a>
    </article>
  `;
}

function isValidReview(review) {
  return review && review.autor && review.texto && Number(review.calificacion) > 0;
}

function createReviewCard(review, profileUrl, index) {
  const rating = Math.max(1, Math.min(5, Math.round(Number(review.calificacion))));
  const stars = Array.from({ length: 5 }, (_, index) => (
    `<i class="bi bi-star${index < rating ? "-fill" : ""}" aria-hidden="true"></i>`
  )).join("");

  return `
    <article class="google-review-card${index === 0 ? " is-active" : ""}" data-review-card="${index}">
      <div class="google-review-card__source">
        <i class="bi bi-google" aria-hidden="true"></i>
        <span>Opinión en Google</span>
      </div>
      <div class="google-review-card__stars" aria-label="${rating} de 5 estrellas">${stars}</div>
      <blockquote>${escapeHtml(review.texto)}</blockquote>
      <footer>
        <strong>${escapeHtml(review.autor)}</strong>
        ${review.fecha ? `<span>${escapeHtml(review.fecha)}</span>` : ""}
        <a href="${profileUrl}" target="_blank" rel="noopener">Ver ficha</a>
      </footer>
    </article>
  `;
}

function initReviewsRotation(list, reviewCount) {
  const cards = Array.from(list.querySelectorAll("[data-review-card]"));

  if (cards.length === 0) {
    return;
  }

  let activeIndex = 0;

  const setActive = (nextIndex) => {
    activeIndex = (nextIndex + reviewCount) % reviewCount;

    cards.forEach((card, index) => {
      card.classList.toggle("is-active", index === activeIndex);
    });
  };

  setActive(0);

  if (reviewCount > 1) {
    window.setInterval(() => setActive(getRandomReviewIndex(activeIndex, reviewCount)), 6200);
  }
}

function getRandomReviewIndex(currentIndex, reviewCount) {
  if (reviewCount < 2) {
    return 0;
  }

  let nextIndex = currentIndex;

  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * reviewCount);
  }

  return nextIndex;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
