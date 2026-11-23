# Don Coco — sitio web

Sitio de **Don Coco, corralón y ferretería** (Argentina). Landing de una página que lleva a pedir por WhatsApp. Respetar siempre el manual de identidad: este archivo resume lo que hace falta para el código.

## Cómo está hecho

- HTML, CSS y JavaScript puros. **Sin frameworks, sin npm, sin paso de compilación.** Lo que está en la carpeta es exactamente lo que se publica.
- Se publica en Hostinger con su función Git: cada `push` a la rama `main` actualiza el sitio en vivo. No hacer push a `main` sin que el usuario lo pida.
- El repositorio entero queda en `public_html`. El `.htaccess` bloquea `CLAUDE.md`, `README.md` y archivos ocultos; si se agrega otro archivo interno, bloquearlo ahí también.

```
index.html              página principal (rutas relativas: assets/...)
jadever.html            herramientas Jadever con precios (evento del 17/11/2026 y lista de artículos)
club.html               página del Club Don Coco (programa de beneficios)
black-coco.html         Black Coco (26 al 28/11/2026): precios por marca (Jadever, Lusqtoff, Mozart, TOTAL y FV)
precios.html            la misma lista desde el 29/11, con el precio de contado o transferencia de siempre
404.html                página de error (rutas absolutas: /assets/...)
assets/css/tokens.css   colores, tipografías, radios, sombras: única fuente de verdad
assets/css/styles.css   estilos: base · utilidades · componentes · secciones
assets/css/club.css     estilos solo de club.html (niveles, sorteo, preguntas; las tarjetas del Club están en styles.css)
assets/css/jadever.css  estilos solo de jadever.html (portada del evento, lista de precios); black-coco.html también lo usa
assets/css/black-coco.css  estilos solo de black-coco.html (pestañas de marcas, buscador, artículos sin foto)
assets/js/main.js       menú de celular, reparto de WhatsApp, vitrina del hero, animaciones, aviso de datos faltantes
assets/js/vigencia.js   saca lo vencido por fecha (data-hasta / data-desde); va antes que todos los demás scripts
assets/js/promos-bancarias.js  promos con tarjeta: única fuente (sección #tarjetas y diapositivas de la vitrina)
assets/js/promos.js     arma #tarjetas y suma a la vitrina las promos con vitrina: true; va antes que main.js
assets/js/jadever-productos.js  artículos y precios Jadever: única fuente (la lista y los destacados salen de acá)
assets/js/jadever.js    arma la lista de jadever.html y los destacados del inicio; se carga antes que main.js
assets/js/black-coco-productos.js  artículos y precios de Black Coco por marca: única fuente
assets/js/black-coco.js arma black-coco.html (pestañas, 12 destacados por marca, lista, buscador); se carga antes que main.js
assets/img/logo/        todas las versiones del logo en SVG
assets/img/iconos/      favicon e íconos de app
assets/img/fotos/       fotos reales del corralón (salón, mostrador, góndola Jadever), noviembre 2026
assets/img/pagos/       logos oficiales de tarjetas y bancos para las promos (ver LEEME.txt)
assets/img/ofertas/     fotos de productos en oferta (hoy sin uso; ver LEEME.txt)
assets/img/jadever/     el dibujo (SVG) y la foto de cada artículo Jadever; las fotos van con el código como nombre (ver LEEME.txt)
assets/img/black-coco/  fotos de los 12 destacados de cada marca de Black Coco (<CÓDIGO>.webp, 800 px)
assets/img/rubros/      ilustraciones de los rubros del catálogo (SVG, una por cada data-rubro)
assets/img/club/        logos del Club Don Coco (SVG) y foto del premio del mes
assets/img/marcas/      logos oficiales en blanco de Jadever, Lusqtoff, TOTAL, Mozart y FV (van sobre placa negra; no recolorear)
carteleria/             piezas gráficas para imprimir (no es parte del sitio: el .htaccess la bloquea)
.htaccess               HTTPS, caché, compresión, 404, bloqueo de archivos internos
```

## Catálogo

La sección `#categorias` muestra los rubros (`.rubro`), sin artículos: bloque amarillo con la ilustración del rubro (`assets/img/rubros/<data-rubro>.svg`) + panel que se pone rojo al pasar el mouse. Cada tarjeta manda a cotizar por WhatsApp. Los artículos se van a cargar cuando se conecte el sitio con **Paljet** (el sistema de gestión del corralón); cada tarjeta tiene `data-rubro` para enlazarla con su rubro de Paljet. Hasta entonces no inventar productos ni precios. La única excepción son las herramientas Jadever (ver más abajo), que tienen artículos y precios reales cargados desde un presupuesto del sistema.

