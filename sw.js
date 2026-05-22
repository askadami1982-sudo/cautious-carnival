const CACHE_NAME = "spinball64-cache-v1";
const LOCAL_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/rom.bin",
  "./assets/rom_J.bin",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
  "./favicon.ico",
  "./icons/custom-icon-192.png",
  "./icons/custom-icon-512.png",
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(LOCAL_FILES)));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
