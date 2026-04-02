let lightboxImages: string[] = [];
let lightboxIndex = 0;

function openLightbox(src: string) {
  const gallery = document.querySelector('.modal-gallery');
  if (gallery) {
    lightboxImages = Array.from(gallery.querySelectorAll('img')).map(img => (img as HTMLImageElement).src);
    lightboxIndex = lightboxImages.indexOf(src);
    if (lightboxIndex === -1) lightboxIndex = 0;
  } else {
    lightboxImages = [src];
    lightboxIndex = 0;
  }

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center opacity-0 transition-opacity duration-300 cursor-zoom-out backdrop-blur-md';

  let html = `<img src="${src}" alt="Enlarged screenshot" class="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl scale-90 transition-transform duration-400" style="transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);">`;
  if (lightboxImages.length > 1) {
    html += `<button class="lightbox-arrow left absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border-none text-white text-xl flex items-center justify-center cursor-pointer hover:bg-white/25 hover:scale-110 transition-all duration-200 backdrop-blur z-[10001]">&#8249;</button>`;
    html += `<button class="lightbox-arrow right absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border-none text-white text-xl flex items-center justify-center cursor-pointer hover:bg-white/25 hover:scale-110 transition-all duration-200 backdrop-blur z-[10001]">&#8250;</button>`;
    html += `<span class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-xs z-[10001]">${lightboxIndex + 1} / ${lightboxImages.length}</span>`;
  }
  overlay.innerHTML = html;

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox();
  });
  const leftBtn = overlay.querySelector('.lightbox-arrow.left');
  const rightBtn = overlay.querySelector('.lightbox-arrow.right');
  if (leftBtn) leftBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(-1); });
  if (rightBtn) rightBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateLightbox(1); });

  document.body.appendChild(overlay);
  requestAnimationFrame(() => {
    overlay.style.opacity = '1';
    const img = overlay.querySelector('img');
    if (img) img.style.transform = 'scale(1)';
  });
}

function closeLightbox() {
  const overlay = document.querySelector('.lightbox-overlay');
  if (overlay) {
    (overlay as HTMLElement).style.opacity = '0';
    setTimeout(() => overlay.remove(), 300);
  }
  lightboxImages = [];
}

function navigateLightbox(direction: number) {
  if (lightboxImages.length <= 1) return;
  lightboxIndex = (lightboxIndex + direction + lightboxImages.length) % lightboxImages.length;
  const overlay = document.querySelector('.lightbox-overlay');
  if (overlay) {
    const img = overlay.querySelector('img') as HTMLImageElement;
    if (img) img.src = lightboxImages[lightboxIndex];
    const counter = overlay.querySelector('span:last-child');
    if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
  }
}

// Delegate click on gallery images
document.addEventListener('click', (e) => {
  const img = (e.target as HTMLElement).closest('.modal-gallery img') as HTMLImageElement;
  if (img) {
    e.stopPropagation();
    openLightbox(img.src);
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  const lightbox = document.querySelector('.lightbox-overlay');
  if (lightbox) {
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    else if (e.key === 'ArrowRight') navigateLightbox(1);
  }
});

// Expose globally
(window as any).openLightbox = openLightbox;
(window as any).closeLightbox = closeLightbox;
