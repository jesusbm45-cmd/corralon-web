/* ==========================================================
   Don Coco — Black Coco (jueves 26 al sábado 28/11/2026): precios por marca
   ÚNICA fuente de los artículos de black-coco.html (la arma black-coco.js).

   Precios: Lista consumidor final de PalJet, consultada el 25/11/2026 (Inventario › Lista de precios - Consulta).
   El 25/11 subieron Jadever y TOTAL (+2,19 %); Lusqtoff con 2 cambios sueltos; Mozart y FV sin cambios.
   Stock: Inventario › Stock › Existencias de artículos (Disponible sumando depósitos), 25/11/2026.
   "lista" = precio de lista (precio final con IVA) · "contado" = contado o transferencia.
   - Jadever, Lusqtoff y Mozart: todos los artículos de la marca con precio, contado con el 23% de Black Coco.
     No entran los que en PalJet ya figuran como LIQUIDACION (para no sumar dos descuentos).
   - TOTAL y FV: solo los artículos en LIQUIDACION, contado o transferencia (lista −17,35 %), hasta agotar stock.
   Van con centavos tal cual el sistema: el sitio los redondea a pesos.

   "contado_normal" = contado o transferencia fuera del evento (lista −17,35 %): es el que muestra precios.html desde el 29/11.
   "destacado" (0 a 11) = los 12 de cada marca que van arriba con foto, en ese orden.
   "vidriera" (0 a 7) = los 8 de las 5 marcas que muestra el inicio, en ese orden (los más atractivos por precio).
   "foto" = assets/img/black-coco/<CÓDIGO>.webp, cuadrada de 800 px. Fotos oficiales de cada marca. Nada de IA.
   En la web van solo los que tienen foto, cuestan $5.000 o más de contado y tienen stock (decisión del 22/11).
   Los que quedan afuera se listan en bc_fuera_web_<marca>.txt (carpeta de trabajo, no se publica).
   Rubros nuevos (desde el 29/11, solo en precios.html): Polacrin, Talento, Megaflex, Tinacos, Peirano y Roca, tipo "contado"
   (lista × 0,8265, sin %), Lista consumidor final de PalJet al 23/11/2026. Los agrega /home/claude/hist/gen_rubros.py,
   que se corre después de gen_bc_datos.py. "desde" = fecha en que aparece la marca.
   ========================================================== */
