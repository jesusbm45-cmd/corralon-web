/* Don Coco — estadísticas de visitas (Google Analytics 4, propiedad «Corralón Don Coco», flujo cdoncoco.com).
   Cuenta visitas y cada toque a un botón de WhatsApp (evento «whatsapp» con el asesor y la página).
   No mide en local ni en las vistas previas (?previa). */
(function () {
  'use strict';
  var ID = 'G-90PMZXSB0F';
  if (!/cdoncoco\.com$/.test(location.hostname) || /[?&]previa/.test(location.search)) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', ID);

  var ASESOR = { '5493874742440': 'Luisa', '5493874452416': 'Dante' };
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[href*="wa.me/"]');
    if (!a) return;
    var num = (a.href.match(/wa\.me\/(\d+)/) || [])[1] || '';
    gtag('event', 'whatsapp', {
      asesor: ASESOR[num] || num,
      pagina: location.pathname,
      boton: (a.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 60),
      transport_type: 'beacon'
    });
  }, true);
})();
