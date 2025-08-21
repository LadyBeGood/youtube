const CACHE_NAME = "v1";
const ASSETS = [

];

// Install event – cache files
self.addEventListener("install", event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        await cache.addAll(ASSETS);
    })());
});

// Activate event – cleanup old caches
self.addEventListener("activate", event => {
    event.waitUntil((async () => {
        const keys = await caches.keys();
        await Promise.all(
            keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
        );
    })());
});

// Fetch event – serve cached files, fallback to network
self.addEventListener("fetch", event => {
    console.log(`URL requested: ${event.request.url}`);

    event.respondWith((async () => {
        const cached = await caches.match(event.request);
        return cached || fetch(event.request);
    })());
});
