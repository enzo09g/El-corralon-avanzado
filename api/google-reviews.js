const DEFAULT_PLACE_QUERY = "El Corralón Barraca de Hierros 1º de Mayo 278 Salto Uruguay";
const DEFAULT_PROFILE_URL = "https://www.google.com/maps/search/?api=1&query=El%20Corral%C3%B3n%20Barraca%20de%20Hierros%201%C2%BA%20de%20Mayo%20278%20Salto";

module.exports = async function handler(request, response) {
  if (request.method !== "GET") {
    response.setHeader("Allow", "GET");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    response.status(503).json({ error: "Missing GOOGLE_PLACES_API_KEY" });
    return;
  }

  try {
    const placeId = process.env.GOOGLE_PLACE_ID || await findPlaceId(apiKey);
    const place = await getPlaceDetails(apiKey, placeId);

    response.setHeader("Cache-Control", "s-maxage=21600, stale-while-revalidate=86400");
    response.status(200).json(normalizePlace(place));
  } catch (error) {
    response.status(502).json({
      error: "Could not load Google reviews",
      detail: error.message,
    });
  }
};

async function findPlaceId(apiKey) {
  const searchResponse = await fetch("https://places.googleapis.com/v1/places:searchText", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.displayName",
    },
    body: JSON.stringify({
      textQuery: process.env.GOOGLE_PLACE_QUERY || DEFAULT_PLACE_QUERY,
      languageCode: "es",
      regionCode: "UY",
    }),
  });

  if (!searchResponse.ok) {
    throw new Error(`Text Search failed: ${searchResponse.status}`);
  }

  const searchData = await searchResponse.json();
  const placeId = searchData.places?.[0]?.id;

  if (!placeId) {
    throw new Error("Google Places did not return a place id");
  }

  return placeId;
}

async function getPlaceDetails(apiKey, placeId) {
  const detailsResponse = await fetch(`https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}?languageCode=es&regionCode=UY`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "id,displayName,rating,userRatingCount,reviews,googleMapsUri,websiteUri",
    },
  });

  if (!detailsResponse.ok) {
    throw new Error(`Place Details failed: ${detailsResponse.status}`);
  }

  return detailsResponse.json();
}

function normalizePlace(place) {
  const reviews = Array.isArray(place.reviews) ? place.reviews : [];

  return {
    fuente: "Google Places",
    perfilUrl: place.googleMapsUri || DEFAULT_PROFILE_URL,
    sitioWeb: place.websiteUri || "https://elcorralonsaltouy.com/",
    nombre: place.displayName?.text || "El Corralón - Barraca de Hierros",
    calificacion: place.rating || 4.4,
    totalOpiniones: place.userRatingCount || 181,
    ultimaActualizacion: new Date().toISOString().slice(0, 10),
    opiniones: reviews
      .filter((review) => review?.text?.text || review?.originalText?.text)
      .map((review) => ({
        autor: review.authorAttribution?.displayName || "Cliente de Google",
        calificacion: review.rating || 5,
        fecha: review.relativePublishTimeDescription || formatDate(review.publishTime),
        texto: review.text?.text || review.originalText?.text,
      })),
  };
}

function formatDate(value) {
  if (!value) {
    return "";
  }

  return new Intl.DateTimeFormat("es-UY", {
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
