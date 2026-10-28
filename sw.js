const CACHE = "coretalk-v1";
const BASE = "/CoreTalk/";
const FILES = [
  BASE, BASE + "index.html", BASE + "chats.html", 
  BASE + "chat.html", BASE + "status.html",
  BASE + "firebase-config.js", BASE + "manifest.json", BASE + "logo.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => 
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
