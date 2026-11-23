# Don Coco — sitio web

Landing de Don Coco, corralón y ferretería. HTML, CSS y JS sin dependencias: se abre, se edita y se publica tal cual está.

---

## 1. Abrirlo en VS Code

1. Descomprimí la carpeta `don-coco-web` donde guardes tus proyectos.
2. En VS Code: **File → Open Folder…** y elegí `don-coco-web`.
3. VS Code te va a sugerir dos extensiones (abajo a la derecha): **Claude Code** y **Live Server**. Instalá las dos.
4. Para ver el sitio: clic derecho en `index.html` → **Open with Live Server**. Se abre en el navegador y se recarga solo cada vez que guardás.

> También funciona con doble clic en `index.html`, pero con Live Server se ve igual que en el hosting.

## 2. Completar los datos del negocio

Los datos reales están marcados como `{{ASI}}`. Mientras falte alguno, la consola del navegador (F12) avisa cuáles. Dos formas de completarlos:

- **Con Claude Code**: abrí su panel y escribile, por ejemplo: *"Completá los datos: WhatsApp 5491123456789, teléfono 011 4444-5555, dirección Av. San Martín 1234, Morón…"*. Los reemplaza en todos los archivos.
- **A mano**: `Ctrl+Shift+H` (buscar y reemplazar en todos los archivos), buscá el marcador y reemplazalo.

| Marcador | Qué va | Ejemplo |
|---|---|---|
| `{{WHATSAPP}}` | Número para los links, sin `+`, espacios ni guiones, con 549 | `5491123456789` |
| `{{WHATSAPP_VISIBLE}}` | Cómo se lee el WhatsApp | `11 2345-6789` |
| (sin marcador) | Segundo WhatsApp (Dante), cargado a mano en Contacto y footer | `5493874452416` |
| `{{TELEFONO}}` | Teléfono para llamar, con código de país (si es celular, con +549) | `+541144445555` |
| `{{TELEFONO_VISIBLE}}` | Cómo se lee el teléfono | `(011) 4444-5555` |
| `{{DIRECCION}}` | Calle y número | `Av. San Martín 1234` |
| `{{DIRECCION_URL}}` | Dirección para Google Maps, con `+` en vez de espacios | `Av.+San+Martín+1234+Morón` |
| `{{LOCALIDAD}}` | Localidad | `Morón` |
| `{{PROVINCIA}}` | Provincia | `Buenos Aires` |
| `{{HORARIOS}}` | Horarios como se leen | `Lun a vie 8:30 a 18 · Sáb 8:30 a 14` |
| `{{HORARIOS_SCHEMA}}` | Horarios para Google | `Mo-Fr 08:30-18:00, Sa 08:30-14:00` |
| `{{ZONA_REPARTO}}` | Dónde reparten | `Morón, Haedo y Castelar` |
| `{{MEDIOS_PAGO}}` | Medios de pago, frase completa | `Efectivo, transferencia, débito y crédito en cuotas.` |
| `{{MEDIOS_PAGO_CORTO}}` | Para la cinta negra | `Hasta 6 cuotas` |
| `{{HISTORIA}}` | 2 o 3 líneas: desde cuándo están, quién atiende, qué los distingue | — |
| `{{INSTAGRAM}}` / `{{FACEBOOK}}` | Usuario, sin `@` | `doncoco.corralon` |
| `cdoncoco.com` | Dominio, sin `https://` ni `www` | `doncoco.com.ar` |

**Fotos**: van en `assets/img/fotos/` (WebP o JPG, máx. 1600 px de ancho). En `index.html` hay comentarios `FOTO:` y `MAPA:` que indican dónde pegarlas.

## 3. Subirlo a GitHub

1. En VS Code, panel **Source Control** (ícono de ramitas, `Ctrl+Shift+G`).
2. Si la carpeta ya trae el historial de git, vas a ver el botón **Publish Branch**; si no, **Initialize Repository** y después **Publish Branch**.
3. Elegí **Publish to GitHub private repository** con el nombre `don-coco-web`.

Desde ahí, cada cambio: escribís un mensaje en Source Control → **Commit** → **Sync Changes**.

## 4. Publicarlo en Hostinger

Hostinger publica directo desde GitHub (planes de hosting web o cloud):

1. hPanel → **Websites** → **Manage** en el dominio de Don Coco.
2. Menú lateral: **Advanced → Git**.
3. **Connect with GitHub**, autorizá y elegí el repositorio `don-coco-web`.
4. Branch: `main`. Root directory: `public_html`. **Deploy**.

> ⚠️ Lo que haya en `public_html` se reemplaza. Si el dominio tiene una página de Hostinger o un WordPress de prueba, hacé un backup antes.

Después del primer deploy, **cada vez que sincronizás cambios a `main`, el sitio se actualiza solo**. Desde el mismo panel podés pausar el auto-deploy, volver a publicar o ver el historial.

