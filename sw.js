const CACHE_NAME = 'culinary-calc-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon.png'
];

// Установка приложения и кэширование базовых файлов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Работа с запросами
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
