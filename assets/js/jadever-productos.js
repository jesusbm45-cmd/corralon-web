/* ==========================================================
   Don Coco — Herramientas Jadever: lista de artículos y precios
   Este archivo es la ÚNICA fuente de los artículos Jadever del sitio:
   de acá salen la lista de jadever.html y los destacados del inicio.

   Para SUMAR un artículo: copiar una línea de "productos" y cambiar los datos.
   Para SACAR un artículo: borrar su línea.

   IMAGEN de cada artículo:
   - "dibujo" = la ilustración que se muestra mientras no haya foto. Es el nombre
     de un .svg de assets/img/jadever/ sin la extensión (ej. 'rotomartillo').
     Si se deja vacío, se usa la ilustración del grupo.
   - "foto" = la foto real del producto. Guardarla en assets/img/jadever/ con el
     código como nombre (ej. HOJ001.webp) y escribir ese nombre acá.
     Cuando un artículo tiene foto, la foto reemplaza al dibujo.
     Las fotos actuales son las oficiales de Jadever (catálogo del importador,
     jadeverherramientas.com), bajadas en 2000 px y pasadas a 800 x 800 WebP.

   Precios: lista consumidor final de PalJet al 22/11/2026 (suba del 20/11 incluida).
   "lista" = precio de lista · "contado" = contado o transferencia (con el 23%).
   Van con centavos tal cual el sistema: el sitio los redondea a pesos.
   ========================================================== */
