/* Don Coco — precios por marca (sistema v3). Arma las pestañas de marcas, los destacados con foto,
   la lista completa por grupo y el buscador, con los datos de black-coco-productos.js. Sin dependencias.
   Dos modos, según <body data-bc-modo>:
   - "black" (black-coco.html): precio Black Coco (23% OFF en Jadever, Lusqtoff y Mozart). Vale hasta el 28/11.
   - "contado" (precios.html): precio de contado o transferencia de siempre (campo contado_normal). Desde el 29/11.
   black-coco.html manda a precios.html desde el 29/11. Hasta el 28/11, precios.html muestra solo los rubros nuevos
   (Polacrin, Talento, Megaflex, Tinacos, Peirano, Roca y Oblak); desde el 29/11, todas las marcas. ?previa muestra todo.
   Va después de vigencia.js y ANTES de v3.js (que reparte los pedidos de WhatsApp entre Luisa y Dante). */
(function () {
  'use strict';

  var datos = window.DONCOCO_BLACKCOCO;
  if (!datos || !datos.marcas) return;

  var vigente = window.DONCOCO_VIGENTE || function () { return true; };
  // Página de una sola marca (jadever.html, <body data-bc-marca="jadever">): precio Black Coco hasta el 28/11 y de contado después, sin redirigir
  var soloMarca = document.body.getAttribute('data-bc-marca');
  var modo = soloMarca ? (vigente(null, '2026-11-28') ? 'black' : 'contado')
    : document.body.getAttribute('data-bc-modo') === 'contado' ? 'contado' : 'black';
  if (!soloMarca && !/[?&]previa/.test(location.search)) {
    var enBlack = vigente(null, '2026-11-28');
    if (modo === 'black' && !enBlack) { location.replace('precios.html' + location.hash); return; }
  }
  // Hasta el 28/11, precios.html muestra solo los rubros nuevos (tipo "contado"); las 5 marcas del evento están en black-coco.html
  if (!soloMarca && modo === 'contado' && vigente(null, '2026-11-28') && !/[?&]previa/.test(location.search))
    datos.marcas = datos.marcas.filter(function (m) { return m.tipo === 'contado'; });
  // Rubros nuevos (tipo "contado": Polacrin, Talento, Megaflex, Tinacos, Peirano, Roca y Oblak): solo en precios.html
  // Los rubros nuevos (tipo "contado") también van en black-coco.html, con su precio de contado (Jesús, 23/11: que se vean sin buscar)
  // Todas las marcas que se pueden mostrar hoy: de acá salen los «Va bien con» (también en la página de una sola marca)
  var todas = datos.marcas.slice();
  if (soloMarca) datos.marcas = datos.marcas.filter(function (m) { return m.id === soloMarca; });
  // Subcategoría y nombre base (sin la medida) de cada artículo: catalogo.js
  var CAT = window.DONCOCO_CATALOGO || null;
  todas.forEach(function (m) {
    m.productos.forEach(function (p) {
      p._m = m;
      p._sub = CAT ? CAT.subDe(p) : { id: p.grupo, nombre: '' };
      p._base = CAT ? CAT.base(p) : p.codigo;
    });
  });
  // Precio grande de cada artículo y chip de cada marca según el modo
  function contado(p) { return modo === 'contado' && p.contado_normal ? p.contado_normal : p.contado; }
  function chip(m) { return modo === 'contado' && m.tipo !== 'liq' ? 'Contado' : m.chip; }
  function esPromo(m) { return modo === 'black' && m.tipo === '23'; }
  function deLista(m) { return m.tipo !== 'liq'; }

  var WA_LUISA = '5493874742440';
  var WA_DANTE = '5493874452416';
  var IMG = 'assets/img/black-coco/';

  var pestanas = document.querySelector('[data-bc-marcas]');
  var destacados = document.querySelector('[data-bc-destacados]');
  var lista = document.querySelector('[data-bc-lista]');
  var indice = document.querySelector('[data-bc-indice]');
  var buscador = document.querySelector('[data-bc-buscar]');
  var contador = document.querySelector('[data-bc-contador]');
  var titulo = document.querySelector('[data-bc-titulo]');
  var subtitulo = document.querySelector('[data-bc-subtitulo]');
  var nota = document.querySelector('[data-bc-nota]');
  if (!lista) return;

  function pesos(n) { return '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
  function crear(etiqueta, clase, texto) {
    var el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto != null) el.textContent = texto;
    return el;
  }
  function normal(t) { return (t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function nombreGrupo(id) {
    for (var i = 0; i < datos.grupos.length; i++) if (datos.grupos[i].id === id) return datos.grupos[i].nombre;
    return '';
  }
  function cantidad(n) { return n + (n === 1 ? ' artículo' : ' artículos'); }

  // Mismo asesor que eligió v3.js para esta visita (los links se rearman al cambiar de marca)
  function numeroWA() {
    var n = null;
    try { n = sessionStorage.getItem('doncoco-wa'); } catch (e) {}
    return n === WA_DANTE ? WA_DANTE : WA_LUISA;
  }

  function linkWhatsApp(p, m) {
    var msj = 'Hola Don Coco, quiero consultar por ' + p.nombre + (p.detalle ? ' (' + p.detalle + ')' : '') + ' ' + m.nombre +
      ', cód. ' + p.codigo + '. ' + (esPromo(m) ? 'Precio Black Coco' : deLista(m) ? 'Precio' : 'Precio de liquidación') + ': ' + pesos(contado(p)) + ' de contado o transferencia.';
    return 'https://wa.me/' + numeroWA() + '?text=' + encodeURIComponent(msj);
  }

  // Cuotas con Mercado Pago sobre el precio de lista (anexo de tarjetas del manual v7; Jesús, 23/11/2026).
  // El 23% de Black Coco es solo de contado o transferencia: las cuotas no se suman. Redondeo hacia arriba.
  var CUOTAS = [[3, 0.9006], [6, 0.948]];
  function cuota(p, c) { return Math.ceil(p.lista * c[1] / c[0]); }

  function precio(p, m, clase) {
    var caja = crear('div', clase);
    caja.appendChild(crear('p', 'lab', deLista(m) ? 'Contado o transf.' : 'Liquidación'));
    // En Black Coco, arriba y tachado el precio de contado de siempre
    if (esPromo(m) && p.contado_normal) {
      var antes = crear('p', 'precio__antes');
      antes.appendChild(crear('span', 'precio__antes-lab', 'Antes '));
      var del_ = crear('del', null, pesos(p.contado_normal));
      antes.appendChild(del_);
      caja.appendChild(antes);
    }
    caja.appendChild(crear('p', 'd precio', pesos(contado(p))));
    var cuotas = crear('p', 'precio__cuotas');
    cuotas.appendChild(crear('span', 'precio__cuotas-lab', 'Con Mercado Pago'));
    CUOTAS.forEach(function (c) { cuotas.appendChild(crear('span', 'precio__cuota', c[0] + ' cuotas de ' + pesos(cuota(p, c)))); });
    caja.appendChild(cuotas);
    caja.appendChild(crear('p', 'precio__lista', 'Lista ' + pesos(p.lista)));
    return caja;
  }

  function boton(p, m, clase) {
    var a = crear('a', 'btn btn--chico ' + clase, 'Consultar');
    a.href = linkWhatsApp(p, m);
    a.setAttribute('aria-label', 'Consultar por WhatsApp: ' + p.nombre + (p.detalle ? ', ' + p.detalle : '') + ' ' + m.nombre);
    return a;
  }

  function imagen(src, alt, lado) {
    var img = document.createElement('img');
    img.loading = 'lazy'; img.decoding = 'async'; img.alt = alt; img.width = lado; img.height = lado; img.src = src;
    return img;
  }

  // Datos clave de la ficha para mostrar de entrada (potencia, tensión, velocidad...): salen de fichas.js
  var PRIORIDAD = /^(potencia|tensi|voltaje|velocidad|mandril|torque|par |presi|caudal|capacidad|perfora|di[aá]metro|energ|bater|corriente|motor|longitud|largo|tama|peso)/i;
  function claves(p, n) {
    var f = (window.DONCOCO_FICHAS || {})[p.codigo];
    if (!f || !f.c) return [];
    var kv = f.c.filter(function (t) { var k = t.indexOf(': '); return k > 0 && k < 32 && t.length <= 52; });
    var orden = kv.filter(function (t) { return PRIORIDAD.test(t); }).concat(kv.filter(function (t) { return !PRIORIDAD.test(t); }));
    if (orden.length < n) orden = orden.concat(f.c.filter(function (t) { return t.indexOf(': ') < 0 && t.length <= 40; }));
    return orden.slice(0, n);
  }
  function listaClaves(p, n, clase) {
    var ks = claves(p, n);
    if (!ks.length) return null;
    var ul = crear('ul', clase);
    ks.forEach(function (t) {
      var li = crear('li', '');
      var k = t.indexOf(': ');
      if (k > 0) { li.appendChild(crear('span', 'specs__k', t.slice(0, k))); li.appendChild(document.createTextNode(t.slice(k + 2))); }
      else li.textContent = t;
      ul.appendChild(li);
    });
    return ul;
  }

  function tarjeta(p, m) {
    var art = crear('article', 'producto');
    var foto = crear('div', 'producto__foto');
    if (esPromo(m) || !deLista(m)) foto.appendChild(crear('span', 'lab producto__chip' + (deLista(m) ? '' : ' producto__chip--liq'), m.chip));
    var verFoto = crear('button', 'producto__ver');
    verFoto.type = 'button';
    verFoto.setAttribute('aria-label', 'Ver detalle y qué va bien con: ' + p.nombre + ' ' + m.nombre);
    verFoto.appendChild(imagen(IMG + p.foto, p.nombre + ' ' + m.nombre, 400));
    verFoto.addEventListener('click', function () { abrirFoto(p, m); });
    foto.appendChild(verFoto);
    art.appendChild(foto);
    var cuerpo = crear('div', 'producto__cuerpo');
    cuerpo.appendChild(crear('p', 'lab producto__cat', p._sub && p._sub.nombre && p._sub.nombre !== 'Otros' ? p._sub.nombre : nombreGrupo(p.grupo)));
    cuerpo.appendChild(crear('h4', 'producto__nombre', p.nombre));
    if (p.detalle) cuerpo.appendChild(crear('p', 'producto__detalle', p.detalle));
    var sp = listaClaves(p, 3, 'specs producto__specs');
    if (sp) {
      cuerpo.appendChild(sp);
      var vc = crear('button', 'specs__ver', 'Ver características');
      vc.type = 'button';
      vc.addEventListener('click', function () { abrirFoto(p, m); });
      cuerpo.appendChild(vc);
    }
    cuerpo.appendChild(precio(p, m, 'producto__precio'));
    cuerpo.appendChild(boton(p, m, 'btn--negro'));
    art.appendChild(cuerpo);
    return art;
  }

  /* Foto grande: se abre al tocar la miniatura de la lista */
  var visor = null;
  function abrirFoto(p, m) {
    if (!visor) {
      visor = crear('dialog', 'visor');
      visor.setAttribute('aria-label', 'Foto del artículo');
      var cerrar = crear('button', 'visor__cerrar', '×');
      cerrar.type = 'button';
      cerrar.setAttribute('aria-label', 'Cerrar');
      cerrar.addEventListener('click', function () { visor.close(); });
      visor.appendChild(cerrar);
      visor.appendChild(crear('figure', 'visor__fig'));
      visor.addEventListener('click', function (e) { if (e.target === visor) visor.close(); });
      document.body.appendChild(visor);
    }
    var fig = visor.querySelector('.visor__fig');
    fig.textContent = '';
    var img = imagen(IMG + p.foto, p.nombre + ' ' + m.nombre, 800);
    img.loading = 'eager';
    fig.appendChild(img);
    var pie = crear('figcaption', 'visor__pie');
    pie.appendChild(crear('p', 'lab visor__marca', m.nombre + ' · Cód. ' + p.codigo));
    pie.appendChild(crear('p', 'visor__nombre', p.nombre + (p.detalle ? ' · ' + p.detalle : '')));
    var abajo = crear('div', 'visor__abajo');
    abajo.appendChild(precio(p, m, 'visor__precio'));
    abajo.appendChild(boton(p, m, 'btn--rojo btn--sin-flecha'));
    pie.appendChild(abajo);
    fig.appendChild(pie);

    // Otras presentaciones del mismo artículo (medidas, kilos, litros)
    var hermanos = variantes(p);
    if (hermanos.length > 1) {
      var pres = crear('div', 'visor__pres');
      pres.appendChild(crear('p', 'lab', 'Presentaciones'));
      var fila_ = crear('div', 'visor__pres-lista');
      hermanos.forEach(function (h) {
        var b = crear('button', 'pres' + (h === p ? ' pres--activa' : ''), h.detalle || h.codigo);
        b.type = 'button';
        b.setAttribute('aria-pressed', h === p ? 'true' : 'false');
        b.addEventListener('click', function () { if (h !== p) abrirFoto(h, h._m); });
        fila_.appendChild(b);
      });
      pres.appendChild(fila_);
      pie.appendChild(pres);
    }

    // Características: salen de assets/js/fichas.js (sitio oficial de la marca o su tienda oficial)
    var ficha = (window.DONCOCO_FICHAS || {})[p.codigo];
    if (ficha && ((ficha.c && ficha.c.length) || (ficha.i && ficha.i.length))) {
      var fs = crear('section', 'ficha');
      fs.setAttribute('aria-label', 'Características');
      var lista_ = function (titulo, items) {
        if (!items || !items.length) return;
        fs.appendChild(crear('p', 'lab ficha__titulo', titulo));
        var ul = crear('ul', 'ficha__lista');
        items.forEach(function (t) {
          var li = crear('li', 'ficha__item');
          var k = t.indexOf(': ');
          if (k > 0 && k < 40) { li.appendChild(crear('span', 'ficha__clave', t.slice(0, k))); li.appendChild(document.createTextNode(t.slice(k + 2))); }
          else li.textContent = t;
          ul.appendChild(li);
        });
        fs.appendChild(ul);
      };
      lista_('Características', ficha.c);
      lista_('Incluye', ficha.i);
      var fuente = crear('p', 'ficha__fuente');
      fuente.appendChild(document.createTextNode('Fuente: '));
      var a = crear('a', '', ficha.fn);
      a.href = ficha.f; a.target = '_blank'; a.rel = 'noopener';
      fuente.appendChild(a);
      if (ficha.pdf) {
        fuente.appendChild(document.createTextNode(' · '));
        var pdf = crear('a', '', 'Ficha técnica (PDF)');
        pdf.href = ficha.pdf; pdf.target = '_blank'; pdf.rel = 'noopener';
        fuente.appendChild(pdf);
      }
      fs.appendChild(fuente);
      pie.appendChild(fs);
    }

    // Va bien con: artículos de otras subcategorías que se usan junto con este
    var sug = sugerencias(p, 6);
    if (sug.length) {
      var caja = crear('section', 'vbc');
      caja.setAttribute('aria-label', 'Va bien con');
      caja.appendChild(crear('p', 'd vbc__titulo', 'Va bien con'));
      var grilla = crear('ul', 'vbc__lista');
      sug.forEach(function (s) {
        var li = crear('li', 'vbc__item');
        var b = crear('button', 'vbc__btn');
        b.type = 'button';
        b.setAttribute('aria-label', s.nombre + (s.detalle ? ', ' + s.detalle : '') + ' ' + s._m.nombre + ', ' + pesos(contado(s)));
        b.appendChild(imagen(IMG + s.foto, '', 160));
        b.appendChild(crear('span', 'lab vbc__sub', s._sub.nombre !== 'Otros' ? s._sub.nombre : nombreGrupo(s.grupo)));
        b.appendChild(crear('span', 'vbc__nombre', s.nombre));
        b.appendChild(crear('span', 'd vbc__precio', pesos(contado(s))));
        b.addEventListener('click', function () { abrirFoto(s, s._m); });
        li.appendChild(b);
        grilla.appendChild(li);
      });
      caja.appendChild(grilla);
      fig.appendChild(caja);
    }
    visor.scrollTop = 0;
    if (!visor.open) { if (typeof visor.showModal === 'function') visor.showModal(); else visor.setAttribute('open', ''); }
  }

  function variantes(p) {
    var v = p._m.productos.filter(function (q) { return q._base === p._base && q.grupo === p.grupo; })
      .sort(function (a, b) { return a.lista - b.lista; });
    // Solo se juntan si cada presentación tiene su medida y no se repite
    var vistos = {};
    var ok = v.every(function (q) { if (!q.detalle || vistos[q.detalle]) return false; vistos[q.detalle] = true; return true; });
    return ok ? v : [p];
  }

  // Hasta n artículos de las subcategorías que complementan a la de p, de a uno por subcategoría y en rondas
  function sugerencias(p, n) {
    if (!CAT) return [];
    var subs = CAT.VAN_CON[p._sub.id] || [];
    if (!subs.length) return [];
    var porSub = subs.map(function (id) {
      var c = [];
      todas.forEach(function (m) {
        m.productos.forEach(function (q) { if (q._sub.id === id && q.foto && q._base !== p._base) c.push(q); });
      });
      // Primero la misma marca, después los destacados, después el más económico
      c.sort(function (a, b) {
        var ma = a._m === p._m ? 0 : 1, mb = b._m === p._m ? 0 : 1;
        if (ma !== mb) return ma - mb;
        var da = a.destacado != null ? a.destacado : 99, db = b.destacado != null ? b.destacado : 99;
        if (da !== db) return da - db;
        return contado(a) - contado(b);
      });
      return c;
    });
    var salida = [], usadas = {};
    for (var ronda = 0; ronda < 3 && salida.length < n; ronda++) {
      porSub.forEach(function (c) {
        while (c.length && salida.length < n) {
          var q = c.shift();
          var clave = q._m.id + '|' + q._base;
          if (usadas[clave]) continue;
          usadas[clave] = true;
          salida.push(q);
          break;
        }
      });
    }
    return salida;
  }

  // Una fila por artículo; si tiene varias presentaciones (1 l, 4 l, 20 l...) van como botones en la misma fila
  function fila(p, m, vars) {
    vars = vars && vars.length ? vars : [p];
    var li = crear('li', 'articulo' + (p.foto ? '' : ' articulo--sin-foto') + (vars.length > 1 ? ' articulo--pres' : ''));
    li.setAttribute('data-texto', normal(vars.map(function (q) { return q.nombre + ' ' + q.detalle + ' ' + q.codigo; }).join(' ') + ' ' + (p._sub ? p._sub.nombre : '')));
    function pintar(q) {
      li.textContent = '';
      if (q.foto) {
        var marco = crear('button', 'articulo__foto');
        marco.type = 'button';
        marco.setAttribute('aria-label', 'Ver foto grande: ' + q.nombre + ' ' + m.nombre);
        marco.appendChild(imagen(IMG + q.foto, '', 240));
        marco.addEventListener('click', function () { abrirFoto(q, m); });
        li.appendChild(marco);
      }
      var texto = crear('div', 'articulo__texto');
      var nom = crear('button', 'articulo__nombre', q.nombre);
      nom.type = 'button';
      nom.setAttribute('aria-label', 'Ver detalle y qué va bien con: ' + q.nombre + (q.detalle ? ', ' + q.detalle : '') + ' ' + m.nombre);
      nom.addEventListener('click', function () { abrirFoto(q, m); });
      texto.appendChild(nom);
      if (vars.length > 1) {
        var pres = crear('div', 'articulo__pres');
        pres.setAttribute('role', 'group');
        pres.setAttribute('aria-label', 'Presentación');
        vars.forEach(function (v) {
          var b = crear('button', 'pres pres--chica' + (v === q ? ' pres--activa' : ''), v.detalle || v.codigo);
          b.type = 'button';
          b.setAttribute('aria-pressed', v === q ? 'true' : 'false');
          b.addEventListener('click', function () {
            if (v === q) return;
            pintar(v);
            var nuevo = li.querySelector('.pres[aria-pressed="true"]');
            if (nuevo) nuevo.focus();
          });
          pres.appendChild(b);
        });
        texto.appendChild(pres);
      } else if (q.detalle) texto.appendChild(crear('p', 'articulo__detalle', q.detalle));
      var sq = listaClaves(q, 2, 'specs articulo__specs');
      if (sq) texto.appendChild(sq);
      texto.appendChild(crear('p', 'lab articulo__codigo', 'Cód. ' + q.codigo));
      li.appendChild(texto);
      li.appendChild(precio(q, m, 'articulo__precio'));
      li.appendChild(boton(q, m, 'btn--rojo btn--sin-flecha'));
    }
    pintar(p);
    return li;
  }

  var actual = null;

  function mostrar(id, enfocar) {
    var m = datos.marcas[0];
    for (var i = 0; i < datos.marcas.length; i++) if (datos.marcas[i].id === id) m = datos.marcas[i];
    actual = m;

    if (pestanas) {
      Array.prototype.forEach.call(pestanas.querySelectorAll('[role="tab"]'), function (b) {
        var si = b.getAttribute('data-marca') === m.id;
        b.setAttribute('aria-selected', si ? 'true' : 'false');
        b.tabIndex = si ? 0 : -1;
        if (si && enfocar) b.focus();
      });
    }
    if (titulo) titulo.textContent = m.rubro + ' ' + m.nombre;
    if (subtitulo) subtitulo.textContent = cantidad(m.productos.length) + ' · ' +
      (esPromo(m) ? '23% OFF de contado o transferencia' : deLista(m) ? 'Precio de contado o transferencia' : 'Liquidación de contado o transferencia, hasta agotar stock');
    if (nota) {
      nota.textContent = esPromo(m)
        ? 'Precio grande: contado o transferencia con el 23% OFF de Black Coco, del 26 al 28/11/2026. Arriba, tachado, el de contado de siempre. Cuotas con Mercado Pago sobre el precio de lista (sin el 23%): 3 cuotas −9,94 % y 6 cuotas −5,20 %. Pueden cambiar sin aviso y dependen del stock.'
        : deLista(m)
          ? 'Precio grande: contado o transferencia. Cuotas con Mercado Pago sobre el precio de lista: 3 cuotas −9,94 % y 6 cuotas −5,20 %. Pueden cambiar sin aviso y dependen del stock.'
          : modo === 'black'
            ? 'Liquidación: precio de contado o transferencia, del 26 al 28/11/2026 o hasta agotar stock. Sin cambio, salvo falla. Cuotas con Mercado Pago sobre el precio de lista. Pueden cambiar sin aviso.'
            : 'Liquidación: precio de contado o transferencia, hasta agotar stock. Sin cambio, salvo falla. Cuotas con Mercado Pago sobre el precio de lista. Pueden cambiar sin aviso.';
    }

    if (destacados) {
      destacados.textContent = '';
      m.productos.filter(function (p) { return p.foto && p.destacado != null; })
        .sort(function (a, b) { return a.destacado - b.destacado; })
        .forEach(function (p) { destacados.appendChild(tarjeta(p, m)); });
    }

    lista.textContent = '';
    if (indice) indice.textContent = '';
    datos.grupos.forEach(function (g) {
      var items = m.productos.filter(function (p) { return p.grupo === g.id; });
      if (!items.length) return;
      var seccion = crear('section', 'grupo');
      seccion.id = m.id + '-' + g.id;
      seccion.setAttribute('aria-labelledby', 'grupo-' + seccion.id);
      var cabeza = crear('header', 'grupo__cabeza');
      var h = crear('h4', 'd grupo__nombre', g.nombre);
      h.id = 'grupo-' + seccion.id;
      cabeza.appendChild(h);
      cabeza.appendChild(crear('span', 'lab grupo__cantidad', cantidad(items.length)));
      seccion.appendChild(cabeza);
      // Subcategorías (catalogo.js), en el orden en que están definidas
      var subs = [];
      items.forEach(function (p) { if (subs.indexOf(p._sub.nombre) === -1) subs.push(p._sub.nombre); });
      var orden = CAT && CAT.SUBS[g.id] ? CAT.SUBS[g.id].map(function (r) { return r[1]; }).concat(['Otros']) : subs;
      subs.sort(function (a, b) { return orden.indexOf(a) - orden.indexOf(b); });
      var partir = subs.length > 1;
      subs.forEach(function (nombreSub) {
        var deSub = items.filter(function (p) { return p._sub.nombre === nombreSub; });
        var bloque = seccion;
        if (partir) {
          bloque = crear('div', 'sub');
          bloque.id = seccion.id + '-' + deSub[0]._sub.id;
          var hs = crear('h5', 'lab sub__nombre', nombreSub + ' · ' + deSub.length);
          bloque.appendChild(hs);
          seccion.appendChild(bloque);
        }
        var ul = crear('ul', 'grupo__lista');
        var vistos = {};
        deSub.forEach(function (p) {
          if (vistos[p.codigo]) return;
          var vars = variantes(p);
          vars.forEach(function (q) { vistos[q.codigo] = true; });
          ul.appendChild(fila(vars[0], m, vars));
        });
        bloque.appendChild(ul);
        if (indice) {
          var a = crear('a', '', partir ? nombreSub : g.nombre);
          a.href = '#' + bloque.id;
          a.appendChild(crear('span', '', String(deSub.length)));
          indice.appendChild(a);
        }
      });
      lista.appendChild(seccion);
    });
    filtrar();
  }

  function filtrar() {
    var q = buscador ? normal(buscador.value.trim()) : '';
    var total = 0;
    Array.prototype.forEach.call(lista.querySelectorAll('.grupo'), function (sec) {
      var vis = 0;
      Array.prototype.forEach.call(sec.querySelectorAll('.articulo'), function (li) {
        var ok = !q || li.getAttribute('data-texto').indexOf(q) !== -1;
        li.hidden = !ok;
        if (ok) vis++;
      });
      sec.hidden = vis === 0;
      Array.prototype.forEach.call(sec.querySelectorAll('.sub'), function (b) {
        b.hidden = !b.querySelector('.articulo:not([hidden])');
      });
      total += vis;
    });
    if (contador) {
      contador.textContent = q
        ? (total ? total + (total === 1 ? ' artículo encontrado' : ' artículos encontrados') : 'No encontramos ese artículo. Probá con otra palabra o el código.')
        : cantidad(actual.productos.length) + ' de ' + actual.nombre;
    }
  }

  // Pestañas de marcas (botones; flechas izquierda y derecha para moverse)
  if (pestanas) {
    datos.marcas.forEach(function (m) {
      var b = crear('button', 'marca');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('data-marca', m.id);
      b.setAttribute('aria-controls', 'marca-panel');
      b.appendChild(crear('span', 'lab marca__chip', chip(m)));
      b.appendChild(crear('span', 'd marca__nombre', m.nombre));
      b.appendChild(crear('span', 'marca__cant', m.rubro + ' · ' + m.productos.length));
      b.addEventListener('click', function () {
        if (history.replaceState) history.replaceState(null, '', '#' + m.id); else location.hash = m.id;
        mostrar(m.id);
      });
      pestanas.appendChild(b);
    });
    pestanas.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      var ids = datos.marcas.map(function (m) { return m.id; });
      var i = ids.indexOf(actual.id) + (e.key === 'ArrowRight' ? 1 : -1);
      i = (i + ids.length) % ids.length;
      if (history.replaceState) history.replaceState(null, '', '#' + ids[i]);
      mostrar(ids[i], true);
      e.preventDefault();
    });
  }

  if (buscador) buscador.addEventListener('input', filtrar);

  var inicial = (location.hash || '').replace('#', '').split('-')[0];
  mostrar(inicial);

  var total = datos.marcas.reduce(function (s, m) { return s + m.productos.length; }, 0);
  Array.prototype.forEach.call(document.querySelectorAll('[data-bc-total]'), function (el) { el.textContent = total; });
})();

