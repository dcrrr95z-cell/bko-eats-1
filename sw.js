const CACHE_NAME = "bko-eats-v61";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=38",
  "./app.js?v=56",
  "./firestore.rules",
  "./firebase-config.js?v=18",
  "./manifest.json",
  "./icon.svg",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))),
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);
  const isLocalAsset = requestUrl.origin === self.location.origin;
  const isFreshCriticalAsset =
    isLocalAsset &&
    (event.request.mode === "navigate" || requestUrl.pathname.endsWith("/index.html") || requestUrl.pathname.endsWith("/styles.css") || requestUrl.pathname.endsWith("/app.js"));

  if (isFreshCriticalAsset) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request)),
    );
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      const client = clientList.find((item) => "focus" in item);
      if (client) return client.focus();
      if (clients.openWindow) return clients.openWindow("./index.html");
      return undefined;
    }),
  );
});
