var CACHE_NAME = 'chama-app';

var urlsToCache = [
    '/',
    '/favicon.ico',
    '/images/chama.jpg',
    '/images/search.png'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(urlsToCache);
            })
    );
    console.log("Hello world from the Service Worker 🤙");
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
            )
    );
});  
