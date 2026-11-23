/* ==========================================================
   Don Coco — clasificación fina del catálogo y artículos que van bien juntos.
   Lo usa black-coco.js (black-coco.html, precios.html y jadever.html). Va ANTES que black-coco.js.

   SUBS: dentro de cada grupo de black-coco-productos.js, subcategorías por palabras del nombre.
         [id, nombre que se ve, expresión]. Gana la primera que coincide; si ninguna, "Otros".
   VAN_CON: para cada subcategoría, las subcategorías de otros artículos que la complementan
            (en orden de importancia). Se buscan en todas las marcas visibles en la página.
   Solo se sugieren artículos reales de la lista (con foto, precio y stock). No inventar.
   ========================================================== */
(function () {
  'use strict';

  var SUBS = {
    pint: [
      ['latex-color', 'Látex de color', /latex premium .*(amarillo|azul|beige|bermellon|borgona|celeste|gris|marron|naranja|negro|ocre|rojo|rosa|verde|violeta)/],
      ['latex', 'Látex blanco', /latex/],
      ['esmalte', 'Esmaltes sintéticos', /esmalte/],
      ['revest', 'Revestimientos plásticos', /revestimiento/],
      ['prep', 'Enduidos y fijadores', /enduido|fijador|sellador/],
      ['masilla', 'Masillas para placas de yeso', /masilla/]
    ],
    imp: [
      ['memb-liq', 'Membranas líquidas', /membrana liquida/],
      ['memb-asf', 'Membranas asfálticas', /membrana asfaltica/],
      ['asf', 'Emulsión y pintura asfáltica', /emulsion|pintura asfaltica/]
    ],
    elec: [
      ['taladro', 'Taladros y rotomartillos', /taladro|rotomartillo|demoledor|atornillador|mandril/],
      ['amoladora', 'Amoladoras', /amoladora|sensitiva/],
      ['sierra', 'Sierras y caladoras', /sierra|caladora|router/],
      ['lijadora', 'Lijadoras y pulidoras', /lijadora|pulidora|lustra|cepillo/],
      ['pintar', 'Pistolas de pintar y de calor', /pistola|encoladora/],
      ['termo', 'Termofusoras', /termofusora/],
      ['taller', 'Aspiradoras, compresores y más', /aspiradora|compresor|mezclador|minitorno/]
    ],
    inal: [
      ['taladro', 'Taladros y atornilladores', /taladro|rotomartillo|atornillador|llave de impacto|llave de/],
      ['amoladora', 'Amoladoras', /amoladora/],
      ['sierra', 'Sierras', /sierra(?! podadora)|caladora|multiherramienta/],
      ['lijadora', 'Lijadoras y pulidoras', /lijadora|pulidora/],
      ['jar-inal', 'Jardín y limpieza a batería', /bordeadora|cortacerco|podadora|soplador|hidrolavadora|lava tapizados/],
      ['taller', 'Compresores y clavadoras', /compresor|clavadora|caja/]
    ],
    bat: [['bateria', 'Baterías y cargadores', /./]],
    man: [
      ['llaves', 'Llaves y pinzas', /llave|pinza|alicate|tenaza/],
      ['destorn', 'Destornilladores y puntas', /destornillador|punta|lima/],
      ['medicion', 'Medición y nivel', /nivel|medidor|calibre|escuadra/],
      ['corte-man', 'Serruchos, sierras y corte', /serrucho|sierra|cortaperno|cortavidrio|corta cano|tijera|machete|cortafierro|ingletes/],
      ['golpe', 'Mazas', /maza/],
      ['albanil', 'Albañilería y placas de yeso', /llana|espatula|ceramicos/],
      ['fijacion', 'Siliconas, remaches y grapas', /silicona|remachadora|engrapadora/],
      ['morsa', 'Morsas y prensas', /morsa|prensa|mandril/]
    ],
    jar: [
      ['jar-corte', 'Corte: bordeadoras, motosierras y tijeras', /bordeadora|motosierra|cortadora|tijera|sierra|arco/],
      ['jar-mano', 'Palas, rastrillos y azadas', /pala|rastrillo|azada/],
      ['riego', 'Riego y pulverizado', /regadora|pulverizador/],
      ['soplador', 'Sopladores', /soplador/]
    ],
    agua: [
      ['bomba', 'Bombas', /bomba|regulador/],
      ['hidro', 'Hidrolavadoras y accesorios', /hidrolavadora|lanza|manguera/]
    ],
    sold: [
      ['soldadora', 'Soldadoras', /soldad|combo/],
      ['proteccion', 'Protección', /capa|protector/]
    ],
    cons: [
      ['disco', 'Discos', /disco/],
      ['cepillo', 'Cepillos copa', /cepillo/],
      ['consum', 'Siliconas y accesorios', /./]
    ],
    coc: [
      ['coc-pared', 'De pared', /pared/],
      ['coc-mesada', 'Para mesada', /./]
    ],
    lav: [
      ['bidet', 'Bidet', /bidet/],
      ['lavatorio', 'Lavatorio', /./]
    ],
    duc: [
      ['duc-grif', 'Griferías de ducha', /grif|transferencia|set/],
      ['flor', 'Flores y lluvias', /flor|ducha con brazo/],
      ['brazo', 'Brazos para lluvia', /brazo/]
    ],
    acb: [
      ['rejilla', 'Rejillas de piso', /reja/],
      ['acc-bano', 'Accesorios de baño', /./]
    ],
    san: [
      ['inodoro', 'Inodoros, bidets y depósitos', /inodoro|bidet|deposito/],
      ['valvula', 'Válvulas', /valvula/]
    ],
    tan: [
      ['tanque', 'Tanques de agua', /tanque/],
      ['cisterna', 'Cisternas', /cisterna/]
    ],
    agro: [['tanque-agro', 'Tanques agroindustriales', /./]],
    sept: [['septica', 'Cámaras sépticas', /./]],
    abe: [
      ['puerta-tek', 'Puertas Tekstura', /tekstura/],
      ['puerta', 'Puertas Practika', /./]
    ],
    caj: [['caja', 'Cajas, bolsos y cartucheras', /./]],
    cand: [['candado', 'Candados', /./]],
    hog: [
      ['escalera', 'Escaleras', /escalera/],
      ['luz', 'Linternas y faroles', /linterna|farol/],
      ['camping', 'Anafes, calefactores y camping', /./]
    ]
  };

  var VAN_CON = {
    'latex-color': ['prep', 'latex', 'masilla', 'pintar', 'escalera'],
    'latex': ['prep', 'masilla', 'latex-color', 'pintar', 'escalera'],
    'esmalte': ['lijadora', 'pintar', 'cepillo', 'prep'],
    'revest': ['prep', 'albanil', 'latex', 'escalera'],
    'prep': ['latex', 'latex-color', 'revest', 'albanil'],
    'masilla': ['albanil', 'prep', 'latex', 'lijadora'],
    'memb-liq': ['prep', 'hidro', 'escalera', 'asf'],
    'memb-asf': ['asf', 'memb-liq', 'escalera'],
    'asf': ['memb-asf', 'memb-liq', 'escalera'],
    'taladro': ['bateria', 'llaves', 'destorn', 'caja', 'medicion'],
    'amoladora': ['disco', 'cepillo', 'proteccion', 'caja'],
    'sierra': ['medicion', 'morsa', 'corte-man', 'caja'],
    'lijadora': ['esmalte', 'latex', 'masilla', 'taller'],
    'pintar': ['esmalte', 'latex-color', 'latex', 'escalera'],
    'termo': ['corte-man', 'tanque', 'llaves', 'bomba'],
    'taller': ['caja', 'consum', 'llaves'],
    'jar-inal': ['bateria', 'jar-mano', 'riego'],
    'bateria': ['taladro', 'amoladora', 'sierra', 'jar-inal'],
    'llaves': ['destorn', 'caja', 'medicion', 'morsa'],
    'destorn': ['llaves', 'caja', 'taladro'],
    'medicion': ['taladro', 'sierra', 'corte-man', 'albanil'],
    'corte-man': ['medicion', 'morsa', 'caja'],
    'golpe': ['corte-man', 'albanil', 'proteccion'],
    'albanil': ['masilla', 'medicion', 'corte-man', 'golpe'],
    'fijacion': ['consum', 'taladro', 'caja'],
    'morsa': ['corte-man', 'llaves', 'soldadora'],
    'jar-corte': ['jar-mano', 'riego', 'soplador', 'hidro'],
    'jar-mano': ['jar-corte', 'riego', 'soplador'],
    'riego': ['jar-mano', 'bomba', 'tanque'],
    'soplador': ['jar-corte', 'jar-mano'],
    'bomba': ['tanque', 'cisterna', 'termo', 'llaves'],
    'hidro': ['bomba', 'tanque', 'escalera'],
    'soldadora': ['proteccion', 'amoladora', 'disco', 'morsa'],
    'proteccion': ['soldadora', 'amoladora'],
    'disco': ['amoladora', 'proteccion'],
    'cepillo': ['amoladora', 'taladro', 'esmalte'],
    'consum': ['fijacion', 'taladro'],
    'coc-mesada': ['bomba', 'tanque', 'lavatorio', 'llaves'],
    'coc-pared': ['coc-mesada', 'bomba', 'llaves'],
    'bidet': ['inodoro', 'lavatorio', 'acc-bano', 'duc-grif'],
    'lavatorio': ['duc-grif', 'bidet', 'acc-bano', 'rejilla'],
    'duc-grif': ['flor', 'brazo', 'lavatorio', 'rejilla'],
    'flor': ['brazo', 'duc-grif', 'rejilla'],
    'brazo': ['flor', 'duc-grif'],
    'rejilla': ['duc-grif', 'acc-bano', 'inodoro'],
    'acc-bano': ['lavatorio', 'duc-grif', 'rejilla'],
    'inodoro': ['valvula', 'bidet', 'lavatorio', 'acc-bano'],
    'valvula': ['inodoro', 'bidet'],
    'tanque': ['bomba', 'cisterna', 'termo'],
    'cisterna': ['bomba', 'tanque', 'termo'],
    'tanque-agro': ['bomba', 'tanque'],
    'septica': ['inodoro', 'tanque', 'termo'],
    'puerta-tek': ['taladro', 'medicion', 'morsa', 'latex'],
    'puerta': ['taladro', 'medicion', 'morsa', 'esmalte'],
    'caja': ['llaves', 'destorn', 'medicion'],
    'candado': ['caja', 'corte-man'],
    'escalera': ['latex', 'memb-liq', 'luz'],
    'luz': ['camping', 'escalera'],
    'camping': ['luz', 'escalera']
  };

  function normal(t) { return (t || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }

  // Medida o presentación al final del nombre (1 l, 4 l, 20 kg, 1/4 l, 1 1/2...) para juntar presentaciones
  var MEDIDA = /\s*(\d+([,.]\d+)?(\s*\d\/\d)?|\d\/\d)\s*(l|lts|litros|kg|kgs|ml|cm|mm|m)?\.?$/i;

  function subDe(p) {
    var reglas = SUBS[p.grupo] || [];
    var t = normal(p.nombre + ' ' + (p.detalle || ''));
    for (var i = 0; i < reglas.length; i++) if (reglas[i][2].test(t)) return { id: reglas[i][0], nombre: reglas[i][1] };
    return { id: p.grupo + '-otros', nombre: 'Otros' };
  }

  function base(p) { return normal(p.nombre).replace(MEDIDA, '').trim(); }

  window.DONCOCO_CATALOGO = { SUBS: SUBS, VAN_CON: VAN_CON, subDe: subDe, base: base, normal: normal };
})();