## Datos pendientes

Los datos reales del negocio están como marcadores `{{ASI}}` (ej. `{{WHATSAPP}}`, `{{DIRECCION}}`). La lista completa y el formato de cada uno está en `README.md`. Cuando el usuario pase un dato, reemplazarlo en **todos** los archivos (`index.html`, `jadever.html`, `club.html`, `404.html`, `robots.txt`, `sitemap.xml`). Al abrir el sitio en local, la consola del navegador avisa cuáles faltan. No inventar datos: si falta uno, preguntarlo.

## Marca

**Colores** (usar siempre las variables de `tokens.css`, nunca hex sueltos en `styles.css`):
- `--amarillo` #FFE500: insignia, precios, destacados. Texto encima: `--negro`.
- `--rojo` #E30613: acción y fondo de marca. Texto encima: `--blanco` (o amarillo en títulos grandes).
- `--rojo-profundo` #B8000F: hover del rojo; texto rojo chico sobre fondos claros.
- `--negro` #141414 texto y footer · `--grafito` #45413C texto secundario · `--hormigon` #8C877F solo bordes · `--cemento` #F2EEE7 secciones alternas.
- `--verde-stock` #1F7A3A solo para "En stock", siempre con la palabra.
- Proporción aproximada: amarillo 30 % · rojo 25 % · negro 15 % · cemento/blanco 30 %.

**Tipografía**: Montserrat (500 texto, 800 subtítulos, 900 titulares en mayúsculas con tracking negativo). Barlow Condensed (700–800) para precios, botones, chips, rótulos y cintas, en mayúsculas.

**Sistema gráfico** (usar estos recursos, no inventar otros):
- El techo: chevron a 47° (`#i-techo`) delante de los antetítulos y en la cinta.
- La etiqueta de precio (`.etiqueta` dentro de `.etiqueta-sombra`): amarilla, con agujero, precio en Barlow Condensed.
- La cinta de obra (`.rayas`): franjas amarillo/negro a 47°, para separar bloques.
- Estilo limpio, no "retro": sin bordes negros gruesos en tarjetas y botones planos (sin sombra). La sombra dura de cartel (`--sombra-bloque`) queda solo para las etiquetas de precio y las tarjetas del Club. Las tarjetas usan `--sombra-suave` al pasar el mouse; sobre la foto del hero, `--sombra-flotante`.
- Cantos rectos en bloques y cintas; radio 4px en botones, 8px en tarjetas; píldora solo en el botón flotante de WhatsApp.
- Nada de degradados, emojis, ni íconos de librerías externas: íconos de interfaz en SVG de trazo, `stroke-linecap: square`.
- Ilustraciones de rubro (`assets/img/rubros/`): objetos reconocibles en plano con volumen, lienzo de 96 × 96, solo colores de la paleta. Luz de arriba a la izquierda: la cara en sombra va un tono más oscuro (rojo → rojo profundo, blanco → cemento, grafito → negro), sombra al piso (negro al 15 %), sin contornos ni degradados. Un rubro nuevo se dibuja con estas mismas reglas.

**Logo**: archivos en `assets/img/logo/`. Sobre rojo: `don-coco-logo-amarillo-blanco.svg`. Sobre negro: el mismo o `-blanco`. Sobre blanco/cemento: `-principal-rojo` o `-negro`. Mínimo 120 px de ancho (completo), 24 px (isotipo). No deformar, recolorear, ni agregar efectos.

**Voz**: español rioplatense con voseo ("pedí", "mandanos", "vení"). Directa, cercana, de mostrador. Frases cortas. Sin exclamaciones de más ni tecnicismos de marketing. Acentos siempre (CORRALÓN Y FERRETERÍA).

## Club Don Coco

Programa de beneficios del corralón. Página propia: `club.html`. Estas son las reglas reales (actualizadas el 15/11/2026; no agregar beneficios, plazos ni condiciones que no estén acá):