/* Fechas de la portada de Black Coco: marca la hoja de hoy, atenúa las que pasaron y escribe el estado. */
(function () {
  'use strict';
  var caja = document.querySelector('[data-bc-fechas]');
  if (!caja) return;
  var estado = caja.querySelector('[data-bc-estado]');
  var hojas = Array.prototype.slice.call(caja.querySelectorAll('[data-dia]'));
  if (!hojas.length) return;
  var ahora = new Date();
  var dos = function (n) { return (n < 10 ? '0' : '') + n; };
  var hoy = ahora.getFullYear() + '-' + dos(ahora.getMonth() + 1) + '-' + dos(ahora.getDate());
  var minutos = ahora.getHours() * 60 + ahora.getMinutes();
  var enMin = function (t) { var p = t.split(':'); return Number(p[0]) * 60 + Number(p[1] || 0); };
  var hora = function (t) { return t.replace(/:00$/, ''); };
  var primero = hojas[0].getAttribute('data-dia');
  var ultimo = hojas[hojas.length - 1].getAttribute('data-dia');
  var texto = '';
  if (hoy < primero) {
    var faltan = Math.round((new Date(primero + 'T00:00:00') - new Date(hoy + 'T00:00:00')) / 864e5);
    texto = faltan === 1 ? 'Arranca mañana' : 'Faltan ' + faltan + ' días';
  } else if (hoy > ultimo) {
    texto = 'Terminó el sábado 28';
  }
  hojas.forEach(function (h, i) {
    var dia = h.getAttribute('data-dia');
    if (dia < hoy) h.classList.add('hoja--paso');
    if (dia !== hoy) return;
    var abre = h.getAttribute('data-abre'), cierra = h.getAttribute('data-cierra'), fin = i === hojas.length - 1;
    if (minutos < enMin(abre)) { h.classList.add('hoja--hoy'); texto = 'Hoy desde las ' + hora(abre); }
    else if (minutos < enMin(cierra)) { h.classList.add('hoja--hoy'); texto = 'Hoy hasta las ' + hora(cierra) + ' h'; }
    else { h.classList.add('hoja--paso'); texto = fin ? 'Terminó a las ' + hora(cierra) + ' h' : 'Mañana desde las ' + hora(hojas[i + 1].getAttribute('data-abre')); }
  });
  if (estado && texto) estado.textContent = texto;
})();
