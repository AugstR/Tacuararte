// Datos del taller en un solo lugar: si cambia el número o se suma una canasta, se edita solo acá.

export const WHATSAPP = '5493794637135';
export const WHATSAPP_VISIBLE = '3794-637135';
export const INSTAGRAM = 'https://www.instagram.com/tacuararte/';

export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

// Mensajes predefinidos de los botones de WhatsApp
export const MENSAJES = {
  consulta: 'Hola Carlos, vi la web de TacuarArte y quiero hacer una consulta.',
  presupuesto: 'Hola Carlos, quiero pedir un presupuesto. Te mando fotos del mueble.',
  silla: 'Hola Carlos, tengo una silla para restaurar.',
  aMedida: 'Hola Carlos, quiero encargar una canasta a medida.',
};

// Catálogo de canastas. La foto de cada modelo es src/assets/img/catalogo/canasta-NN.jpg
export const CATALOG = [
  { n: 1, name: 'Canasta picnic', desc: 'Con tapa doble, manija forrada y cierre de madera.' },
  { n: 2, name: 'Canasta con asa', desc: 'Ovalada, de boca amplia y asa alta.' },
  { n: 3, name: 'Canasto con orejas', desc: 'Redondo y profundo, con dos asas trenzadas.' },
  { n: 4, name: 'Costurero con tapa', desc: 'Ideal para lanas y tejidos.' },
  { n: 5, name: 'Baúl ovalado', desc: 'Con tapa y tirador, para guardar.' },
  { n: 6, name: 'Bolso de compras', desc: 'Alto, con dos asas largas.' },
  { n: 7, name: 'Panera redonda', desc: 'Baja, con fondo tejido en espiral.' },
  { n: 8, name: 'Panera ovalada', desc: 'Borde trenzado, uso diario.' },
  { n: 9, name: 'Bandeja rectangular', desc: 'Con marco forrado y esquinas atadas.' },
  { n: 10, name: 'Frutera ovalada grande', desc: 'Amplia, bicolor.' },
  { n: 11, name: 'Frutera ovalada', desc: 'Versión mediana, tejido parejo.' },
];
