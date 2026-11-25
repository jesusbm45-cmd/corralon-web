/* Don Coco — estadísticas de visitas (Google Analytics 4, propiedad «Corralón Don Coco», flujo cdoncoco.com)
   y píxel de Meta 1644897283133710 (lo pidió Analía el 25/11/2026 para los anuncios).
   Cuenta visitas y cada toque a un botón de WhatsApp (GA4: evento «whatsapp» con el asesor y la página;
   Meta: evento estándar «Contact»).
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

  /* Píxel de Meta (código base oficial) */
  !function (f, b, e, v, n, t, x) {
    if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v; x = b.getElementsByTagName(e)[0]; x.parentNode.insertBefore(t, x);
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', '1644897283133710');
  window.fbq('track', 'PageView');

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
    window.fbq('track', 'Contact', { content_name: ASESOR[num] || num });
  }, true);
})();
