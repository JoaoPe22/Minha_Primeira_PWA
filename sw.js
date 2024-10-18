let cacheName = "my-first-pwa";
let filesToCache = ["/", "/index.html", "/css/style.css", "/js/main.js"];

// inicializando a service worker e fazendo o dowloand do conteúdo da aplicação
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(caheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// disponibilizando o conteudo quando quando estiver offline
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
