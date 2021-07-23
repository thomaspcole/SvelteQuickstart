const cacheName = 'cache-v1';
const cacheFiles = [
    '/offline.html',
];

self.addEventListener('install', (event) => {
  console.log('Service worker install event!');
  event.waitUntil(caches.open(cacheName).then((cache) => cache.addAll(cacheFiles)));
});

self.addEventListener('activate', (event) => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', (event) => {
  console.log('Fetch intercepted for:', event.request.url);

  if(event.request.mode !== 'navigate'){
      return;
  }

  event.respondWith(
    fetch(event.request).catch(() => {
        return caches.open(cacheName).then((cache) => {
            return cache.match('offline.html')
        })
    })
  );
});
