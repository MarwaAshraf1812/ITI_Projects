const staticCacheName = "site-static-v1";
const dynamicCacheName = "site-dynamic-v2";

const assets = [
  "./",
  "index.html",
  "about.html",
  "contact.html",
  "main.js",
  "offline.html",
  "404.html",
];

self.addEventListener("install", (event) => {
  console.log("Step 2: Service Worker is Installing...");
  event.waitUntil(
  caches.open(staticCacheName)
    .then(cache => cache.addAll(assets))
    .then(() => self.skipWaiting())
);
});
self.addEventListener("activate", (event) => {
  const currentCaches = [staticCacheName, dynamicCacheName];
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (!currentCaches.includes(key)) {
            return caches.delete(key);
          }
        }),
      );
    }),
  );
});

self.addEventListener("fetch", (event) => {
  if (!(event.request.url.indexOf("http") === 0)) return;
  event.respondWith(
    caches.match(event.request).then((cacheRes) => {
      if (cacheRes) {
        return cacheRes;
      }

      return fetch(event.request)
        .then((fetchRes) => {
          if (fetchRes.status === 404) {
            return caches.match("404.html");
          }
          return caches.open(dynamicCacheName).then((cache) => {
            cache.put(event.request, fetchRes.clone());
            return fetchRes;
          });
        })
        .catch(() => {
          if (event.request.mode === "navigate") {
            return caches.match("offline.html");
          }
        });
    }),
  );
});

self.addEventListener("notificationclick", (event) => {
  const action = event.action;

  event.waitUntil(
    (async () => {
      if (action === "open") {
        await clients.openWindow("newLink.html");
      }
      event.notification.close();
    })(),
  );
});
