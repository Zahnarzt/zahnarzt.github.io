var CACHE_NAME = 'zahnaerzte-weiler-v1';
var urlsToCache = [
  '',
  '/index.html',
  '/404.html',
  '/app_es6.bundle.js',
  '/1_es6.js',
  '/2_es6.js',
  '/3_es6.js',
  '/4_es6.js',
  '/5_es6.js',
  '/6_es6.js',
  '/7_es6.js',
  '/8_es6.js',
  '/9_es6.js',
  '/images/favicon.svg',
  '/images/index/intro.jpg',
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