- **Tarjeta de pases** (para todos): cada $100.000 de compra suma 1 pase, en una compra o en varias. Con 5 pases, $50.000 en nota de crédito para pinturas, herramientas y terminaciones. Hasta 2 cupones por mes, acumulables (se pueden usar juntos). Pases y cupones vencen a fin del mes siguiente. No suman el envío ni las compras con precio especial. La tarjeta se pide en caja.
- **Sorteo mensual**: participan los que completan una tarjeta dentro del mes y cualquier mayor de 18 que pida un cupón gratis en caja o por WhatsApp (uno por persona). **Siempre decir "Sin obligación de compra. Bases en el local".** Premio: una herramienta eléctrica de primera marca. Se sortea en vivo por Instagram el anteúltimo día hábil del mes, a las 11 h. Premio y fecha van en la ficha del sorteo de `club.html` (`<dd>` de "Premio" y "Fecha"); cada mes se cambian a mano junto con la foto `assets/img/club/premio-del-mes.webp`. Noviembre 2026: sábado 28/11 a las 11 h, hidrolavadora Lusqtoff 1200 W (XXC003) sola, sin la manguera del combo (confirmado por Jesús el 22/11; antes figuraba el Taladro Hamilton). En la v3 la diapositiva del hero usa la foto recortada sin fondo (`premio-del-mes.webp`, 579 × 900); en la web actual (v2, `club.html`) el premio y la hora ya están cambiados en la copia de trabajo, con la foto sobre fondo rojo (980 × 1290), y faltan publicarse. Las bases del local las actualiza Jesús.
- **Cliente Club**: completar una tarjeta de pases y hacer una compra de $600.000 o más. Precio Club en todas sus compras, descuentos especiales pagando en efectivo (nunca poner el porcentaje; transferencia y débito no tienen ese descuento), envío prioritario y Tarjeta Club. Se mantiene con una compra de $600.000 o más por trimestre. **El Club no incluye envío gratis:** el envío se cobra según la zona.
- **Envío prioritario (24 a 48 h)**: solo clientes Club y Profesionales. Ya no se dice "con la tarjeta de pases tu envío sale en 24 a 48 h".
- **Profesionales Don Coco**: albañiles, maestros mayores de obra, plomeros, gasistas, electricistas, pintores, herreros y arquitectos. Se registran en caja. Por cada cliente que recomiendan y compra $600.000 o más, $50.000 en nota de crédito (hasta 2 por mes). Envío prioritario y sus compras suman pases.
- **Bono inversor**: compra única de más de $5.000.000 = 1% en nota de crédito para la próxima compra.

**Marca del Club**: el logo es "club" en minúscula con la u convertida en casita (techo y chimenea de Don Coco) y DON COCO debajo. Usar siempre los SVG de `assets/img/club/`, nunca rearmarlo con texto:
- Sobre blanco, cemento o amarillo: `club-don-coco-apilado-claro.svg` o `club-don-coco-horizontal-claro.svg`.
- Sobre rojo o negro: `club-don-coco-apilado-oscuro.svg` o `club-don-coco-horizontal-oscuro.svg`.
- Una tinta: versiones `-negro` y `-blanco`.
- Nada de estética de club deportivo: sin escudos, estrellas, sellos ni camisetas. No usar las palabras "socio" ni "carnet": se dice "cliente Club", "Tarjeta Club", "Precio Club", "N.º de cliente", "Cliente desde".

**En el resto del sitio**: el Club tiene que estar en el menú principal y en el footer de todas las páginas (link "Club" a `club.html`), y en el inicio con un bloque corto que presenta la tarjeta de pases ("5 pases = $50.000") y lleva a `club.html`. `club.html` tiene una sección `#profesionales` (Profesionales Don Coco).

## Cartelería (`carteleria/`)

Piezas para imprimir del local: cartelería, plantillas de precio y piezas del Club. `carteleria/index.html` es la galería; cada pieza es un HTML independiente en `carteleria/piezas/<grupo>/` con su tamaño exacto (A4 = 794 × 1123 px, A3 = 1123 × 1587 px, A6 = 397 × 559 px, góndola 378 × 189 px; la tarjeta de pases se imprime a 9 × 5 cm).
- Se ven con Live Server y se imprimen con el botón "Imprimir o guardar PDF" (márgenes: ninguno; gráficos de fondo: sí).
- Acá **sí** se usan estilos inline: son piezas cerradas, cada una con su diseño. No mover ni cambiar medidas sin que lo pida el usuario.
- Lo que está entre [corchetes] se completa antes de imprimir (producto, precio, vigencia, nombre del ganador...).
- La carpeta no se publica: el `.htaccess` la bloquea en el hosting.

## Reglas de código

