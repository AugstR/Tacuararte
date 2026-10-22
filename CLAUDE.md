# web-tacuararte — Sitio de TacuarArte

Sitio del taller artesanal de Carlos Roubineau (Corrientes): restauración de muebles, esterillado, enjuncado, tapizados, carpintería y cestería en mimbre.

## Stack
- Sitio estático (HTML, CSS y JS, sin build)
- GitHub Pages con dominio propio: https://tacuararte.com.ar/ (registrado en NIC Argentina a nombre de Carlos, renovación anual)
- `index.html` (página única), `css/styles.css`, `js/main.js`

## Ver en local
Abrir `index.html` o `npx serve .` (también hay configuración de preview en `.claude/launch.json`)

## Cómo agregar cosas
- Canasta nueva: foto cuadrada de unos 800 px en `img/catalogo/canasta-NN.jpg` y una línea nueva en el array `CATALOG` de `js/main.js`
- Antes/después: fotos en `img/restauraciones/` y duplicar un bloque `.ba` en `index.html`
- El número de WhatsApp aparece en `index.html` y en `js/main.js`. Si cambia, hay que cambiarlo en los dos.

## Relacionado
- La app de inventario del taller está en `app-tacuararte-inventario`.
