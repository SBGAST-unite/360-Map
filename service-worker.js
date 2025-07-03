
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('sbgast-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/map.jpg',
        '/pannellum.js',
        '/pannellum.css'
      ]);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
