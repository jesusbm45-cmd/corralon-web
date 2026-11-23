/* Don Coco — Promos con tarjeta.
   Arma la sección #tarjetas ([data-promos-tarjetas]) y suma a la vitrina del hero
   las promos con "vitrina: true", con los datos de promos-bancarias.js.
   Va después de vigencia.js y antes de main.js (que arma los controles de la vitrina). */
(function () {
  'use strict';
  var datos = window.DONCOCO_PROMOS;
  if (!datos || !datos.promos) return;
  var vigente = window.DONCOCO_VIGENTE || function () { return true; };
  var promos = datos.promos.filter(function (p) { return vigente(p.desde, p.hasta); });

  function crear(etiqueta, clase, texto) {
    var el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto != null) el.textContent = texto;
    return el;
  }
  function fechaCorta(iso) { var p = iso.split('-'); return Number(p[2]) + '/' + Number(p[1]); }

  function logos(p, clase) {
    var caja = crear('div', clase);
    (p.logos || []).forEach(function (n) {
      var l = datos.logos[n];
      if (!l) return;
      var img = document.createElement('img');
      img.src = l.src; img.alt = l.alt; img.width = l.ancho; img.height = l.alto; img.loading = 'lazy';
      img.className = 'logo-pago logo-pago--' + n;
      caja.appendChild(img);
    });
    (p.marcas || []).forEach(function (m) { caja.appendChild(crear('span', 'logo-pago logo-pago--texto', m)); });
    return caja;
  }

  // Sección de tarjetas
  var grilla = document.querySelector('[data-promos-tarjetas]');
  if (grilla) {
    grilla.textContent = '';
    promos.forEach(function (p) {
      var art = crear('article', 'promo-banco');
      var cabeza = crear('div', 'promo-banco__cabeza');
      cabeza.appendChild(crear('p', 'promo-banco__dias', p.dias));
      var plan = crear('p', 'promo-banco__plan');
      plan.appendChild(crear('span', 'promo-banco__cuotas', p.plan));
      plan.appendChild(crear('span', 'promo-banco__extra', p.extra));
      cabeza.appendChild(plan);
      art.appendChild(cabeza);
      art.appendChild(logos(p, 'promo-banco__logos'));
      var cuerpo = crear('div', 'promo-banco__cuerpo');
      cuerpo.appendChild(crear('p', 'promo-banco__para', p.para));
      if (p.hasta) cuerpo.appendChild(crear('p', 'promo-banco__vence', 'Hasta el ' + fechaCorta(p.hasta)));
      art.appendChild(cuerpo);
      grilla.appendChild(art);
    });
    var legal = document.querySelector('[data-promos-legal]');
    if (legal) legal.textContent = datos.legal + ' Actualizado el ' + datos.actualizado + '.';
    if (!promos.length) {
      var seccion = grilla.closest('section');
      if (seccion) seccion.parentNode.removeChild(seccion);
    }
  }

  // Diapositivas de la vitrina (se insertan antes de la del Club)
  var slides = document.querySelector('[data-carrusel] .vitrina__slides');
  if (slides) {
    var ancla = slides.querySelector('[data-vitrina-promos]');
    promos.filter(function (p) { return p.vitrina; }).forEach(function (p) {
      var art = crear('article', 'vitrina__slide');
      art.setAttribute('aria-roledescription', 'diapositiva');
      var media = crear('div', 'vitrina__media vitrina__media--tarjeta');
      var grande = crear('p', 'vitrina__grande');
      grande.setAttribute('aria-hidden', 'true');
      grande.appendChild(crear('span', null, p.plan.replace(/\D+/g, '') || p.plan));
      grande.appendChild(document.createTextNode(p.plan.replace(/[\d\s]+/, '') + ' ' + p.extra));
      media.appendChild(grande);
      media.appendChild(logos(p, 'vitrina__logos'));
      art.appendChild(media);
      var info = crear('div', 'vitrina__info');
      info.appendChild(crear('span', 'vitrina__cat', p.dias + (p.hasta ? ' · hasta el ' + fechaCorta(p.hasta) : '')));
      info.appendChild(crear('p', 'vitrina__nombre', p.plan + ' ' + p.extra + (p.quien ? ' ' + p.quien : '')));
      info.appendChild(crear('p', 'vitrina__texto', p.para));
      var pie = crear('div', 'vitrina__pie');
      var a = crear('a', 'btn btn--rojo btn--chico', 'Ver todas las promos');
      a.href = '#tarjetas';
      pie.appendChild(a);
      info.appendChild(pie);
      art.appendChild(info);
      slides.insertBefore(art, ancla || null);
    });
  }
})();
