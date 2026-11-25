/* pMap service worker: keeps a copy of the app so it opens without internet.
   Online, it always asks GitHub for the newest version first (so updates arrive by themselves);
   offline, it uses the saved copy. Change VERSION when you change the list of files below. */
const VERSION = 'pmap-v1';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icons/pmap-48.png', 'icons/pmap-192.png', 'icons/pmap-512.png', 'icons/pmap-512-maskable.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;          // NCBI, Addgene and other sites: straight to the network
  e.respondWith(fetch(r).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(r, copy)); }
    return res;
  }).catch(() => caches.match(r, { ignoreSearch: true }).then(m => m || caches.match('index.html'))));
});
