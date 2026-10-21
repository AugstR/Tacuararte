document.documentElement.classList.add('js');

// El catálogo de canastas se arma al compilar (src/data/site.ts + src/pages/index.astro).

// ---------- Menú mobile ----------
const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') !== 'true';
  burger.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    burger.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  }
});

// ---------- Nav con borde y botón flotante al scrollear ----------
const nav = document.querySelector('.nav');
const fab = document.querySelector('.fab');
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle('is-scrolled', y > 8);
  fab.classList.toggle('is-visible', y > window.innerHeight * 0.8);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---------- Lightbox ----------
const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lbImg');
const lbCap = document.getElementById('lbCap');
const openLb = (src, cap) => {
  lbImg.src = src;
  lbImg.alt = cap;
  lbCap.textContent = cap;
  lb.showModal();
};
document.addEventListener('click', (e) => {
  const pic = e.target.closest('.item__pic');
  if (pic) return openLb(pic.dataset.full, pic.dataset.cap);
  const work = e.target.closest('.work');
  if (work) {
    // currentSrc: la versión (AVIF/WebP) que el navegador ya eligió y cargó
    const img = work.querySelector('img');
    return openLb(img.currentSrc || img.src, work.querySelector('figcaption').textContent);
  }
});
document.getElementById('lbClose').addEventListener('click', () => lb.close());
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

// ---------- Reveal on scroll ----------
document.querySelectorAll('.section__head, .service, .ba, .work, .custom, .steps li, .contact > *')
  .forEach((el) => el.classList.add('reveal'));
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => {
    if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
  });
}, { rootMargin: '0px 0px -8% 0px' });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
