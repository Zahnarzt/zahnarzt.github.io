var CACHE_NAME = 'zahnaerzte-weiler-v.1.11';
var urlsToCache = [
  '/',
  '/index.html',
  '/404.html',
  '/images/favicon.svg',
  '/images/index/intro-hilgner-vogt-1028.jpeg',
  '/images/index/intro-hilgner-vogt-794.jpeg',
  '/images/index/intro-hilgner-vogt-672.jpeg',
  '/images/index/intro-hilgner-vogt-390.jpeg',
  '/images/index/intro-hilgner-vogt-320.jpeg',
  '/images/index/intro-hilgner-vogt-296.jpeg',
  '/images/ueber-uns/ueber-hilgner-vogt-1028.jpeg',
  '/images/ueber-uns/ueber-hilgner-vogt-794.jpeg',
  '/images/ueber-uns/ueber-hilgner-vogt-672.jpeg',
  '/images/ueber-uns/ueber-hilgner-vogt-390.jpeg',
  '/images/ueber-uns/ueber-hilgner-vogt-320.jpeg',
  '/images/ueber-uns/ueber-hilgner-vogt-296.jpeg',
  '/images/aktuelles/anleitung-haendewaschen.png',
  '/images/aktuelles/info-haendewaschen.png',
  '/images/icons/pdf.svg',
  '/images/manifest/icon-48x48.png',
  '/images/manifest/icon-72x72.png',
  '/images/manifest/icon-96x96.png',
  '/images/manifest/icon-144x144.png',
  '/images/manifest/icon-192x192.png',
  '/images/ueber-uns/dr-hilgner.jpg',
  '/images/ueber-uns/team-hilgner-a.jpg',
  '/images/ueber-uns/team-hilgner-b.jpg',
  '/images/ueber-uns/team-hilgner-c.jpg',
  '/images/ueber-uns/team-hilgner-d.jpg',
  '/images/ueber-uns/team-vogt-a.jpg',
  '/images/ueber-uns/team-vogt-b.jpg',
  '/images/ueber-uns/team-vogt-c.jpg',
  '/images/ueber-uns/team-vogt-d.jpg',
  '/images/ueber-uns/labor.jpg',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          // Return true if you want to remove this cache,
          // but remember that caches are shared across
          // the whole origin
        }).map(function(cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});
