/* Don Coco — Herramientas Jadever.
   Arma la lista de precios de jadever.html y los destacados del inicio
   con los datos de jadever-productos.js. Sin dependencias.
   Tiene que cargarse ANTES de main.js (que reparte los pedidos de WhatsApp). */
(function () {
  'use strict';

  var datos = window.DONCOCO_JADEVER;
  if (!datos || !datos.productos) return;

  var WA = '5493874742440';
  var IMG = 'assets/img/jadever/';
  var promo = datos.promo && datos.promo.activa ? datos.promo : null;
  var textoBoton = datos.boton || 'Pedir';

  function pesos(n) {
    return '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  function crear(etiqueta, clase, texto) {
    var el = document.createElement(etiqueta);
    if (clase) el.className = clase;
    if (texto != null) el.textContent = texto;
    return el;
  }

  function enPromo(p) { return !!(promo && p.contado); }
  function precioDe(p) { return enPromo(p) ? p.contado : p.lista; }

  function nombreGrupo(id) {
    for (var i = 0; i < datos.grupos.length; i++) if (datos.grupos[i].id === id) return datos.grupos[i].nombre;
    return '';
  }

  function linkWhatsApp(p) {
    // Si hay varios con el mismo nombre (ej. llaves Stillson), se agrega el detalle para distinguirlos
    var repetido = datos.productos.filter(function (o) { return o.nombre === p.nombre; }).length > 1;
    var msj = 'Hola Don Coco, quiero consultar por ' + p.nombre + ' Jadever' + (repetido && p.detalle ? ', ' + p.detalle.charAt(0).toLowerCase() + p.detalle.slice(1) : '') + ' (cód. ' + p.codigo + ')';
    if (enPromo(p)) msj += '. Precio del ' + promo.nombre + ': ' + pesos(p.contado) + ' de contado o transferencia';
    return 'https://wa.me/' + WA + '?text=' + encodeURIComponent(msj + '.');
  }

  function etiquetaPrecio(p) {
    var sombra = crear('div', 'etiqueta-sombra');
    var et = crear('p', 'etiqueta');
    et.appendChild(crear('span', 'etiqueta__rotulo', enPromo(p) ? promo.rotulo : 'Precio de lista'));
    et.appendChild(crear('span', 'etiqueta__precio', pesos(precioDe(p))));
    sombra.appendChild(et);
    return sombra;
  }

  function boton(p) {
    var a = crear('a', 'btn btn--rojo btn--chico', textoBoton);
    a.href = linkWhatsApp(p);
    a.setAttribute('aria-label', textoBoton + ': ' + p.nombre + (p.detalle ? ', ' + p.detalle : ''));
    return a;
  }

  function imagen(src, alt, lado, diferida) {
    var img = document.createElement('img');
    if (diferida) img.loading = 'lazy';
    img.alt = alt; img.width = lado; img.height = lado; img.src = src;
    return img;
  }

  // Ilustración del artículo: la suya ("dibujo") o, si no tiene, la de su grupo
  function dibujoDe(p) { return IMG + (p.dibujo || p.grupo) + '.svg'; }

  /* ---------- Lista de precios (jadever.html) ---------- */
  var lista = document.querySelector('[data-jadever-lista]');
  var indice = document.querySelector('[data-jadever-indice]');

  function fila(p) {
    var li = crear('li', 'articulo');
    // Cada artículo lleva imagen: la foto real si está cargada; si no, su ilustración (decorativa: el nombre ya lo dice)
    var marco = crear('div', 'articulo__imagen' + (p.foto ? ' articulo__imagen--foto' : ''));
    marco.appendChild(p.foto ? imagen(IMG + p.foto, p.nombre + ' Jadever', 160, true) : imagen(dibujoDe(p), '', 64, true));
    li.appendChild(marco);
    var texto = crear('div', 'articulo__texto');
    texto.appendChild(crear('p', 'articulo__nombre', p.nombre));
    if (p.detalle) texto.appendChild(crear('p', 'articulo__detalle', p.detalle));
    texto.appendChild(crear('p', 'articulo__codigo', 'Cód. ' + p.codigo));
    li.appendChild(texto);

    var precios = crear('div', 'articulo__precios');
    precios.appendChild(etiquetaPrecio(p));
    if (enPromo(p)) precios.appendChild(crear('p', 'articulo__lista', 'Precio de lista ' + pesos(p.lista)));
    li.appendChild(precios);

    li.appendChild(boton(p));
    return li;
  }

  if (lista) {
    datos.grupos.forEach(function (g) {
      var items = datos.productos.filter(function (p) { return p.grupo === g.id; });
      if (!items.length) return;

      var seccion = crear('section', 'grupo');
      seccion.id = g.id;
      seccion.setAttribute('aria-labelledby', 'grupo-' + g.id);

      var cabeza = crear('header', 'grupo__cabeza');
      var h = crear('h3', 'grupo__nombre', g.nombre);
      h.id = 'grupo-' + g.id;
      cabeza.appendChild(h);
      cabeza.appendChild(crear('span', 'grupo__cantidad', items.length + (items.length === 1 ? ' artículo' : ' artículos')));
      seccion.appendChild(cabeza);

      var ul = crear('ul', 'grupo__lista');
      items.forEach(function (p) { ul.appendChild(fila(p)); });
      seccion.appendChild(ul);
      lista.appendChild(seccion);

      if (indice) {
        var a = crear('a', '', g.nombre);
        a.href = '#' + g.id;
        a.appendChild(crear('span', '', String(items.length)));
        indice.appendChild(a);
      }
    });
  }

  /* ---------- Destacados (inicio) ---------- */
  var destacados = document.querySelector('[data-jadever-destacados]');
  if (destacados) {
    datos.productos.filter(function (p) { return p.destacado; }).slice(0, 4).forEach(function (p) {
      var art = crear('article', 'producto');

      var foto = crear('div', 'producto__foto' + (p.foto ? '' : ' producto__foto--ilustracion'));
      if (enPromo(p)) foto.appendChild(crear('span', 'chip-oferta', promo.chip));
      foto.appendChild(p.foto ? imagen(IMG + p.foto, p.nombre + ' Jadever', 400, true) : imagen(dibujoDe(p), '', 132, true));
      art.appendChild(foto);

      var cuerpo = crear('div', 'producto__cuerpo');
      cuerpo.appendChild(crear('span', 'producto__cat', nombreGrupo(p.grupo)));
      cuerpo.appendChild(crear('h3', 'producto__nombre', p.nombre));
      if (p.detalle) cuerpo.appendChild(crear('p', 'producto__detalle', p.detalle));
      var pie = crear('div', 'producto__pie');
      var precios = crear('div', 'producto__precios');
      precios.appendChild(etiquetaPrecio(p));
      if (enPromo(p)) precios.appendChild(crear('p', 'producto__lista', 'Precio de lista ' + pesos(p.lista)));
      pie.appendChild(precios);
      pie.appendChild(boton(p));
      cuerpo.appendChild(pie);
      art.appendChild(cuerpo);

      destacados.appendChild(art);
    });
  }

  /* ---------- Cantidad total (para que los textos no queden viejos) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('[data-jadever-total]'), function (el) {
    el.textContent = datos.productos.length;
  });
})();
