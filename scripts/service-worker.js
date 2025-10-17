const CACHE_NAME = "thebb-biryani-cache-v3";
const urlsToCache = [
  "/",
  "/index.html",
  "/menu.html",
  "/about.html",
  "/contact.html",
  "/admin.html",
  "/styles/style.css",
  "/scripts/app.js",
  "/scripts/menuData.js",
  "/scripts/qr.js",
  "/scripts/firebase-client.js",
  "/images/logo.png",
  "/images/biryani1.png",
  "/images/biryani2.png",
  "/images/biryani3.png",
  "/images/biryani4.png",
  "/images/qr-placeholder.png",
  "/manifest.json"
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
