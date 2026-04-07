// Dark mode toggle
function updateDarkIcon() {
  const icon = document.getElementById('dark-icon');
  if (icon) icon.textContent = document.documentElement.classList.contains('dark') ? '☀' : '☾';
}
updateDarkIcon();

(window as any).toggleDark = function() {
  const isDark = document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  updateDarkIcon();
};

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    document.documentElement.classList.toggle('dark', e.matches);
    updateDarkIcon();
  }
});

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

requestAnimationFrame(() => {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top > window.innerHeight) {
      el.classList.add('animate-in');
    }
    observer.observe(el);
  });
});

// Nav hide on scroll down, show on scroll up
const nav = document.querySelector('nav');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > lastScroll && current > 80) {
    nav?.classList.add('nav-hidden');
  } else {
    nav?.classList.remove('nav-hidden');
  }
  lastScroll = current;
}, { passive: true });

// Timeline toggle
(window as any).toggleTimeline = function(el: HTMLElement) {
  const wasActive = el.classList.contains('active');
  document.querySelectorAll('.timeline-item').forEach(i => i.classList.remove('active'));
  if (!wasActive) el.classList.add('active');
};
