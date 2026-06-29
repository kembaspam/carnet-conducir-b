/* ==========================================================================
   IMÁGENES DE EJEMPLO - fotografías reales (banco de imágenes libres de
   derechos, vía Pexels) y pictogramas oficiales de señales españolas
   (vía Wikimedia Commons), guardadas localmente en assets/img/.
   Cada tema tiene 2 imágenes distintas: "a" para el ejemplo de estudio
   y "b" para las preguntas de test / respuestas / cuaderno de errores.
   ========================================================================== */

const TEMA_PHOTOS = {
  1: { a: 'assets/img/tema01-a.jpg', b: 'assets/img/tema01-b.jpg' },
  2: { a: 'assets/img/tema02-a.jpg', b: 'assets/img/tema02-b.jpg' },
  3: { a: 'assets/img/tema03-a.jpg', b: 'assets/img/tema03-b.jpg' },
  4: { a: 'assets/img/tema04-a.jpg', b: 'assets/img/sign-roundabout.svg' },
  5: { a: 'assets/img/tema05-a.jpg', b: 'assets/img/sign-speed100.svg' },
  6: { a: 'assets/img/tema06-a.jpg', b: 'assets/img/tema06-b.jpg' },
  7: { a: 'assets/img/sign-yield.svg', b: 'assets/img/sign-stop.svg' },
  8: { a: 'assets/img/tema08-a.jpg', b: 'assets/img/tema08-b.jpg' },
  9: { a: 'assets/img/tema09-a.jpg', b: 'assets/img/tema09-b.jpg' },
  10: { a: 'assets/img/sign-parking.svg', b: 'assets/img/tema10-b.jpg' },
  11: { a: 'assets/img/tema11-a.jpg', b: 'assets/img/tema11-b.jpg' },
  12: { a: 'assets/img/tema12-a.jpg', b: 'assets/img/tema12-b.jpg' },
  13: { a: 'assets/img/sign-warning.svg', b: 'assets/img/sign-noentry.svg' },
  14: { a: 'assets/img/tema14-a.jpg', b: 'assets/img/tema14-b.jpg' },
  15: { a: 'assets/img/tema15-a.jpg', b: 'assets/img/tema15-b.jpg' },
  16: { a: 'assets/img/tema16-a.jpg', b: 'assets/img/tema16-b.jpg' },
  17: { a: 'assets/img/tema17-a.jpg', b: 'assets/img/tema17-b.jpg' },
  18: { a: 'assets/img/tema18-a.jpg', b: 'assets/img/tema18-b.jpg' }
};

function temaScene(temaId, variant, slot) {
  const photos = TEMA_PHOTOS[temaId] || {};
  const src = photos[slot || 'a'] || photos.a || '';
  if (!src) return '';
  const isSign = src.endsWith('.svg');
  return `<div class="scene-illustration scene-${variant || 'banner'} ${isSign ? 'scene-sign' : ''}">
            <img src="${src}" alt="" loading="lazy">
          </div>`;
}
