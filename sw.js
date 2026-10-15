const CACHE_NAME = 'culinary-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon.png'
];

// При установке приложения сохраняем все файлы в память телефона
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Файлы успешно сохранены в офлайн-кэш!');
      return cache.addAll(ASSETS);
    })
  );
});

// Перехватываем запросы: если интернета нет, выдаем файлы из памяти телефона
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});
