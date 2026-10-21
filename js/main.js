document.documentElement.classList.add('js');

const WA = '5493794637135';
const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

// ---------- Catálogo de canastas (fotos del catálogo PDF) ----------
const CATALOG = [
  { n: 1,  name: 'Canasta picnic',        desc: 'Con tapa doble, manija forrada y cierre de madera.' },
  { n: 2,  name: 'Canasta con asa',       desc: 'Ovalada, de boca amplia y asa alta.' },
  { n: 3,  name: 'Canasto con orejas',    desc: 'Redondo y profundo, con dos asas trenzadas.' },
  { n: 4,  name: 'Costurero con tapa',    desc: 'Ideal para lanas y tejidos.' },
  { n: 5,  name: 'Baúl ovalado',          desc: 'Con tapa y tirador, para guardar.' },
  { n: 6,  name: 'Bolso de compras',      desc: 'Alto, con dos asas largas.' },
  { n: 7,  name: 'Panera redonda',        desc: 'Baja, con fondo tejido en espiral.' },
  { n: 8,  name: 'Panera ovalada',        desc: 'Borde trenzado, uso diario.' },
  { n: 9,  name: 'Bandeja rectangular',   desc: 'Con marco forrado y esquinas atadas.' },
  { n: 10, name: 'Frutera ovalada grande', desc: 'Amplia, bicolor.' },
  { n: 11, name: 'Frutera ovalada',       desc: 'Versión mediana, tejido parejo.' },
];

const catalogEl = document.getElementById('catalog');
if (catalogEl) {
  catalogEl.innerHTML = CATALOG.map(({ n, name, desc }) => {
    const num = String(n).padStart(2, '0');
    const src = `img/catalogo/canasta-${num}.jpg`;
    return `
      <li class="item reveal">
        <button class="item__pic" type="button" data-full="${src}" data-cap="Modelo ${n} · ${name}" aria-label="Ampliar foto del modelo ${n}">
          <img src="${src}" alt="Modelo ${n}: ${name.toLowerCase()} de mimbre" width="800" height="820" loading="lazy">
          <span class="item__num">${n}</span>
        </button>
        <div class="item__body">
          <h3>${name}</h3>
          <p>${desc}</p>
          <a class="item__ask" href="${waLink(`Hola Carlos, me interesa la canasta modelo ${n} (${name}). ¿Me pasás precio y medidas?`)}" target="_blank" rel="noopener">
            <svg viewBox="0 0 24 24" aria-hidden="true"><use href="#i-wa"/></svg>Consultar
          </a>
        </div>
      </li>`;
  }).join('');
}

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
    const img = work.querySelector('img');
    return openLb(img.src, work.querySelector('figcaption').textContent);
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