- Clases en español con el patrón `bloque__elemento--variante` (ej. `.producto__nombre`, `.btn--rojo`). Sin estilos inline.
- Todo enlace de pedido va a `https://wa.me/{{WHATSAPP}}?text=...` con un mensaje prearmado y codificado (`%20`, `%2C`, `%C3%A1`...).
- Accesibilidad: un solo `h1`; botones reales (`<button>`, `<a href>`); `alt` en imágenes con contenido; SVG decorativos con `aria-hidden="true"`; contraste mínimo 4.5:1; áreas táctiles de 44 px o más.
- Fotos: WebP, máximo 1600 px de ancho y ~250 KB, con `width`, `height` y `loading="lazy"` (salvo la del hero).
- Mobile primero: todo debe verse bien a 390 px de ancho, sin scroll horizontal.

## Antes de dar algo por terminado

1. Abrir con Live Server y revisar a 390 px y a 1440 px de ancho.
2. Consola del navegador sin errores (el aviso de datos faltantes es esperable hasta completarlos).
3. Probar el menú de celular y que los botones de WhatsApp abran con el mensaje correcto.

## Portada (hero)

Foto de fondo oscurecida (v3: velo negro de 76 a 88 %): el salón del corralón, foto propia del 18/11 (`assets/img/fotos/hero-salon.webp`, 1600 × 867; en celular `hero-salon-v.webp`, vertical, con `<picture>`). Texto fijo a la izquierda ("Todo para tu obra, en un solo lugar") y a la derecha la **vitrina** (`[data-carrusel]`): tarjetas que rotan cada 5 s con `main.js` (flechas, puntos, pausa y deslizar con el dedo). Orden: la campaña del momento (hoy Black Coco, `.vitrina__media--black`, con `data-hasta`), las promos con tarjeta que tienen `vitrina: true` (las inserta `promos.js` donde está el `<template data-vitrina-promos>`), el sorteo del Club y envío a domicilio (ilustración del camión, `assets/img/rubros/envio.svg`: Jesús prefiere un ícono y no la foto). La vitrina no lleva precios. Para sumar una diapositiva fija, copiar un `<article class="vitrina__slide">` completo.

## Vigencia por fecha (`vigencia.js`)

Cualquier elemento con `data-hasta="AAAA-MM-DD"` desaparece solo desde el día siguiente, y con `data-desde` aparece ese día. Se usa para el aviso de la barra superior, los botones del hero, la diapositiva y los links de Black Coco (menú y footer, hasta el 28/11), y para que el 29/11 aparezcan "Envío a domicilio" en la barra y "Promos con tarjeta" en el hero. Al cargar una campaña nueva, usar estos atributos en lugar de acordarse de borrar.

## Promos con tarjeta (`#tarjetas`)

- **Única fuente**: `assets/js/promos-bancarias.js` (`window.DONCOCO_PROMOS`). Sale del anexo de planes de tarjeta del manual del equipo (tabla vigente de noviembre 2026). Nunca escribir promos en el HTML.
- Cada promo: `dias`, `plan`, `extra` (el descuento sobre el precio de lista CF, redondeado para abajo: nunca prometer de más), `para`, `logos` (archivos de `assets/img/pagos/`) o `marcas` (texto, mientras no haya logo oficial), `hasta` (se oculta sola al vencer) y `vitrina: true` + `quien` para que también salga en el hero.
- **Placa del hero de cada promo con `vitrina: true`** (v3, 22/11/2026): la arma `v3.js` (`.slide--tarjeta`). Arriba, franja amarilla (`.slide__visual--pago`) con los logos en placas blancas, el bloque negro «Cuándo» (`dias` y `hasta`) y la cinta de obra; abajo, `plan` grande, `extra` en amarillo, `para`, botón a `#tarjetas` y la tira «También hay promos con» (logos de las otras promos vigentes; sale sola de la lista). Va sin foto del salón: Jesús la pidió con más onda y con los logos. Los tamaños de la franja usan `cqw` (siguen el ancho de la placa, de 320 a 660 px).
- Logos: solo archivos oficiales (Visa, Mastercard, Banco Hipotecario y Mercado Pago). No redibujar ni recolorear marcas de terceros. En v3 cada tarjeta lleva los logos grandes en una franja blanca arriba y el cuerpo en rojo, negro o amarillo, rotando (lo arma `v3.js`).
- La leyenda legal (`legal`) va siempre debajo: descuentos sobre lista CF, no se suman a otras promos ni a la Lista Club, sujeto a la entidad emisora.

## Herramientas Jadever (`jadever.html` y destacados del inicio)