window.DONCOCO_BLACKCOCO = {
 "promo": {
  "nombre": "Black Coco",
  "fechas": "Jueves 26 al sábado 28 de noviembre"
 },
 "grupos": [
  {
   "id": "inal",
   "nombre": "Inalámbricas"
  },
  {
   "id": "elec",
   "nombre": "Eléctricas"
  },
  {
   "id": "sold",
   "nombre": "Soldadura y protección"
  },
  {
   "id": "jar",
   "nombre": "Jardín"
  },
  {
   "id": "agua",
   "nombre": "Bombas, agua e hidrolavado"
  },
  {
   "id": "man",
   "nombre": "Manuales y medición"
  },
  {
   "id": "coc",
   "nombre": "Grifería de cocina"
  },
  {
   "id": "lav",
   "nombre": "Grifería de lavatorio y bidet"
  },
  {
   "id": "duc",
   "nombre": "Duchas y sets"
  },
  {
   "id": "acb",
   "nombre": "Accesorios de baño"
  },
  {
   "id": "caj",
   "nombre": "Cajas y bolsos"
  },
  {
   "id": "cons",
   "nombre": "Discos, cepillos y consumibles"
  },
  {
   "id": "cand",
   "nombre": "Candados"
  },
  {
   "id": "hog",
   "nombre": "Hogar y camping"
  },
  {
   "id": "bat",
   "nombre": "Baterías y cargadores"
  },
  {
   "id": "pint",
   "nombre": "Pinturas, esmaltes y enduidos"
  },
  {
   "id": "imp",
   "nombre": "Membranas e impermeabilizantes"
  },
  {
   "id": "tan",
   "nombre": "Tanques y cisternas"
  },
  {
   "id": "agro",
   "nombre": "Tanques agroindustriales"
  },
  {
   "id": "sept",
   "nombre": "Cámaras sépticas"
  },
  {
   "id": "san",
   "nombre": "Sanitarios"
  },
  {
   "id": "abe",
   "nombre": "Puertas placa"
  }
 ],
 "marcas": [
  {
   "id": "jadever",
   "nombre": "Jadever",
   "rubro": "Herramientas",
   "tipo": "23",
   "chip": "23% OFF",
   "rotulo": "Contado o transf. · 23% OFF",
   "pres": "Lista consumidor final de PalJet al 25/11/2026",
   "productos": [
    {
     "codigo": "FCJ002",
     "nombre": "Cepillo copa trenzado acerado 75 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 8614.25,
     "contado": 6632.97,
     "contado_normal": 7119.68,
     "foto": "FCJ002.webp"
    },
    {
     "codigo": "FCP009",
     "nombre": "Cepillo copa ondulado bronceado 100 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 10080.5,
     "contado": 7761.99,
     "contado_normal": 8331.54,
     "foto": "FCP009.webp"
    },
    {
     "codigo": "FCP010",
     "nombre": "Cepillo copa ondulado bronceado 75 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 7308.37,
     "contado": 5627.44,
     "contado_normal": 6040.36,
     "foto": "FCP010.webp"
    },
    {
     "codigo": "FCJ001",
     "nombre": "Cepillo copa trenzado acerado 100 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 11798.77,
     "contado": 9085.05,
     "contado_normal": 9751.69,
     "foto": "FCJ001.webp"
    },
    {
     "codigo": "FPJ001",
     "nombre": "Kit de cepillos copa de alambre para taladro 5 piezas",
     "detalle": "",
     "grupo": "cons",
     "lista": 13831.57,
     "contado": 10650.31,
     "contado_normal": 11431.79,
     "foto": "FPJ001.webp"
    },
    {
     "codigo": "FEH002",
     "nombre": "Espátula para panel yeso 200 mm",
     "detalle": "",
     "grupo": "man",
     "lista": 8546.95,
     "contado": 6581.15,
     "contado_normal": 7064.05,
     "foto": "FEH002.webp"
    },
    {
     "codigo": "HCO002",
     "nombre": "Candado aro largo de 50 mm",
     "detalle": "",
     "grupo": "cand",
     "lista": 20297.04,
     "contado": 15628.72,
     "contado_normal": 16775.5,
     "foto": "HCO002.webp"
    },
    {
     "codigo": "HCO001",
     "nombre": "Candado aro largo de 40 mm",
     "detalle": "",
     "grupo": "cand",
     "lista": 13509.88,
     "contado": 10402.61,
     "contado_normal": 11165.92,
     "foto": "HCO001.webp"
    },
    {
     "codigo": "HCO007",
     "nombre": "Candado latón bronceado 50 mm",
     "detalle": "",
     "grupo": "cand",
     "lista": 19051.29,
     "contado": 14669.5,
     "contado_normal": 15745.89,
     "foto": "HCO007.webp"
    },
    {
     "codigo": "HCO008",
     "nombre": "Candado latón bronceado 60 mm",
     "detalle": "",
     "grupo": "cand",
     "lista": 26697.59,
     "contado": 20557.14,
     "contado_normal": 22065.55,
     "foto": "HCO008.webp"
    },
    {
     "codigo": "CNJ001",
     "nombre": "Candado de hierro para exterior funda goma 45 mm",
     "detalle": "",
     "grupo": "cand",
     "lista": 11884.69,
     "contado": 9151.21,
     "contado_normal": 9822.69,
     "foto": "CNJ001.webp"
    },
    {
     "codigo": "CNJ002",
     "nombre": "Candado de hierro para exterior funda goma 70 mm",
     "detalle": "",
     "grupo": "cand",
     "lista": 19953.38,
     "contado": 15364.11,
     "contado_normal": 16491.47,
     "foto": "CNJ002.webp"
    },
    {
     "codigo": "FLJ001",
     "nombre": "Linterna recargable batería Li-ion 1500 mAh 4 h",
     "detalle": "",
     "grupo": "hog",
     "lista": 64452.94,
     "contado": 49628.76,
     "contado_normal": 53270.35,
     "foto": "FLJ001.webp"
    },
    {
     "codigo": "ADH081",
     "nombre": "Pack silicona barra gruesa x 7 unidades",
     "detalle": "",
     "grupo": "cons",
     "lista": 6682.15,
     "contado": 5145.26,
     "contado_normal": 5522.8,
     "foto": "ADH081.webp"
    },
    {
     "codigo": "HXM001",
     "nombre": "Motosierra 16\"",
     "detalle": "1,8 kW · Motor 2T",
     "grupo": "jar",
     "lista": 323132.93,
     "contado": 248812.36,
     "destacado": 8,
     "foto": "HXM001.webp",
     "contado_normal": 267069.37
    },
    {
     "codigo": "HXM002",
     "nombre": "Motosierra Oregon cilindrada 1,8 kW · 18\" motor 2T",
     "detalle": "",
     "grupo": "jar",
     "lista": 430289.69,
     "contado": 331323.06,
     "contado_normal": 355634.43,
     "foto": "HXM002.webp"
    },
    {
     "codigo": "HAJ001",
     "nombre": "Amoladora angular 1800 W 180 mm",
     "detalle": "",
     "grupo": "elec",
     "lista": 296131.61,
     "contado": 228021.34,
     "contado_normal": 244752.78,
     "foto": "HAJ001.webp"
    },
    {
     "codigo": "HEG002",
     "nombre": "Amoladora angular 710 W 115 mm",
     "detalle": "",
     "grupo": "elec",
     "lista": 111070.36,
     "contado": 85524.17,
     "contado_normal": 91799.65,
     "foto": "HEG002.webp"
    },
    {
     "codigo": "HSJ001",
     "nombre": "Aspiradora 1200 W",
     "detalle": "25 litros",
     "grupo": "elec",
     "lista": 294468.14,
     "contado": 226740.47,
     "destacado": 10,
     "foto": "HSJ001.webp",
     "contado_normal": 243377.92
    },
    {
     "codigo": "HSJ002",
     "nombre": "Aspiradora 1600 W 1,8 L",
     "detalle": "",
     "grupo": "elec",
     "lista": 306245.43,
     "contado": 235808.98,
     "contado_normal": 253111.85,
     "foto": "HSJ002.webp"
    },
    {
     "codigo": "IOJ001",
     "nombre": "Bordeadora 350 W",
     "detalle": "250 mm · Eje telescópico",
     "grupo": "jar",
     "lista": 112152.77,
     "contado": 86357.63,
     "destacado": 9,
     "foto": "IOJ001.webp",
     "contado_normal": 92694.26
    },
    {
     "codigo": "HCJ001",
     "nombre": "Lijadora de banda 920 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 234600.82,
     "contado": 180642.64,
     "contado_normal": 193897.58,
     "foto": "HCJ001.webp"
    },
    {
     "codigo": "HPJ001",
     "nombre": "Pistola pintar 550 W · 0,1-0,2 bar · 700 ml/min · 800 ml",
     "detalle": "",
     "grupo": "elec",
     "lista": 117293.47,
     "contado": 90315.97,
     "contado_normal": 96943.05,
     "foto": "HPJ001.webp"
    },
    {
     "codigo": "HPJ002",
     "nombre": "Pistola pintar 450 W · 0,1-0,2 bar · 700 ml/min · 800 ml",
     "detalle": "",
     "grupo": "elec",
     "lista": 93446,
     "contado": 71953.42,
     "contado_normal": 77233.12,
     "foto": "HPJ002.webp"
    },
    {
     "codigo": "HLJ001",
     "nombre": "Lijadora de palma 240 W · 110 x 100 mm",
     "detalle": "",
     "grupo": "elec",
     "lista": 156237.08,
     "contado": 120302.55,
     "contado_normal": 129129.94,
     "foto": "HLJ001.webp"
    },
    {
     "codigo": "HLJ002",
     "nombre": "Lijadora orbital 320 W · 180 x 90 mm",
     "detalle": "",
     "grupo": "elec",
     "lista": 135331.48,
     "contado": 104205.24,
     "contado_normal": 111851.47,
     "foto": "HLJ002.webp"
    },
    {
     "codigo": "HMJ001",
     "nombre": "Mezclador 1200 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 336619.39,
     "contado": 259196.93,
     "destacado": 5,
     "foto": "HMJ001.webp",
     "contado_normal": 278215.93
    },
    {
     "codigo": "HIJ001",
     "nombre": "Pistola de calor 2000 W 50-600°C",
     "detalle": "",
     "grupo": "elec",
     "lista": 152830.37,
     "contado": 117679.39,
     "contado_normal": 126314.3,
     "foto": "HIJ001.webp"
    },
    {
     "codigo": "HIJ002",
     "nombre": "Pistola de calor 1800 W 480-560°C",
     "detalle": "",
     "grupo": "elec",
     "lista": 66712.92,
     "contado": 51368.95,
     "contado_normal": 55138.23,
     "foto": "HIJ002.webp"
    },
    {
     "codigo": "HKJ001",
     "nombre": "Pistola encoladora silicona barra gruesa 45 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 40844.66,
     "contado": 31450.39,
     "contado_normal": 33758.11,
     "foto": "HKJ001.webp"
    },
    {
     "codigo": "HRJ002",
     "nombre": "Rotomartillo SDS Plus 800 W",
     "detalle": "2,5 J · Mandril intercambiable",
     "grupo": "elec",
     "lista": 203075.7,
     "contado": 156368.29,
     "destacado": 3,
     "foto": "HRJ002.webp",
     "contado_normal": 167842.07
    },
    {
     "codigo": "HRJ003",
     "nombre": "Rotomartillo 1050 W 4,5 J SDS Plus",
     "detalle": "",
     "grupo": "elec",
     "lista": 220222.06,
     "contado": 169570.99,
     "contado_normal": 182013.53,
     "foto": "HRJ003.webp"
    },
    {
     "codigo": "HRJ004",
     "nombre": "Rotomartillo SDS Plus 1500 W",
     "detalle": "5,5 J",
     "grupo": "elec",
     "lista": 265874.87,
     "contado": 204723.65,
     "destacado": 2,
     "foto": "HRJ004.webp",
     "contado_normal": 219745.58
    },
    {
     "codigo": "HRJ005",
     "nombre": "Rotomartillo 1600 W 10 J SDS Plus",
     "detalle": "",
     "grupo": "elec",
     "lista": 418770.08,
     "contado": 322452.96,
     "contado_normal": 346113.47,
     "foto": "HRJ005.webp"
    },
    {
     "codigo": "HRJ001",
     "nombre": "Rotomartillo 800 W 2,5 J SDS Plus",
     "detalle": "",
     "grupo": "elec",
     "lista": 175468.26,
     "contado": 135110.56,
     "contado_normal": 145024.52,
     "foto": "HRJ001.webp"
    },
    {
     "codigo": "HNJ001",
     "nombre": "Sierra ingletadora 1200 W 6000 rpm 255 x 25,4 mm",
     "detalle": "",
     "grupo": "elec",
     "lista": 448322.63,
     "contado": 345208.42,
     "contado_normal": 370538.65,
     "foto": "HNJ001.webp"
    },
    {
     "codigo": "HNJ002",
     "nombre": "Sierra ingletadora 1400 W 5000 rpm 210 x 25,4 mm",
     "detalle": "",
     "grupo": "elec",
     "lista": 318294.68,
     "contado": 245086.9,
     "contado_normal": 263070.55,
     "foto": "HNJ002.webp"
    },
    {
     "codigo": "HOJ002",
     "nombre": "Soldadora inverter MMA 20-160 A",
     "detalle": "Electrodos de 1,6 a 4 mm",
     "grupo": "sold",
     "lista": 373262.46,
     "contado": 287412.1,
     "destacado": 4,
     "foto": "HOJ002.webp",
     "contado_normal": 308501.43
    },
    {
     "codigo": "HJE001",
     "nombre": "Soldador eléctrico recto 60 W",
     "detalle": "",
     "grupo": "sold",
     "lista": 18466.22,
     "contado": 14218.99,
     "contado_normal": 15262.33,
     "foto": "HJE001.webp"
    },
    {
     "codigo": "ESJ001",
     "nombre": "Soplador 600 W",
     "detalle": "",
     "grupo": "jar",
     "lista": 74346.32,
     "contado": 57246.67,
     "contado_normal": 61447.24,
     "foto": "ESJ001.webp"
    },
    {
     "codigo": "TAL001",
     "nombre": "Taladro percutor 13 mm 850 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 111708.79,
     "contado": 86015.77,
     "contado_normal": 92327.31,
     "foto": "TAL001.webp"
    },
    {
     "codigo": "IAJ001",
     "nombre": "Amoladora brushless 20 V (850 W) 115 mm con batería 4 Ah, cargador y maletín",
     "detalle": "",
     "grupo": "inal",
     "lista": 259852.2,
     "contado": 200086.2,
     "contado_normal": 214767.84,
     "foto": "IAJ001.webp"
    },
    {
     "codigo": "ITJ001",
     "nombre": "Atornillador durlero brushless 20 V",
     "detalle": "",
     "grupo": "inal",
     "lista": 225468.95,
     "contado": 173611.09,
     "contado_normal": 186350.09,
     "foto": "ITJ001.webp"
    },
    {
     "codigo": "IJT001",
     "nombre": "Batería Li-ion 20 V 4,0 Ah",
     "detalle": "",
     "grupo": "bat",
     "lista": 109933.34,
     "contado": 84648.67,
     "contado_normal": 90859.91,
     "foto": "IJT001.webp"
    },
    {
     "codigo": "IBJ001",
     "nombre": "Bordeadora 20 V · 300 mm con cargador y batería 2 Ah",
     "detalle": "",
     "grupo": "inal",
     "lista": 252639.06,
     "contado": 194532.07,
     "contado_normal": 208806.18,
     "foto": "IBJ001.webp"
    },
    {
     "codigo": "ICT007",
     "nombre": "Cargador de batería P20S 20 V 4,0 Ah",
     "detalle": "",
     "grupo": "bat",
     "lista": 57311.39,
     "contado": 44129.77,
     "contado_normal": 47367.86,
     "foto": "ICT007.webp"
    },
    {
     "codigo": "ICJ001",
     "nombre": "Clavadora 20 V",
     "detalle": "",
     "grupo": "inal",
     "lista": 397761.09,
     "contado": 306276.04,
     "contado_normal": 328749.54,
     "foto": "ICJ001.webp"
    },
    {
     "codigo": "IXJ001",
     "nombre": "Cortacerco inalámbrico 20 V · 480 mm con batería y cargador",
     "detalle": "",
     "grupo": "inal",
     "lista": 230143.74,
     "contado": 177210.68,
     "contado_normal": 190213.8,
     "foto": "IXJ001.webp"
    },
    {
     "codigo": "IKJ001",
     "nombre": "Caja de herramientas 119 piezas + taladro atornillador 20 V",
     "detalle": "",
     "grupo": "inal",
     "lista": 370573.08,
     "contado": 285341.27,
     "contado_normal": 306278.65,
     "foto": "IKJ001.webp"
    },
    {
     "codigo": "ILJ001",
     "nombre": "Lava tapizados 12 V · 90 W",
     "detalle": "",
     "grupo": "inal",
     "lista": 298459.53,
     "contado": 229813.84,
     "contado_normal": 246676.8,
     "foto": "ILJ001.webp"
    },
    {
     "codigo": "IRJ001",
     "nombre": "Lijadora roto orbital brushless 20 V 125 mm",
     "detalle": "",
     "grupo": "inal",
     "lista": 192589.18,
     "contado": 148293.67,
     "contado_normal": 159174.96,
     "foto": "IRJ001.webp"
    },
    {
     "codigo": "IRJ002",
     "nombre": "Lijadora orbital de palma 20 V",
     "detalle": "",
     "grupo": "inal",
     "lista": 126417.97,
     "contado": 97341.84,
     "contado_normal": 104484.45,
     "foto": "IRJ002.webp"
    },
    {
     "codigo": "IRJ003",
     "nombre": "Lijadora orbital 20 V · 110 x 100 mm",
     "detalle": "",
     "grupo": "inal",
     "lista": 120457.73,
     "contado": 92752.45,
     "contado_normal": 99558.31,
     "foto": "IRJ003.webp"
    },
    {
     "codigo": "IMJ001",
     "nombre": "Medidor de distancia láser · 100 m",
     "detalle": "",
     "grupo": "man",
     "lista": 95399.66,
     "contado": 73457.74,
     "contado_normal": 78847.82,
     "foto": "IMJ001.webp"
    },
    {
     "codigo": "NCJ001",
     "nombre": "Compresor de aire para auto 20 V · 150 PSI/10,5 bar",
     "detalle": "",
     "grupo": "inal",
     "lista": 88204.41,
     "contado": 67917.4,
     "contado_normal": 72900.95,
     "foto": "NCJ001.webp"
    },
    {
     "codigo": "NMJ001",
     "nombre": "Multiherramienta 20 V 5000-20000 rpm",
     "detalle": "",
     "grupo": "inal",
     "lista": 140539.98,
     "contado": 108215.79,
     "contado_normal": 116156.3,
     "foto": "NMJ001.webp"
    },
    {
     "codigo": "NNJ001",
     "nombre": "Nivel láser verde 30 m",
     "detalle": "Pilas AA",
     "grupo": "man",
     "lista": 134081.61,
     "contado": 103242.84,
     "destacado": 7,
     "foto": "NNJ001.webp",
     "contado_normal": 110818.45
    },
    {
     "codigo": "NRJ001",
     "nombre": "Rotomartillo brushless 20 V 2 J SDS Plus con batería 3 Ah y cargador",
     "detalle": "",
     "grupo": "inal",
     "lista": 296833.12,
     "contado": 228561.5,
     "contado_normal": 245332.58,
     "foto": "NRJ001.webp"
    },
    {
     "codigo": "NRJ002",
     "nombre": "Rotomartillo inalámbrico SDS Plus",
     "detalle": "20 V · Brushless · 4,5 J",
     "grupo": "inal",
     "lista": 289543.06,
     "contado": 222948.15,
     "destacado": 1,
     "foto": "NRJ002.webp",
     "contado_normal": 239307.34
    },
    {
     "codigo": "SAH001",
     "nombre": "Soplador aspirador 20 V",
     "detalle": "",
     "grupo": "inal",
     "lista": 63750.86,
     "contado": 49088.16,
     "contado_normal": 52690.08,
     "foto": "SAH001.webp"
    },
    {
     "codigo": "NTJ001",
     "nombre": "Taladro percutor inalámbrico 20 V",
     "detalle": "Brushless · 52 Nm · 2 baterías + cargador",
     "grupo": "inal",
     "lista": 260496.55,
     "contado": 200582.34,
     "destacado": 0,
     "foto": "NTJ001.webp",
     "contado_normal": 215300.4,
     "vidriera": 2
    },
    {
     "codigo": "HAS001",
     "nombre": "Arco de sierra para troncos 53 cm",
     "detalle": "",
     "grupo": "jar",
     "lista": 18534.1,
     "contado": 14271.25,
     "contado_normal": 15318.43,
     "foto": "HAS001.webp"
    },
    {
     "codigo": "HAS003",
     "nombre": "Sierra de mano 6",
     "detalle": "",
     "grupo": "man",
     "lista": 9368,
     "contado": 7213.36,
     "contado_normal": 7742.65,
     "foto": "HAS003.webp"
    },
    {
     "codigo": "HAS005",
     "nombre": "Sierra de podar 11",
     "detalle": "",
     "grupo": "jar",
     "lista": 17524.61,
     "contado": 13493.95,
     "contado_normal": 14484.09,
     "foto": "HAS005.webp"
    },
    {
     "codigo": "HZD003",
     "nombre": "Azada de mano jardinería 245 mm",
     "detalle": "",
     "grupo": "jar",
     "lista": 7894.15,
     "contado": 6078.5,
     "contado_normal": 6524.52,
     "foto": "HZD003.webp"
    },
    {
     "codigo": "MOT007",
     "nombre": "Bolsa para herramientas 16\" · 41 x 23 x 33 cm",
     "detalle": "",
     "grupo": "caj",
     "lista": 64273.95,
     "contado": 49490.94,
     "contado_normal": 53122.42,
     "foto": "MOT007.webp"
    },
    {
     "codigo": "MOT008",
     "nombre": "Bolso para herramientas 19\"",
     "detalle": "",
     "grupo": "caj",
     "lista": 47932.51,
     "contado": 36908.03,
     "contado_normal": 39616.22,
     "foto": "MOT008.webp"
    },
    {
     "codigo": "HCH004",
     "nombre": "Caja de herramienta metálica 404 x 205 x 160 mm",
     "detalle": "",
     "grupo": "caj",
     "lista": 88651.88,
     "contado": 68261.95,
     "contado_normal": 73270.78,
     "foto": "HCH004.webp"
    },
    {
     "codigo": "HCH005",
     "nombre": "Caja herramienta plástico reforzado hebilla metálica 15,5\"",
     "detalle": "",
     "grupo": "caj",
     "lista": 61105.9,
     "contado": 47051.54,
     "contado_normal": 50504.02,
     "foto": "HCH005.webp"
    },
    {
     "codigo": "HCH006",
     "nombre": "Caja de herramientas 18,5\"",
     "detalle": "Plástico reforzado · Hebilla metálica",
     "grupo": "caj",
     "lista": 87506.37,
     "contado": 67379.9,
     "destacado": 11,
     "foto": "HCH006.webp",
     "contado_normal": 72324.01
    },
    {
     "codigo": "HCH007",
     "nombre": "Caja herramienta plástico hebilla metálica 16\"",
     "detalle": "",
     "grupo": "caj",
     "lista": 44818.15,
     "contado": 34509.98,
     "contado_normal": 37042.2,
     "foto": "HCH007.webp"
    },
    {
     "codigo": "HRO001",
     "nombre": "Cortavidrios de alta resistencia",
     "detalle": "",
     "grupo": "man",
     "lista": 9610.27,
     "contado": 7399.91,
     "contado_normal": 7942.89,
     "foto": "HRO001.webp"
    },
    {
     "codigo": "HCB002",
     "nombre": "Cortadora de cerámicos 60 cm",
     "detalle": "",
     "grupo": "man",
     "lista": 86902.8,
     "contado": 66915.16,
     "contado_normal": 71825.16,
     "foto": "HCB002.webp"
    },
    {
     "codigo": "HRH003",
     "nombre": "Cortafierro 19 x 305 mm con recubrimiento",
     "detalle": "",
     "grupo": "man",
     "lista": 13100.84,
     "contado": 10087.64,
     "contado_normal": 10827.84,
     "foto": "HRH003.webp"
    },
    {
     "codigo": "HTM003",
     "nombre": "Cortaperno 12",
     "detalle": "",
     "grupo": "man",
     "lista": 22450.89,
     "contado": 17287.18,
     "contado_normal": 18555.66,
     "foto": "HTM003.webp"
    },
    {
     "codigo": "MDJ001",
     "nombre": "Kit de destornilladores · 4 piezas estándar",
     "detalle": "",
     "grupo": "man",
     "lista": 13338.05,
     "contado": 10270.3,
     "contado_normal": 11023.9,
     "foto": "MDJ001.webp"
    },
    {
     "codigo": "MDJ002",
     "nombre": "Kit de destornilladores · 6 piezas estándar",
     "detalle": "",
     "grupo": "man",
     "lista": 19910.43,
     "contado": 15331.03,
     "contado_normal": 16455.97,
     "foto": "MDJ002.webp"
    },
    {
     "codigo": "MDJ003",
     "nombre": "Kit de destornilladores · 4 piezas acero Cr-V",
     "detalle": "",
     "grupo": "man",
     "lista": 10220.11,
     "contado": 7869.49,
     "contado_normal": 8446.92,
     "foto": "MDJ003.webp"
    },
    {
     "codigo": "MDJ004",
     "nombre": "Kit de destornilladores · 6 piezas acero Cr-V",
     "detalle": "",
     "grupo": "man",
     "lista": 13960.93,
     "contado": 10749.91,
     "contado_normal": 11538.71,
     "foto": "MDJ004.webp"
    },
    {
     "codigo": "MDJ005",
     "nombre": "Destornillador de 12 piezas",
     "detalle": "",
     "grupo": "man",
     "lista": 6962.56,
     "contado": 5361.17,
     "contado_normal": 5754.56,
     "foto": "MDJ005.webp"
    },
    {
     "codigo": "FDA005",
     "nombre": "Disco diamantado turbo 115 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 6548.51,
     "contado": 5042.35,
     "contado_normal": 5412.34,
     "foto": "FDA005.webp"
    },
    {
     "codigo": "FDA006",
     "nombre": "Disco diamantado turbo 180 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 17545.42,
     "contado": 13509.98,
     "contado_normal": 14501.29,
     "foto": "FDA006.webp"
    },
    {
     "codigo": "FSP001",
     "nombre": "Disco corte sensitiva 355 x 3 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 17136.86,
     "contado": 13195.38,
     "contado_normal": 14163.61,
     "foto": "FSP001.webp"
    },
    {
     "codigo": "JPZ001",
     "nombre": "Pulverizador jardín 1.5 l",
     "detalle": "",
     "grupo": "jar",
     "lista": 15103.19,
     "contado": 11629.46,
     "contado_normal": 12482.79,
     "foto": "JPZ001.webp"
    },
    {
     "codigo": "SCL001",
     "nombre": "Capa para lluvia 125x200 cm 100% PVC",
     "detalle": "",
     "grupo": "sold",
     "lista": 23038.53,
     "contado": 17739.67,
     "contado_normal": 19041.35,
     "foto": "SCL001.webp"
    },
    {
     "codigo": "FST001",
     "nombre": "Sierra copa bimetálica 1 1/2 (38 mm)",
     "detalle": "",
     "grupo": "man",
     "lista": 15578.96,
     "contado": 11995.8,
     "contado_normal": 12876.01,
     "foto": "FST001.webp"
    },
    {
     "codigo": "FST003",
     "nombre": "Sierra copa bimetálica 2 (50 mm)",
     "detalle": "",
     "grupo": "man",
     "lista": 20197.66,
     "contado": 15552.2,
     "contado_normal": 16693.37,
     "foto": "FST003.webp"
    },
    {
     "codigo": "HTM001",
     "nombre": "Cortaperno 14",
     "detalle": "",
     "grupo": "man",
     "lista": 26839.55,
     "contado": 20666.45,
     "contado_normal": 22182.89,
     "foto": "HTM001.webp"
    },
    {
     "codigo": "HSH001",
     "nombre": "Serrucho carpintero 20",
     "detalle": "",
     "grupo": "man",
     "lista": 13143.96,
     "contado": 10120.85,
     "contado_normal": 10863.48,
     "foto": "HSH001.webp"
    },
    {
     "codigo": "HSH002",
     "nombre": "Serrucho carpintero 18",
     "detalle": "",
     "grupo": "man",
     "lista": 16385.02,
     "contado": 12616.47,
     "contado_normal": 13542.22,
     "foto": "HSH002.webp"
    },
    {
     "codigo": "HLM001",
     "nombre": "Set 3 limas para madera 200 mm",
     "detalle": "",
     "grupo": "man",
     "lista": 24429.47,
     "contado": 18810.69,
     "contado_normal": 20190.96,
     "foto": "HLM001.webp"
    },
    {
     "codigo": "HPT003",
     "nombre": "Pistola para cartucho silicona estándar",
     "detalle": "",
     "grupo": "man",
     "lista": 8387.32,
     "contado": 6458.24,
     "contado_normal": 6932.12,
     "foto": "HPT003.webp"
    },
    {
     "codigo": "HLV001",
     "nombre": "Llave ajustable 8",
     "detalle": "",
     "grupo": "man",
     "lista": 11669.62,
     "contado": 8985.6,
     "contado_normal": 9644.94,
     "foto": "HLV001.webp"
    },
    {
     "codigo": "HLV002",
     "nombre": "Llave ajustable 10",
     "detalle": "",
     "grupo": "man",
     "lista": 16636.27,
     "contado": 12809.93,
     "contado_normal": 13749.88,
     "foto": "HLV002.webp"
    },
    {
     "codigo": "HPS002",
     "nombre": "Punta hexagonal 19 x 300 con recubrimiento",
     "detalle": "",
     "grupo": "man",
     "lista": 19282.78,
     "contado": 14847.74,
     "contado_normal": 15937.22,
     "foto": "HPS002.webp"
    },
    {
     "codigo": "MOT001",
     "nombre": "Mochila para herramientas 34x17x45 cm industrial",
     "detalle": "",
     "grupo": "caj",
     "lista": 66976.65,
     "contado": 51572.02,
     "contado_normal": 55356.2,
     "foto": "MOT001.webp"
    },
    {
     "codigo": "MOT002",
     "nombre": "Cartuchera porta herramientas 3 bolsillos",
     "detalle": "",
     "grupo": "caj",
     "lista": 12839.28,
     "contado": 9886.24,
     "contado_normal": 10611.66,
     "foto": "MOT002.webp"
    },
    {
     "codigo": "MOT003",
     "nombre": "Cartuchera porta taladro",
     "detalle": "",
     "grupo": "caj",
     "lista": 27041.24,
     "contado": 20821.75,
     "contado_normal": 22349.58,
     "foto": "MOT003.webp"
    },
    {
     "codigo": "MOT004",
     "nombre": "Delantal porta herramientas 52x55 cm",
     "detalle": "",
     "grupo": "caj",
     "lista": 18707.64,
     "contado": 14404.88,
     "contado_normal": 15461.86,
     "foto": "MOT004.webp"
    },
    {
     "codigo": "HOJ001",
     "nombre": "Soldadora inverter MMA 10-160 A",
     "detalle": "Electrodos de 1,6 a 3,2 mm · Antiadherente",
     "grupo": "sold",
     "lista": 293862.87,
     "contado": 226274.41,
     "contado_normal": 242877.66,
     "foto": "HOJ001.webp"
    },
    {
     "codigo": "HOJ003",
     "nombre": "Soldadora inverter MMA 20-200 A",
     "detalle": "Electrodos de 1,6 a 4 mm · Antiadherente",
     "grupo": "sold",
     "lista": 449347.99,
     "contado": 345997.95,
     "contado_normal": 371386.11,
     "foto": "HOJ003.webp"
    },
    {
     "codigo": "ITJ002",
     "nombre": "Atornillador de impacto brushless 20 V",
     "detalle": "210 Nm · Con 2 baterías de 2 Ah, cargador y maletín",
     "grupo": "inal",
     "lista": 265150.19,
     "contado": 204165.65,
     "contado_normal": 219146.64,
     "foto": "ITJ002.webp"
    },
    {
     "codigo": "MTJ001",
     "nombre": "Llave Stillson",
     "detalle": "Para tubo de 8 a 27 mm",
     "grupo": "man",
     "lista": 11204.54,
     "contado": 8627.49,
     "contado_normal": 9260.55,
     "foto": "MTJ001.webp"
    },
    {
     "codigo": "MTJ002",
     "nombre": "Llave Stillson",
     "detalle": "Para tubo de 18 a 60 mm",
     "grupo": "man",
     "lista": 31841.65,
     "contado": 24518.07,
     "contado_normal": 26317.12,
     "foto": "MTJ002.webp"
    },
    {
     "codigo": "MPJ001",
     "nombre": "Kit pinzas y alicates 4 piezas de 6",
     "detalle": "",
     "grupo": "man",
     "lista": 30776.08,
     "contado": 23697.59,
     "contado_normal": 25436.43,
     "foto": "MPJ001.webp"
    },
    {
     "codigo": "MPJ002",
     "nombre": "Kit de pinzas mango ranurado 3 piezas 6",
     "detalle": "",
     "grupo": "man",
     "lista": 27683.2,
     "contado": 21316.07,
     "contado_normal": 22880.17,
     "foto": "MPJ002.webp"
    },
    {
     "codigo": "MPJ003",
     "nombre": "Pinza de fuerza curva CR-V 10",
     "detalle": "",
     "grupo": "man",
     "lista": 21841.09,
     "contado": 16817.64,
     "contado_normal": 18051.66,
     "foto": "MPJ003.webp"
    },
    {
     "codigo": "GCC001",
     "nombre": "Engrapadora metálica 4-14 mm",
     "detalle": "",
     "grupo": "man",
     "lista": 20254.08,
     "contado": 15595.64,
     "contado_normal": 16740,
     "foto": "GCC001.webp"
    },
    {
     "codigo": "HMG001",
     "nombre": "Maza 3 kg cabo fibra",
     "detalle": "",
     "grupo": "man",
     "lista": 61302.78,
     "contado": 47203.14,
     "contado_normal": 50666.75,
     "foto": "HMG001.webp"
    },
    {
     "codigo": "HLD007",
     "nombre": "Llana de yeso 230x100 mm",
     "detalle": "",
     "grupo": "man",
     "lista": 8198.33,
     "contado": 6312.72,
     "contado_normal": 6775.92,
     "foto": "HLD007.webp"
    },
    {
     "codigo": "HSH004",
     "nombre": "Serrucho costilla 12",
     "detalle": "",
     "grupo": "man",
     "lista": 12975.21,
     "contado": 9990.91,
     "contado_normal": 10724.01,
     "foto": "HSH004.webp"
    },
    {
     "codigo": "FST002",
     "nombre": "Sierra copa bimetálica 1 (25 mm)",
     "detalle": "",
     "grupo": "man",
     "lista": 10923.6,
     "contado": 8411.17,
     "contado_normal": 9028.36,
     "foto": "FST002.webp"
    },
    {
     "codigo": "HMG002",
     "nombre": "Maza 5 kg cabo fibra",
     "detalle": "",
     "grupo": "man",
     "lista": 70395.28,
     "contado": 54204.37,
     "contado_normal": 58181.7,
     "foto": "HMG002.webp"
    },
    {
     "codigo": "HTW002",
     "nombre": "Tijera corta cerco extensible 550-750 mm",
     "detalle": "",
     "grupo": "jar",
     "lista": 50039.78,
     "contado": 38530.63,
     "contado_normal": 41357.87,
     "foto": "HTW002.webp"
    },
    {
     "codigo": "HPL009",
     "nombre": "Pala pocera cabo metal corto",
     "detalle": "",
     "grupo": "jar",
     "lista": 23733.57,
     "contado": 18274.85,
     "contado_normal": 19615.8,
     "foto": "HPL009.webp"
    },
    {
     "codigo": "HPL010",
     "nombre": "Pala cuadrada cabo metal corto",
     "detalle": "",
     "grupo": "jar",
     "lista": 24664.3,
     "contado": 18991.51,
     "contado_normal": 20385.05,
     "foto": "HPL010.webp"
    },
    {
     "codigo": "HPL011",
     "nombre": "Pala corazón cabo metal corto",
     "detalle": "",
     "grupo": "jar",
     "lista": 25469.74,
     "contado": 19611.7,
     "contado_normal": 21050.74,
     "foto": "HPL011.webp"
    },
    {
     "codigo": "ERJ001",
     "nombre": "Escalera extensible de aluminio",
     "detalle": "3 tramos · Altura máxima 5,08 m",
     "grupo": "hog",
     "lista": 592381.04,
     "contado": 456133.4,
     "contado_normal": 489602.93,
     "foto": "ERJ001.webp"
    },
    {
     "codigo": "ERJ002",
     "nombre": "Escalera multipropósito andamio",
     "detalle": "Altura máxima 3,37 m",
     "grupo": "hog",
     "lista": 398459.49,
     "contado": 306813.81,
     "contado_normal": 329326.77,
     "foto": "ERJ002.webp"
    },
    {
     "codigo": "ERJ003",
     "nombre": "Escalera multipropósito andamio",
     "detalle": "Altura máxima 4,45 m",
     "grupo": "hog",
     "lista": 493418.13,
     "contado": 379931.96,
     "contado_normal": 407810.08,
     "foto": "ERJ003.webp"
    },
    {
     "codigo": "HTW003",
     "nombre": "Tijera corta cerco metálica 550 mm",
     "detalle": "",
     "grupo": "jar",
     "lista": 30657.23,
     "contado": 23606.07,
     "contado_normal": 25338.2,
     "foto": "HTW003.webp"
    },
    {
     "codigo": "MTJ003",
     "nombre": "Llave Stillson",
     "detalle": "Para tubo de 10 a 33 mm",
     "grupo": "man",
     "lista": 13298.68,
     "contado": 10239.98,
     "contado_normal": 10991.36,
     "foto": "MTJ003.webp"
    },
    {
     "codigo": "MTJ004",
     "nombre": "Llave Stillson",
     "detalle": "Para tubo de 12 a 42 mm",
     "grupo": "man",
     "lista": 19330.51,
     "contado": 14884.49,
     "contado_normal": 15976.67,
     "foto": "MTJ004.webp"
    },
    {
     "codigo": "MTJ005",
     "nombre": "Llave Stillson",
     "detalle": "Para tubo de 14 a 48 mm",
     "grupo": "man",
     "lista": 24073.65,
     "contado": 18536.71,
     "contado_normal": 19896.87,
     "foto": "MTJ005.webp"
    },
    {
     "codigo": "HRE004",
     "nombre": "Rastrillo 14 dientes con cabo 1.25 m",
     "detalle": "",
     "grupo": "jar",
     "lista": 29819.11,
     "contado": 22960.71,
     "contado_normal": 24645.49,
     "foto": "HRE004.webp"
    },
    {
     "codigo": "HRE005",
     "nombre": "Rastrillo 14 dientes con rienda con cabo 1.38 m",
     "detalle": "",
     "grupo": "jar",
     "lista": 25953,
     "contado": 19983.81,
     "contado_normal": 21450.16,
     "foto": "HRE005.webp"
    },
    {
     "codigo": "HRE006",
     "nombre": "Rastrillo de mano jardinería 240 mm",
     "detalle": "",
     "grupo": "jar",
     "lista": 8183.25,
     "contado": 6301.1,
     "contado_normal": 6763.46,
     "foto": "HRE006.webp"
    },
    {
     "codigo": "HRE007",
     "nombre": "Rastrillo de mano jardinería 380 mm",
     "detalle": "",
     "grupo": "jar",
     "lista": 8075.86,
     "contado": 6218.41,
     "contado_normal": 6674.7,
     "foto": "HRE007.webp"
    },
    {
     "codigo": "HLD008",
     "nombre": "Llana de goma fina 280x140 mm",
     "detalle": "",
     "grupo": "man",
     "lista": 9739.08,
     "contado": 7499.1,
     "contado_normal": 8049.35,
     "foto": "HLD008.webp"
    },
    {
     "codigo": "PHA011",
     "nombre": "Prensa de esquina 90° de aluminio",
     "detalle": "Sujeción máx. 75 mm",
     "grupo": "man",
     "lista": 10195.6,
     "contado": 7850.62,
     "contado_normal": 8426.67,
     "foto": "PHA011.webp"
    },
    {
     "codigo": "FST004",
     "nombre": "Sierra copa bimetálica 3/4 (19 mm)",
     "detalle": "",
     "grupo": "man",
     "lista": 8650.91,
     "contado": 6661.2,
     "contado_normal": 7149.97,
     "foto": "FST004.webp"
    },
    {
     "codigo": "ECJ001",
     "nombre": "Escuadra acero inoxidable 300 mm mango aluminio",
     "detalle": "",
     "grupo": "man",
     "lista": 14399.39,
     "contado": 11087.53,
     "contado_normal": 11901.1,
     "foto": "ECJ001.webp"
    },
    {
     "codigo": "SEÑ005",
     "nombre": "Cinta de advertencia antideslizante",
     "detalle": "5 m",
     "grupo": "hog",
     "lista": 9020.91,
     "contado": 6946.1,
     "contado_normal": 7455.78,
     "foto": "SEÑ005.webp"
    },
    {
     "codigo": "HPT007",
     "nombre": "Pistola aplicadora de silicona industrial",
     "detalle": "Manga de aluminio",
     "grupo": "man",
     "lista": 23948.26,
     "contado": 18440.16,
     "contado_normal": 19793.23,
     "foto": "HPT007.webp"
    },
    {
     "codigo": "HOJ004",
     "nombre": "Soldadora inverter MMA 10-130 A",
     "detalle": "Electrodos de 1,6 a 3,2 mm · Antiadherente",
     "grupo": "sold",
     "lista": 255720.38,
     "contado": 196904.7,
     "contado_normal": 211352.9,
     "foto": "HOJ004.webp"
    },
    {
     "codigo": "HSH006",
     "nombre": "Caja de ingletes plástico 30x14x8 cm",
     "detalle": "",
     "grupo": "man",
     "lista": 13067.87,
     "contado": 10062.26,
     "contado_normal": 10800.6,
     "foto": "HSH006.webp"
    },
    {
     "codigo": "HMH005",
     "nombre": "Machete de acero al carbono 20\"",
     "detalle": "",
     "grupo": "man",
     "lista": 11956.76,
     "contado": 9206.7,
     "contado_normal": 9882.26,
     "foto": "HMH005.webp"
    },
    {
     "codigo": "HMH006",
     "nombre": "Machete de acero al carbono 22\"",
     "detalle": "",
     "grupo": "man",
     "lista": 12495.15,
     "contado": 9621.26,
     "contado_normal": 10327.24,
     "foto": "HMH006.webp"
    },
    {
     "codigo": "HTK002",
     "nombre": "Tijera corta caño PVC 3-35 mm",
     "detalle": "",
     "grupo": "man",
     "lista": 12699.29,
     "contado": 9778.45,
     "contado_normal": 10495.96,
     "foto": "HTK002.webp"
    },
    {
     "codigo": "HMG003",
     "nombre": "Maza 1 kg cabo fibra",
     "detalle": "",
     "grupo": "man",
     "lista": 18013.5,
     "contado": 13870.4,
     "contado_normal": 14888.16,
     "foto": "HMG003.webp"
    },
    {
     "codigo": "HMG004",
     "nombre": "Maza 2 kg cabo fibra",
     "detalle": "",
     "grupo": "man",
     "lista": 28608.56,
     "contado": 22028.59,
     "contado_normal": 23644.98,
     "foto": "HMG004.webp"
    },
    {
     "codigo": "JRJ001",
     "nombre": "Regadora plástica 5 l",
     "detalle": "",
     "grupo": "jar",
     "lista": 35646.57,
     "contado": 27447.86,
     "contado_normal": 29461.89,
     "foto": "JRJ001.webp"
    },
    {
     "codigo": "JRJ002",
     "nombre": "Regadora plástica 9 l",
     "detalle": "",
     "grupo": "jar",
     "lista": 49836.72,
     "contado": 38374.28,
     "contado_normal": 41190.05,
     "foto": "JRJ002.webp"
    }
   ]
  },
  {
   "id": "lusqtoff",
   "nombre": "Lusqtoff",
   "rubro": "Herramientas",
   "tipo": "23",
   "chip": "23% OFF",
   "rotulo": "Contado o transf. · 23% OFF",
   "pres": "Lista consumidor final de PalJet al 25/11/2026",
   "productos": [
    {
     "codigo": "CCE001",
     "nombre": "Calefactor exterior tipo hongo negro gas JK-1008N",
     "detalle": "",
     "grupo": "hog",
     "lista": 489391.72,
     "contado": 376831.63,
     "contado_normal": 404482.26,
     "foto": "CCE001.webp"
    },
    {
     "codigo": "CAS002",
     "nombre": "Anafe eléctrico 1 hornalla",
     "detalle": "",
     "grupo": "hog",
     "lista": 59408.6,
     "contado": 45744.62,
     "contado_normal": 49101.21,
     "foto": "CAS002.webp"
    },
    {
     "codigo": "CAS005",
     "nombre": "Anafe portátil a gas butano 2493 kcal",
     "detalle": "",
     "grupo": "hog",
     "lista": 50672.04,
     "contado": 39017.47,
     "contado_normal": 41880.44,
     "foto": "CAS005.webp"
    },
    {
     "codigo": "FCC010",
     "nombre": "Lanza universal para hidrolavadora",
     "detalle": "",
     "grupo": "agua",
     "lista": 41935.48,
     "contado": 32290.32,
     "contado_normal": 34659.68,
     "foto": "FCC010.webp"
    },
    {
     "codigo": "FLL001",
     "nombre": "Linterna LED recargable anti impacto multiposición",
     "detalle": "",
     "grupo": "hog",
     "lista": 48135.31,
     "contado": 37064.19,
     "contado_normal": 39783.84,
     "foto": "FLL001.webp"
    },
    {
     "codigo": "HBU002",
     "nombre": "Bordeadora profesional 1200 W",
     "detalle": "",
     "grupo": "jar",
     "lista": 319735.93,
     "contado": 246196.66,
     "destacado": 8,
     "foto": "HBU002.webp",
     "contado_normal": 264261.74
    },
    {
     "codigo": "CPR001",
     "nombre": "Calibre analógico",
     "detalle": "",
     "grupo": "man",
     "lista": 41935.48,
     "contado": 32290.32,
     "contado_normal": 34659.68,
     "foto": "CPR001.webp"
    },
    {
     "codigo": "MZH001",
     "nombre": "Mezclador de pintura 100 x 600 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 12580.65,
     "contado": 9687.1,
     "contado_normal": 10397.9,
     "foto": "MZH001.webp"
    },
    {
     "codigo": "HML001",
     "nombre": "Morsa de banco base giratoria 4\"",
     "detalle": "",
     "grupo": "man",
     "lista": 107634.41,
     "contado": 82878.5,
     "contado_normal": 88959.84,
     "foto": "HML001.webp"
    },
    {
     "codigo": "HML002",
     "nombre": "Morsa de banco base giratoria 5\"",
     "detalle": "",
     "grupo": "man",
     "lista": 179390.68,
     "contado": 138130.83,
     "contado_normal": 148266.4,
     "foto": "HML002.webp"
    },
    {
     "codigo": "HPQ001",
     "nombre": "Pistola de pintar por succión estándar",
     "detalle": "",
     "grupo": "elec",
     "lista": 46168.5,
     "contado": 35549.75,
     "contado_normal": 38158.27,
     "foto": "HPQ001.webp"
    },
    {
     "codigo": "HPQ003",
     "nombre": "Pistola de pintar látex o texturado profesional",
     "detalle": "",
     "grupo": "elec",
     "lista": 71486.72,
     "contado": 55044.77,
     "contado_normal": 59083.77,
     "foto": "HPQ003.webp"
    },
    {
     "codigo": "MOT009",
     "nombre": "Cartuchera porta herramientas con cinto 8 bolsillos",
     "detalle": "",
     "grupo": "caj",
     "lista": 35743.36,
     "contado": 27522.39,
     "contado_normal": 29541.89,
     "foto": "MOT009.webp"
    },
    {
     "codigo": "MOT010",
     "nombre": "Cartuchera porta herramientas con cinto 4 bolsillos",
     "detalle": "",
     "grupo": "caj",
     "lista": 32616.49,
     "contado": 25114.7,
     "contado_normal": 26957.53,
     "foto": "MOT010.webp"
    },
    {
     "codigo": "MOT011",
     "nombre": "Cartuchera porta taladro con cinto 6 compartimientos",
     "detalle": "",
     "grupo": "caj",
     "lista": 39139.79,
     "contado": 30137.63,
     "contado_normal": 32349.03,
     "foto": "MOT011.webp"
    },
    {
     "codigo": "HRS003",
     "nombre": "Remachadora manual profesional",
     "detalle": "",
     "grupo": "man",
     "lista": 31451.61,
     "contado": 24217.74,
     "contado_normal": 25994.76,
     "foto": "HRS003.webp"
    },
    {
     "codigo": "HTZ001",
     "nombre": "Tenaza armador 12",
     "detalle": "",
     "grupo": "man",
     "lista": 18521.51,
     "contado": 14261.56,
     "contado_normal": 15308.02,
     "foto": "HTZ001.webp"
    },
    {
     "codigo": "HTZ002",
     "nombre": "Tenaza armador 9",
     "detalle": "",
     "grupo": "man",
     "lista": 16774.19,
     "contado": 12916.13,
     "contado_normal": 13863.87,
     "foto": "HTZ002.webp"
    },
    {
     "codigo": "CAM004",
     "nombre": "Canasta térmica 38 L",
     "detalle": "",
     "grupo": "hog",
     "lista": 55913.98,
     "contado": 43053.76,
     "contado_normal": 46212.9,
     "foto": "CAM004.webp"
    },
    {
     "codigo": "CAM005",
     "nombre": "Farol LED recargable con energía solar 360°",
     "detalle": "",
     "grupo": "hog",
     "lista": 27956.99,
     "contado": 21526.88,
     "contado_normal": 23106.45,
     "foto": "CAM005.webp"
    },
    {
     "codigo": "SRI001",
     "nombre": "Regulador automático de presión",
     "detalle": "",
     "grupo": "agua",
     "lista": 59572.26,
     "contado": 45870.64,
     "contado_normal": 49236.48,
     "foto": "SRI001.webp"
    },
    {
     "codigo": "BCQ001",
     "nombre": "Bomba centrífuga 3/4 HP",
     "detalle": "",
     "grupo": "agua",
     "lista": 167741.94,
     "contado": 129161.29,
     "contado_normal": 138638.71,
     "foto": "BCQ001.webp"
    },
    {
     "codigo": "BCQ002",
     "nombre": "Electrobomba centrífuga 750 W",
     "detalle": "",
     "grupo": "agua",
     "lista": 241129.03,
     "contado": 185669.36,
     "destacado": 10,
     "foto": "BCQ002.webp",
     "contado_normal": 199293.15
    },
    {
     "codigo": "SBQ001",
     "nombre": "Bomba periférica 220 V 1/2 HP",
     "detalle": "",
     "grupo": "agua",
     "lista": 76881.72,
     "contado": 59198.93,
     "contado_normal": 63542.74,
     "foto": "SBQ001.webp"
    },
    {
     "codigo": "SBQ002",
     "nombre": "Electrobomba periférica con regulador 220 V",
     "detalle": "",
     "grupo": "agua",
     "lista": 125806.45,
     "contado": 96870.97,
     "contado_normal": 103979.03,
     "foto": "SBQ002.webp"
    },
    {
     "codigo": "SBZ002",
     "nombre": "Bomba presurizadora 260 W",
     "detalle": "Hasta 13 m",
     "grupo": "agua",
     "lista": 174731.18,
     "contado": 134543.01,
     "destacado": 11,
     "foto": "SBZ002.webp",
     "contado_normal": 144415.32
    },
    {
     "codigo": "SPR005",
     "nombre": "Protector facial",
     "detalle": "",
     "grupo": "sold",
     "lista": 23828.91,
     "contado": 18348.26,
     "contado_normal": 19694.59,
     "foto": "SPR005.webp"
    },
    {
     "codigo": "FDA008",
     "nombre": "Disco diamantado corte madera 115 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 8828.52,
     "contado": 6797.96,
     "contado_normal": 7296.77,
     "foto": "FDA008.webp"
    },
    {
     "codigo": "FDA004",
     "nombre": "Disco diamantado segmentado 180 mm",
     "detalle": "",
     "grupo": "cons",
     "lista": 16040.43,
     "contado": 12351.13,
     "contado_normal": 13257.42,
     "foto": "FDA004.webp"
    },
    {
     "codigo": "FDH001",
     "nombre": "Disco diamantado porcellanato turbo fino 4,5",
     "detalle": "",
     "grupo": "cons",
     "lista": 10397.23,
     "contado": 8005.87,
     "contado_normal": 8593.31,
     "foto": "FDH001.webp"
    },
    {
     "codigo": "ABQ001",
     "nombre": "Amoladora de banco 375 W",
     "detalle": "6\"",
     "grupo": "elec",
     "lista": 119179.69,
     "contado": 91768.36,
     "destacado": 5,
     "foto": "ABQ001.webp",
     "contado_normal": 98502.02
    },
    {
     "codigo": "ABQ002",
     "nombre": "Amoladora de banco 550 W 8\"",
     "detalle": "",
     "grupo": "elec",
     "lista": 163872.08,
     "contado": 126181.5,
     "contado_normal": 135440.27,
     "foto": "ABQ002.webp"
    },
    {
     "codigo": "ALQ001",
     "nombre": "Atornillador con tope 710 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 156605.35,
     "contado": 120586.12,
     "contado_normal": 129434.32,
     "foto": "ALQ001.webp"
    },
    {
     "codigo": "HCQ001",
     "nombre": "Cepillo de carpintero 620 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 130504.46,
     "contado": 100488.43,
     "destacado": 3,
     "foto": "HCQ001.webp",
     "contado_normal": 107861.94
    },
    {
     "codigo": "HCQ002",
     "nombre": "Cepillo de carpintero 1050 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 326261.15,
     "contado": 251221.08,
     "contado_normal": 269654.84,
     "foto": "HCQ002.webp"
    },
    {
     "codigo": "CSL001",
     "nombre": "Cortadora de césped eléctrica 16 1600 W",
     "detalle": "",
     "grupo": "jar",
     "lista": 358887.26,
     "contado": 276343.19,
     "contado_normal": 296620.32,
     "foto": "CSL001.webp",
     "destacado": 9
    },
    {
     "codigo": "HHL001",
     "nombre": "Hidrolavadora máx. 105 bar 1200 W",
     "detalle": "",
     "grupo": "agua",
     "lista": 166851.57,
     "contado": 128475.71,
     "contado_normal": 137902.82,
     "foto": "HHL001.webp"
    },
    {
     "codigo": "XXC003",
     "nombre": "Hidrolavadora 1200 W + manguera de regalo",
     "detalle": "Manguera 1/2\" de 15 m con acople",
     "grupo": "agua",
     "lista": 163974.61,
     "contado": 126260.45,
     "destacado": 7,
     "foto": "XXC003.webp",
     "contado_normal": 135525.01
    },
    {
     "codigo": "HBF001",
     "nombre": "Lijadora de banda 810 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 195756.69,
     "contado": 150732.65,
     "contado_normal": 161792.9,
     "foto": "HBF001.webp"
    },
    {
     "codigo": "HEJ001",
     "nombre": "Lijadora roto orbital 300 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 110928.79,
     "contado": 85415.17,
     "contado_normal": 91682.65,
     "foto": "HEJ001.webp"
    },
    {
     "codigo": "HLQ001",
     "nombre": "Lustra pulidora 1300 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 261008.92,
     "contado": 200976.87,
     "contado_normal": 215723.87,
     "foto": "HLQ001.webp"
    },
    {
     "codigo": "SCQ001",
     "nombre": "Sierra caladora 450 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 104403.57,
     "contado": 80390.75,
     "contado_normal": 86289.55,
     "foto": "SCQ001.webp"
    },
    {
     "codigo": "SCQ002",
     "nombre": "Sierra caladora 710 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 169655.8,
     "contado": 130634.96,
     "destacado": 2,
     "foto": "SCQ002.webp",
     "contado_normal": 140220.52
    },
    {
     "codigo": "SIL002",
     "nombre": "Soldadora inverter Iron-140",
     "detalle": "120 A · Con máscara y 2 escuadras",
     "grupo": "sold",
     "lista": 312846.69,
     "contado": 240891.95,
     "destacado": 4,
     "foto": "SIL002.webp",
     "contado_normal": 258567.79
    },
    {
     "codigo": "SIL003",
     "nombre": "Soldador inverter Iron-180 (160 A)",
     "detalle": "",
     "grupo": "sold",
     "lista": 327744.15,
     "contado": 252363,
     "contado_normal": 270880.54,
     "foto": "SIL003.webp"
    },
    {
     "codigo": "TAQ001",
     "nombre": "Taladro atornillador 10 mm con torque 300 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 81565.29,
     "contado": 62805.27,
     "contado_normal": 67413.71,
     "foto": "TAQ001.webp"
    },
    {
     "codigo": "TAQ002",
     "nombre": "Taladro percutor atornillador 450 W",
     "detalle": "13 mm",
     "grupo": "elec",
     "lista": 146817.52,
     "contado": 113049.49,
     "destacado": 1,
     "foto": "TAQ002.webp",
     "contado_normal": 121344.68
    },
    {
     "codigo": "TAQ003",
     "nombre": "Taladro percutor 13 mm · 600 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 84827.9,
     "contado": 65317.48,
     "contado_normal": 70110.26,
     "foto": "TAQ003.webp"
    },
    {
     "codigo": "CTQ001",
     "nombre": "Termofusora 220 V-50 Hz · 800 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 71486.72,
     "contado": 55044.77,
     "contado_normal": 59083.77,
     "foto": "CTQ001.webp"
    },
    {
     "codigo": "CAS003",
     "nombre": "Anafe eléctrico 2 hornallas",
     "detalle": "",
     "grupo": "hog",
     "lista": 83870.97,
     "contado": 64580.65,
     "contado_normal": 69319.36,
     "foto": "CAS003.webp"
    },
    {
     "codigo": "FCQ001",
     "nombre": "Compresor de aire 1/3 HP 4 l",
     "detalle": "Sin aceite",
     "grupo": "elec",
     "lista": 63827.42,
     "contado": 49147.12,
     "contado_normal": 52753.37,
     "foto": "FCQ001.webp"
    },
    {
     "codigo": "FCC007",
     "nombre": "Mandril para taladro 13 mm con llave",
     "detalle": "",
     "grupo": "man",
     "lista": 12301.08,
     "contado": 9471.83,
     "contado_normal": 10166.84,
     "foto": "FCC007.webp"
    },
    {
     "codigo": "HPQ002",
     "nombre": "Pistola de pintar por gravedad STD",
     "detalle": "",
     "grupo": "elec",
     "lista": 44679.2,
     "contado": 34402.98,
     "contado_normal": 36927.36,
     "foto": "HPQ002.webp"
    },
    {
     "codigo": "HEL002",
     "nombre": "Escalera aluminio 5 escalones",
     "detalle": "",
     "grupo": "hog",
     "lista": 163082.44,
     "contado": 125573.48,
     "contado_normal": 134787.64,
     "foto": "HEL002.webp"
    },
    {
     "codigo": "HEL003",
     "nombre": "Escalera aluminio 6 escalones",
     "detalle": "",
     "grupo": "hog",
     "lista": 189175.63,
     "contado": 145665.23,
     "contado_normal": 156353.66,
     "foto": "HEL003.webp"
    },
    {
     "codigo": "HEL001",
     "nombre": "Escalera aluminio 4 escalones",
     "detalle": "",
     "grupo": "hog",
     "lista": 143512.55,
     "contado": 110504.66,
     "contado_normal": 118613.12,
     "foto": "HEL001.webp"
    }
   ]
  },
  {
   "id": "mozart",
   "nombre": "Mozart",
   "rubro": "Griferías",
   "tipo": "23",
   "chip": "23% OFF",
   "rotulo": "Contado o transf. · 23% OFF",
   "pres": "Lista consumidor final de PalJet al 25/11/2026",
   "productos": [
    {
     "codigo": "GMZ001",
     "nombre": "Grifería bidet 3 llaves cromado Boston",
     "detalle": "",
     "grupo": "lav",
     "lista": 178865.36,
     "contado": 137726.33,
     "contado_normal": 147832.22,
     "foto": "GMZ001.webp"
    },
    {
     "codigo": "GMZ002",
     "nombre": "Grifería bidet 3 llaves negro Boston",
     "detalle": "",
     "grupo": "lav",
     "lista": 176273.04,
     "contado": 135730.24,
     "contado_normal": 145689.67,
     "foto": "GMZ002.webp"
    },
    {
     "codigo": "GMZ003",
     "nombre": "Grifería bidet ABS sin transferencia negro",
     "detalle": "",
     "grupo": "lav",
     "lista": 66980.61,
     "contado": 51575.07,
     "contado_normal": 55359.47,
     "foto": "GMZ003.webp"
    },
    {
     "codigo": "GMZ004",
     "nombre": "Grifería bidet sin transferencia cromado Oslo",
     "detalle": "",
     "grupo": "lav",
     "lista": 105192.89,
     "contado": 80998.53,
     "contado_normal": 86941.93,
     "foto": "GMZ004.webp"
    },
    {
     "codigo": "GMZ005",
     "nombre": "Ducha con transferencia Oslo",
     "detalle": "Cromado",
     "grupo": "duc",
     "lista": 155346.07,
     "contado": 119616.48,
     "destacado": 9,
     "foto": "GMZ005.webp",
     "contado_normal": 128393.53
    },
    {
     "codigo": "GMZ006",
     "nombre": "Grifería ducha con transferencia cromado Utah",
     "detalle": "",
     "grupo": "duc",
     "lista": 154083.3,
     "contado": 118644.14,
     "contado_normal": 127349.85,
     "foto": "GMZ006.webp"
    },
    {
     "codigo": "GMZ007",
     "nombre": "Grifería ducha mezcladora compresión con transferencia con duchador Boston",
     "detalle": "",
     "grupo": "duc",
     "lista": 102469.41,
     "contado": 78901.44,
     "contado_normal": 84690.96,
     "foto": "GMZ007.webp"
    },
    {
     "codigo": "GMZ008",
     "nombre": "Grifería ducha monocomando con transferencia Kabul",
     "detalle": "",
     "grupo": "duc",
     "lista": 112728.99,
     "contado": 86801.32,
     "contado_normal": 93170.51,
     "foto": "GMZ008.webp"
    },
    {
     "codigo": "GMZ009",
     "nombre": "Grifería lavatorio monocomando bajo cuerpo tubo cobre Dakar",
     "detalle": "",
     "grupo": "lav",
     "lista": 64017.44,
     "contado": 49293.43,
     "contado_normal": 52910.42,
     "foto": "GMZ009.webp"
    },
    {
     "codigo": "GMZ010",
     "nombre": "Grifería lavatorio ABS pico alto 28 cm recto blanco Doha",
     "detalle": "",
     "grupo": "lav",
     "lista": 58680.17,
     "contado": 45183.73,
     "contado_normal": 48499.16,
     "foto": "GMZ010.webp"
    },
    {
     "codigo": "GMZ011",
     "nombre": "Grifería lavatorio ABS pico alto 28 cm recto cromado Doha",
     "detalle": "",
     "grupo": "lav",
     "lista": 71657.28,
     "contado": 55176.1,
     "contado_normal": 59224.74,
     "foto": "GMZ011.webp"
    },
    {
     "codigo": "GMZ012",
     "nombre": "Grifería lavatorio ABS pico alto 28 cm recto negro Doha",
     "detalle": "",
     "grupo": "lav",
     "lista": 61357.16,
     "contado": 47245.01,
     "contado_normal": 50711.69,
     "foto": "GMZ012.webp"
    },
    {
     "codigo": "GMZ013",
     "nombre": "Grifería lavatorio bimando cromado Boston",
     "detalle": "",
     "grupo": "lav",
     "lista": 153701.73,
     "contado": 118350.33,
     "contado_normal": 127034.48,
     "foto": "GMZ013.webp"
    },
    {
     "codigo": "GMZ017",
     "nombre": "Grifería lavatorio pico J cromado Boston",
     "detalle": "",
     "grupo": "lav",
     "lista": 111439.98,
     "contado": 85808.79,
     "contado_normal": 92105.14,
     "foto": "GMZ017.webp"
    },
    {
     "codigo": "GMZ018",
     "nombre": "Grifería lavatorio press alto pico curvo Nepal",
     "detalle": "",
     "grupo": "lav",
     "lista": 56643.52,
     "contado": 43615.51,
     "contado_normal": 46815.87,
     "foto": "GMZ018.webp"
    },
    {
     "codigo": "GMZ019",
     "nombre": "Grifería lavatorio press cierre automático metálica",
     "detalle": "",
     "grupo": "lav",
     "lista": 42577.74,
     "contado": 32784.86,
     "contado_normal": 35190.5,
     "foto": "GMZ019.webp"
    },
    {
     "codigo": "GMZ020",
     "nombre": "Grifería lavatorio press shalto pico recto Shanghai",
     "detalle": "",
     "grupo": "lav",
     "lista": 63228.06,
     "contado": 48685.61,
     "contado_normal": 52257.99,
     "foto": "GMZ020.webp"
    },
    {
     "codigo": "GMZ026",
     "nombre": "Grifería monocomando ABS pared pico J negro Doha",
     "detalle": "",
     "grupo": "coc",
     "lista": 49886.08,
     "contado": 38412.28,
     "contado_normal": 41230.84,
     "foto": "GMZ026.webp"
    },
    {
     "codigo": "GMZ027",
     "nombre": "Grifería monocomando bidet sin transferencia Kabul",
     "detalle": "",
     "grupo": "lav",
     "lista": 70239.49,
     "contado": 54084.41,
     "contado_normal": 58052.94,
     "foto": "GMZ027.webp"
    },
    {
     "codigo": "GMZ028",
     "nombre": "Grifería monocomando bidet sin transferencia negro Manhattan",
     "detalle": "",
     "grupo": "lav",
     "lista": 70793.97,
     "contado": 54511.35,
     "contado_normal": 58511.21,
     "foto": "GMZ028.webp"
    },
    {
     "codigo": "GMZ029",
     "nombre": "Grifería monocomando cocina mesada caño 27 cm Madrid",
     "detalle": "",
     "grupo": "coc",
     "lista": 56846.23,
     "contado": 43771.6,
     "contado_normal": 46983.41,
     "foto": "GMZ029.webp"
    },
    {
     "codigo": "GMZ030",
     "nombre": "Monocomando de cocina Milán",
     "detalle": "De mesada · Cromado",
     "grupo": "coc",
     "lista": 231234.06,
     "contado": 178050.22,
     "destacado": 2,
     "foto": "GMZ030.webp",
     "contado_normal": 191114.95
    },
    {
     "codigo": "GMZ031",
     "nombre": "Grifería monocomando cocina mesada extra alto Madrid",
     "detalle": "",
     "grupo": "coc",
     "lista": 86685.35,
     "contado": 66747.72,
     "contado_normal": 71645.44,
     "foto": "GMZ031.webp"
    },
    {
     "codigo": "GMZ032",
     "nombre": "Grifería monocomando cocina mesada Madrid cisne",
     "detalle": "",
     "grupo": "coc",
     "lista": 67016.38,
     "contado": 51602.61,
     "contado_normal": 55389.04,
     "foto": "GMZ032.webp"
    },
    {
     "codigo": "GMZ033",
     "nombre": "Grifería monocomando cocina mesada negro Madrid cisne",
     "detalle": "",
     "grupo": "coc",
     "lista": 73810.79,
     "contado": 56834.31,
     "contado_normal": 61004.62,
     "foto": "GMZ033.webp"
    },
    {
     "codigo": "GMZ034",
     "nombre": "Grifería monocomando cocina mesada negro Milán",
     "detalle": "",
     "grupo": "coc",
     "lista": 246119.03,
     "contado": 189511.66,
     "contado_normal": 203417.38,
     "foto": "GMZ034.webp"
    },
    {
     "codigo": "GMZ035",
     "nombre": "Monocomando de cocina Miami",
     "detalle": "De mesada · Pico flexible de color",
     "grupo": "coc",
     "lista": 113512.41,
     "contado": 87404.55,
     "destacado": 3,
     "foto": "GMZ035.webp",
     "contado_normal": 93818
    },
    {
     "codigo": "GMZ036",
     "nombre": "Grifería monocomando cocina mesada pico fino J Madrid",
     "detalle": "",
     "grupo": "coc",
     "lista": 62568.65,
     "contado": 48177.86,
     "contado_normal": 51712.99,
     "foto": "GMZ036.webp"
    },
    {
     "codigo": "GMZ038",
     "nombre": "Grifería monocomando cocina mesada pico L 46 cm Madrid",
     "detalle": "",
     "grupo": "coc",
     "lista": 71541.61,
     "contado": 55087.04,
     "contado_normal": 59129.14,
     "foto": "GMZ038.webp"
    },
    {
     "codigo": "GMZ040",
     "nombre": "Grifería monocomando cocina pared pico bajo caño 25 cm Madrid",
     "detalle": "",
     "grupo": "coc",
     "lista": 75817.63,
     "contado": 58379.58,
     "contado_normal": 62663.27,
     "foto": "GMZ040.webp"
    },
    {
     "codigo": "GMZ041",
     "nombre": "Grifería monocomando cocina rociador extraíble acero Daytona",
     "detalle": "",
     "grupo": "coc",
     "lista": 189245.38,
     "contado": 145718.94,
     "contado_normal": 156411.3,
     "foto": "GMZ041.webp"
    },
    {
     "codigo": "GMZ042",
     "nombre": "Monocomando de cocina Daytona",
     "detalle": "Rociador extraíble · Cromado",
     "grupo": "coc",
     "lista": 214746.47,
     "contado": 165354.78,
     "destacado": 0,
     "foto": "GMZ042.webp",
     "contado_normal": 177487.96,
     "vidriera": 1
    },
    {
     "codigo": "GMZ043",
     "nombre": "Grifería monocomando cocina rociador extraíble negro Daytona",
     "detalle": "",
     "grupo": "coc",
     "lista": 209574.94,
     "contado": 161372.71,
     "contado_normal": 173213.69,
     "foto": "GMZ043.webp"
    },
    {
     "codigo": "GMZ044",
     "nombre": "Monocomando de cocina Río",
     "detalle": "Rociador extraíble · Negro",
     "grupo": "coc",
     "lista": 223426.09,
     "contado": 172038.09,
     "destacado": 1,
     "foto": "GMZ044.webp",
     "contado_normal": 184661.66
    },
    {
     "codigo": "GMZ045",
     "nombre": "Grifería monocomando ducha ABS con transferencia negro Doha",
     "detalle": "",
     "grupo": "duc",
     "lista": 79782.43,
     "contado": 61432.47,
     "contado_normal": 65940.18,
     "foto": "GMZ045.webp"
    },
    {
     "codigo": "GMZ047",
     "nombre": "Grifería monocomando lavatorio acero baja Turín",
     "detalle": "",
     "grupo": "lav",
     "lista": 123758.87,
     "contado": 95294.33,
     "contado_normal": 102286.71,
     "foto": "GMZ047.webp"
    },
    {
     "codigo": "GMZ048",
     "nombre": "Grifería monocomando lavatorio alta acero Turín",
     "detalle": "",
     "grupo": "lav",
     "lista": 157044.08,
     "contado": 120923.94,
     "contado_normal": 129796.93,
     "foto": "GMZ048.webp"
    },
    {
     "codigo": "GMZ049",
     "nombre": "Grifería monocomando lavatorio alta blanco Hawái",
     "detalle": "",
     "grupo": "lav",
     "lista": 189803.43,
     "contado": 146148.64,
     "contado_normal": 156872.53,
     "foto": "GMZ049.webp"
    },
    {
     "codigo": "GMZ050",
     "nombre": "Grifería monocomando lavatorio alta cromado Kabul",
     "detalle": "",
     "grupo": "lav",
     "lista": 109042.03,
     "contado": 83962.36,
     "contado_normal": 90123.23,
     "foto": "GMZ050.webp"
    },
    {
     "codigo": "GMZ051",
     "nombre": "Monocomando de lavatorio alto Manhattan",
     "detalle": "Cromado",
     "grupo": "lav",
     "lista": 109042.03,
     "contado": 83962.36,
     "destacado": 7,
     "foto": "GMZ051.webp",
     "contado_normal": 90123.23
    },
    {
     "codigo": "GMZ052",
     "nombre": "Grifería monocomando lavatorio alta negro Hawái",
     "detalle": "",
     "grupo": "lav",
     "lista": 189803.43,
     "contado": 146148.64,
     "contado_normal": 156872.53,
     "foto": "GMZ052.webp"
    },
    {
     "codigo": "GMZ054",
     "nombre": "Grifería monocomando lavatorio alto Venecia",
     "detalle": "",
     "grupo": "lav",
     "lista": 173887.01,
     "contado": 133893,
     "contado_normal": 143717.61,
     "foto": "GMZ054.webp"
    },
    {
     "codigo": "GMZ055",
     "nombre": "Grifería monocomando lavatorio bajo cromado Oslo",
     "detalle": "",
     "grupo": "lav",
     "lista": 110497.97,
     "contado": 85083.44,
     "contado_normal": 91326.57,
     "foto": "GMZ055.webp"
    },
    {
     "codigo": "GMZ056",
     "nombre": "Grifería monocomando lavatorio bajo Venecia",
     "detalle": "",
     "grupo": "lav",
     "lista": 136188.66,
     "contado": 104865.26,
     "contado_normal": 112559.92,
     "foto": "GMZ056.webp"
    },
    {
     "codigo": "GMZ057",
     "nombre": "Grifería monocomando lavatorio cromo Utah",
     "detalle": "",
     "grupo": "lav",
     "lista": 84358.93,
     "contado": 64956.38,
     "contado_normal": 69722.66,
     "foto": "GMZ057.webp"
    },
    {
     "codigo": "GMZ058",
     "nombre": "Grifería monocomando lavatorio Eco",
     "detalle": "",
     "grupo": "lav",
     "lista": 59399.2,
     "contado": 45737.39,
     "contado_normal": 49093.44,
     "foto": "GMZ058.webp"
    },
    {
     "codigo": "GMZ059",
     "nombre": "Grifería monocomando lavatorio negro Manhattan",
     "detalle": "",
     "grupo": "lav",
     "lista": 88596.79,
     "contado": 68219.53,
     "contado_normal": 73225.25,
     "foto": "GMZ059.webp"
    },
    {
     "codigo": "GMZ060",
     "nombre": "Grifería monocomando lavatorio negro Utah",
     "detalle": "",
     "grupo": "lav",
     "lista": 90299.57,
     "contado": 69530.67,
     "contado_normal": 74632.59,
     "foto": "GMZ060.webp"
    },
    {
     "codigo": "GMZ061",
     "nombre": "Grifería monocomando mesada ABS pico J grueso negro Doha",
     "detalle": "",
     "grupo": "coc",
     "lista": 48085.52,
     "contado": 37025.85,
     "contado_normal": 39742.68,
     "foto": "GMZ061.webp"
    },
    {
     "codigo": "GMZ062",
     "nombre": "Grifería monocomando mesada cisne ABS negro Doha",
     "detalle": "",
     "grupo": "coc",
     "lista": 55699.12,
     "contado": 42888.33,
     "contado_normal": 46035.33,
     "foto": "GMZ062.webp"
    },
    {
     "codigo": "GMZ063",
     "nombre": "Grifería monocomando mesada pico 360º acero 304 Roma",
     "detalle": "",
     "grupo": "coc",
     "lista": 141302.94,
     "contado": 108803.27,
     "contado_normal": 116786.88,
     "foto": "GMZ063.webp"
    },
    {
     "codigo": "GMZ064",
     "nombre": "Grifería monocomando mesada pico bar volante palito cobre Praga",
     "detalle": "",
     "grupo": "coc",
     "lista": 135653.26,
     "contado": 104453.01,
     "contado_normal": 112117.42,
     "foto": "GMZ064.webp"
    },
    {
     "codigo": "GMZ066",
     "nombre": "Grifería monocomando mesada pico bar volante palito negro Praga",
     "detalle": "",
     "grupo": "coc",
     "lista": 121523.08,
     "contado": 93572.77,
     "contado_normal": 100438.83,
     "foto": "GMZ066.webp"
    },
    {
     "codigo": "GMZ067",
     "nombre": "Grifería monocomando mesada pico gira L cobre Tokio",
     "detalle": "",
     "grupo": "coc",
     "lista": 163626.24,
     "contado": 125992.2,
     "contado_normal": 135237.08,
     "foto": "GMZ067.webp"
    },
    {
     "codigo": "GMZ069",
     "nombre": "Grifería monocomando mesada pico gira L negro Tokio",
     "detalle": "",
     "grupo": "coc",
     "lista": 144925.52,
     "contado": 111592.65,
     "contado_normal": 119780.94,
     "foto": "GMZ069.webp"
    },
    {
     "codigo": "GMZ070",
     "nombre": "Monocomando de cocina Tokio",
     "detalle": "Pico L · Acero 304",
     "grupo": "coc",
     "lista": 126710.11,
     "contado": 97566.78,
     "destacado": 5,
     "foto": "GMZ070.webp",
     "contado_normal": 104725.91
    },
    {
     "codigo": "GMZ071",
     "nombre": "Grifería monocomando pared pico bajo negro Doha",
     "detalle": "",
     "grupo": "coc",
     "lista": 60223.16,
     "contado": 46371.84,
     "contado_normal": 49774.45,
     "foto": "GMZ071.webp"
    },
    {
     "codigo": "GMZ072",
     "nombre": "Monocomando de lavatorio alto Oslo",
     "detalle": "Cromado",
     "grupo": "lav",
     "lista": 158800.51,
     "contado": 122276.4,
     "destacado": 6,
     "foto": "GMZ072.webp",
     "contado_normal": 131248.62
    },
    {
     "codigo": "GMZ073",
     "nombre": "Grifería lavatorio monocomando bajo plano Frankfurt",
     "detalle": "",
     "grupo": "lav",
     "lista": 128448.66,
     "contado": 98905.47,
     "contado_normal": 106162.82,
     "foto": "GMZ073.webp"
    },
    {
     "codigo": "GMZ074",
     "nombre": "Grifería lavatorio monocomando alto plano Frankfurt",
     "detalle": "",
     "grupo": "lav",
     "lista": 158913.79,
     "contado": 122363.62,
     "contado_normal": 131342.25,
     "foto": "GMZ074.webp"
    },
    {
     "codigo": "SDZ001",
     "nombre": "Brazo para lluvia 40 cm roseta curvo alto acero inox.",
     "detalle": "",
     "grupo": "duc",
     "lista": 12358.15,
     "contado": 9515.78,
     "contado_normal": 10214.01,
     "foto": "SDZ001.webp"
    },
    {
     "codigo": "SDZ002",
     "nombre": "Brazo para lluvia 45° 15 cm acero inox.",
     "detalle": "",
     "grupo": "duc",
     "lista": 7072.75,
     "contado": 5446.02,
     "contado_normal": 5845.63,
     "foto": "SDZ002.webp"
    },
    {
     "codigo": "SDZ003",
     "nombre": "Brazo para lluvia 45° 15 cm acero inox.",
     "detalle": "",
     "grupo": "duc",
     "lista": 7072.75,
     "contado": 5446.02,
     "contado_normal": 5845.63,
     "foto": "SDZ003.webp"
    },
    {
     "codigo": "SDZ004",
     "nombre": "Brazo para lluvia 45° 25 cm acero inox.",
     "detalle": "",
     "grupo": "duc",
     "lista": 7983.68,
     "contado": 6147.43,
     "contado_normal": 6598.51,
     "foto": "SDZ004.webp"
    },
    {
     "codigo": "SDZ005",
     "nombre": "Brazo para lluvia 90° 30 cm negro",
     "detalle": "",
     "grupo": "duc",
     "lista": 8433.39,
     "contado": 6493.71,
     "contado_normal": 6970.2,
     "foto": "SDZ005.webp"
    },
    {
     "codigo": "SDZ006",
     "nombre": "Brazo para lluvia 90° 35 cm negro",
     "detalle": "",
     "grupo": "duc",
     "lista": 9773.58,
     "contado": 7525.66,
     "contado_normal": 8077.87,
     "foto": "SDZ006.webp"
    },
    {
     "codigo": "SDZ007",
     "nombre": "Brazo para lluvia 90° 40 cm negro",
     "detalle": "",
     "grupo": "duc",
     "lista": 11115.06,
     "contado": 8558.59,
     "contado_normal": 9186.59,
     "foto": "SDZ007.webp"
    },
    {
     "codigo": "SDZ008",
     "nombre": "Brazo para lluvia rectangular 42 cm recto-roseta cuadrada acero inox.",
     "detalle": "",
     "grupo": "duc",
     "lista": 29387.19,
     "contado": 22628.13,
     "contado_normal": 24288.51,
     "foto": "SDZ008.webp"
    },
    {
     "codigo": "SDZ009",
     "nombre": "Ducha con brazo cuadrada 10 x 10 cm baja-roseta y anticalcáreo plástico",
     "detalle": "",
     "grupo": "duc",
     "lista": 13140.04,
     "contado": 10117.83,
     "contado_normal": 10860.24,
     "foto": "SDZ009.webp"
    },
    {
     "codigo": "SDZ010",
     "nombre": "Ducha con brazo cuadrada 10 x 10 cm con marco-roseta anticalcáreo plástico",
     "detalle": "",
     "grupo": "duc",
     "lista": 15601.96,
     "contado": 12013.51,
     "contado_normal": 12895.02,
     "foto": "SDZ010.webp"
    },
    {
     "codigo": "SDZ012",
     "nombre": "Ducha con brazo cuadrada 20 x 20 cm curvo alto-roseta acero inox.",
     "detalle": "",
     "grupo": "duc",
     "lista": 76761.6,
     "contado": 59106.43,
     "contado_normal": 63443.46,
     "foto": "SDZ012.webp"
    },
    {
     "codigo": "SDZ013",
     "nombre": "Ducha con brazo redonda 10 cm cromada plástico",
     "detalle": "",
     "grupo": "duc",
     "lista": 23634.19,
     "contado": 18198.32,
     "contado_normal": 19533.66,
     "foto": "SDZ013.webp"
    },
    {
     "codigo": "SDZ014",
     "nombre": "Ducha con brazo redonda 10 cm cromada plástico",
     "detalle": "",
     "grupo": "duc",
     "lista": 18099.66,
     "contado": 13936.73,
     "contado_normal": 14959.37,
     "foto": "SDZ014.webp"
    },
    {
     "codigo": "SDZ016",
     "nombre": "Ducha con brazo redonda 11,5 cm cromada campana plástico",
     "detalle": "",
     "grupo": "duc",
     "lista": 24547.67,
     "contado": 18901.7,
     "contado_normal": 20288.65,
     "foto": "SDZ016.webp"
    },
    {
     "codigo": "SDZ018",
     "nombre": "Ducha con brazo redonda 8 cm campana-roseta y anticalcáreo plástico",
     "detalle": "",
     "grupo": "duc",
     "lista": 19528,
     "contado": 15036.56,
     "contado_normal": 16139.9,
     "foto": "SDZ018.webp"
    },
    {
     "codigo": "SDZ019",
     "nombre": "Ducha con brazo redonda 9,5 cm gris-roseta y anticalcáreo plástico",
     "detalle": "",
     "grupo": "duc",
     "lista": 14857.13,
     "contado": 11439.99,
     "contado_normal": 12279.41,
     "foto": "SDZ019.webp"
    },
    {
     "codigo": "SDZ020",
     "nombre": "Flor de ducha o lluvia cuadrada 15 x 15 cm anticalcárea negra",
     "detalle": "",
     "grupo": "duc",
     "lista": 27530.85,
     "contado": 21198.75,
     "contado_normal": 22754.24,
     "foto": "SDZ020.webp"
    },
    {
     "codigo": "SDZ021",
     "nombre": "Flor de ducha o lluvia cuadrada 20 x 20 cm anticalcárea acero inox.",
     "detalle": "",
     "grupo": "duc",
     "lista": 37599.55,
     "contado": 28951.66,
     "contado_normal": 31076.03,
     "foto": "SDZ021.webp"
    },
    {
     "codigo": "SDZ022",
     "nombre": "Flor de ducha o lluvia cuadrada 20 x 20 cm anticalcárea negro",
     "detalle": "",
     "grupo": "duc",
     "lista": 33651.79,
     "contado": 25911.88,
     "contado_normal": 27813.21,
     "foto": "SDZ022.webp"
    },
    {
     "codigo": "SDZ024",
     "nombre": "Flor de ducha o lluvia redonda 20 cm anticalcárea acero inox.",
     "detalle": "",
     "grupo": "duc",
     "lista": 37798.86,
     "contado": 29105.12,
     "contado_normal": 31240.76,
     "foto": "SDZ024.webp"
    },
    {
     "codigo": "SDZ025",
     "nombre": "Flor de ducha o lluvia redonda 20 cm anticalcárea negro",
     "detalle": "",
     "grupo": "duc",
     "lista": 33651.79,
     "contado": 25911.88,
     "contado_normal": 27813.21,
     "foto": "SDZ025.webp"
    },
    {
     "codigo": "SDZ026",
     "nombre": "Flor ducha redonda ABS 20 x 20 cm",
     "detalle": "",
     "grupo": "duc",
     "lista": 20131.03,
     "contado": 15500.89,
     "contado_normal": 16638.29,
     "foto": "SDZ026.webp"
    },
    {
     "codigo": "SDZ027",
     "nombre": "Flor ducha cuadrada ABS cromado 20 x 20",
     "detalle": "",
     "grupo": "duc",
     "lista": 26705.52,
     "contado": 20563.25,
     "contado_normal": 22072.11,
     "foto": "SDZ027.webp"
    },
    {
     "codigo": "SCZ001",
     "nombre": "Set de baño Panamá, 5 piezas",
     "detalle": "Acero inoxidable cromado",
     "grupo": "acb",
     "lista": 139577,
     "contado": 107474.29,
     "destacado": 11,
     "foto": "SCZ001.webp",
     "contado_normal": 115360.39
    },
    {
     "codigo": "SCZ002",
     "nombre": "Set baño 6 piezas cromado Niza",
     "detalle": "",
     "grupo": "acb",
     "lista": 104857.14,
     "contado": 80740,
     "contado_normal": 86664.43,
     "foto": "SCZ002.webp"
    },
    {
     "codigo": "SCZ003",
     "nombre": "Set ducha mezcladora con duchador clásica",
     "detalle": "",
     "grupo": "duc",
     "lista": 221972.79,
     "contado": 170919.05,
     "contado_normal": 183460.51,
     "foto": "SCZ003.webp"
    },
    {
     "codigo": "SCZ004",
     "nombre": "Set ducha vintage mezcladora cromado Boston",
     "detalle": "",
     "grupo": "duc",
     "lista": 365846.33,
     "contado": 281701.68,
     "contado_normal": 302371.99,
     "foto": "SCZ004.webp"
    },
    {
     "codigo": "SCZ005",
     "nombre": "Set de ducha vintage Oslo",
     "detalle": "Mezcladora · Cromado",
     "grupo": "duc",
     "lista": 359671.73,
     "contado": 276947.23,
     "destacado": 10,
     "foto": "SCZ005.webp",
     "contado_normal": 297268.68,
     "vidriera": 4
    },
    {
     "codigo": "SCZ006",
     "nombre": "Set ducha vintage mezcladora negro Boston",
     "detalle": "",
     "grupo": "duc",
     "lista": 340320.03,
     "contado": 262046.42,
     "contado_normal": 281274.51,
     "foto": "SCZ006.webp"
    },
    {
     "codigo": "SDZ011",
     "nombre": "Ducha con brazo cuadrada 10x10 cm",
     "detalle": "Gris · Antisarro",
     "grupo": "duc",
     "lista": 13341.9,
     "contado": 10273.26,
     "contado_normal": 11027.08,
     "foto": "SDZ011.webp"
    },
    {
     "codigo": "SDZ023",
     "nombre": "Flor de ducha lluvia rectangular",
     "detalle": "Acero inoxidable · Anticalcárea",
     "grupo": "duc",
     "lista": 32054.8,
     "contado": 24682.2,
     "contado_normal": 26493.29,
     "foto": "SDZ023.webp"
    },
    {
     "codigo": "GMZ015",
     "nombre": "Grifería de lavatorio lluvia extensible Atenas",
     "detalle": "Cromada",
     "grupo": "lav",
     "lista": 179407.91,
     "contado": 138144.09,
     "contado_normal": 148280.64,
     "foto": "GMZ015.webp"
    },
    {
     "codigo": "GMZ016",
     "nombre": "Grifería de lavatorio monocomando alta Dakar",
     "detalle": "240 mm",
     "grupo": "lav",
     "lista": 77032.71,
     "contado": 59315.18,
     "contado_normal": 63667.53,
     "foto": "GMZ016.webp"
    },
    {
     "codigo": "GMZ021",
     "nombre": "Grifería mezcladora de mesada Texas",
     "detalle": "Volante cruz · Difusor móvil · Negra",
     "grupo": "coc",
     "lista": 139978.17,
     "contado": 107783.19,
     "contado_normal": 115691.95,
     "foto": "GMZ021.webp"
    },
    {
     "codigo": "GMZ022",
     "nombre": "Grifería mezcladora monocomando de mesada Madrid",
     "detalle": "Pico prolongado",
     "grupo": "coc",
     "lista": 96668.28,
     "contado": 74434.58,
     "contado_normal": 79896.34,
     "foto": "GMZ022.webp"
    },
    {
     "codigo": "GMZ024",
     "nombre": "Grifería mezcladora de pared Texas",
     "detalle": "Volante cruz · Difusor móvil · Negra",
     "grupo": "coc",
     "lista": 144286.38,
     "contado": 111100.51,
     "contado_normal": 119252.69,
     "foto": "GMZ024.webp"
    },
    {
     "codigo": "GMZ025",
     "nombre": "Grifería monocomando de mesada pico bar",
     "detalle": "Acero 304 · Volante palito",
     "grupo": "coc",
     "lista": 110524.2,
     "contado": 85103.64,
     "contado_normal": 91348.25,
     "foto": "GMZ025.webp"
    },
    {
     "codigo": "GMZ046",
     "nombre": "Grifería monocomando de ducha Manhattan",
     "detalle": "Con transferencia y duchador · Negra",
     "grupo": "duc",
     "lista": 152345.94,
     "contado": 117306.38,
     "contado_normal": 125913.92,
     "foto": "GMZ046.webp"
    },
    {
     "codigo": "GMZ065",
     "nombre": "Grifería monocomando de mesada pico bar Praga",
     "detalle": "Volante palito · Cromada",
     "grupo": "coc",
     "lista": 115570.52,
     "contado": 88989.3,
     "contado_normal": 95519.04,
     "foto": "GMZ065.webp"
    },
    {
     "codigo": "SRJ017",
     "nombre": "Reja piso acero inox. 10 cm",
     "detalle": "",
     "grupo": "acb",
     "lista": 15985.24,
     "contado": 12308.63,
     "contado_normal": 13211.8,
     "foto": "SRJ017.webp"
    },
    {
     "codigo": "SRJ018",
     "nombre": "Reja piso acero inox. 12 cm",
     "detalle": "",
     "grupo": "acb",
     "lista": 18655.41,
     "contado": 14364.66,
     "contado_normal": 15418.7,
     "foto": "SRJ018.webp"
    },
    {
     "codigo": "SRJ019",
     "nombre": "Reja piso acero inox. 15 cm",
     "detalle": "",
     "grupo": "acb",
     "lista": 25265.67,
     "contado": 19454.57,
     "contado_normal": 20882.08,
     "foto": "SRJ019.webp"
    },
    {
     "codigo": "SRJ020",
     "nombre": "Reja piso acero inox. 20 cm",
     "detalle": "",
     "grupo": "acb",
     "lista": 35867.14,
     "contado": 27617.7,
     "contado_normal": 29644.19,
     "foto": "SRJ020.webp"
    },
    {
     "codigo": "SNL026",
     "nombre": "Canilla para lavarropas 1/2",
     "detalle": "Esférica · Pico adaptable",
     "grupo": "acb",
     "lista": 15705.87,
     "contado": 12093.52,
     "contado_normal": 12980.9,
     "foto": "SNL026.webp"
    }
   ]
  },
  {
   "id": "total",
   "nombre": "TOTAL",
   "rubro": "Herramientas",
   "tipo": "liq",
   "chip": "Liquidación",
   "rotulo": "Liquidación · contado o transf.",
   "pres": "Lista consumidor final de PalJet al 25/11/2026",
   "productos": [
    {
     "codigo": "IHT002",
     "nombre": "Hidrolavadora inalámbrica 20 V",
     "detalle": "24,8 bar · Con batería y cargador",
     "grupo": "inal",
     "lista": 180787.07,
     "contado": 149420.51,
     "destacado": 8,
     "foto": "IHT002.webp",
     "contado_normal": 149420.51
    },
    {
     "codigo": "ERT002",
     "nombre": "Lijadora orbital de palma 240 W",
     "detalle": "Industrial",
     "grupo": "elec",
     "lista": 106196.37,
     "contado": 87771.3,
     "destacado": 9,
     "foto": "ERT002.webp",
     "contado_normal": 87771.3
    },
    {
     "codigo": "ELT001",
     "nombre": "Pulidora 1400 W",
     "detalle": "Industrial",
     "grupo": "elec",
     "lista": 261704.61,
     "contado": 216298.86,
     "destacado": 7,
     "foto": "ELT001.webp",
     "contado_normal": 216298.86
    },
    {
     "codigo": "HNT001",
     "nombre": "Minitorno 130 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 83441.77,
     "contado": 68964.63,
     "contado_normal": 68964.63,
     "foto": "HNT001.webp"
    },
    {
     "codigo": "HNT002",
     "nombre": "Kit minitorno 8 V + 67 accesorios",
     "detalle": "",
     "grupo": "elec",
     "lista": 84709.81,
     "contado": 70012.66,
     "contado_normal": 70012.66,
     "foto": "HNT002.webp"
    },
    {
     "codigo": "HUT002",
     "nombre": "Router 1600 W",
     "detalle": "Industrial",
     "grupo": "elec",
     "lista": 251584.67,
     "contado": 207934.73,
     "destacado": 6,
     "foto": "HUT002.webp",
     "contado_normal": 207934.73
    },
    {
     "codigo": "ETO001",
     "nombre": "Sierra sensitiva 2200 W",
     "detalle": "",
     "grupo": "elec",
     "lista": 249398.06,
     "contado": 206127.49,
     "contado_normal": 206127.49,
     "foto": "ETO001.webp"
    },
    {
     "codigo": "ETT001",
     "nombre": "Taladro percutor 1010 W",
     "detalle": "13 mm · Industrial",
     "grupo": "elec",
     "lista": 126431.52,
     "contado": 104495.65,
     "destacado": 4,
     "foto": "ETT001.webp",
     "contado_normal": 104495.65,
     "vidriera": 3
    },
    {
     "codigo": "HAT001",
     "nombre": "Amoladora inalámbrica brushless 20 V",
     "detalle": "115 mm · Con batería · Cargador aparte",
     "grupo": "inal",
     "lista": 134013.64,
     "contado": 110762.28,
     "destacado": 1,
     "foto": "HAT001.webp",
     "contado_normal": 110762.28
    },
    {
     "codigo": "IBT002",
     "nombre": "Batería 20 V 4 Ah",
     "detalle": "Industrial",
     "grupo": "bat",
     "lista": 99875.66,
     "contado": 82547.23,
     "destacado": 10,
     "foto": "IBT002.webp",
     "contado_normal": 82547.23
    },
    {
     "codigo": "IBT003",
     "nombre": "Batería 20 V 2,0 Ah",
     "detalle": "",
     "grupo": "bat",
     "lista": 58155.8,
     "contado": 48065.77,
     "contado_normal": 48065.77,
     "foto": "IBT003.webp"
    },
    {
     "codigo": "IBT005",
     "nombre": "2 baterías y cargador 4,0 Ah",
     "detalle": "",
     "grupo": "bat",
     "lista": 259174.25,
     "contado": 214207.52,
     "contado_normal": 214207.52,
     "foto": "IBT005.webp"
    },
    {
     "codigo": "IRT001",
     "nombre": "Bordeadora 20 V",
     "detalle": "Con batería · Cargador aparte",
     "grupo": "inal",
     "lista": 122004.67,
     "contado": 100836.86,
     "contado_normal": 100836.86,
     "foto": "IRT001.webp"
    },
    {
     "codigo": "ICT001",
     "nombre": "Cargador de batería 20 V 4 Ah",
     "detalle": "Industrial",
     "grupo": "bat",
     "lista": 69534.8,
     "contado": 57470.51,
     "destacado": 11,
     "foto": "ICT001.webp",
     "contado_normal": 57470.51
    },
    {
     "codigo": "ICT002",
     "nombre": "Cargador de batería 20 V 2,0 Ah",
     "detalle": "",
     "grupo": "bat",
     "lista": 37927.79,
     "contado": 31347.31,
     "contado_normal": 31347.31,
     "foto": "ICT002.webp"
    },
    {
     "codigo": "HAT002",
     "nombre": "Pulidora 20 V brushless 254 mm",
     "detalle": "Con batería · Cargador aparte",
     "grupo": "inal",
     "lista": 265500.9,
     "contado": 219436.5,
     "contado_normal": 219436.5,
     "foto": "HAT002.webp"
    },
    {
     "codigo": "ILT001",
     "nombre": "Rotomartillo SDS Plus 20 V 16 mm",
     "detalle": "Con batería · Cargador aparte",
     "grupo": "inal",
     "lista": 127001.2,
     "contado": 104966.49,
     "contado_normal": 104966.49,
     "foto": "ILT001.webp"
    },
    {
     "codigo": "IST001",
     "nombre": "Sierra caladora 20 V brushless",
     "detalle": "Con batería · Cargador aparte",
     "grupo": "inal",
     "lista": 198487.86,
     "contado": 164050.21,
     "contado_normal": 164050.21,
     "foto": "IST001.webp"
    },
    {
     "codigo": "IST002",
     "nombre": "Sierra circular inalámbrica brushless 20 V",
     "detalle": "165 mm · Con batería · Cargador aparte",
     "grupo": "inal",
     "lista": 225047.59,
     "contado": 186001.84,
     "destacado": 2,
     "foto": "IST002.webp",
     "contado_normal": 186001.84
    },
    {
     "codigo": "IIT001",
     "nombre": "Sierra podadora inalámbrica 20 V",
     "detalle": "5\" · Con batería · Cargador aparte",
     "grupo": "inal",
     "lista": 101142.56,
     "contado": 83594.33,
     "destacado": 3,
     "foto": "IIT001.webp",
     "contado_normal": 83594.33
    },
    {
     "codigo": "MOT005",
     "nombre": "Bolso de tela para herramientas 16\"",
     "detalle": "",
     "grupo": "caj",
     "lista": 23514.41,
     "contado": 19434.66,
     "contado_normal": 19434.66,
     "foto": "MOT005.webp"
    },
    {
     "codigo": "MOT006",
     "nombre": "Bolso de tela para herramientas 13\"",
     "detalle": "",
     "grupo": "caj",
     "lista": 14537.82,
     "contado": 12015.51,
     "contado_normal": 12015.51,
     "foto": "MOT006.webp"
    },
    {
     "codigo": "CPT000",
     "nombre": "Caja plástica para herramientas 14\"",
     "detalle": "",
     "grupo": "caj",
     "lista": 20568.79,
     "contado": 17000.1,
     "contado_normal": 17000.1,
     "foto": "CPT000.webp"
    },
    {
     "codigo": "HKT001",
     "nombre": "Estuche de herramientas de 9 piezas",
     "detalle": "",
     "grupo": "caj",
     "lista": 67004.99,
     "contado": 55379.62,
     "contado_normal": 55379.62,
     "foto": "HKT001.webp"
    },
    {
     "codigo": "HKT006",
     "nombre": "Caja de herramientas de 24 piezas",
     "detalle": "",
     "grupo": "caj",
     "lista": 159302.87,
     "contado": 131663.82,
     "contado_normal": 131663.82,
     "foto": "HKT006.webp"
    },
    {
     "codigo": "HVT002",
     "nombre": "Llave de impacto brushless 20 V",
     "detalle": "500 Nm · Con cargador y 2 baterías de 4 Ah",
     "grupo": "inal",
     "lista": 415967.59,
     "contado": 343797.22,
     "contado_normal": 343797.22,
     "foto": "HVT002.webp"
    }
   ]
  },
  {
   "id": "fv",
   "nombre": "FV",
   "rubro": "Griferías",
   "tipo": "liq",
   "chip": "Liquidación",
   "rotulo": "Liquidación · contado o transf.",
   "pres": "Lista consumidor final de PalJet al 25/11/2026",
   "productos": [
    {
     "codigo": "GFV002",
     "nombre": "Grifería de bidet California",
     "detalle": "Cromo",
     "grupo": "lav",
     "lista": 254098.79,
     "contado": 210012.65,
     "destacado": 9,
     "foto": "GFV002.webp",
     "contado_normal": 210012.65
    },
    {
     "codigo": "GFV005",
     "nombre": "Grifería de lavatorio California",
     "detalle": "Cromo",
     "grupo": "lav",
     "lista": 229898.79,
     "contado": 190011.35,
     "destacado": 8,
     "foto": "GFV005.webp",
     "contado_normal": 190011.35
    },
    {
     "codigo": "GFV006",
     "nombre": "Grifería lavatorio Newport",
     "detalle": "",
     "grupo": "lav",
     "lista": 148828.79,
     "contado": 123006.99,
     "contado_normal": 123006.99,
     "foto": "GFV006.webp"
    },
    {
     "codigo": "GFV008",
     "nombre": "Kit de grifería Newport",
     "detalle": "Ducha + lavatorio + bidet",
     "grupo": "lav",
     "lista": 458588.79,
     "contado": 379023.63,
     "destacado": 11,
     "foto": "GFV008.webp",
     "contado_normal": 379023.63
    },
    {
     "codigo": "GFV012",
     "nombre": "Ducha con transferencia California",
     "detalle": "Cromo",
     "grupo": "duc",
     "lista": 258938.79,
     "contado": 214012.91,
     "destacado": 10,
     "foto": "GFV012.webp",
     "contado_normal": 214012.91
    },
    {
     "codigo": "GFV014",
     "nombre": "Grifería de cocina Arizona",
     "detalle": "De mesada",
     "grupo": "coc",
     "lista": 96798.79,
     "contado": 80004.2,
     "destacado": 3,
     "foto": "GFV014.webp",
     "contado_normal": 80004.2
    },
    {
     "codigo": "GFV015",
     "nombre": "Monocomando de lavatorio Arizona",
     "detalle": "Cromo",
     "grupo": "lav",
     "lista": 108898.79,
     "contado": 90004.85,
     "destacado": 4,
     "foto": "GFV015.webp",
     "contado_normal": 90004.85
    },
    {
     "codigo": "GFV016",
     "nombre": "Monocomando de bidet Arizona",
     "detalle": "Cromo",
     "grupo": "lav",
     "lista": 176658.79,
     "contado": 146008.49,
     "destacado": 5,
     "foto": "GFV016.webp",
     "contado_normal": 146008.49
    },
    {
     "codigo": "GFV017",
     "nombre": "Grifería ducha exterior monocomando Arizona",
     "detalle": "",
     "grupo": "duc",
     "lista": 176658.79,
     "contado": 146008.49,
     "contado_normal": 146008.49,
     "foto": "GFV017.webp"
    },
    {
     "codigo": "GFV018",
     "nombre": "Ducha con transferencia Arizona",
     "detalle": "Monocomando · Cromo",
     "grupo": "duc",
     "lista": 241998.79,
     "contado": 200012,
     "destacado": 6,
     "foto": "GFV018.webp",
     "contado_normal": 200012
    },
    {
     "codigo": "GFV019",
     "nombre": "Grifería cocina mesada Newport",
     "detalle": "",
     "grupo": "coc",
     "lista": 163348.79,
     "contado": 135007.77,
     "contado_normal": 135007.77,
     "foto": "GFV019.webp"
    },
    {
     "codigo": "GFV020",
     "nombre": "Grifería cocina mesada monocomando Arizona Duo CR",
     "detalle": "",
     "grupo": "coc",
     "lista": 181498.79,
     "contado": 150008.75,
     "contado_normal": 150008.75,
     "foto": "GFV020.webp"
    },
    {
     "codigo": "GFV021",
     "nombre": "Grifería cocina mesada monocomando Alabama Duo CR",
     "detalle": "",
     "grupo": "coc",
     "lista": 81068.79,
     "contado": 67003.35,
     "contado_normal": 67003.35,
     "foto": "GFV021.webp"
    },
    {
     "codigo": "GFV022",
     "nombre": "Monocomando de cocina Kansas",
     "detalle": "De mesada · Cromo",
     "grupo": "coc",
     "lista": 94378.79,
     "contado": 78004.07,
     "destacado": 1,
     "foto": "GFV022.webp",
     "contado_normal": 78004.07
    },
    {
     "codigo": "GFV023",
     "nombre": "Monocomando de cocina Swing",
     "detalle": "De mesada · Cromo",
     "grupo": "coc",
     "lista": 176658.79,
     "contado": 146008.49,
     "destacado": 0,
     "foto": "GFV023.webp",
     "contado_normal": 146008.49,
     "vidriera": 6
    },
    {
     "codigo": "GFV024",
     "nombre": "Monocomando de cocina Newport alto",
     "detalle": "De mesada",
     "grupo": "coc",
     "lista": 168188.79,
     "contado": 139008.03,
     "destacado": 2,
     "foto": "GFV024.webp",
     "contado_normal": 139008.03
    },
    {
     "codigo": "SCP001",
     "nombre": "Set accesorios 4 piezas cromo y acrílico Arizona",
     "detalle": "",
     "grupo": "acb",
     "lista": 96798.79,
     "contado": 80004.2,
     "contado_normal": 80004.2,
     "foto": "SCP001.webp"
    },
    {
     "codigo": "SCP002",
     "nombre": "Set de accesorios Arizona",
     "detalle": "5 piezas · Cromo y acrílico",
     "grupo": "acb",
     "lista": 117368.79,
     "contado": 97005.3,
     "destacado": 7,
     "foto": "SCP002.webp",
     "contado_normal": 97005.3
    }
   ]
  },
  {
   "id": "polacrin",
   "nombre": "Polacrin",
   "rubro": "Pinturas",
   "tipo": "contado",
   "chip": "Contado",
   "rotulo": "Contado o transf.",
   "pres": "Lista consumidor final de PalJet al 23/11/2026",
   "desde": "2026-11-29",
   "productos": [
    {
     "codigo": "PRP001",
     "nombre": "Revestimiento plástico textura media interior/exterior beige",
     "detalle": "5 kg",
     "grupo": "pint",
     "lista": 43563.36,
     "contado": 36005.12,
     "contado_normal": 36005.12,
     "foto": "PRP001.webp",
     "destacado": 3
    },
    {
     "codigo": "PRP002",
     "nombre": "Revestimiento plástico textura media interior/exterior beige",
     "detalle": "25 kg",
     "grupo": "pint",
     "lista": 160019.61,
     "contado": 132256.21,
     "contado_normal": 132256.21,
     "foto": "PRP002.webp"
    },
    {
     "codigo": "PRP003",
     "nombre": "Revestimiento plástico textura media interior/exterior arena",
     "detalle": "5 kg",
     "grupo": "pint",
     "lista": 43563.36,
     "contado": 36005.12,
     "contado_normal": 36005.12,
     "foto": "PRP003.webp"
    },
    {
     "codigo": "PRP004",
     "nombre": "Revestimiento plástico textura media interior/exterior arena",
     "detalle": "25 kg",
     "grupo": "pint",
     "lista": 160019.61,
     "contado": 132256.21,
     "contado_normal": 132256.21,
     "foto": "PRP004.webp"
    },
    {
     "codigo": "PRP005",
     "nombre": "Revestimiento plástico textura media interior/exterior gris",
     "detalle": "5 kg",
     "grupo": "pint",
     "lista": 43563.36,
     "contado": 36005.12,
     "contado_normal": 36005.12,
     "foto": "PRP005.webp"
    },
    {
     "codigo": "PRP006",
     "nombre": "Revestimiento plástico textura media interior/exterior gris",
     "detalle": "25 kg",
     "grupo": "pint",
     "lista": 160019.61,
     "contado": 132256.21,
     "contado_normal": 132256.21,
     "foto": "PRP006.webp"
    },
    {
     "codigo": "PRP007",
     "nombre": "Revestimiento plástico textura media interior/exterior teja",
     "detalle": "5 kg",
     "grupo": "pint",
     "lista": 43563.36,
     "contado": 36005.12,
     "contado_normal": 36005.12,
     "foto": "PRP007.webp"
    },
    {
     "codigo": "PRP008",
     "nombre": "Revestimiento plástico textura media interior/exterior teja",
     "detalle": "25 kg",
     "grupo": "pint",
     "lista": 160019.61,
     "contado": 132256.21,
     "contado_normal": 132256.21,
     "foto": "PRP008.webp"
    },
    {
     "codigo": "PRP009",
     "nombre": "Revestimiento plástico textura media interior/exterior terra",
     "detalle": "5 kg",
     "grupo": "pint",
     "lista": 43563.36,
     "contado": 36005.12,
     "contado_normal": 36005.12,
     "foto": "PRP009.webp"
    },
    {
     "codigo": "PRP010",
     "nombre": "Revestimiento plástico textura media interior/exterior terra",
     "detalle": "25 kg",
     "grupo": "pint",
     "lista": 160019.61,
     "contado": 132256.21,
     "contado_normal": 132256.21,
     "foto": "PRP010.webp"
    },
    {
     "codigo": "PRP011",
     "nombre": "Revestimiento plástico textura media interior/exterior terracota",
     "detalle": "5 kg",
     "grupo": "pint",
     "lista": 43563.36,
     "contado": 36005.12,
     "contado_normal": 36005.12,
     "foto": "PRP011.webp"
    },
    {
     "codigo": "PSP001",
     "nombre": "Esmalte sintético blanco brillante Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP001.webp"
    },
    {
     "codigo": "PSP002",
     "nombre": "Esmalte sintético blanco brillante Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP002.webp"
    },
    {
     "codigo": "PSP003",
     "nombre": "Esmalte sintético blanco brillante Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP003.webp"
    },
    {
     "codigo": "PSP004",
     "nombre": "Esmalte sintético blanco satinado Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP004.webp"
    },
    {
     "codigo": "PSP005",
     "nombre": "Esmalte sintético blanco satinado Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP005.webp"
    },
    {
     "codigo": "PSP015",
     "nombre": "Esmalte sintético amarillo Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP015.webp"
    },
    {
     "codigo": "PSP016",
     "nombre": "Esmalte sintético marrón tinaja Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 15595.77,
     "contado": 12889.9,
     "contado_normal": 12889.9,
     "foto": "PSP016.webp",
     "destacado": 2
    },
    {
     "codigo": "PSP017",
     "nombre": "Esmalte sintético marrón tinaja Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 21681.76,
     "contado": 17919.97,
     "contado_normal": 17919.97,
     "foto": "PSP017.webp"
    },
    {
     "codigo": "PSP018",
     "nombre": "Esmalte sintético marrón tinaja Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 71615.41,
     "contado": 59190.14,
     "contado_normal": 59190.14,
     "foto": "PSP018.webp"
    },
    {
     "codigo": "PSP019",
     "nombre": "Esmalte sintético marrón Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 15595.77,
     "contado": 12889.9,
     "contado_normal": 12889.9,
     "foto": "PSP019.webp"
    },
    {
     "codigo": "PSP020",
     "nombre": "Esmalte sintético marrón Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 21681.76,
     "contado": 17919.97,
     "contado_normal": 17919.97,
     "foto": "PSP020.webp"
    },
    {
     "codigo": "PSP021",
     "nombre": "Esmalte sintético marrón Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 71615.41,
     "contado": 59190.14,
     "contado_normal": 59190.14,
     "foto": "PSP021.webp"
    },
    {
     "codigo": "PSP022",
     "nombre": "Esmalte sintético naranja Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP022.webp"
    },
    {
     "codigo": "PSP023",
     "nombre": "Esmalte sintético naranja Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP023.webp"
    },
    {
     "codigo": "PSP024",
     "nombre": "Esmalte sintético naranja Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP024.webp"
    },
    {
     "codigo": "PSP025",
     "nombre": "Esmalte sintético bermellón Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP025.webp"
    },
    {
     "codigo": "PSP006",
     "nombre": "Esmalte sintético blanco satinado Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP006.webp"
    },
    {
     "codigo": "PSP007",
     "nombre": "Esmalte sintético blanco mate Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP007.webp"
    },
    {
     "codigo": "PSP008",
     "nombre": "Esmalte sintético blanco mate Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP008.webp"
    },
    {
     "codigo": "PSP009",
     "nombre": "Esmalte sintético blanco mate Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP009.webp"
    },
    {
     "codigo": "PSP010",
     "nombre": "Esmalte sintético marfil champagne Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP010.webp"
    },
    {
     "codigo": "PSP011",
     "nombre": "Esmalte sintético marfil champagne Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP011.webp"
    },
    {
     "codigo": "PSP012",
     "nombre": "Esmalte sintético marfil champagne Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP012.webp"
    },
    {
     "codigo": "PSP013",
     "nombre": "Esmalte sintético amarillo Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP013.webp"
    },
    {
     "codigo": "PSP014",
     "nombre": "Esmalte sintético amarillo Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP014.webp"
    },
    {
     "codigo": "PSP026",
     "nombre": "Esmalte sintético bermellón Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP026.webp"
    },
    {
     "codigo": "PSP027",
     "nombre": "Esmalte sintético bermellón Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP027.webp"
    },
    {
     "codigo": "PSP028",
     "nombre": "Esmalte sintético verde inglés Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 15595.77,
     "contado": 12889.9,
     "contado_normal": 12889.9,
     "foto": "PSP028.webp"
    },
    {
     "codigo": "PSP029",
     "nombre": "Esmalte sintético verde inglés Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 21681.76,
     "contado": 17919.97,
     "contado_normal": 17919.97,
     "foto": "PSP029.webp"
    },
    {
     "codigo": "PSP030",
     "nombre": "Esmalte sintético verde inglés Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 71615.41,
     "contado": 59190.14,
     "contado_normal": 59190.14,
     "foto": "PSP030.webp"
    },
    {
     "codigo": "PSP031",
     "nombre": "Esmalte sintético azul Traful Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP031.webp"
    },
    {
     "codigo": "PSP032",
     "nombre": "Esmalte sintético azul Traful Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP032.webp"
    },
    {
     "codigo": "PSP033",
     "nombre": "Esmalte sintético azul Traful Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP033.webp"
    },
    {
     "codigo": "PSP034",
     "nombre": "Esmalte sintético azul marino Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 15595.77,
     "contado": 12889.9,
     "contado_normal": 12889.9,
     "foto": "PSP034.webp"
    },
    {
     "codigo": "PSP035",
     "nombre": "Esmalte sintético azul marino Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 21681.76,
     "contado": 17919.97,
     "contado_normal": 17919.97,
     "foto": "PSP035.webp"
    },
    {
     "codigo": "PSP036",
     "nombre": "Esmalte sintético azul marino Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 71615.41,
     "contado": 59190.14,
     "contado_normal": 59190.14,
     "foto": "PSP036.webp"
    },
    {
     "codigo": "PSP037",
     "nombre": "Esmalte sintético negro brillante Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 15595.77,
     "contado": 12889.9,
     "contado_normal": 12889.9,
     "foto": "PSP037.webp"
    },
    {
     "codigo": "PSP038",
     "nombre": "Esmalte sintético negro brillante Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 21681.76,
     "contado": 17919.97,
     "contado_normal": 17919.97,
     "foto": "PSP038.webp"
    },
    {
     "codigo": "PSP039",
     "nombre": "Esmalte sintético negro brillante Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 71615.41,
     "contado": 59190.14,
     "contado_normal": 59190.14,
     "foto": "PSP039.webp"
    },
    {
     "codigo": "PSP040",
     "nombre": "Esmalte sintético negro satinado Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 15595.77,
     "contado": 12889.9,
     "contado_normal": 12889.9,
     "foto": "PSP040.webp"
    },
    {
     "codigo": "PSP041",
     "nombre": "Esmalte sintético negro satinado Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 21681.76,
     "contado": 17919.97,
     "contado_normal": 17919.97,
     "foto": "PSP041.webp"
    },
    {
     "codigo": "PSP042",
     "nombre": "Esmalte sintético negro satinado Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 71615.41,
     "contado": 59190.14,
     "contado_normal": 59190.14,
     "foto": "PSP042.webp"
    },
    {
     "codigo": "PSP043",
     "nombre": "Esmalte sintético negro mate Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 15595.77,
     "contado": 12889.9,
     "contado_normal": 12889.9,
     "foto": "PSP043.webp"
    },
    {
     "codigo": "PSP044",
     "nombre": "Esmalte sintético negro mate Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 21681.76,
     "contado": 17919.97,
     "contado_normal": 17919.97,
     "foto": "PSP044.webp"
    },
    {
     "codigo": "PSP045",
     "nombre": "Esmalte sintético negro mate Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 71615.41,
     "contado": 59190.14,
     "contado_normal": 59190.14,
     "foto": "PSP045.webp"
    },
    {
     "codigo": "PSP046",
     "nombre": "Esmalte sintético gris espacial Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 16708.88,
     "contado": 13809.89,
     "contado_normal": 13809.89,
     "foto": "PSP046.webp"
    },
    {
     "codigo": "PSP047",
     "nombre": "Esmalte sintético gris espacial Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 23848.35,
     "contado": 19710.66,
     "contado_normal": 19710.66,
     "foto": "PSP047.webp"
    },
    {
     "codigo": "PSP048",
     "nombre": "Esmalte sintético gris espacial Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 83550.33,
     "contado": 69054.35,
     "contado_normal": 69054.35,
     "foto": "PSP048.webp"
    },
    {
     "codigo": "PSP049",
     "nombre": "Esmalte sintético gris Triple Acción",
     "detalle": "1/2 l",
     "grupo": "pint",
     "lista": 15595.77,
     "contado": 12889.9,
     "contado_normal": 12889.9,
     "foto": "PSP049.webp"
    },
    {
     "codigo": "PSP050",
     "nombre": "Esmalte sintético gris Triple Acción",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 21681.76,
     "contado": 17919.97,
     "contado_normal": 17919.97,
     "foto": "PSP050.webp"
    },
    {
     "codigo": "PSP051",
     "nombre": "Esmalte sintético gris Triple Acción",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 71615.41,
     "contado": 59190.14,
     "contado_normal": 59190.14,
     "foto": "PSP051.webp"
    },
    {
     "codigo": "PMP001",
     "nombre": "Membrana líquida techos fibrada blanco",
     "detalle": "4 l",
     "grupo": "imp",
     "lista": 45920.18,
     "contado": 37953.03,
     "contado_normal": 37953.03,
     "foto": "PMP001.webp",
     "destacado": 4
    },
    {
     "codigo": "PMP002",
     "nombre": "Membrana líquida techos fibrada blanco",
     "detalle": "10 l",
     "grupo": "imp",
     "lista": 105170.41,
     "contado": 86923.34,
     "contado_normal": 86923.34,
     "foto": "PMP002.webp"
    },
    {
     "codigo": "PMP003",
     "nombre": "Membrana líquida techos fibrada blanco",
     "detalle": "20 l",
     "grupo": "imp",
     "lista": 197284.2,
     "contado": 163055.39,
     "contado_normal": 163055.39,
     "foto": "PMP003.webp"
    },
    {
     "codigo": "PMP004",
     "nombre": "Membrana líquida techos fibrada rojo",
     "detalle": "4 l",
     "grupo": "imp",
     "lista": 45920.18,
     "contado": 37953.03,
     "contado_normal": 37953.03,
     "foto": "PMP004.webp"
    },
    {
     "codigo": "PMP005",
     "nombre": "Membrana líquida techos fibrada rojo",
     "detalle": "10 l",
     "grupo": "imp",
     "lista": 105170.42,
     "contado": 86923.35,
     "contado_normal": 86923.35,
     "foto": "PMP005.webp"
    },
    {
     "codigo": "PMP006",
     "nombre": "Membrana líquida techos fibrada rojo",
     "detalle": "20 l",
     "grupo": "imp",
     "lista": 197284.2,
     "contado": 163055.39,
     "contado_normal": 163055.39,
     "foto": "PMP006.webp"
    },
    {
     "codigo": "PMP007",
     "nombre": "Membrana líquida en pasta blanco",
     "detalle": "4 l",
     "grupo": "imp",
     "lista": 46689.33,
     "contado": 38588.73,
     "contado_normal": 38588.73,
     "foto": "PMP007.webp",
     "destacado": 5
    },
    {
     "codigo": "PMP008",
     "nombre": "Membrana líquida en pasta blanco",
     "detalle": "10 l",
     "grupo": "imp",
     "lista": 109671.58,
     "contado": 90643.56,
     "contado_normal": 90643.56,
     "foto": "PMP008.webp"
    },
    {
     "codigo": "PMP009",
     "nombre": "Membrana líquida en pasta blanco",
     "detalle": "20 l",
     "grupo": "imp",
     "lista": 210165.81,
     "contado": 173702.04,
     "contado_normal": 173702.04,
     "foto": "PMP009.webp"
    },
    {
     "codigo": "PMP010",
     "nombre": "Membrana líquida en pasta rojo",
     "detalle": "4 l",
     "grupo": "imp",
     "lista": 46689.33,
     "contado": 38588.73,
     "contado_normal": 38588.73,
     "foto": "PMP010.webp"
    },
    {
     "codigo": "PMP011",
     "nombre": "Membrana líquida en pasta rojo",
     "detalle": "10 l",
     "grupo": "imp",
     "lista": 109671.58,
     "contado": 90643.56,
     "contado_normal": 90643.56,
     "foto": "PMP011.webp"
    },
    {
     "codigo": "PMP012",
     "nombre": "Membrana líquida en pasta rojo",
     "detalle": "20 l",
     "grupo": "imp",
     "lista": 210165.81,
     "contado": 173702.04,
     "contado_normal": 173702.04,
     "foto": "PMP012.webp"
    },
    {
     "codigo": "PLP001",
     "nombre": "Látex Premium interior/exterior",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 12499.19,
     "contado": 10330.58,
     "contado_normal": 10330.58,
     "foto": "PLP001.webp",
     "destacado": 0
    },
    {
     "codigo": "PLP002",
     "nombre": "Látex Premium interior/exterior",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 41222.75,
     "contado": 34070.6,
     "contado_normal": 34070.6,
     "foto": "PLP002.webp"
    },
    {
     "codigo": "PLP003",
     "nombre": "Látex Premium interior/exterior",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 93714.6,
     "contado": 77455.12,
     "contado_normal": 77455.12,
     "foto": "PLP003.webp"
    },
    {
     "codigo": "PLP004",
     "nombre": "Látex Premium interior/exterior",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 173790.96,
     "contado": 143638.23,
     "contado_normal": 143638.23,
     "foto": "PLP004.webp"
    },
    {
     "codigo": "LCP001",
     "nombre": "Látex Premium interior/exterior borgoña",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP001.webp",
     "destacado": 1
    },
    {
     "codigo": "LCP002",
     "nombre": "Látex Premium interior/exterior borgoña",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP002.webp"
    },
    {
     "codigo": "LCP003",
     "nombre": "Látex Premium interior/exterior borgoña",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP003.webp"
    },
    {
     "codigo": "LCP004",
     "nombre": "Látex Premium interior/exterior borgoña",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP004.webp"
    },
    {
     "codigo": "LCP005",
     "nombre": "Látex Premium interior/exterior rojo teja",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP005.webp"
    },
    {
     "codigo": "LCP006",
     "nombre": "Látex Premium interior/exterior rojo teja",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP006.webp"
    },
    {
     "codigo": "LCP007",
     "nombre": "Látex Premium interior/exterior rojo teja",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP007.webp"
    },
    {
     "codigo": "LCP008",
     "nombre": "Látex Premium interior/exterior rojo teja",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP008.webp"
    },
    {
     "codigo": "LCP009",
     "nombre": "Látex Premium interior/exterior violeta",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP009.webp"
    },
    {
     "codigo": "LCP010",
     "nombre": "Látex Premium interior/exterior violeta",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP010.webp"
    },
    {
     "codigo": "LCP011",
     "nombre": "Látex Premium interior/exterior violeta",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP011.webp"
    },
    {
     "codigo": "LCP012",
     "nombre": "Látex Premium interior/exterior violeta",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP012.webp"
    },
    {
     "codigo": "LCP013",
     "nombre": "Látex Premium interior/exterior ocre",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP013.webp"
    },
    {
     "codigo": "LCP014",
     "nombre": "Látex Premium interior/exterior ocre",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP014.webp"
    },
    {
     "codigo": "LCP015",
     "nombre": "Látex Premium interior/exterior ocre",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP015.webp"
    },
    {
     "codigo": "LCP016",
     "nombre": "Látex Premium interior/exterior ocre",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP016.webp"
    },
    {
     "codigo": "LCP017",
     "nombre": "Látex Premium interior/exterior amarillo",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP017.webp"
    },
    {
     "codigo": "LCP018",
     "nombre": "Látex Premium interior/exterior amarillo",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP018.webp"
    },
    {
     "codigo": "LCP019",
     "nombre": "Látex Premium interior/exterior amarillo",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP019.webp"
    },
    {
     "codigo": "LCP020",
     "nombre": "Látex Premium interior/exterior amarillo",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP020.webp"
    },
    {
     "codigo": "LCP021",
     "nombre": "Látex Premium interior/exterior bermellón",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP021.webp"
    },
    {
     "codigo": "LCP022",
     "nombre": "Látex Premium interior/exterior bermellón",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP022.webp"
    },
    {
     "codigo": "LCP023",
     "nombre": "Látex Premium interior/exterior bermellón",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP023.webp"
    },
    {
     "codigo": "LCP024",
     "nombre": "Látex Premium interior/exterior bermellón",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP024.webp"
    },
    {
     "codigo": "LCP025",
     "nombre": "Látex Premium interior/exterior azul",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP025.webp"
    },
    {
     "codigo": "LCP026",
     "nombre": "Látex Premium interior/exterior azul",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP026.webp"
    },
    {
     "codigo": "LCP027",
     "nombre": "Látex Premium interior/exterior azul",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP027.webp"
    },
    {
     "codigo": "LCP028",
     "nombre": "Látex Premium interior/exterior azul",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP028.webp"
    },
    {
     "codigo": "LCP029",
     "nombre": "Látex Premium interior/exterior naranja",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP029.webp"
    },
    {
     "codigo": "LCP030",
     "nombre": "Látex Premium interior/exterior naranja",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP030.webp"
    },
    {
     "codigo": "LCP031",
     "nombre": "Látex Premium interior/exterior naranja",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP031.webp"
    },
    {
     "codigo": "LCP032",
     "nombre": "Látex Premium interior/exterior naranja",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP032.webp"
    },
    {
     "codigo": "LCP033",
     "nombre": "Látex Premium interior/exterior marrón",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP033.webp"
    },
    {
     "codigo": "LCP034",
     "nombre": "Látex Premium interior/exterior marrón",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP034.webp"
    },
    {
     "codigo": "LCP035",
     "nombre": "Látex Premium interior/exterior marrón",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP035.webp"
    },
    {
     "codigo": "LCP036",
     "nombre": "Látex Premium interior/exterior marrón",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP036.webp"
    },
    {
     "codigo": "LCP037",
     "nombre": "Látex Premium interior/exterior verde manzana",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP037.webp"
    },
    {
     "codigo": "LCP038",
     "nombre": "Látex Premium interior/exterior verde manzana",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP038.webp"
    },
    {
     "codigo": "LCP039",
     "nombre": "Látex Premium interior/exterior verde manzana",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP039.webp"
    },
    {
     "codigo": "LCP040",
     "nombre": "Látex Premium interior/exterior verde manzana",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP040.webp"
    },
    {
     "codigo": "LCP041",
     "nombre": "Látex Premium interior/exterior verde foresta",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP041.webp"
    },
    {
     "codigo": "LCP042",
     "nombre": "Látex Premium interior/exterior verde foresta",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP042.webp"
    },
    {
     "codigo": "LCP043",
     "nombre": "Látex Premium interior/exterior verde foresta",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP043.webp"
    },
    {
     "codigo": "LCP044",
     "nombre": "Látex Premium interior/exterior verde foresta",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP044.webp"
    },
    {
     "codigo": "LCP045",
     "nombre": "Látex Premium interior/exterior gris cemento",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP045.webp"
    },
    {
     "codigo": "LCP046",
     "nombre": "Látex Premium interior/exterior gris cemento",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP046.webp"
    },
    {
     "codigo": "LCP047",
     "nombre": "Látex Premium interior/exterior gris cemento",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP047.webp"
    },
    {
     "codigo": "LCP049",
     "nombre": "Látex Premium interior/exterior negro",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP049.webp"
    },
    {
     "codigo": "LCP050",
     "nombre": "Látex Premium interior/exterior negro",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP050.webp"
    },
    {
     "codigo": "LCP051",
     "nombre": "Látex Premium interior/exterior negro",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP051.webp"
    },
    {
     "codigo": "LCP052",
     "nombre": "Látex Premium interior/exterior negro",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP052.webp"
    },
    {
     "codigo": "PRP012",
     "nombre": "Revestimiento plástico textura media interior/exterior terracota",
     "detalle": "25 kg",
     "grupo": "pint",
     "lista": 160019.61,
     "contado": 132256.21,
     "contado_normal": 132256.21,
     "foto": "PRP012.webp"
    },
    {
     "codigo": "LCP053",
     "nombre": "Látex Premium interior/exterior rosa",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP053.webp"
    },
    {
     "codigo": "LCP054",
     "nombre": "Látex Premium interior/exterior rosa",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP054.webp"
    },
    {
     "codigo": "LCP055",
     "nombre": "Látex Premium interior/exterior rosa",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP055.webp"
    },
    {
     "codigo": "LCP056",
     "nombre": "Látex Premium interior/exterior rosa",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP056.webp"
    },
    {
     "codigo": "LCP057",
     "nombre": "Látex Premium interior/exterior beige",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP057.webp"
    },
    {
     "codigo": "LCP058",
     "nombre": "Látex Premium interior/exterior beige",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP058.webp"
    },
    {
     "codigo": "LCP059",
     "nombre": "Látex Premium interior/exterior beige",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP059.webp"
    },
    {
     "codigo": "LCP060",
     "nombre": "Látex Premium interior/exterior beige",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP060.webp"
    },
    {
     "codigo": "LCP061",
     "nombre": "Látex Premium interior/exterior celeste oscuro",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP061.webp"
    },
    {
     "codigo": "LCP062",
     "nombre": "Látex Premium interior/exterior celeste oscuro",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP062.webp"
    },
    {
     "codigo": "LCP063",
     "nombre": "Látex Premium interior/exterior celeste oscuro",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP063.webp"
    },
    {
     "codigo": "LCP064",
     "nombre": "Látex Premium interior/exterior celeste oscuro",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP064.webp"
    },
    {
     "codigo": "LCP065",
     "nombre": "Látex Premium interior/exterior gris",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 14836.98,
     "contado": 12262.76,
     "contado_normal": 12262.76,
     "foto": "LCP065.webp"
    },
    {
     "codigo": "LCP066",
     "nombre": "Látex Premium interior/exterior gris",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 50904.33,
     "contado": 42072.43,
     "contado_normal": 42072.43,
     "foto": "LCP066.webp"
    },
    {
     "codigo": "LCP067",
     "nombre": "Látex Premium interior/exterior gris",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 123736.7,
     "contado": 102268.38,
     "contado_normal": 102268.38,
     "foto": "LCP067.webp"
    },
    {
     "codigo": "LCP068",
     "nombre": "Látex Premium interior/exterior gris",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP068.webp"
    },
    {
     "codigo": "LCP072",
     "nombre": "Látex Premium interior/exterior gris cemento",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 229511.62,
     "contado": 189691.35,
     "contado_normal": 189691.35,
     "foto": "LCP072.webp"
    }
   ]
  },
  {
   "id": "talento",
   "nombre": "Talento",
   "rubro": "Pinturas",
   "tipo": "contado",
   "chip": "Contado",
   "rotulo": "Contado o transf.",
   "pres": "Lista consumidor final de PalJet al 23/11/2026",
   "desde": "2026-11-29",
   "productos": [
    {
     "codigo": "PFA001",
     "nombre": "Membrana líquida frentes blanca",
     "detalle": "10 l",
     "grupo": "imp",
     "lista": 84632.35,
     "contado": 69948.64,
     "contado_normal": 69948.64,
     "foto": "PFA001.webp",
     "destacado": 5
    },
    {
     "codigo": "PFA002",
     "nombre": "Membrana líquida frentes blanca",
     "detalle": "20 l",
     "grupo": "imp",
     "lista": 164936.99,
     "contado": 136320.42,
     "contado_normal": 136320.42,
     "foto": "PFA002.webp"
    },
    {
     "codigo": "PLT001",
     "nombre": "Látex interior/exterior lavable",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 7434.25,
     "contado": 6144.41,
     "contado_normal": 6144.41,
     "foto": "PLT001.webp",
     "destacado": 1
    },
    {
     "codigo": "PLT002",
     "nombre": "Látex interior/exterior lavable",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 28002.14,
     "contado": 23143.77,
     "contado_normal": 23143.77,
     "foto": "PLT002.webp"
    },
    {
     "codigo": "PLT003",
     "nombre": "Látex interior/exterior lavable",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 61400.39,
     "contado": 50747.42,
     "contado_normal": 50747.42,
     "foto": "PLT003.webp"
    },
    {
     "codigo": "PLT004",
     "nombre": "Látex interior/exterior lavable",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 106661.13,
     "contado": 88155.42,
     "contado_normal": 88155.42,
     "foto": "PLT004.webp"
    },
    {
     "codigo": "PET001",
     "nombre": "Enduido interior/exterior",
     "detalle": "1 l",
     "grupo": "pint",
     "lista": 6241.57,
     "contado": 5158.66,
     "contado_normal": 5158.66,
     "foto": "PET001.webp",
     "destacado": 0
    },
    {
     "codigo": "PET002",
     "nombre": "Enduido interior/exterior",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 18504.71,
     "contado": 15294.14,
     "contado_normal": 15294.14,
     "foto": "PET002.webp"
    },
    {
     "codigo": "PET003",
     "nombre": "Enduido interior/exterior",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 38958.89,
     "contado": 32199.52,
     "contado_normal": 32199.52,
     "foto": "PET003.webp"
    },
    {
     "codigo": "PET004",
     "nombre": "Enduido interior/exterior",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 73051.33,
     "contado": 60376.92,
     "contado_normal": 60376.92,
     "foto": "PET004.webp"
    },
    {
     "codigo": "CMT002",
     "nombre": "Masilla para placas de yeso",
     "detalle": "6 kg",
     "grupo": "pint",
     "lista": 13779.77,
     "contado": 11388.98,
     "contado_normal": 11388.98,
     "foto": "CMT002.webp",
     "destacado": 3
    },
    {
     "codigo": "CMT003",
     "nombre": "Masilla para placas de yeso",
     "detalle": "32 kg",
     "grupo": "pint",
     "lista": 57175.12,
     "contado": 47255.24,
     "contado_normal": 47255.24,
     "foto": "CMT003.webp"
    },
    {
     "codigo": "CMT004",
     "nombre": "Masilla para placas de yeso",
     "detalle": "15 kg",
     "grupo": "pint",
     "lista": 30127.34,
     "contado": 24900.25,
     "contado_normal": 24900.25,
     "foto": "CMT004.webp"
    },
    {
     "codigo": "PMT001",
     "nombre": "Membrana líquida techos en pasta blanco",
     "detalle": "1 kg",
     "grupo": "imp",
     "lista": 10589.8,
     "contado": 8752.47,
     "contado_normal": 8752.47,
     "foto": "PMT001.webp",
     "destacado": 2
    },
    {
     "codigo": "PMT002",
     "nombre": "Membrana líquida techos en pasta blanco",
     "detalle": "4 kg",
     "grupo": "imp",
     "lista": 33396.9,
     "contado": 27602.54,
     "contado_normal": 27602.54,
     "foto": "PMT002.webp"
    },
    {
     "codigo": "PMT003",
     "nombre": "Membrana líquida techos en pasta blanco",
     "detalle": "10 kg",
     "grupo": "imp",
     "lista": 82381.26,
     "contado": 68088.11,
     "contado_normal": 68088.11,
     "foto": "PMT003.webp"
    },
    {
     "codigo": "PMT004",
     "nombre": "Membrana líquida techos en pasta blanco",
     "detalle": "20 kg",
     "grupo": "imp",
     "lista": 154642.52,
     "contado": 127812.04,
     "contado_normal": 127812.04,
     "foto": "PMT004.webp"
    },
    {
     "codigo": "PMT005",
     "nombre": "Membrana líquida techos en pasta rojo",
     "detalle": "1 kg",
     "grupo": "imp",
     "lista": 10589.8,
     "contado": 8752.47,
     "contado_normal": 8752.47,
     "foto": "PMT005.webp"
    },
    {
     "codigo": "PMT006",
     "nombre": "Membrana líquida techos en pasta rojo",
     "detalle": "4 kg",
     "grupo": "imp",
     "lista": 33396.9,
     "contado": 27602.54,
     "contado_normal": 27602.54,
     "foto": "PMT006.webp"
    },
    {
     "codigo": "PMT007",
     "nombre": "Membrana líquida techos en pasta rojo",
     "detalle": "10 kg",
     "grupo": "imp",
     "lista": 82381.32,
     "contado": 68088.16,
     "contado_normal": 68088.16,
     "foto": "PMT007.webp"
    },
    {
     "codigo": "PMT008",
     "nombre": "Membrana líquida techos en pasta rojo",
     "detalle": "20 kg",
     "grupo": "imp",
     "lista": 154642.52,
     "contado": 127812.04,
     "contado_normal": 127812.04,
     "foto": "PMT008.webp"
    },
    {
     "codigo": "PFT002",
     "nombre": "Fijador sellador al agua",
     "detalle": "4 l",
     "grupo": "pint",
     "lista": 17072.51,
     "contado": 14110.43,
     "contado_normal": 14110.43,
     "foto": "PFT002.webp",
     "destacado": 4
    },
    {
     "codigo": "PFT003",
     "nombre": "Fijador sellador al agua",
     "detalle": "10 l",
     "grupo": "pint",
     "lista": 38769.34,
     "contado": 32042.86,
     "contado_normal": 32042.86,
     "foto": "PFT003.webp"
    },
    {
     "codigo": "PFT004",
     "nombre": "Fijador sellador al agua",
     "detalle": "20 l",
     "grupo": "pint",
     "lista": 71678.93,
     "contado": 59242.64,
     "contado_normal": 59242.64,
     "foto": "PFT004.webp"
    }
   ]
  },
  {
   "id": "megaflex",
   "nombre": "Megaflex",
   "rubro": "Impermeabilizantes",
   "tipo": "contado",
   "chip": "Contado",
   "rotulo": "Contado o transf.",
   "pres": "Lista consumidor final de PalJet al 23/11/2026",
   "desde": "2026-11-29",
   "productos": [
    {
     "codigo": "CMM001",
     "nombre": "Membrana asfáltica funda gris No Crack",
     "detalle": "10 m · 35 kg",
     "grupo": "imp",
     "lista": 151377.26,
     "contado": 125113.31,
     "contado_normal": 125113.31,
     "foto": "CMM001.webp",
     "destacado": 4
    },
    {
     "codigo": "CMM005",
     "nombre": "Membrana asfáltica funda verde Geotrans",
     "detalle": "10 m · 40 kg",
     "grupo": "imp",
     "lista": 137557.8,
     "contado": 113691.52,
     "contado_normal": 113691.52,
     "foto": "CMM005.webp"
    },
    {
     "codigo": "CMM006",
     "nombre": "Membrana asfáltica funda verde Geotrans",
     "detalle": "10 m · 36 kg",
     "grupo": "imp",
     "lista": 116019.95,
     "contado": 95890.49,
     "contado_normal": 95890.49,
     "foto": "CMM006.webp",
     "destacado": 3
    },
    {
     "codigo": "PAM001",
     "nombre": "Pintura asfáltica aluminizada",
     "detalle": "1 l",
     "grupo": "imp",
     "lista": 14386.68,
     "contado": 11890.59,
     "contado_normal": 11890.59,
     "foto": "PAM001.webp",
     "destacado": 0
    },
    {
     "codigo": "PEM002",
     "nombre": "Emulsión asfáltica tacho",
     "detalle": "18 l",
     "grupo": "imp",
     "lista": 40303.37,
     "contado": 33310.74,
     "contado_normal": 33310.74,
     "foto": "PEM002.webp",
     "destacado": 1
    },
    {
     "codigo": "CMM007",
     "nombre": "Membrana asfáltica bajo piso funda azul",
     "detalle": "10 m · 35 kg",
     "grupo": "imp",
     "lista": 83682.0,
     "contado": 69163.17,
     "contado_normal": 69163.17,
     "foto": "CMM007.webp",
     "destacado": 2
    },
    {
     "codigo": "CMM008",
     "nombre": "Membrana asfáltica bajo piso funda azul",
     "detalle": "10 m · 40 kg",
     "grupo": "imp",
     "lista": 93515.21,
     "contado": 77290.32,
     "contado_normal": 77290.32,
     "foto": "CMM008.webp"
    }
   ]
  },
  {
   "id": "tinacos",
   "nombre": "Tinacos",
   "rubro": "Tanques",
   "tipo": "contado",
   "chip": "Contado",
   "rotulo": "Contado o transf.",
   "pres": "Lista consumidor final de PalJet al 23/11/2026",
   "desde": "2026-11-29",
   "productos": [
    {
     "codigo": "TNQ002",
     "nombre": "Tanque chato multicapa con equipamiento",
     "detalle": "600 l",
     "grupo": "tan",
     "lista": 497205.03,
     "contado": 410939.96,
     "contado_normal": 410939.96,
     "foto": "TNQ002.webp",
     "destacado": 3
    },
    {
     "codigo": "TNQ003",
     "nombre": "Tanque multicapa con equipamiento arena",
     "detalle": "1100 l",
     "grupo": "tan",
     "lista": 568751.82,
     "contado": 470073.38,
     "contado_normal": 470073.38,
     "foto": "TNQ003.webp"
    },
    {
     "codigo": "TNQ004",
     "nombre": "Tanque multicapa con equipamiento",
     "detalle": "2750 l",
     "grupo": "tan",
     "lista": 1220688.93,
     "contado": 1008899.4,
     "contado_normal": 1008899.4,
     "foto": "TNQ004.webp",
     "destacado": 10
    },
    {
     "codigo": "TNQ005",
     "nombre": "Tanque multicapa con equipamiento",
     "detalle": "400 l",
     "grupo": "tan",
     "lista": 328954.13,
     "contado": 271880.59,
     "contado_normal": 271880.59,
     "foto": "TNQ005.webp",
     "destacado": 0
    },
    {
     "codigo": "TNQ006",
     "nombre": "Tanque multicapa con equipamiento",
     "detalle": "600 l",
     "grupo": "tan",
     "lista": 398555.27,
     "contado": 329405.93,
     "contado_normal": 329405.93,
     "foto": "TNQ006.webp"
    },
    {
     "codigo": "TNQ007",
     "nombre": "Tanque multicapa con equipamiento",
     "detalle": "850 l",
     "grupo": "tan",
     "lista": 496953.96,
     "contado": 410732.45,
     "contado_normal": 410732.45,
     "foto": "TNQ007.webp"
    },
    {
     "codigo": "CIT001",
     "nombre": "Cisterna azul con equipamiento completo",
     "detalle": "400 l",
     "grupo": "tan",
     "lista": 378297.25,
     "contado": 312662.68,
     "contado_normal": 312662.68,
     "foto": "CIT001.webp",
     "destacado": 1
    },
    {
     "codigo": "CIT002",
     "nombre": "Cisterna azul con equipamiento completo",
     "detalle": "600 l",
     "grupo": "tan",
     "lista": 458338.56,
     "contado": 378816.82,
     "contado_normal": 378816.82,
     "foto": "CIT002.webp"
    },
    {
     "codigo": "CIT003",
     "nombre": "Cisterna azul con equipamiento completo",
     "detalle": "850 l",
     "grupo": "tan",
     "lista": 530675.83,
     "contado": 438603.57,
     "contado_normal": 438603.57,
     "foto": "CIT003.webp"
    },
    {
     "codigo": "CIT004",
     "nombre": "Cisterna azul con equipamiento completo",
     "detalle": "1100 l",
     "grupo": "tan",
     "lista": 654064.6,
     "contado": 540584.39,
     "contado_normal": 540584.39,
     "foto": "CIT004.webp"
    },
    {
     "codigo": "CIT005",
     "nombre": "Cisterna azul con equipamiento completo",
     "detalle": "2750 l",
     "grupo": "tan",
     "lista": 1403792.27,
     "contado": 1160234.31,
     "contado_normal": 1160234.31,
     "foto": "CIT005.webp",
     "destacado": 11
    },
    {
     "codigo": "CIT006",
     "nombre": "Cisterna azul abovedada con equipamiento completo",
     "detalle": "1250 l",
     "grupo": "tan",
     "lista": 766700.19,
     "contado": 633677.71,
     "contado_normal": 633677.71,
     "foto": "CIT006.webp",
     "destacado": 7
    },
    {
     "codigo": "TNQ012",
     "nombre": "Tanque chato multicapa con equipamiento",
     "detalle": "1100 l",
     "grupo": "tan",
     "lista": 656350.01,
     "contado": 542473.28,
     "contado_normal": 542473.28,
     "foto": "TNQ012.webp",
     "destacado": 6
    },
    {
     "codigo": "STG001",
     "nombre": "Tanque vertical agroindustrial negro",
     "detalle": "5750 l",
     "grupo": "agro",
     "lista": 3504091.97,
     "contado": 2896132.01,
     "contado_normal": 2896132.01,
     "foto": "STG001.webp"
    },
    {
     "codigo": "STG003",
     "nombre": "Tanque vertical agroindustrial negro",
     "detalle": "8000 l",
     "grupo": "agro",
     "lista": 4891760.14,
     "contado": 4043039.76,
     "contado_normal": 4043039.76,
     "foto": "STG003.webp"
    },
    {
     "codigo": "STG004",
     "nombre": "Tanque vertical agroindustrial negro",
     "detalle": "11000 l",
     "grupo": "agro",
     "lista": 7186613.83,
     "contado": 5939736.33,
     "contado_normal": 5939736.33,
     "foto": "STG004.webp"
    },
    {
     "codigo": "STG005",
     "nombre": "Tanque vertical agroindustrial negro",
     "detalle": "15000 l",
     "grupo": "agro",
     "lista": 9342278.37,
     "contado": 7721393.07,
     "contado_normal": 7721393.07,
     "foto": "STG005.webp"
    },
    {
     "codigo": "STG006",
     "nombre": "Tanque vertical agroindustrial negro",
     "detalle": "26000 l",
     "grupo": "agro",
     "lista": 20527896.97,
     "contado": 16966306.85,
     "contado_normal": 16966306.85,
     "foto": "STG006.webp"
    },
    {
     "codigo": "STG007",
     "nombre": "Tanque vertical agroindustrial negro",
     "detalle": "23000 l",
     "grupo": "agro",
     "lista": 17725662.14,
     "contado": 14650259.76,
     "contado_normal": 14650259.76,
     "foto": "STG007.webp"
    },
    {
     "codigo": "TNQ013",
     "nombre": "Tanque multicapa cuadrado con equipamiento",
     "detalle": "600 l",
     "grupo": "tan",
     "lista": 628559.02,
     "contado": 519504.03,
     "contado_normal": 519504.03,
     "foto": "TNQ013.webp",
     "destacado": 5
    },
    {
     "codigo": "STC002",
     "nombre": "Cámara séptica",
     "detalle": "1250 l",
     "grupo": "sept",
     "lista": 795924.4,
     "contado": 657831.52,
     "contado_normal": 657831.52,
     "foto": "STC002.webp",
     "destacado": 8
    },
    {
     "codigo": "TNQ014",
     "nombre": "Tanque multicapa con equipamiento negro",
     "detalle": "1100 l",
     "grupo": "tan",
     "lista": 540314.23,
     "contado": 446569.71,
     "contado_normal": 446569.71,
     "foto": "TNQ014.webp",
     "destacado": 4
    },
    {
     "codigo": "TNQ015",
     "nombre": "Tanque delgado multicapa con equipamiento",
     "detalle": "500 l",
     "grupo": "tan",
     "lista": 417324.58,
     "contado": 344918.77,
     "contado_normal": 344918.77,
     "foto": "TNQ015.webp",
     "destacado": 2
    },
    {
     "codigo": "TNQ016",
     "nombre": "Tanque multicapa cuadrado con equipamiento",
     "detalle": "1000 l",
     "grupo": "tan",
     "lista": 917970.11,
     "contado": 758702.3,
     "contado_normal": 758702.3,
     "foto": "TNQ016.webp",
     "destacado": 9
    }
   ]
  },
  {
   "id": "peirano",
   "nombre": "Peirano",
   "rubro": "Griferías",
   "tipo": "contado",
   "chip": "Contado",
   "rotulo": "Contado o transf.",
   "pres": "Lista consumidor final de PalJet al 23/11/2026",
   "desde": "2026-11-29",
   "productos": [
    {
     "codigo": "STP002",
     "nombre": "Válvula para mingitorio temporizada Tecno",
     "detalle": "",
     "grupo": "san",
     "lista": 127127.66,
     "contado": 105071.01,
     "contado_normal": 105071.01,
     "foto": "STP002.webp"
    },
    {
     "codigo": "GPR001",
     "nombre": "Grifería de bidet cromo Ares",
     "detalle": "",
     "grupo": "lav",
     "lista": 113120.16,
     "contado": 93493.81,
     "contado_normal": 93493.81,
     "foto": "GPR001.webp"
    },
    {
     "codigo": "GPR002",
     "nombre": "Grifería de bidet Laza",
     "detalle": "",
     "grupo": "lav",
     "lista": 81849.38,
     "contado": 67648.51,
     "contado_normal": 67648.51,
     "foto": "GPR002.webp"
    },
    {
     "codigo": "GPR003",
     "nombre": "Grifería de bidet Renacer",
     "detalle": "",
     "grupo": "lav",
     "lista": 126545.18,
     "contado": 104589.59,
     "contado_normal": 104589.59,
     "foto": "GPR003.webp"
    },
    {
     "codigo": "GPR006",
     "nombre": "Grifería de cocina de mesada monocomando Renacer",
     "detalle": "",
     "grupo": "coc",
     "lista": 96461.49,
     "contado": 79725.42,
     "contado_normal": 79725.42,
     "foto": "GPR006.webp"
    },
    {
     "codigo": "GPR010",
     "nombre": "Grifería de ducha de embutir con transferencia cromo Ares",
     "detalle": "",
     "grupo": "duc",
     "lista": 157010.13,
     "contado": 129768.87,
     "contado_normal": 129768.87,
     "foto": "GPR010.webp"
    },
    {
     "codigo": "GPR011",
     "nombre": "Grifería de ducha blanco/cromo de embutir con transferencia Laza",
     "detalle": "",
     "grupo": "duc",
     "lista": 112959.55,
     "contado": 93361.07,
     "contado_normal": 93361.07,
     "foto": "GPR011.webp"
    },
    {
     "codigo": "GPR012",
     "nombre": "Grifería de ducha con transferencia Renacer",
     "detalle": "",
     "grupo": "duc",
     "lista": 175232.89,
     "contado": 144829.98,
     "contado_normal": 144829.98,
     "foto": "GPR012.webp"
    },
    {
     "codigo": "GPR013",
     "nombre": "Grifería de embutir cocina de pared cromo pico alto Renacer",
     "detalle": "",
     "grupo": "coc",
     "lista": 127148.95,
     "contado": 105088.61,
     "contado_normal": 105088.61,
     "foto": "GPR013.webp"
    },
    {
     "codigo": "GPR014",
     "nombre": "Grifería de lavatorio cromo Ares",
     "detalle": "",
     "grupo": "lav",
     "lista": 110599.88,
     "contado": 91410.8,
     "contado_normal": 91410.8,
     "foto": "GPR014.webp"
    },
    {
     "codigo": "GPR015",
     "nombre": "Grifería de lavatorio cromo monocomando pico alto Bilbao",
     "detalle": "",
     "grupo": "lav",
     "lista": 307210.01,
     "contado": 253909.07,
     "contado_normal": 253909.07,
     "foto": "GPR015.webp",
     "destacado": 4
    },
    {
     "codigo": "GPR016",
     "nombre": "Grifería de lavatorio cromo monocomando pico bajo Bilbao",
     "detalle": "",
     "grupo": "lav",
     "lista": 171525.58,
     "contado": 141765.89,
     "contado_normal": 141765.89,
     "foto": "GPR016.webp"
    },
    {
     "codigo": "GPR017",
     "nombre": "Grifería de lavatorio Laza",
     "detalle": "",
     "grupo": "lav",
     "lista": 85930.75,
     "contado": 71021.76,
     "contado_normal": 71021.76,
     "foto": "GPR017.webp"
    },
    {
     "codigo": "GPR018",
     "nombre": "Grifería de lavatorio Renacer",
     "detalle": "",
     "grupo": "lav",
     "lista": 119610.79,
     "contado": 98858.32,
     "contado_normal": 98858.32,
     "foto": "GPR018.webp"
    },
    {
     "codigo": "SCR001",
     "nombre": "Set de accesorios de 6 piezas línea 3000",
     "detalle": "",
     "grupo": "acb",
     "lista": 118373.1,
     "contado": 97835.37,
     "contado_normal": 97835.37,
     "foto": "SCR001.webp"
    },
    {
     "codigo": "GPR024",
     "nombre": "Grifería de cocina de pared exterior blanco/cromo Ares",
     "detalle": "",
     "grupo": "coc",
     "lista": 126270.07,
     "contado": 104362.21,
     "contado_normal": 104362.21,
     "foto": "GPR024.webp"
    },
    {
     "codigo": "GPR025",
     "nombre": "Grifería de lavatorio con cerámico Velvet Black",
     "detalle": "",
     "grupo": "lav",
     "lista": 308703.04,
     "contado": 255143.06,
     "contado_normal": 255143.06,
     "foto": "GPR025.webp",
     "destacado": 3
    },
    {
     "codigo": "GPR026",
     "nombre": "Grifería de lavatorio pared con cerámico Velvet Black",
     "detalle": "",
     "grupo": "lav",
     "lista": 277041.23,
     "contado": 228974.58,
     "contado_normal": 228974.58,
     "foto": "GPR026.webp",
     "destacado": 7
    },
    {
     "codigo": "GPR027",
     "nombre": "Grifería de bidet con cerámico Velvet Black",
     "detalle": "",
     "grupo": "lav",
     "lista": 277041.23,
     "contado": 228974.58,
     "contado_normal": 228974.58,
     "foto": "GPR027.webp",
     "destacado": 8
    },
    {
     "codigo": "GPR028",
     "nombre": "Grifería de ducha de embutir con transferencia con cerámico Velvet Black",
     "detalle": "",
     "grupo": "duc",
     "lista": 389442.36,
     "contado": 321874.11,
     "contado_normal": 321874.11,
     "foto": "GPR028.webp",
     "destacado": 1
    },
    {
     "codigo": "GPR029",
     "nombre": "Grifería de cocina de mesada monocomando Velvet Black",
     "detalle": "",
     "grupo": "coc",
     "lista": 263822.63,
     "contado": 218049.4,
     "contado_normal": 218049.4,
     "foto": "GPR029.webp",
     "destacado": 9
    },
    {
     "codigo": "GPR030",
     "nombre": "Grifería de cocina de mesada con cerámico Velvet Black",
     "detalle": "",
     "grupo": "coc",
     "lista": 280777.69,
     "contado": 232062.76,
     "contado_normal": 232062.76,
     "foto": "GPR030.webp",
     "destacado": 6
    },
    {
     "codigo": "GPR031",
     "nombre": "Grifería de cocina de mesada pico cuadrado monocomando Marbella",
     "detalle": "",
     "grupo": "coc",
     "lista": 206470.01,
     "contado": 170647.46,
     "contado_normal": 170647.46,
     "foto": "GPR031.webp"
    },
    {
     "codigo": "GPR032",
     "nombre": "Grifería de lavatorio con cerámico Adra",
     "detalle": "",
     "grupo": "lav",
     "lista": 115735.28,
     "contado": 95655.21,
     "contado_normal": 95655.21,
     "foto": "GPR032.webp"
    },
    {
     "codigo": "GPR033",
     "nombre": "Grifería de lavatorio pared con cerámico Adra",
     "detalle": "",
     "grupo": "lav",
     "lista": 165731.08,
     "contado": 136976.74,
     "contado_normal": 136976.74,
     "foto": "GPR033.webp"
    },
    {
     "codigo": "GPR034",
     "nombre": "Grifería de bidet con cerámico Adra",
     "detalle": "",
     "grupo": "lav",
     "lista": 125126.92,
     "contado": 103417.4,
     "contado_normal": 103417.4,
     "foto": "GPR034.webp"
    },
    {
     "codigo": "GPR035",
     "nombre": "Grifería de ducha de embutir con transferencia con cerámico Adra",
     "detalle": "",
     "grupo": "duc",
     "lista": 172044.19,
     "contado": 142194.52,
     "contado_normal": 142194.52,
     "foto": "GPR035.webp"
    },
    {
     "codigo": "GPR036",
     "nombre": "Grifería de ducha de embutir con transferencia con cerámico plus Adra",
     "detalle": "",
     "grupo": "duc",
     "lista": 214542.7,
     "contado": 177319.54,
     "contado_normal": 177319.54,
     "foto": "GPR036.webp"
    },
    {
     "codigo": "GPR038",
     "nombre": "Grifería de cocina de mesada pico redondo monocomando Marbella",
     "detalle": "",
     "grupo": "coc",
     "lista": 206470.01,
     "contado": 170647.46,
     "contado_normal": 170647.46,
     "foto": "GPR038.webp"
    },
    {
     "codigo": "GPR039",
     "nombre": "Grifería de cocina de mesada monocomando Toledo",
     "detalle": "",
     "grupo": "coc",
     "lista": 320975.19,
     "contado": 265285.99,
     "contado_normal": 265285.99,
     "foto": "GPR039.webp",
     "destacado": 2
    },
    {
     "codigo": "GPR040",
     "nombre": "Grifería de cocina de mesada monocomando Santander",
     "detalle": "",
     "grupo": "coc",
     "lista": 250647.61,
     "contado": 207160.25,
     "contado_normal": 207160.25,
     "foto": "GPR040.webp",
     "destacado": 10
    },
    {
     "codigo": "GPR041",
     "nombre": "Grifería de cocina de mesada monocomando con duchador Vigo",
     "detalle": "",
     "grupo": "coc",
     "lista": 610335.76,
     "contado": 504442.51,
     "contado_normal": 504442.51,
     "foto": "GPR041.webp",
     "destacado": 0
    },
    {
     "codigo": "GPR042",
     "nombre": "Grifería de cocina de mesada monocomando Betis",
     "detalle": "",
     "grupo": "coc",
     "lista": 71327.15,
     "contado": 58951.89,
     "contado_normal": 58951.89,
     "foto": "GPR042.webp"
    },
    {
     "codigo": "GPR043",
     "nombre": "Grifería de cocina de mesada monocomando Adra",
     "detalle": "",
     "grupo": "coc",
     "lista": 156405.41,
     "contado": 129269.07,
     "contado_normal": 129269.07,
     "foto": "GPR043.webp"
    },
    {
     "codigo": "GPR044",
     "nombre": "Grifería de cocina de mesada monocomando Negro Colors",
     "detalle": "",
     "grupo": "coc",
     "lista": 189005.25,
     "contado": 156212.84,
     "contado_normal": 156212.84,
     "foto": "GPR044.webp"
    },
    {
     "codigo": "GPR045",
     "nombre": "Grifería de cocina de mesada monocomando Black Colors",
     "detalle": "",
     "grupo": "coc",
     "lista": 227373.51,
     "contado": 187924.21,
     "contado_normal": 187924.21,
     "foto": "GPR045.webp",
     "destacado": 11
    },
    {
     "codigo": "GPR046",
     "nombre": "Grifería de cocina de mesada monocomando Dique",
     "detalle": "",
     "grupo": "coc",
     "lista": 75791.16,
     "contado": 62641.39,
     "contado_normal": 62641.39,
     "foto": "GPR046.webp"
    },
    {
     "codigo": "GPR066",
     "nombre": "Grifería de lavatorio alto temporizado Tecno",
     "detalle": "",
     "grupo": "lav",
     "lista": 157373.4,
     "contado": 130069.12,
     "contado_normal": 130069.12,
     "foto": "GPR066.webp"
    },
    {
     "codigo": "GPR050",
     "nombre": "Grifería de lavatorio cromo plus Verín",
     "detalle": "",
     "grupo": "lav",
     "lista": 93848.67,
     "contado": 77565.93,
     "contado_normal": 77565.93,
     "foto": "GPR050.webp"
    },
    {
     "codigo": "GPR051",
     "nombre": "Grifería de bidet cromo plus Verín",
     "detalle": "",
     "grupo": "lav",
     "lista": 105221.22,
     "contado": 86965.34,
     "contado_normal": 86965.34,
     "foto": "GPR051.webp"
    },
    {
     "codigo": "GPR052",
     "nombre": "Grifería de ducha de embutir con transferencia cromo plus Verín",
     "detalle": "",
     "grupo": "duc",
     "lista": 118108.8,
     "contado": 97616.92,
     "contado_normal": 97616.92,
     "foto": "GPR052.webp"
    },
    {
     "codigo": "GPR053",
     "nombre": "Grifería de cocina de mesada cromo plus Verín",
     "detalle": "",
     "grupo": "coc",
     "lista": 104466.71,
     "contado": 86341.74,
     "contado_normal": 86341.74,
     "foto": "GPR053.webp"
    },
    {
     "codigo": "GPR054",
     "nombre": "Grifería de lavatorio Cromo Y",
     "detalle": "",
     "grupo": "lav",
     "lista": 112948.6,
     "contado": 93352.02,
     "contado_normal": 93352.02,
     "foto": "GPR054.webp"
    },
    {
     "codigo": "GPR055",
     "nombre": "Grifería de bidet Cromo Y",
     "detalle": "",
     "grupo": "lav",
     "lista": 115366.59,
     "contado": 95350.49,
     "contado_normal": 95350.49,
     "foto": "GPR055.webp"
    },
    {
     "codigo": "GPR056",
     "nombre": "Grifería de ducha de embutir con transferencia Cromo Y",
     "detalle": "",
     "grupo": "duc",
     "lista": 160106.47,
     "contado": 132328.0,
     "contado_normal": 132328.0,
     "foto": "GPR056.webp"
    },
    {
     "codigo": "GPR062",
     "nombre": "Grifería de lavatorio monocomando Lugo",
     "detalle": "",
     "grupo": "lav",
     "lista": 80510.38,
     "contado": 66541.83,
     "contado_normal": 66541.83,
     "foto": "GPR062.webp"
    },
    {
     "codigo": "GPR063",
     "nombre": "Grifería de bidet monocomando Lugo",
     "detalle": "",
     "grupo": "lav",
     "lista": 140039.34,
     "contado": 115742.51,
     "contado_normal": 115742.51,
     "foto": "GPR063.webp"
    },
    {
     "codigo": "GPR064",
     "nombre": "Grifería de ducha exterior con transferencia monocomando Lugo",
     "detalle": "",
     "grupo": "duc",
     "lista": 124629.3,
     "contado": 103006.12,
     "contado_normal": 103006.12,
     "foto": "GPR064.webp"
    },
    {
     "codigo": "GPR065",
     "nombre": "Grifería monocomando cocina de pared exterior Bilbao",
     "detalle": "",
     "grupo": "coc",
     "lista": 182044.68,
     "contado": 150459.93,
     "contado_normal": 150459.93,
     "foto": "GPR065.webp"
    },
    {
     "codigo": "STP001",
     "nombre": "Válvula para inodoro temporizada Tecno",
     "detalle": "",
     "grupo": "san",
     "lista": 280851.39,
     "contado": 232123.67,
     "contado_normal": 232123.67,
     "foto": "STP001.webp",
     "destacado": 5
    },
    {
     "codigo": "GPR067",
     "nombre": "Grifería de cocina de pared exterior cromo Ares",
     "detalle": "",
     "grupo": "coc",
     "lista": 137150.99,
     "contado": 113355.29,
     "contado_normal": 113355.29,
     "foto": "GPR067.webp"
    },
    {
     "codigo": "GPR069",
     "nombre": "Grifería de lavatorio cromo con cerámico Marbella",
     "detalle": "",
     "grupo": "lav",
     "lista": 146396.14,
     "contado": 120996.41,
     "contado_normal": 120996.41,
     "foto": "GPR069.webp"
    },
    {
     "codigo": "GPR070",
     "nombre": "Grifería de bidet cromo con cerámico Marbella",
     "detalle": "",
     "grupo": "lav",
     "lista": 125429.74,
     "contado": 103667.68,
     "contado_normal": 103667.68,
     "foto": "GPR070.webp"
    },
    {
     "codigo": "GPR071",
     "nombre": "Grifería de ducha cromo de embutir con transferencia con cerámico Marbella",
     "detalle": "",
     "grupo": "duc",
     "lista": 197343.52,
     "contado": 163104.42,
     "contado_normal": 163104.42,
     "foto": "GPR071.webp"
    }
   ]
  },
  {
   "id": "roca",
   "nombre": "Roca",
   "rubro": "Sanitarios",
   "tipo": "contado",
   "chip": "Contado",
   "rotulo": "Contado o transf.",
   "pres": "Lista consumidor final de PalJet al 23/11/2026",
   "desde": "2026-11-29",
   "productos": [
    {
     "codigo": "LRM001",
     "nombre": "Bidet 3 agujeros Mónaco",
     "detalle": "",
     "grupo": "san",
     "lista": 212901.32,
     "contado": 175962.94,
     "contado_normal": 175962.94,
     "foto": "LRM001.webp",
     "destacado": 2
    },
    {
     "codigo": "LRM002",
     "nombre": "Bidet 1 agujero Mónaco",
     "detalle": "",
     "grupo": "san",
     "lista": 212901.32,
     "contado": 175962.94,
     "contado_normal": 175962.94,
     "foto": "LRM002.webp",
     "destacado": 3
    },
    {
     "codigo": "LRM006",
     "nombre": "Inodoro corto Mónaco",
     "detalle": "",
     "grupo": "san",
     "lista": 275062.03,
     "contado": 227338.77,
     "contado_normal": 227338.77,
     "foto": "LRM006.webp",
     "destacado": 0
    },
    {
     "codigo": "LRM009",
     "nombre": "Depósito apoyo Mónaco",
     "detalle": "",
     "grupo": "san",
     "lista": 265243.7,
     "contado": 219223.92,
     "contado_normal": 219223.92,
     "foto": "LRM009.webp",
     "destacado": 1
    }
   ]
  },
  {
   "id": "oblak",
   "nombre": "Oblak",
   "rubro": "Puertas",
   "tipo": "contado",
   "chip": "Contado",
   "rotulo": "Contado o transf.",
   "pres": "Lista consumidor final de PalJet al 23/11/2026",
   "desde": "2026-11-29",
   "productos": [
    {
     "codigo": "APT001",
     "nombre": "Puerta placa Tekstura blanco",
     "detalle": "0,70 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT001.webp",
     "destacado": 1
    },
    {
     "codigo": "APT002",
     "nombre": "Puerta placa Tekstura blanco",
     "detalle": "0,70 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT002.webp"
    },
    {
     "codigo": "APT003",
     "nombre": "Puerta placa Tekstura wengue",
     "detalle": "0,70 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT003.webp",
     "destacado": 2
    },
    {
     "codigo": "APT004",
     "nombre": "Puerta placa Tekstura wengue",
     "detalle": "0,70 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT004.webp"
    },
    {
     "codigo": "APT005",
     "nombre": "Puerta placa Tekstura roble natural",
     "detalle": "0,70 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT005.webp",
     "destacado": 3
    },
    {
     "codigo": "APT006",
     "nombre": "Puerta placa Tekstura roble natural",
     "detalle": "0,70 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT006.webp"
    },
    {
     "codigo": "APT007",
     "nombre": "Puerta placa Tekstura nevada",
     "detalle": "0,70 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT007.webp",
     "destacado": 4
    },
    {
     "codigo": "APT008",
     "nombre": "Puerta placa Tekstura nevada",
     "detalle": "0,70 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT008.webp"
    },
    {
     "codigo": "APT009",
     "nombre": "Puerta placa Tekstura nogal",
     "detalle": "0,70 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT009.webp",
     "destacado": 5
    },
    {
     "codigo": "APT010",
     "nombre": "Puerta placa Tekstura nogal",
     "detalle": "0,70 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT010.webp"
    },
    {
     "codigo": "APT011",
     "nombre": "Puerta placa Tekstura grafito",
     "detalle": "0,70 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT011.webp",
     "destacado": 6
    },
    {
     "codigo": "APT012",
     "nombre": "Puerta placa Tekstura grafito",
     "detalle": "0,70 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "APT012.webp"
    },
    {
     "codigo": "APT013",
     "nombre": "Puerta placa Tekstura blanco",
     "detalle": "0,80 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT013.webp"
    },
    {
     "codigo": "APT014",
     "nombre": "Puerta placa Tekstura blanco",
     "detalle": "0,80 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT014.webp"
    },
    {
     "codigo": "APT015",
     "nombre": "Puerta placa Tekstura wengue",
     "detalle": "0,80 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT015.webp"
    },
    {
     "codigo": "APT016",
     "nombre": "Puerta placa Tekstura wengue",
     "detalle": "0,80 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT016.webp"
    },
    {
     "codigo": "APT017",
     "nombre": "Puerta placa Tekstura roble natural",
     "detalle": "0,80 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT017.webp"
    },
    {
     "codigo": "APT018",
     "nombre": "Puerta placa Tekstura roble natural",
     "detalle": "0,80 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT018.webp"
    },
    {
     "codigo": "APT019",
     "nombre": "Puerta placa Tekstura nevada",
     "detalle": "0,80 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT019.webp"
    },
    {
     "codigo": "APT020",
     "nombre": "Puerta placa Tekstura nevada",
     "detalle": "0,80 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT020.webp"
    },
    {
     "codigo": "APT021",
     "nombre": "Puerta placa Tekstura nogal",
     "detalle": "0,80 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT021.webp"
    },
    {
     "codigo": "APT022",
     "nombre": "Puerta placa Tekstura nogal",
     "detalle": "0,80 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT022.webp"
    },
    {
     "codigo": "APT023",
     "nombre": "Puerta placa Tekstura grafito",
     "detalle": "0,80 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT023.webp"
    },
    {
     "codigo": "APT024",
     "nombre": "Puerta placa Tekstura grafito",
     "detalle": "0,80 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT024.webp"
    },
    {
     "codigo": "ATP023",
     "nombre": "Puerta placa Tekstura cedro",
     "detalle": "0,70 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "ATP023.webp",
     "destacado": 7
    },
    {
     "codigo": "ATP024",
     "nombre": "Puerta placa Tekstura cedro",
     "detalle": "0,70 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 564744.01,
     "contado": 466760.92,
     "contado_normal": 466760.92,
     "foto": "ATP024.webp"
    },
    {
     "codigo": "ATP025",
     "nombre": "Puerta placa Tekstura cedro",
     "detalle": "0,80 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "ATP025.webp"
    },
    {
     "codigo": "APT029",
     "nombre": "Puerta placa Tekstura cedro",
     "detalle": "0,80 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 569306.15,
     "contado": 470531.53,
     "contado_normal": 470531.53,
     "foto": "APT029.webp"
    },
    {
     "codigo": "APT030",
     "nombre": "Puerta placa Practika blanco",
     "detalle": "0,70 m · apertura derecha · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 324556.27,
     "contado": 268245.76,
     "contado_normal": 268245.76,
     "foto": "APT030.webp",
     "destacado": 0
    },
    {
     "codigo": "APT031",
     "nombre": "Puerta placa Practika blanco",
     "detalle": "0,70 m · apertura izquierda · marco de madera de 15 cm",
     "grupo": "abe",
     "lista": 324556.27,
     "contado": 268245.76,
     "contado_normal": 268245.76,
     "foto": "APT031.webp"
    }
   ]
  }
 ]
};
