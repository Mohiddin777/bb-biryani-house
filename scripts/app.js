if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('scripts/service-worker.js')
    .then(() => console.log("✅ Service Worker registered"))
    .catch(err => console.log("Service Worker registration failed:", err));
}
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    const app = document.getElementById('app');
    if(splash) splash.style.display = 'none';
    if(app) app.classList.remove('hidden');
  }, 900);
});
