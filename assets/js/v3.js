/* Don Coco — sistema v3: menú, reparto de WhatsApp, reglas, promos con tarjeta y destacados Jadever.
   Va después de vigencia.js, promos-bancarias.js y jadever-productos.js. */
(function () {
  'use strict';

  function crear(tag, clase, texto) {
    var el = document.createElement(tag);
    if (clase) el.className = clase;
    if (texto != null) el.textContent = texto;
    return el;
  }

  // Menú de celular
  var boton = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');
  if (boton && menu) {
    var cerrar = function () { menu.classList.remove('abierto'); boton.setAttribute('aria-expanded', 'false'); boton.textContent = 'Menú'; };
    boton.addEventListener('click', function () {
      var abierto = menu.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', String(abierto));
      boton.textContent = abierto ? 'Cerrar' : 'Menú';
    });
    menu.addEventListener('click', function (e) { if (e.target.closest('a')) cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') cerrar(); });
  }

  var anio = document.querySelector('[data-anio]');
  if (anio) anio.textContent = new Date().getFullYear();

  // Reparto de pedidos entre Luisa y Dante (uno al azar por visita). Los data-wa-fijo no se tocan.
  var WA_LUISA = '5493874742440', WA_DANTE = '5493874452416', asesor = null;
  try { asesor = sessionStorage.getItem('doncoco-wa'); } catch (e) {}
  if (asesor !== WA_LUISA && asesor !== WA_DANTE) {
    asesor = Math.random() < 0.5 ? WA_LUISA : WA_DANTE;
    try { sessionStorage.setItem('doncoco-wa', asesor); } catch (e) {}
  }

  // Cinta métrica: números cada 10 cm (120 px)
  document.querySelectorAll('[data-regla]').forEach(function (r) {
    var vertical = r.classList.contains('regla-v');
    var largo = vertical ? r.offsetHeight : r.offsetWidth;
    for (var i = 1; i * 120 < largo; i++) {
      var n = crear('span', 'regla__n', String(i * 10));
      if (vertical) n.style.top = (i * 120) + 'px'; else n.style.left = (i * 120) + 'px';
      r.appendChild(n);
    }
  });

  // Promos con tarjeta
  var P = window.DONCOCO_PROMOS, caja = document.querySelector('[data-promos]');
  if (P && caja) {
    var vigente = window.DONCOCO_VIGENTE || function () { return true; };
    caja.textContent = '';
    P.promos.filter(function (p) { return vigente(p.desde, p.hasta); }).forEach(function (p) {
      var a = crear('article', 'promo promo--' + ['rojo', 'negro', 'amarillo'][caja.children.length % 3] + ' aparece');
      var logos = crear('div', 'promo__logos');
      (p.logos || []).forEach(function (n) {
        var l = P.logos[n]; if (!l) return;
        var img = document.createElement('img');
        img.src = l.src; img.alt = l.alt; img.width = l.ancho; img.height = l.alto; img.loading = 'lazy';
        logos.appendChild(img);
      });
      (p.marcas || []).forEach(function (m) { logos.appendChild(crear('span', 'texto', m)); });
      a.appendChild(logos);
      var cuerpo = crear('div', 'promo__cuerpo');
      cuerpo.appendChild(crear('p', 'lab promo__dias', p.dias));
      cuerpo.appendChild(crear('p', 'd promo__plan', p.plan));
      cuerpo.appendChild(crear('p', 'promo__extra', p.extra));
      cuerpo.appendChild(crear('p', 'promo__para', p.para));
      a.appendChild(cuerpo);
      if (p.hasta) { var f = p.hasta.split('-'); cuerpo.appendChild(crear('p', 'lab promo__hasta', 'Hasta el ' + Number(f[2]) + '/' + Number(f[1]))); }
      caja.appendChild(a);
    });
    var legal = document.querySelector('[data-promos-legal]');
    if (legal && P.legal) legal.textContent = P.legal;
  }

  // Vidriera del inicio: los 8 marcados con "vidriera" en black-coco-productos.js (5 marcas), con el logo de su marca.
  // Hasta el 28/11 con el precio de Black Coco; desde el 29/11 con el de contado o transferencia de siempre (contado_normal).
  // Si faltan esos datos: los destacados de jadever-productos.js con el precio de lista.
  var J = window.DONCOCO_JADEVER, vid = document.querySelector('[data-vidriera]');
  var BC = window.DONCOCO_BLACKCOCO;
  var pesos = function (n) { return '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); };
  var vigenteBC = (window.DONCOCO_VIGENTE || function () { return true; })(null, '2026-11-28');
  var LOGOS = { jadever: 'jadever-blanco.svg', lusqtoff: 'lusqtoff-blanco.svg', mozart: 'mozart-blanco.png', total: 'total-blanco.png', fv: 'fv-blanco.png' };
  var tarjetaProducto = function (o) {
    var a = crear('article', 'producto aparece');
    var foto = crear('div', 'producto__foto');
    if (o.chip) foto.appendChild(crear('span', 'lab producto__chip' + (o.chipLiq ? ' producto__chip--liq' : ''), o.chip));
    if (o.logo) {
      var placa = crear('span', 'producto__marca');
      var lg = document.createElement('img');
      lg.src = 'assets/img/marcas/' + o.logo; lg.alt = o.marca; lg.loading = 'lazy';
      placa.appendChild(lg); foto.appendChild(placa);
    }
    var img = document.createElement('img');
    img.src = o.img; img.alt = o.nombre + ' ' + o.marca; img.width = 400; img.height = 400; img.loading = 'lazy';
    foto.appendChild(img); a.appendChild(foto);
    var c = crear('div', 'producto__cuerpo');
    c.appendChild(crear('p', 'lab producto__cat', o.cat));
    c.appendChild(crear('h3', 'producto__nombre', o.nombre));
    if (o.detalle) c.appendChild(crear('p', 'producto__detalle', o.detalle));
    var pr = crear('div', 'producto__precio');
    pr.appendChild(crear('p', 'lab', o.rotulo));
    if (o.antes) {
      var an = crear('p', 'producto__antes');
      an.appendChild(crear('span', 'producto__antes-lab', 'Antes '));
      an.appendChild(crear('del', null, pesos(o.antes)));
      pr.appendChild(an);
    }
    pr.appendChild(crear('p', 'd', pesos(o.precio)));
    // Cuotas con Mercado Pago sobre el precio de lista (3 cuotas −9,94 %, 6 cuotas −5,20 %; no se suman al 23%)
    if (o.lista && o.cuotas) {
      var cu = crear('p', 'producto__cuotas');
      cu.appendChild(crear('span', 'producto__antes-lab', 'Con Mercado Pago'));
      cu.appendChild(crear('span', 'producto__cuota', '3 cuotas de ' + pesos(Math.ceil(o.lista * 0.9006 / 3))));
      cu.appendChild(crear('span', 'producto__cuota', '6 cuotas de ' + pesos(Math.ceil(o.lista * 0.948 / 6))));
      pr.appendChild(cu);
    }
    if (o.lista) pr.appendChild(crear('p', 'producto__lista', 'Lista ' + pesos(o.lista)));
    c.appendChild(pr);
    var b = crear('a', 'btn btn--negro btn--chico', 'Consultar');
    b.href = 'https://wa.me/' + WA_LUISA + '?text=' + encodeURIComponent(o.msj);
    b.setAttribute('aria-label', 'Consultar por WhatsApp: ' + o.nombre + ' ' + o.marca);
    c.appendChild(b);
    a.appendChild(c);
    return a;
  };
  if (vid && BC) {
    var grupoBC = function (id) { for (var i = 0; i < BC.grupos.length; i++) if (BC.grupos[i].id === id) return BC.grupos[i].nombre; return ''; };
    var elegidos = [];
    BC.marcas.forEach(function (m) {
      m.productos.forEach(function (p) { if (p.vidriera != null && p.foto) elegidos.push({ p: p, m: m }); });
    });
    elegidos.sort(function (x, y) { return x.p.vidriera - y.p.vidriera; }).forEach(function (e) {
      var p = e.p, m = e.m, promo = m.tipo === '23';
      var precio = vigenteBC ? p.contado : (p.contado_normal || p.contado);
      var rotulo = !promo ? 'Liquidación' : vigenteBC ? 'Black Coco · 26 al 28/11' : 'Contado o transf.';
      vid.appendChild(tarjetaProducto({
        img: 'assets/img/black-coco/' + p.foto, nombre: p.nombre, detalle: p.detalle, cat: grupoBC(p.grupo),
        marca: m.nombre, logo: LOGOS[m.id],
        chip: promo ? (vigenteBC ? '23% OFF' : '') : 'Liquidación', chipLiq: !promo,
        rotulo: rotulo, precio: precio, lista: p.lista, cuotas: true,
        antes: promo && vigenteBC ? p.contado_normal : null,
        msj: 'Hola Don Coco, quiero consultar por ' + p.nombre + ' ' + m.nombre + ' (cód. ' + p.codigo + '). ' +
          (promo && vigenteBC ? 'Precio Black Coco: ' : promo ? 'Precio: ' : 'Precio de liquidación: ') + pesos(precio) + ' de contado o transferencia.'
      }));
    });
  } else if (J && vid) {
    var promoJ = J.promo && J.promo.activa;
    var nombreGrupo = function (id) { for (var i = 0; i < J.grupos.length; i++) if (J.grupos[i].id === id) return J.grupos[i].nombre; return ''; };
    J.productos.filter(function (p) { return p.destacado; }).slice(0, 4).forEach(function (p) {
      vid.appendChild(tarjetaProducto({
        img: 'assets/img/jadever/' + (p.foto || (p.dibujo || p.grupo) + '.svg'), nombre: p.nombre, detalle: p.detalle, cat: nombreGrupo(p.grupo),
        marca: 'Jadever', logo: LOGOS.jadever,
        rotulo: promoJ ? J.promo.rotulo : 'Precio de lista', precio: promoJ ? p.contado : p.lista,
        msj: 'Hola Don Coco, quiero consultar por ' + p.nombre + ' Jadever (cód. ' + p.codigo + ').'
      }));
    });
  }

  if (asesor === WA_DANTE) {
    document.querySelectorAll('a[href^="https://wa.me/' + WA_LUISA + '"]:not([data-wa-fijo])').forEach(function (a) {
      a.href = a.href.replace('wa.me/' + WA_LUISA, 'wa.me/' + WA_DANTE);
    });
  }


  // Consultá tu pedido o acopio: va al WhatsApp del vendedor elegido
  var fp = document.querySelector('[data-pedido]');
  if (fp) fp.addEventListener('submit', function (e) {
    e.preventDefault();
    var fac = fp.factura.value.trim(), nom = fp.nombre.value.trim();
    var err = fp.querySelector('[data-pedido-error]');
    if (!fac && !nom) { err.hidden = false; fp.factura.focus(); return; }
    err.hidden = true;
    var num = fp.vendedor.value || asesor;
    var t = 'Hola Don Coco, quiero consultar ' + fp.tipo.value + '.';
    if (fac) t += '\nFactura o remito: ' + fac;
    if (nom) t += '\nNombre: ' + nom;
    var url = 'https://wa.me/' + num + '?text=' + encodeURIComponent(t);
    var a = document.createElement('a');
    a.href = url; a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('data-wa-fijo', '');
    a.textContent = 'Consultar pedido'; a.hidden = true;
    fp.appendChild(a); a.click(); a.remove();
  });


  // Carrusel de promociones
  var car = document.querySelector('[data-pista]');
  if (car) {
    var tpl = car.querySelector('[data-slides-tarjeta]');
    if (tpl && P) {
      var vig = window.DONCOCO_VIGENTE || function () { return true; };
      P.promos.filter(function (p) { return p.vitrina && vig(p.desde, p.hasta); }).forEach(function (p) {
        var sl = crear('article', 'slide slide--rojo slide--tarjeta');
        sl.setAttribute('aria-roledescription', 'diapositiva');
        var logoDe = function (n, clase) {
          var l = P.logos[n]; if (!l) return null;
          var caja = crear('span', clase + ' ' + clase + '--' + n);
          var img = document.createElement('img'); img.src = l.src; img.alt = l.alt; img.width = l.ancho; img.height = l.alto; img.loading = 'lazy';
          caja.appendChild(img); return caja;
        };
        // franja de arriba: los logos de la tarjeta o el banco en placas blancas y el «cuándo» en negro
        var vi = crear('div', 'slide__visual slide__visual--pago');
        var fila = crear('div', 'pago__logos' + ((p.logos || []).length === 1 ? ' pago__logos--uno' : ''));
        (p.logos || []).forEach(function (n) { var c = logoDe(n, 'pago__logo'); if (c) fila.appendChild(c); });
        (p.marcas || []).forEach(function (m) { fila.appendChild(crear('span', 'pago__logo lab', m)); });
        vi.appendChild(fila);
        var cu = crear('p', 'pago__dias');
        cu.appendChild(crear('span', 'lab', 'Cuándo'));
        cu.appendChild(crear('span', 'd', p.dias));
        if (p.hasta) { var f = p.hasta.split('-'); cu.appendChild(crear('span', 'pago__hasta', 'Hasta el ' + Number(f[2]) + '/' + Number(f[1]))); }
        vi.appendChild(cu);
        sl.appendChild(vi);
        // texto: el plan y el descuento en una línea, y al pie con qué más hay promo
        var tx = crear('div', 'slide__texto');
        var et = crear('p', 'lab amarillo', 'Promo con tarjeta');
        if (p.quien) et.appendChild(crear('span', 'pago__quien', ' · ' + p.quien));
        tx.appendChild(et);
        var of = crear('p', 'pago__oferta');
        of.appendChild(crear('span', 'd slide__plan', p.plan));
        of.appendChild(crear('span', 'slide__extra', p.extra));
        tx.appendChild(of);
        tx.appendChild(crear('p', 'slide__bajada', p.para));
        var ac = crear('div', 'acciones');
        var bt = crear('a', 'btn btn--amarillo', 'Ver todas las promos'); bt.href = '#tarjetas';
        ac.appendChild(bt); tx.appendChild(ac);
        var vistos = {}, otros = [];
        (p.logos || []).forEach(function (n) { vistos[n] = 1; });
        P.promos.forEach(function (o) {
          if (o === p || !vig(o.desde, o.hasta)) return;
          (o.logos || []).forEach(function (n) { if (!vistos[n]) { vistos[n] = 1; otros.push(n); } });
        });
        if (otros.length) {
          var mas = crear('div', 'pago__mas');
          mas.appendChild(crear('p', 'lab', 'También hay promos con'));
          var tira = crear('div', 'pago__tira');
          otros.forEach(function (n) { var c = logoDe(n, 'pago__mini'); if (c) tira.appendChild(c); });
          mas.appendChild(tira); tx.appendChild(mas);
        }
        sl.appendChild(tx);
        car.insertBefore(sl, tpl);
      });
      tpl.parentNode.removeChild(tpl);
    }
    var slides = car.querySelectorAll('.slide');
    var cont = document.querySelector('[data-contador]');
    var puntos = document.querySelector('[data-puntos]');
    var actual = 0, dos = function (n) { return (n < 10 ? '0' : '') + n; };
    var ir = function (i) { actual = (i + slides.length) % slides.length; car.scrollTo({ left: actual * car.clientWidth, behavior: 'smooth' }); marcar(); };
    var marcar = function () {
      if (cont) cont.textContent = dos(actual + 1) + ' / ' + dos(slides.length);
      if (puntos) Array.prototype.forEach.call(puntos.children, function (b, k) { b.setAttribute('aria-current', String(k === actual)); });
    };
    if (puntos) Array.prototype.forEach.call(slides, function (s, k) {
      var b = crear('button', 'carrusel__punto'); b.type = 'button'; b.setAttribute('aria-label', 'Ir a la promoción ' + (k + 1));
      b.addEventListener('click', function () { ir(k); parar(); });
      puntos.appendChild(b);
    });
    car.addEventListener('scroll', function () {
      var i = Math.round(car.scrollLeft / car.clientWidth);
      if (i !== actual) { actual = i; marcar(); }
    }, { passive: true });
    var prev = document.querySelector('[data-prev]'), next = document.querySelector('[data-next]');
    if (prev) prev.addEventListener('click', function () { ir(actual - 1); parar(); });
    if (next) next.addEventListener('click', function () { ir(actual + 1); parar(); });
    car.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { e.preventDefault(); ir(actual + 1); parar(); }
      if (e.key === 'ArrowLeft') { e.preventDefault(); ir(actual - 1); parar(); }
    });
    var timer = null, parar = function () { clearInterval(timer); timer = null; };
    var quieto = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!quieto && slides.length > 1) {
      timer = setInterval(function () { ir(actual + 1); }, 6000);
      ['mouseenter', 'focusin', 'touchstart'].forEach(function (ev) { car.addEventListener(ev, parar, { passive: true }); });
    }
    window.addEventListener('resize', function () { car.scrollTo({ left: actual * car.clientWidth }); });
    marcar();
  }


  // Cinta de beneficios: cada tramo mide un múltiplo de 10 cm (120 px) para que las marcas empalmen al dar la vuelta
  var cintaPista = document.querySelector('.cinta__pista');
  if (cintaPista) {
    var medir = function () {
      Array.prototype.forEach.call(cintaPista.children, function (li) {
        li.style.minWidth = '';
        li.style.minWidth = Math.ceil(li.getBoundingClientRect().width / 120) * 120 + 'px';
      });
    };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(medir); else medir();
    window.addEventListener('resize', medir);
  }

  // Aparición suave al entrar en pantalla
  var items = document.querySelectorAll('.aparece');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  } else items.forEach(function (el) { el.classList.add('visto'); });
})();