- **Única fuente**: `assets/js/jadever-productos.js` (`window.DONCOCO_JADEVER`). Nunca escribir artículos ni precios de Jadever en el HTML: `jadever.js` arma la lista de precios (`[data-jadever-lista]`, con su índice `[data-jadever-indice]`) y los 4 destacados del inicio (`[data-jadever-destacados]`, sección `#ofertas`). `[data-jadever-total]` se completa con la cantidad de artículos.
- **Precios**: lista consumidor final de PalJet al 22/11/2026 (el 20/11 subieron +1,59 %). `lista` = precio de lista; `contado` = contado o transferencia con el 23% del evento. Se cargan con centavos y el sitio los redondea a pesos. Criterio de la marca: precio grande de contado o transferencia en la etiqueta y precio de lista chico debajo. No inventar artículos, precios ni características: solo lo que venga del sistema o pase el usuario.
- **Promo**: `promo.activa`. En `false` se muestra el precio de lista en la etiqueta y desaparecen los chips.
- **Botón**: abre WhatsApp con el artículo, el código y el precio ya escritos. El texto sale de `boton` ("Consultar").
- **Fotos**: `assets/img/jadever/<CÓDIGO>.webp`, cuadradas de 800 px, y el nombre en el campo `foto`. Tienen que ser del producto real: oficiales de Jadever (catálogo del importador en jadeverherramientas.com; la versión grande está en `https://s3.coresagroup.com/JADEVER/2000/<MODELO>.png`, donde MODELO es el código Jadever, ej. JDWD11601-4) o propias. Nada de imágenes generadas con IA ni sacadas de otros comercios. Hoy 30 de 31 tienen foto oficial; IKJ001 sigue con dibujo. Todos los artículos llevan imagen: mientras no haya foto se muestra su ilustración, la del campo `dibujo` (`assets/img/jadever/<dibujo>.svg`; si está vacío, la del grupo, `<grupo>.svg`). Las ilustraciones siguen las mismas reglas que las de rubro y representan el tipo de herramienta, no el modelo exacto; un artículo de un tipo nuevo necesita su dibujo nuevo. En la lista van sobre bloque amarillo (`.articulo__imagen`); la foto real va sobre blanco (`.articulo__imagen--foto`) y reemplaza al dibujo.
- **Orden de los scripts** (en `index.html` y `jadever.html`): `jadever-productos.js`, `jadever.js`, `main.js`, los tres con `defer`. `main.js` va último porque reparte los links de WhatsApp entre Luisa y Dante.
- **Evento Jadever** (martes 17/11/2026): ya pasó. El 18/11 se sacaron el aviso, la diapositiva, la ficha y la sección `#evento`; la página quedó como "Herramientas Jadever" con foto real de la góndola y `promo.activa: false` (precio de lista). En Black Coco (26 al 28/11) los precios con 23% están en `black-coco.html`.
- El menú principal lleva "Jadever" en todas las páginas (reemplazó a "Ofertas") y el footer "Herramientas Jadever".

## Razones para elegirnos (`#razones`)

Cuatro razones que le importan al cliente: atención/servicio, gestión de su stock, cambios y devoluciones con su vendedor y logística. Nada de datos internos o de la familia (historia, barrios, letra chica de pagos): eso no va en esta sección.

## Black Coco (`black-coco.html`)