window.DONCOCO_JADEVER = {

  /* Promoción vigente. Cuando termine: activa: false (queda el precio de lista, sin chip). */
  promo: {
    activa: false,   /* el evento fue el 17/11; en Black Coco (26 al 28/11) los precios con 23% están en black-coco.html */
    nombre: 'Evento Jadever',
    chip: '23% OFF',
    rotulo: 'Contado o transferencia'
  },

  /* Texto del botón de cada artículo (abre WhatsApp con el artículo ya escrito). */
  boton: 'Consultar',

  /* Grupos: el orden de acá es el orden en la página. Cada grupo tiene su ilustración en
     assets/img/jadever/<id>.svg (la usan los artículos que no tienen "dibujo" propio). */
  grupos: [
    { id: 'soldadoras', nombre: 'Soldadoras' },
    { id: 'taladros',   nombre: 'Taladros y rotomartillos' },
    { id: 'escaleras',  nombre: 'Escaleras' },
    { id: 'jardin',     nombre: 'Jardín' },
    { id: 'electricas', nombre: 'Más eléctricas' },
    { id: 'manuales',   nombre: 'Manuales y cajas' },
    { id: 'medicion',   nombre: 'Medición y corte' }
  ],

  /* destacado: true = sale también en el inicio (se muestran los primeros 4). */
  productos: [
    { codigo: 'HOJ004', grupo: 'soldadoras', nombre: 'Soldadora inverter MMA 10-130 A', detalle: 'Electrodos de 1,6 a 3,2 mm · Antiadherente', lista: 250229.46, contado: 192676.68, dibujo: 'soldadoras', foto: 'HOJ004.webp' },
    { codigo: 'HOJ001', grupo: 'soldadoras', nombre: 'Soldadora inverter MMA 10-160 A', detalle: 'Electrodos de 1,6 a 3,2 mm · Antiadherente', lista: 287552.93, contado: 221415.76, dibujo: 'soldadoras', foto: 'HOJ001.webp', destacado: true },
    { codigo: 'HOJ002', grupo: 'soldadoras', nombre: 'Soldadora inverter MMA 20-160 A', detalle: 'Electrodos de 1,6 a 4 mm · Antiadherente', lista: 365247.63, contado: 281240.68, dibujo: 'soldadoras', foto: 'HOJ002.webp' },
    { codigo: 'HOJ003', grupo: 'soldadoras', nombre: 'Soldadora inverter MMA 20-200 A', detalle: 'Electrodos de 1,6 a 4 mm · Antiadherente', lista: 439699.41, contado: 338568.55, dibujo: 'soldadoras', foto: 'HOJ003.webp' },

    { codigo: 'NTJ001', grupo: 'taladros', nombre: 'Taladro percutor inalámbrico 20 V', detalle: 'Brushless · 52 Nm · Mandril 13 mm · 2 baterías + cargador', lista: 254903.07, contado: 196275.36, dibujo: 'taladros', foto: 'NTJ001.webp', destacado: true },
    { codigo: 'HRJ002', grupo: 'taladros', nombre: 'Rotomartillo SDS Plus 800 W', detalle: '2,5 J · Mandril intercambiable', lista: 198715.18, contado: 153010.69, dibujo: 'rotomartillo', foto: 'HRJ002.webp' },
    { codigo: 'HRJ004', grupo: 'taladros', nombre: 'Rotomartillo SDS Plus 1500 W', detalle: '5,5 J de impacto', lista: 260165.90, contado: 200327.74, dibujo: 'rotomartillo', foto: 'HRJ004.webp', destacado: true },
    { codigo: 'NRJ002', grupo: 'taladros', nombre: 'Rotomartillo inalámbrico 20 V', detalle: 'Brushless · SDS Plus · 4,5 J', lista: 283325.88, contado: 218160.93, dibujo: 'rotomartillo-inalambrico', foto: 'NRJ002.webp' },

    { codigo: 'ERJ002', grupo: 'escaleras', nombre: 'Escalera multipropósito andamio', detalle: 'Altura máxima 3,37 m', lista: 389903.61, contado: 300225.78, dibujo: 'escaleras', foto: 'ERJ002.webp' },
    { codigo: 'ERJ003', grupo: 'escaleras', nombre: 'Escalera multipropósito andamio', detalle: 'Altura máxima 4,45 m', lista: 482823.26, contado: 371773.91, dibujo: 'escaleras', foto: 'ERJ003.webp' },
    { codigo: 'ERJ001', grupo: 'escaleras', nombre: 'Escalera extensible de aluminio', detalle: '3 tramos · Altura máxima 5,08 m', lista: 579661.21, contado: 446339.13, dibujo: 'escalera-extensible', foto: 'ERJ001.webp' },

    { codigo: 'IOJ001', grupo: 'jardin', nombre: 'Bordeadora eléctrica 350 W', detalle: 'Corte de 250 mm · Eje telescópico', lista: 109744.58, contado: 84503.33, dibujo: 'bordeadora', foto: 'IOJ001.webp' },
    { codigo: 'HXM001', grupo: 'jardin', nombre: 'Motosierra 16"', detalle: '1,8 kW · Motor 2 tiempos', lista: 316194.49, contado: 243469.76, dibujo: 'jardin', foto: 'HXM001.webp', destacado: true },
    { codigo: 'HXM002', grupo: 'jardin', nombre: 'Motosierra 18" con espada Oregon', detalle: '1,8 kW · Motor 2 tiempos', lista: 421050.34, contado: 324208.76, dibujo: 'jardin', foto: 'HXM002.webp' },

    { codigo: 'HIJ002', grupo: 'electricas', nombre: 'Pistola de calor 1800 W', detalle: 'Temperatura de 480 a 560 °C', lista: 65280.43, contado: 50265.93, dibujo: 'pistola-calor', foto: 'HIJ002.webp' },
    { codigo: 'HPJ002', grupo: 'electricas', nombre: 'Pistola para pintar 450 W', detalle: '700 ml/min · Depósito de 800 ml', lista: 91439.49, contado: 70408.41, dibujo: 'pistola-pintar', foto: 'HPJ002.webp' },
    { codigo: 'HSJ001', grupo: 'electricas', nombre: 'Aspiradora 1200 W', detalle: 'Tacho de 25 litros', lista: 288145.20, contado: 221871.80, dibujo: 'electricas', foto: 'HSJ001.webp' },
    { codigo: 'HSJ002', grupo: 'electricas', nombre: 'Aspiradora 1600 W', detalle: 'Depósito de 1,8 litros', lista: 299669.61, contado: 230745.60, dibujo: 'aspiradora-compacta', foto: 'HSJ002.webp' },
    { codigo: 'HMJ001', grupo: 'electricas', nombre: 'Mezclador 1200 W', detalle: '', lista: 329391.37, contado: 253631.35, dibujo: 'mezclador', foto: 'HMJ001.webp' },

    { codigo: 'MTJ003', grupo: 'manuales', nombre: 'Llave Stillson', detalle: 'Para tubo de 10 a 33 mm', lista: 13013.12, contado: 10020.10, dibujo: 'stillson', foto: 'MTJ003.webp' },
    { codigo: 'MTJ004', grupo: 'manuales', nombre: 'Llave Stillson', detalle: 'Para tubo de 12 a 42 mm', lista: 18915.44, contado: 14564.89, dibujo: 'stillson', foto: 'MTJ004.webp' },
    { codigo: 'MTJ005', grupo: 'manuales', nombre: 'Llave Stillson', detalle: 'Para tubo de 14 a 48 mm', lista: 23556.73, contado: 18138.68, dibujo: 'stillson', foto: 'MTJ005.webp' },
    { codigo: 'MTJ002', grupo: 'manuales', nombre: 'Llave Stillson', detalle: 'Para tubo de 18 a 60 mm', lista: 31157.93, contado: 23991.61, dibujo: 'stillson', foto: 'MTJ002.webp' },
    { codigo: 'HCH005', grupo: 'manuales', nombre: 'Caja de herramientas 15,5"', detalle: 'Plástico reforzado · Hebilla metálica', lista: 59793.81, contado: 46041.23, dibujo: 'caja', foto: 'HCH005.webp' },
    { codigo: 'HCH006', grupo: 'manuales', nombre: 'Caja de herramientas 18,5"', detalle: 'Plástico reforzado · Hebilla metálica', lista: 85627.39, contado: 65933.09, dibujo: 'caja', foto: 'HCH006.webp' },
    { codigo: 'HCH004', grupo: 'manuales', nombre: 'Caja de herramientas metálica', detalle: '404 × 205 × 160 mm', lista: 86748.31, contado: 66796.20, dibujo: 'caja-metalica', foto: 'HCH004.webp' },
    { codigo: 'IKJ001', grupo: 'manuales', nombre: 'Caja de herramientas 119 piezas', detalle: '+ Taladro atornillador inalámbrico 20 V', lista: 362615.99, contado: 279214.31, dibujo: 'kit', foto: '' },
    { codigo: 'FLJ001', grupo: 'manuales', nombre: 'Linterna recargable', detalle: 'Batería de litio 1500 mAh · 4 h de uso', lista: 63068.98, contado: 48563.11, dibujo: 'linterna', foto: 'FLJ001.webp' },

    { codigo: 'HCB002', grupo: 'medicion', nombre: 'Cortadora de cerámicos 60 cm', detalle: '', lista: 85036.79, contado: 65478.33, dibujo: 'medicion', foto: 'HCB002.webp' },
    { codigo: 'NNJ001', grupo: 'medicion', nombre: 'Nivel láser verde', detalle: 'Alcance 30 m · Funciona con pilas AA', lista: 131202.56, contado: 101025.97, dibujo: 'nivel-laser', foto: 'NNJ001.webp' },
    { codigo: 'HCB003', grupo: 'medicion', nombre: 'Cortadora de cerámicos 120 cm', detalle: '', lista: 259786.19, contado: 200035.37, dibujo: 'medicion', foto: 'HCB003.webp' }
  ]
};
