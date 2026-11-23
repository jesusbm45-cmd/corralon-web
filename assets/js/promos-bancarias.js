/* ==========================================================
   Don Coco — Promos con tarjeta (única fuente)
   Las muestra promos.js en el inicio: la sección #tarjetas y, las que
   tienen "vitrina: true", también como diapositivas del hero.

   Sale del anexo de planes de tarjeta del manual del equipo (tabla vigente
   de noviembre 2026). El % es el descuento sobre el precio de lista de
   consumidor final, redondeado para abajo (nunca prometer de más).

   Cómo se mantiene:
   - "hasta": último día de la promo (AAAA-MM-DD). Desde el día siguiente
     desaparece sola. Sin "hasta", queda hasta que se borre.
   - "desde": primer día (opcional).
   - "logos": nombres de assets/img/pagos/<nombre>.svg. Si no hay archivo,
     va en "marcas" (texto) hasta tener el material oficial.
   - "vitrina: true": también va como diapositiva del hero; "quien" completa
     su título (ej. "3 cuotas + 15% OFF con Visa y Mastercard").
   ========================================================== */
window.DONCOCO_PROMOS = {

  actualizado: '18/11/2026',

  logos: {
    visa:        { src: 'assets/img/pagos/visa.svg',              alt: 'Visa',              ancho: 1000, alto: 325 },
    mastercard:  { src: 'assets/img/pagos/mastercard.svg',        alt: 'Mastercard',        ancho: 1000, alto: 618 },
    hipotecario: { src: 'assets/img/pagos/banco-hipotecario.svg', alt: 'Banco Hipotecario', ancho: 400,  alto: 152 },
    mercadopago: { src: 'assets/img/pagos/mercado-pago.png',      alt: 'Mercado Pago',      ancho: 276,  alto: 71 }
  },

  promos: [
    {
      id: 'bancos-mie-sab',
      dias: 'Miércoles y sábados',
      plan: '3 cuotas',
      extra: '+ 15% OFF',
      para: 'Con tarjetas de crédito Visa y Mastercard de bancos argentinos.',
      quien: 'con Visa y Mastercard',
      logos: ['visa', 'mastercard'],
      hasta: '2026-12-21',
      vitrina: true
    },
    {
      id: 'qr-viernes',
      dias: 'Viernes, pagando con QR',
      plan: '3 cuotas',
      extra: '+ 15% OFF',
      para: 'Con Visa y Mastercard de bancos argentinos, desde cualquier billetera o app de tu banco.',
      logos: ['visa', 'mastercard'],
      hasta: '2026-11-30'
    },
    {
      id: 'hipotecario',
      dias: 'Todos los días',
      plan: '3 cuotas',
      extra: '+ 15% OFF',
      para: 'Con tarjetas Visa o Mastercard del Banco Hipotecario.',
      quien: 'con el Banco Hipotecario',
      logos: ['hipotecario'],
      vitrina: true
    },
    {
      id: 'hipotecario-jueves',
      dias: 'Jueves',
      plan: '6 cuotas',
      extra: '+ 15% OFF',
      para: 'Con tarjetas Visa o Mastercard del Banco Hipotecario.',
      logos: ['hipotecario']
    },
    {
      id: 'credito-1-pago',
      dias: 'Todos los días',
      plan: '1 pago',
      extra: '15% OFF',
      para: 'Con tarjeta de crédito Visa o Mastercard.',
      logos: ['visa', 'mastercard']
    },
    {
      id: 'mercado-pago',
      dias: 'Todos los días',
      plan: 'Hasta 6 cuotas',
      extra: 'con descuento',
      para: 'Pagando con Mercado Pago: 1 pago, 13% OFF · 3 cuotas, 9% OFF · 6 cuotas, 5% OFF.',
      logos: ['mercadopago']
    }
  ],

  legal: 'Descuentos sobre el precio de lista de consumidor final. No se suman a otras promociones (Black Coco, liquidaciones) ni a la Lista Club. Sujeto a la aprobación de la entidad emisora de la tarjeta. Pagando en efectivo o transferencia, te conviene el precio de contado.'
};