Por último, en hPanel activá el **SSL** gratuito del dominio (el `.htaccess` ya fuerza `https://`).

## 5. Trabajar con Claude Code

El archivo `CLAUDE.md` tiene las reglas de la marca (colores, tipografías, tono, cómo está armado el código). Claude Code lo lee solo cada vez que abrís el proyecto, así que no hace falta explicarle nada de nuevo.

Pedidos que funcionan bien:
- *"Agregá una tarjeta de oferta para arena gruesa por m³ a $25.000."*
- *"Sumá una sección de marcas que trabajamos, con los logos de la carpeta fotos."*
- *"Pasá esta foto a WebP y ponela en el hero."*
- *"Revisá que todo se vea bien en celular."*
- *"Hacé commit y push de los cambios"* (eso publica el sitio).

## Estructura

```
don-coco-web/
├── index.html            página principal
├── jadever.html          herramientas Jadever con precios
├── club.html             Club Don Coco
├── 404.html              página de error
├── .htaccess             HTTPS, caché, 404, protección de archivos internos
├── robots.txt · sitemap.xml · site.webmanifest
├── CLAUDE.md             instrucciones para Claude Code
├── README.md             esta guía
└── assets/
    ├── css/tokens.css    colores y tipografías de la marca
    ├── css/styles.css    estilos del sitio
    ├── css/jadever.css   estilos de jadever.html
    ├── js/main.js        menú de celular y detalles
    ├── js/jadever-productos.js   LA LISTA de artículos y precios Jadever
    ├── js/jadever.js     arma la lista de precios y los destacados del inicio
    └── img/              logos, íconos, imagen para compartir y fotos
```

## 6. Club Don Coco y cartelería

- **`club.html`**: la página del Club (tarjeta de pases, niveles, sorteo y preguntas). Todos los meses completá `{{PREMIO_MES}}` y `{{FECHA_SORTEO}}` y, si cambia el premio, reemplazá la foto `assets/img/club/premio-del-mes.webp`.
- **`carteleria/`**: todas las piezas para imprimir. Abrí `carteleria/index.html` con Live Server, elegí una pieza y tocá **Imprimir o guardar PDF** (márgenes: ninguno, gráficos de fondo: activado). Esa carpeta no se publica en el sitio.
- Pedidos que funcionan bien con Claude Code: *"Completá el cartel de oferta A4 con látex interior 20 L a $89.990, vigente hasta el 30/11"* o *"Cambiá el premio del sorteo de este mes a amoladora Bosch 850 W, sorteo el 30/11"*.

## 7. Herramientas Jadever (`jadever.html`)

La página muestra los artículos Jadever con su precio, agrupados (soldadoras, taladros, escaleras...). El inicio muestra 4 destacados y lleva a esa página.

**Los artículos no se escriben en el HTML.** Están todos en un solo archivo: `assets/js/jadever-productos.js`. Cada artículo es una línea:

```js
{ codigo: 'HOJ001', grupo: 'soldadoras', nombre: 'Soldadora inverter MMA 10-160 A', detalle: 'Electrodos de 1,6 a 3,2 mm · Antiadherente', lista: 283045.84, contado: 217945.29, dibujo: 'soldadoras', foto: '', destacado: true },
```

- **Sumar un artículo**: copiá una línea, cambiá los datos y guardá. `grupo` tiene que ser uno de los de la lista `grupos` del mismo archivo.
- **Cambiar un precio**: cambiá `lista` y `contado` (con centavos, como sale del sistema; el sitio redondea a pesos).
- **La imagen**: cada artículo muestra un dibujo de la herramienta (`dibujo`, el nombre de un `.svg` de `assets/img/jadever/`). Son orientativos: muestran el tipo de herramienta, no el modelo exacto.
- **Ponerle foto**: guardá la foto en `assets/img/jadever/` con el código como nombre (`HOJ001.webp`) y escribí ese nombre en `foto`. La foto reemplaza al dibujo. En `assets/img/jadever/LEEME.txt` está cómo tiene que ser y la lista de dibujos.
- **Destacados del inicio**: los artículos con `destacado: true` (se muestran los primeros 4).
- **Cuando termine la promo**: arriba del archivo, `promo.activa: false`. Queda el precio de lista, sin el chip del 23%.
- **Cuando pase el evento**: además, sacar el aviso de la barra de arriba (hay un comentario "AVISO DEL EVENTO" en cada página), la diapositiva del evento en la portada y la ficha y la sección del evento en `jadever.html`.

Con Claude Code: *"Sumá a la lista de Jadever la amoladora 850 W, código XXX, lista $100.000, contado $77.000, grupo Más eléctricas"* o *"Poné la foto HOJ001 en la lista de Jadever"*.
