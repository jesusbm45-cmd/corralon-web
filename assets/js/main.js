/* Don Coco — interacciones del sitio. Sin dependencias. */
(function () {
  'use strict';

  // Menú en celular
  var boton = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');

  function cerrarMenu() {
    if (!boton || !menu) return;
    boton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-abierto');
  }

  if (boton && menu) {
    boton.addEventListener('click', function () {
      var abierto = boton.getAttribute('aria-expanded') === 'true';
      boton.setAttribute('aria-expanded', String(!abierto));
      menu.classList.toggle('is-abierto', !abierto);
    });
    // Cerrar al elegir una sección
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) cerrarMenu();
    });
    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
        cerrarMenu();
        boton.focus();
      }
    });
    // Si se agranda la pantalla, volver al menú normal
    window.matchMedia('(min-width: 961px)').addEventListener('change', function (mq) {
      if (mq.matches) cerrarMenu();
    });
  }

  // Año del footer
  var anio = document.querySelector('[data-anio]');
  if (anio) anio.textContent = new Date().getFullYear();

  // Reparto de pedidos entre los dos WhatsApp (Luisa y Dante).
  // A cada visitante le toca uno al azar y lo mantiene durante la visita.
  // En el HTML los botones apuntan a Luisa: si el JS no carga, siguen andando.
  // Los links con data-wa-fijo (Contacto y footer, con nombre) no se tocan.
  var WA_LUISA = '5493874742440';
  var WA_DANTE = '5493874452416';
  var asesor = null;
  try { asesor = sessionStorage.getItem('doncoco-wa'); } catch (e) {}
  if (asesor !== WA_LUISA && asesor !== WA_DANTE) {
    asesor = Math.random() < 0.5 ? WA_LUISA : WA_DANTE;
    try { sessionStorage.setItem('doncoco-wa', asesor); } catch (e) {}
  }
  if (asesor === WA_DANTE) {
    document.querySelectorAll('a[href^="https://wa.me/' + WA_LUISA + '"]:not([data-wa-fijo])').forEach(function (a) {
      a.href = a.href.replace('wa.me/' + WA_LUISA, 'wa.me/' + WA_DANTE);
    });
  }

  var sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Vitrina del hero: ofertas y novedades que rotan cada 5 s.
  // Flechas, puntos y pausa. Se frena con el mouse encima o al navegar con teclado adentro.
  // Con "reducir movimiento" activado arranca en pausa.
  var vitrina = document.querySelector('[data-carrusel]');
  if (vitrina) {
    var slides = vitrina.querySelectorAll('.vitrina__slide');
    var control = vitrina.querySelector('.vitrina__control');
    if (slides.length > 1 && control) {
      var puntos = control.querySelector('.vitrina__puntos');
      var pausa = control.querySelector('.vitrina__pausa');
      var actual = 0, timer = null, pausadoPorUsuario = sinMovimiento, encima = false;

      var botones = Array.prototype.map.call(slides, function (slide, i) {
        var nombre = slide.querySelector('.vitrina__nombre');
        slide.setAttribute('aria-label', (i + 1) + ' de ' + slides.length);
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'vitrina__punto';
        b.setAttribute('aria-label', 'Ver ' + (nombre ? nombre.textContent : 'diapositiva ' + (i + 1)));
        b.addEventListener('click', function () { mostrar(i); reiniciar(); });
        puntos.appendChild(b);
        return b;
      });

      var mostrar = function (i) {
        actual = (i + slides.length) % slides.length;
        Array.prototype.forEach.call(slides, function (s, j) {
          var activa = j === actual;
          s.classList.toggle('is-activa', activa);
          // Las ocultas no se pueden tocar ni recorrer con Tab
          if (activa) s.removeAttribute('inert'); else s.setAttribute('inert', '');
        });
        botones.forEach(function (b, j) { b.setAttribute('aria-current', String(j === actual)); });
      };
      var reiniciar = function () {
        clearInterval(timer);
        timer = null;
        if (!pausadoPorUsuario && !encima) timer = setInterval(function () { mostrar(actual + 1); }, 5000);
      };
      var marcarPausa = function () {
        pausa.setAttribute('aria-pressed', String(pausadoPorUsuario));
        pausa.querySelector('.visually-hidden').textContent = pausadoPorUsuario ? 'Reanudar' : 'Pausar';
      };

      control.querySelector('[data-anterior]').addEventListener('click', function () { mostrar(actual - 1); reiniciar(); });
      control.querySelector('[data-siguiente]').addEventListener('click', function () { mostrar(actual + 1); reiniciar(); });
      pausa.addEventListener('click', function () { pausadoPorUsuario = !pausadoPorUsuario; marcarPausa(); reiniciar(); });
      vitrina.addEventListener('mouseenter', function () { encima = true; reiniciar(); });
      vitrina.addEventListener('mouseleave', function () { encima = false; reiniciar(); });
      vitrina.addEventListener('focusin', function () { encima = true; reiniciar(); });
      vitrina.addEventListener('focusout', function (e) { if (!vitrina.contains(e.relatedTarget)) { encima = false; reiniciar(); } });

      // Deslizar con el dedo en celular
      var inicioX = null;
      vitrina.addEventListener('touchstart', function (e) { inicioX = e.touches[0].clientX; }, { passive: true });
      vitrina.addEventListener('touchend', function (e) {
        if (inicioX === null) return;
        var dx = e.changedTouches[0].clientX - inicioX;
        inicioX = null;
        if (Math.abs(dx) > 50) { mostrar(actual + (dx < 0 ? 1 : -1)); reiniciar(); }
      });

      marcarPausa();
      control.hidden = false;
      mostrar(0);
      reiniciar();
    }
  }

  // Animaciones al aparecer en pantalla: razones (de a una) y tarjeta de pases (se va llenando).
  if ('IntersectionObserver' in window && !sinMovimiento) {
    var razones = document.querySelector('.razones');
    if (razones) {
      razones.classList.add('js-aparecer');
      var obsRazones = new IntersectionObserver(function (entradas) {
        entradas.forEach(function (en) {
          if (!en.isIntersecting) return;
          var i = Array.prototype.indexOf.call(razones.children, en.target);
          setTimeout(function () { en.target.classList.add('is-visible'); }, (i % 4) * 120);
          obsRazones.unobserve(en.target);
        });
      }, { threshold: 0.2 });
      Array.prototype.forEach.call(razones.children, function (r) { obsRazones.observe(r); });
    }

    var pases = document.querySelector('[data-pases]');
    if (pases) {
      var casitas = pases.querySelectorAll('.casita');
      casitas.forEach(function (c) { c.classList.remove('casita--marcada'); });
      var obsPases = new IntersectionObserver(function (entradas) {
        if (!entradas[0].isIntersecting) return;
        obsPases.disconnect();
        Array.prototype.forEach.call(casitas, function (c, i) {
          setTimeout(function () {
            c.classList.add(c.classList.contains('casita--premio') ? 'is-ganada' : 'casita--marcada');
          }, 400 + i * 450);
        });
      }, { threshold: 0.5 });
      obsPases.observe(pases);
    }
  }

  // Aviso para desarrollo: datos sin completar
  if (/localhost|127\.0\.0\.1|^$/.test(location.hostname) || location.protocol === 'file:') {
    var faltan = document.documentElement.innerHTML.match(/\{\{[A-Z_0-9]+\}\}/g);
    if (faltan) {
      var unicos = Array.from(new Set(faltan));
      console.warn('Don Coco: faltan completar ' + unicos.length + ' datos:', unicos.join(', '));
    }
  }
})();