- Del jueves 26 al sábado 28/11/2026 (jueves y viernes de 8:30 a 18 h; sábado de 8:30 a 14 h). Página con pestañas por marca: Jadever, Lusqtoff y Mozart con 23% OFF de contado o transferencia; TOTAL y FV en liquidación (precio de contado o transferencia, hasta agotar stock).
- **Única fuente**: `assets/js/black-coco-productos.js` (`window.DONCOCO_BLACKCOCO`), armado con la lista consumidor final de PalJet al 22/11/2026 (Inventario › Lista de precios - Consulta, todos los artículos de cada marca con precio; generador /home/claude/hist/gen_bc_datos.py). Jadever, Lusqtoff y Mozart: contado = lista × 0,77 (no entran los que en PalJet ya dicen LIQUIDACION). TOTAL y FV: solo los LIQUIDACION, contado = lista × 0,8265. `lista` = precio de lista; `contado` = contado o transferencia. No escribir artículos ni precios en el HTML.
- Cada marca tiene hasta 12 destacados (`destacado` 0 a 11) con foto en `assets/img/black-coco/<CÓDIGO>.webp`; en la lista, los Jadever que tienen foto oficial en la página Jadever también la muestran. Fotos oficiales: Jadever (importador), Lusqtoff, Mozart y FV (sus sitios) y TOTAL (su tienda oficial en Argentina, S2 Herramientas). Desde el 22/11 todos los artículos de la lista tienen foto (los que no tenían salieron de la web); las de Lusqtoff y Mozart que no están en sus sitios son las fotos de catálogo de la marca que usan sus tiendas.
- Se puede abrir directo en una marca: `black-coco.html#mozart`. El botón «Consultar» manda a WhatsApp el artículo, el código y el precio, con el mismo asesor que eligió `main.js`.
- **Fechas de la portada de `black-coco.html`** (22/11/2026): tres hojas de almanaque inclinadas (`.bc-fechas`, `.hoja`; Jueves 26 «Arranca», Viernes 27 «Black Friday», Sábado 28 «Último día», cada una con su horario) sobre el negro, con el chip «Solo 3 días» y un estado en amarillo que escribe `black-coco.js` según la fecha y la hora de quien mira: «Faltan N días», «Arranca mañana», «Hoy hasta las 18 h», «Mañana desde las 8:30», «Terminó a las 14 h». La hoja de hoy va en amarillo con el sello «Hoy» (`.hoja--hoy`) y las que pasaron, atenuadas y tachadas (`.hoja--paso`). Fechas y horarios salen de `data-dia`, `data-abre` y `data-cierra` de cada hoja. Reemplaza al calendario crema con marcador (`.calendario`), que Jesús pidió mejorar. `.bc-hero__fecha` queda solo para la portada de `precios.html`.
- **Fotos de la lista** (22/11/2026): miniatura de 112 px (92 px en celular) con lupa; al tocarla se abre la foto grande con nombre, precio y «Consultar» (`<dialog class="visor">`, lo arma `abrirFoto()` en `black-coco.js`; estilos `.visor` en `black-coco.css`). Jesús pidió que se aprecie bien el producto: no volver a achicarlas.
- **Qué entra en la lista** (Jesús, 22/11/2026): solo artículos con foto oficial, de $5.000 o más de contado y con stock en PalJet (los sin stock van en `bc_sin_stock.txt` del generador). Hoy 380 artículos.
- **Después de Black Coco**: desde el 29/11 la misma lista sigue en `precios.html` (mismo `black-coco.js`, `<body data-bc-modo="contado">`) con el precio de contado o transferencia de siempre: lista × 0,8265 (campo `contado_normal`). Sin chip de % en Jadever, Lusqtoff y Mozart; TOTAL y FV siguen como «Liquidación». `black-coco.html` manda sola a `precios.html` desde el 29/11 y `precios.html` manda a `black-coco.html` hasta el 28/11; con `?previa` se ven igual. Menú y footer: «Black Coco» con `data-hasta="2026-11-28"` y «Precios» con `data-desde="2026-11-29"`. Sacar `black-coco.html` del `sitemap.xml` y sumar `precios.html`.
- **Inicio**: la sección `#marcas` muestra los logos de las 5 marcas y 8 tarjetas (campo `vidriera` 0 a 7, elegidas el 22/11 por ser las más convenientes frente a otros comercios de la web) con la placa del logo de su marca. Hasta el 28/11 precio Black Coco; desde el 29/11 `contado_normal`. La lista de 8 está en `VIDRIERA` del generador.
- **Rubros nuevos en `precios.html`** (Jesús, 23/11/2026; desde el 29/11): Polacrin y Talento (pinturas), Megaflex (impermeabilizantes), Tinacos (tanques), Peirano (griferías), Roca (sanitarios) y Oblak (puertas placa Tekstura y Practika), 290 artículos (Polacrin completo: 158 en PalJet; la grilla de PalJet trae 100 por vez, la flecha azul de abajo carga el resto). Van en el mismo `black-coco-productos.js` como marcas de `tipo: "contado"` (contado = lista × 0,8265, sin %), con `desde: "2026-11-29"`; `black-coco.js` las oculta en `black-coco.html`. Grupos nuevos: `pint`, `imp`, `tan`, `agro`, `sept`, `san`. Las arma `/home/claude/hist/gen_rubros.py` (lista CF de PalJet del 23/11 en `/home/claude/rubros/rubros_23-11.tsv`, fotos normalizadas en `/home/claude/rubros/fotos/`); se corre DESPUÉS de `gen_bc_datos.py`, porque ese reescribe el archivo. Mismas reglas: foto oficial, $5.000 o más de contado, con stock. Fotos: Peirano, Polacrin/Talento y Oblak de sus sitios; Tinacos de su sitio (sin las imágenes «hf-…», que parecen generadas); Megaflex y Roca Mónaco, fotos de catálogo de la marca que usan Easy y Blaisten. Lo que quedó afuera y por qué: `/home/claude/rubros/rubros_fuera_web.txt`. En `precios.html` las pestañas van en 6 columnas.
- **Lista Club en `club.html`** (Jesús, 23/11/2026: «fotos sin precios», «como Martel y El Amigo»): sección `#lista-club` con pestañas por rubro (Obra gruesa, Mezclas y pegamentos, Construcción en seco, Techos y membranas, Pinturas, Tanques) y 28 tarjetas con foto de producto (`assets/img/club/lista/<CÓDIGO>.webp`), marca, nombre, presentación, chip «Precio Club» y botón «Pedir precio Club» por WhatsApp. Nunca mostrar precios Club en la web. Pestañas y flechas: `assets/js/club-lista.js`. Faltan fotos propias de chapas, perfiles, caños, malla y viguetas (no tienen foto de su marca).
- **club.html y jadever.html pasadas a v3** (23/11/2026): usan `v3.css` (mismos topbar, menú y footer que el inicio) + `club3.css` / `jadever3.css`. `jadever.html` ya no usa `jadever-productos.js` para la lista: muestra los 146 Jadever de `black-coco-productos.js` con `<body data-bc-marca="jadever">` (precio Black Coco hasta el 28/11, contado desde el 29/11, sin redirigir). Copias de la versión vieja en el scratchpad de la sesión.
- **Inicio, catálogo por rubro**: debajo de cada rubro con marcas con precio va `.rubro__marcas` («Ver precios»: Roca, Tinacos, Mozart, FV, Peirano, Oblak, Polacrin, Talento, Megaflex, Jadever, Lusqtoff, TOTAL). Los de las marcas nuevas tienen `data-desde="2026-11-29"`; hasta el 28 Mozart, FV, Lusqtoff y TOTAL llevan a `black-coco.html`.
- **Clasificación fina y «Va bien con»** (Jesús, 23/11/2026): `assets/js/catalogo.js` (va antes de `black-coco.js` en black-coco, precios y jadever). `SUBS` parte cada grupo en subcategorías por palabras del nombre (Látex de color, Esmaltes, Membranas líquidas, Taladros, Amoladoras, Lavatorio, Bidet...); la lista muestra un rótulo por subcategoría y el índice lateral va por subcategoría. Las presentaciones del mismo artículo (mismo nombre, distinta medida o terminación en `detalle`) van en una sola fila con botones (1 l · 4 l · 10 l · 20 l) que cambian precio, código y botón. Al tocar la foto o el nombre se abre el detalle con «Presentaciones» y **«Va bien con»**: hasta 6 artículos reales de las subcategorías que `VAN_CON` define como complemento (primero de la misma marca, después los destacados, después el más económico; en todas las marcas visibles ese día). Una subcategoría nueva necesita su regla en `SUBS` y su línea en `VAN_CON`.
- **Ver la vista previa en otra fecha**: `?previa=AAAA-MM-DD` (ej. `index.html?previa=2026-11-29`) hace que `vigencia.js` muestre el sitio como ese día y agrega el parámetro a los links internos.
- **Sin foto todavía** (no entran hasta tener foto oficial o propia): Quimex (185, todo liquidación; el sitio de Quimex no responde), carretillas Forja/ANSA y ruedas (sin sitio oficial), y los de `rubros_fuera_web.txt`.
- **Control semanal** (miércoles 25/11 y cada lunes): precios y stock contra PalJet, solo consultando. Pasos y generador en `DONCOCO CLAUDE\trabajo-claude\precios-web\LEEME.md` (esa carpeta no se publica ni se sube al repositorio).
- **Rubros nuevos visibles desde el 23/11** (Jesús: «faltan las puertas»): `precios.html` ya no manda a `black-coco.html`; hasta el 28/11 muestra solo los rubros nuevos (Polacrin, Talento, Megaflex, Tinacos, Peirano, Roca y Oblak) con un aviso que lleva a Black Coco para las otras 5 marcas, y desde el 29/11 todas. «Precios» va en el menú de todas las páginas desde ya y los «Ver precios» de esos rubros en el inicio, sin `data-desde`.
- **Caché**: CSS y JS se guardan 1 semana en el navegador. Cada vez que se cambia uno, subir la versión `?v=AAAAMMDD` en los `<script>`/`<link>` de todas las páginas (hoy `?v=20261123f`).
- **Tachado y cuotas** (Jesús, 23/11/2026): en Jadever, Lusqtoff y Mozart durante Black Coco, arriba del precio grande va «Antes» con el contado de siempre (`contado_normal`) tachado. En todos los artículos (lista, visor, destacados y vidriera del inicio) va «Con Mercado Pago: 3 cuotas de $X · 6 cuotas de $Y», calculado sobre el precio de lista con el anexo de tarjetas del manual v7 (MP 3 cuotas −9,94 % → lista × 0,9006; 6 cuotas −5,20 % → lista × 0,948), redondeado para arriba. El 23% no se suma a las cuotas (decidido por Jesús). Factores en `CUOTAS` de `black-coco.js` y en `tarjetaProducto` de `v3.js`: si cambia el anexo, cambiar los dos.
- **Las 12 marcas en black-coco.html** (Jesús, 23/11: «sigue siendo complicado acceder a los precios de los otros rubros»): los rubros nuevos ya no se ocultan en `black-coco.html` (pestañas en 6 columnas). En el inicio, debajo de los 5 logos, `.marcas-mas` con placas de texto de Polacrin, Talento, Megaflex, Tinacos, Peirano, Roca y Oblak que llevan a `precios.html#<marca>`.
- **Logos de los rubros nuevos** (Jesús, 23/11): en `.marcas-mas` del inicio van los logos en blanco de Polacrin y Talento (recortados de los banners de polacrin.com.ar, pasados a blanco), Peirano (logo de su sitio, negro pasado a blanco), Roca (SVG de roca.com.ar en blanco, recortado) y Oblak (versión invertida de su sitio, sin el sello de 70 años), en `assets/img/marcas/`. Megaflex (sitio con verificación anti-bots) y Tinacos (el servidor no deja descargar) siguen con el nombre en texto hasta conseguir el logo oficial.
- **Todos los rubros** (Jesús, 23/11: «conozco pocos negocios que manejen tantos rubros»): sección `#rubros` del inicio, después de `#catalogo`, sobre negro: «27 rubros en un solo corralón», con una placa por rubro (`.todos`, `.todo`) que manda a cotizar por WhatsApp. Sale de las clasificaciones de PalJet (Inventario › Artículos › Clasificaciones › MERCADERIAS, 23/11/2026); se dejaron afuera Muebles y Electrodomésticos (parecen restos de otra época; preguntar a Jesús antes de sumarlas). Si se agrega un rubro, cambiar también el número del título.
- **Estadísticas** (Jesús, 23/11): Search Console con la propiedad de dominio cdoncoco.com (verificada por registro TXT en el DNS de Hostinger; no borrarlo) y el sitemap enviado. Google Analytics 4 en la cuenta de jesusbm45: propiedad «Corralón Don Coco», flujo «Web Don Coco (cdoncoco.com)», ID G-90PMZXSB0F (antes apuntaba a corralondoncoco.com). Lo carga `assets/js/medicion.js` en todas las páginas: visitas y evento `whatsapp` (asesor, página, botón) en cada toque a wa.me. No mide en local ni con `?previa`. Resumen diario por WhatsApp a Jesús a las 19 h (tarea programada).
- **SEO** (Jesús, 23/11: «hacelo»): (1) `gen_seo.py` (/home/claude/hist) escribe en precios, black-coco y jadever la lista de artículos como HTML fijo (sin precios, para que no quede vieja) dentro de `[data-bc-lista]`, entre `<!--SEO-LISTA-->`; `black-coco.js` la reemplaza al cargar. Correrlo después de `gen_bc_datos.py` y `gen_rubros.py`. (2) Páginas por rubro que arma `gen_rubro_pags.py` desde index.html (topbar, header y footer): obra-gruesa, hierros, chapas-y-techos, construccion-en-seco, pinturas y sanitarios-y-griferias (.html), con lo que dicen las clasificaciones de PalJet, sin precios inventados; si cambia el header o el footer del inicio, volver a correrlo. Las placas de `#rubros` del inicio llevan a esas páginas y el footer de todas tiene la columna «Rubros». Están en el sitemap. (3) Datos para Google del inicio: logo, imagen, zona y medios de pago. Ubicación (`geo`) y `hasMap` cargados el 23/11 desde el perfil de Google Maps «Corralón Don Coco» (cid 16507912379036645513, place id ChIJsfjE4EzdG5QRibjAl9jiF-U). Link para pedir opiniones: https://search.google.com/local/writereview?placeid=ChIJsfjE4EzdG5QRibjAl9jiF-U (QR en el cartel A6 y la tarjeta 9 × 5, fuente /home/claude/resenas/piezas.html).
