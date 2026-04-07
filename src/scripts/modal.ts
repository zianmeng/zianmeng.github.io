import { projects } from '../data/projects';
import type { Project, ProjectLocale } from '../data/projects';

let currentLang = 'en';

// Expose getter for other scripts
(window as any).getCurrentLang = () => currentLang;
(window as any).setCurrentLang = (lang: string) => { currentLang = lang; };

function getLocale(project: Project): ProjectLocale {
  const lang = currentLang as keyof typeof project.locales;
  return project.locales[lang] || project.locales.en;
}

(window as any).openModal = function(slug: string) {
  const project = projects.find(p => p.slug === slug);
  if (!project) return;

  const locale = getLocale(project);
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;

  const featuresHeading = currentLang === 'zh' ? '功能' : currentLang === 'es' ? 'Características' : 'Features';
  const frameClass = project.imageStyle === 'screen' ? 'screen-frame' : 'phone-frame';

  let html = `
    <div class="w-full rounded-t-2xl relative flex flex-col justify-end" style="background: ${project.gradient}; padding: 2rem 2rem 1.5rem;">
      <p style="color: rgba(255,255,255,0.5); font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; margin: 0 0 0.4rem; font-weight: 500;">${locale.subtitle}</p>
      <button class="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white/70 text-lg flex items-center justify-center cursor-pointer hover:bg-black/70 hover:scale-110 transition-all duration-200 backdrop-blur border-none" onclick="closeModal()">&#10005;</button>
    </div>
    <div class="p-8">
      <h2 class="font-light text-2xl text-stone-900 mb-1 tracking-tight">${locale.title}</h2>
      <p class="text-sm text-accent font-normal tracking-wide mb-5">${locale.subtitle}</p>
      <p class="text-stone-500 text-base leading-[1.8] mb-5">${locale.description}</p>`;

  if (project.images.length) {
    html += `<div class="modal-gallery flex gap-3 overflow-x-auto py-4 scroll-snap-x-mandatory" style="-webkit-overflow-scrolling: touch;">`;
    project.images.forEach(src => {
      const w = project.imageStyle === 'screen' ? 'w-[280px]' : 'w-[180px]';
      const r = project.imageStyle === 'screen' ? 'rounded-xl' : 'rounded-2xl';
      html += `<div class="flex-shrink-0 ${w} ${r} overflow-hidden border-2 border-stone-200 bg-black scroll-snap-start hover:scale-[1.02] transition-transform duration-300"><img src="/${src}" alt="${locale.title} screenshot" loading="lazy" class="w-full h-auto block cursor-zoom-in"></div>`;
    });
    html += `</div>`;
  }

  if (locale.features.length) {
    html += `<h3 class="font-medium text-base text-stone-900 mt-5 mb-3">${featuresHeading}</h3><ul class="list-none p-0">`;
    locale.features.forEach(f => {
      html += `<li class="text-stone-500 text-sm py-1.5 pl-5 relative before:content-['→'] before:absolute before:left-0 before:text-accent before:font-semibold">${f}</li>`;
    });
    html += `</ul>`;
  }

  if (project.tags.length) {
    html += `<div class="flex gap-2 flex-wrap mt-5 pt-5 border-t modal-divider">`;
    project.tags.forEach(t => {
      html += `<span class="modal-tag text-xs px-3 py-1.5 rounded-full font-medium">${t}</span>`;
    });
    html += `</div>`;
  }

  html += `</div>`;
  content.innerHTML = html;
  modal.classList.add('active');
  modal.style.opacity = '1';
  modal.style.pointerEvents = 'all';
  content.style.transform = 'translateY(0) scale(1)';
  document.body.style.overflow = 'hidden';
};

(window as any).closeModal = function() {
  const modal = document.getElementById('project-modal');
  const content = document.getElementById('modal-content');
  if (!modal || !content) return;
  modal.style.opacity = '0';
  modal.style.pointerEvents = 'none';
  content.style.transform = 'translateY(30px) scale(0.97)';
  document.body.style.overflow = '';
};

// Keyboard
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const lightbox = document.querySelector('.lightbox-overlay');
    if (lightbox) {
      (window as any).closeLightbox();
    } else {
      (window as any).closeModal();
    }
  }
});
