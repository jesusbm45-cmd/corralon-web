/* Don Coco — vigencia por fecha. Sin dependencias.
   data-hasta="AAAA-MM-DD": el elemento se saca desde el día siguiente.
   data-desde="AAAA-MM-DD": el elemento aparece desde ese día.
   Sirve para avisos, botones y diapositivas de campañas (Black Coco, promos).
   Va antes que main.js (y que promos.js). */
(function () {
  'use strict';
  var d = new Date();
  var dos = function (n) { return (n < 10 ? '0' : '') + n; };
  var hoy = d.getFullYear() + '-' + dos(d.getMonth() + 1) + '-' + dos(d.getDate());
  // Vista previa: ?previa=AAAA-MM-DD muestra el sitio como se va a ver ese día (y lo mantiene al navegar)
  var previa = (location.search.match(/[?&]previa=(\d{4}-\d{2}-\d{2})/) || [])[1];
  if (previa) {
    hoy = previa;
    document.addEventListener('DOMContentLoaded', function () {
      Array.prototype.forEach.call(document.querySelectorAll('a[href]'), function (a) {
        var h = a.getAttribute('href');
        if (/^(https?:|mailto:|tel:|#)/.test(h) || !/\.html|^\.\//.test(h)) return;
        var i = h.indexOf('#'), base = i < 0 ? h : h.slice(0, i), ancla = i < 0 ? '' : h.slice(i);
        a.setAttribute('href', base + (base.indexOf('?') < 0 ? '?' : '&') + 'previa=' + previa + ancla);
      });
    });
  }
  window.DONCOCO_HOY = hoy;
  window.DONCOCO_VIGENTE = function (desde, hasta) {
    return !(hasta && hoy > hasta) && !(desde && hoy < desde);
  };
  Array.prototype.forEach.call(document.querySelectorAll('[data-hasta], [data-desde]'), function (el) {
    if (!window.DONCOCO_VIGENTE(el.getAttribute('data-desde'), el.getAttribute('data-hasta'))) el.parentNode.removeChild(el);
  });
})();
