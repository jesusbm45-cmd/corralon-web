/* Lista Club (club.html #lista-club): pestañas por rubro y flechas del carrusel. Sin precios: cada tarjeta pide el precio Club por WhatsApp. */
(function () {
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.lc-tab'));
  if (!tabs.length) return;
  function flechas(panel) {
    var pista = panel.querySelector('.lc-pista');
    var izq = panel.querySelector('.lc-flecha--izq'), der = panel.querySelector('.lc-flecha--der');
    izq.disabled = pista.scrollLeft < 8;
    der.disabled = pista.scrollLeft + pista.clientWidth >= pista.scrollWidth - 8;
  }
  function elegir(tab, foco) {
    tabs.forEach(function (t) {
      var si = t === tab;
      t.setAttribute('aria-selected', si ? 'true' : 'false');
      t.tabIndex = si ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !si;
    });
    if (foco) tab.focus();
    flechas(document.getElementById(tab.getAttribute('aria-controls')));
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { elegir(t); });
    t.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      elegir(tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length], true);
      e.preventDefault();
    });
  });
  Array.prototype.forEach.call(document.querySelectorAll('.lc-panel'), function (panel) {
    var pista = panel.querySelector('.lc-pista');
    function mover(dir) { pista.scrollBy({ left: dir * pista.clientWidth * 0.9, behavior: 'smooth' }); }
    panel.querySelector('.lc-flecha--izq').addEventListener('click', function () { mover(-1); });
    panel.querySelector('.lc-flecha--der').addEventListener('click', function () { mover(1); });
    pista.addEventListener('scroll', function () { flechas(panel); }, { passive: true });
    flechas(panel);
  });
})();
