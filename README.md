# TacuarArte

Sitio web del taller artesanal de Carlos Roubineau (Corrientes, Argentina): restauración de muebles, esterillado, enjuncado, tapizados, carpintería y cestería en mimbre.

Sitio estático (HTML + CSS + JS, sin build). Pensado para GitHub Pages en `https://augstr.github.io/Tacuararte/`.

## Estructura

- `index.html`: página única (servicios, antes/después, catálogo de canastas, cómo trabajamos, contacto).
- `css/styles.css`: estilos.
- `js/main.js`: catálogo de canastas (array `CATALOG`), menú mobile, lightbox y animaciones.
- `img/catalogo/`: fotos recortadas del catálogo PDF (`canasta-01.jpg` … `canasta-11.jpg`).
- `img/ig/`: fotos de los posts de [@tacuararte](https://www.instagram.com/tacuararte/).
- `img/restauraciones/`: fotos de antes y después.

## Cómo agregar cosas

- **Un modelo nuevo de canasta:** guardar la foto como `img/catalogo/canasta-12.jpg` (cuadrada, ~800 px) y sumar una línea al array `CATALOG` en `js/main.js`.
- **Un antes/después nuevo:** agregar las fotos en `img/restauraciones/` y duplicar el bloque `.ba` en `index.html`.
- **Cambiar el número de WhatsApp:** buscar `5493794637135` en `index.html` y `js/main.js`.

## Ver en local

Abrir `index.html` en el navegador, o servir la carpeta:

```bash
npx serve .
```
