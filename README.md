# TacuarArte

Sitio web del taller artesanal de Carlos Roubineau (Corrientes, Argentina): restauración de muebles, esterillado, enjuncado, tapizados, carpintería y cestería en mimbre.

Hecho con **[Astro](https://astro.build)** y publicado en GitHub Pages: `https://augstr.github.io/Tacuararte/`.

## Estructura

| Ruta | Qué tiene |
|---|---|
| `src/pages/index.astro` | La página: servicios, antes/después, catálogo de canastas, cómo trabajamos, contacto |
| `src/data/site.ts` | **Datos del taller en un solo lugar:** número de WhatsApp, mensajes de los botones, Instagram y el catálogo (`CATALOG`) |
| `src/assets/img/` | Fotos que Astro optimiza solo (AVIF/WebP en varios tamaños) |
| `public/css/styles.css` | Estilos |
| `public/js/main.js` | Menú mobile, lightbox y animaciones de aparición |
| `public/` | Lo que se publica tal cual: `robots.txt`, `sitemap.xml`, `llms.txt`, favicon y las dos fotos de Open Graph |
| `.github/workflows/deploy.yml` | Compila y publica en GitHub Pages con cada push a `main` |

## Cómo está hecho

- **Astro 7**, sin componentes de JavaScript del lado del cliente: genera un HTML estático igual al sitio original.
- **Imágenes optimizadas** con `<Picture>` de `astro:assets`: cada foto sale en AVIF, WebP y JPG, y el navegador
  baja la más liviana que soporta (por ejemplo, el logo pasa de 71 KB a 28 KB).
- El catálogo de canastas se arma **al compilar** desde `CATALOG`, así llega listo en el HTML (mejor para SEO).
- **Fuentes:** DM Serif Display e Instrument Sans (Google Fonts).
- Lightbox con `<dialog>` nativo, animaciones de aparición con `IntersectionObserver`.
- **SEO:** Open Graph, datos estructurados `schema.org/LocalBusiness`, `sitemap.xml`, `robots.txt` y `llms.txt`.
- **Seguridad:** `Content-Security-Policy` en un `<meta>`: solo se ejecutan scripts propios y las fuentes vienen
  únicamente de Google Fonts. Si se agrega un script o servicio externo, hay que sumarlo a esa política.

## Cómo agregar cosas

- **Un modelo nuevo de canasta:** guardar la foto como `src/assets/img/catalogo/canasta-12.jpg` y sumar una línea a `CATALOG` en `src/data/site.ts`.
- **Un antes/después nuevo:** agregar las fotos en `src/assets/img/restauraciones/`, importarlas arriba de `index.astro` y duplicar el bloque `.ba`.
- **Cambiar el número de WhatsApp:** editar `WHATSAPP` y `WHATSAPP_VISIBLE` en `src/data/site.ts`. Se actualiza en todos los botones.

## Desarrollo

Requiere Node.js 22.23 o más nuevo.

```bash
npm install
npm run dev      # http://localhost:4321/Tacuararte/
npm run build    # genera dist/
```

## Mejoras posibles

- **Galería de antes/después con slider** (por ejemplo [img-comparison-slider](https://github.com/sneas/img-comparison-slider),
  un web component sin dependencias) para arrastrar entre la foto vieja y la nueva.
