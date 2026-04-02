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
