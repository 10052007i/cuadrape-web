# CLAUDE.md — cuadrape-web

Guía técnica del repositorio de la página comercial de Cuadrape (`cuadrape.com`). La leen las personas que trabajan en el repo y los asistentes de código.

**Qué se construye y por qué:** `05-landing-comercial.md`. Este archivo dice **cómo** y **dónde**. Si algo aquí contradice el documento funcional, gana el funcional y se corrige este archivo.

---

## 1. Qué es este repositorio

- Sitio **estático** de marketing, sin backend, sin base de datos, sin formularios
- Hoy contiene la landing de **Cuadrape para hospedajes** en la raíz
- Mañana contendrá la portada de marca y una página por producto (ver sección 13)
- **No** contiene la aplicación. La aplicación vive en otro repositorio y se publica en `hospedajes.cuadrape.com`

---

## 2. Stack y comandos

| Pieza | Uso |
|---|---|
| **Astro** (última versión estable) | Generador del sitio, salida estática |
| **Tailwind CSS** | Estilos, instalado con `npx astro add tailwind` |
| **TypeScript** | En configuración, datos y utilidades |
| **@astrojs/sitemap** | Sitemap automático |
| **Node** | Versión fijada en `.nvmrc` |
| **npm** | Gestor de paquetes |

```bash
npm install            # instalar
npm run dev            # desarrollo en localhost:4321
npm run build          # genera dist/
npm run preview        # sirve dist/ para revisar
npm run check          # astro check (tipos y esquemas de contenido)
npm run check:contenido # busca frases y datos prohibidos en dist/
```

La sintaxis de Astro cambia entre versiones mayores. Ante cualquier duda, se verifica en la documentación oficial (docs.astro.build) de la versión instalada, no en tutoriales.

---

## 3. Reglas no negociables

1. **Ningún precio, número de teléfono, RUC, horario o URL escrito dentro de un componente.** Todo sale de `src/config/`
2. **Ningún texto de preguntas frecuentes, resultados o páginas legales escrito dentro de un componente.** Todo sale de `src/content/`
3. **Cero JavaScript en el navegador salvo excepción justificada.** Las excepciones aprobadas están en la sección 9.4
4. **Nada de plantillas ni bloques prearmados** (Tailwind UI, shadcn, temas descargados, "landing kits"). Los estilos parten de los tokens de Cuadrape
5. **Ningún dato real** de huéspedes, hoteles piloto o personas en capturas, fotos o textos de ejemplo
6. **Ningún color en hexadecimal dentro de un componente.** Solo tokens (sección 7)
7. **Nada se publica con `lorem ipsum` ni textos de relleno.** Si un contenido no está listo, se marca como no publicado (sección 5)
8. **`npm run check:contenido` debe pasar** antes de cualquier despliegue a producción. El build de Amplify lo ejecuta y falla si encuentra algo

---

## 4. Estructura de carpetas

```
cuadrape-web/
├── CLAUDE.md                     # este archivo
├── README.md                     # cómo arrancar, en 10 líneas
├── astro.config.mjs              # site, integraciones, Tailwind
├── amplify.yml                   # build en AWS Amplify
├── customHttp.yml                # cabeceras HTTP (caché y seguridad)
├── package.json
├── tsconfig.json
├── .nvmrc
├── .env.example                  # variables públicas, sin secretos
│
├── infra/
│   └── amplify-redirects.json    # copia versionada de las redirecciones configuradas en la consola
│
├── scripts/
│   ├── check-contenido.mjs       # verificación de contenido prohibido sobre dist/
│   └── frases-prohibidas.json    # lista de frases y datos que no pueden aparecer
│
├── public/                       # se copia tal cual, sin procesar
│   ├── favicon.svg
│   ├── robots.txt
│   ├── og/
│   │   └── hospedajes.png        # vista previa de WhatsApp, 1200×630
│   └── video/
│       ├── bloqueo-reasignacion.mp4
│       └── bloqueo-reasignacion-poster.jpg
│
└── src/
    ├── config/                   # UNA sola fuente para datos que se repiten
    │   ├── site.ts               # marca, dominio, titular, RUC, contacto, horario
    │   ├── precios.ts            # precios de cada producto
    │   ├── productos.ts          # lista de productos (alimenta la navegación futura)
    │   └── whatsapp.ts           # número de ventas y mensajes prellenados
    │
    ├── content.config.ts         # esquemas de las colecciones de contenido
    ├── content/                  # textos editables, en Markdown
    │   ├── faq/
    │   │   └── hospedajes/
    │   │       ├── reemplaza-boleta-sunat.md
    │   │       ├── sin-internet.md
    │   │       └── ...
    │   ├── resultados/
    │   │   └── hospedajes/
    │   │       └── piloto-01.md
    │   └── legal/
    │       ├── privacidad.md
    │       └── terminos.md
    │
    ├── data/                     # listas cortas y estructuradas, tipadas
    │   └── hospedajes/
    │       ├── incluye.ts        # lo que incluye la mensualidad
    │       ├── pasos.ts          # "Cómo empezamos"
    │       ├── senales.ts        # señales del panel del dueño
    │       └── caracteristicas.ts # "Hecho para cómo trabajas"
    │
    ├── assets/                   # imágenes que Astro optimiza
    │   ├── marca/
    │   │   └── logo-cuadrape.svg
    │   ├── capturas/
    │   │   └── hospedajes/
    │   │       ├── tablero-celular.png
    │   │       ├── aviso-bloqueo.png
    │   │       ├── motivo-liberacion.png
    │   │       ├── cierre-por-metodo.png
    │   │       └── panel-alertas.png
    │   └── fotos/
    │       └── hospedajes/
    │           ├── cuaderno-registro.jpg
    │           ├── llave-habitacion-05.jpg
    │           ├── sencillo-caja.jpg
    │           └── celular-yape.jpg
    │
    ├── components/
    │   ├── ui/                   # piezas genéricas sin contenido propio
    │   │   ├── Boton.astro
    │   │   ├── BotonWhatsApp.astro
    │   │   ├── Contenedor.astro
    │   │   ├── Seccion.astro
    │   │   └── Imagen.astro      # envoltorio de <Picture> con valores por defecto
    │   ├── layout/
    │   │   ├── Header.astro
    │   │   ├── Footer.astro
    │   │   └── WhatsAppFijo.astro  # botón fijo en celular
    │   └── sections/
    │       └── hospedajes/       # una sección = un componente
    │           ├── Portada.astro
    │           ├── Problema.astro
    │           ├── Solucion.astro
    │           ├── PanelDueno.astro
    │           ├── Resultados.astro
    │           ├── Caracteristicas.astro
    │           ├── RegistroHuespedes.astro
    │           ├── Precio.astro
    │           ├── ComoEmpezamos.astro
    │           ├── Soporte.astro
    │           ├── PreguntasFrecuentes.astro
    │           └── Cierre.astro
    │
    ├── views/
    │   └── HospedajesLanding.astro  # compone las secciones en orden
    │
    ├── layouts/
    │   ├── BaseLayout.astro      # <html>, <head>, SEO, vista previa, analítica, header, footer
    │   └── LegalLayout.astro     # páginas legales
    │
    ├── lib/
    │   ├── formato.ts            # soles(), costoDiario(), fechas
    │   └── seo.ts                # construcción de URLs absolutas y metadatos
    │
    ├── styles/
    │   └── global.css            # Tailwind, tokens, @font-face, estilos base
    │
    └── pages/                    # rutas: cada archivo es una URL
        ├── index.astro           # renderiza <HospedajesLanding />
        ├── privacidad.astro
        ├── terminos.astro
        └── 404.astro
```

**Convenciones de nombres**

- Componentes en `PascalCase.astro`, en español
- Archivos de contenido, imágenes y datos en `kebab-case`, en español y descriptivos (`aviso-bloqueo.png`, no `img3.png`)
- Carpetas por producto dentro de `sections/`, `content/`, `data/`, `capturas/` y `fotos/`, aunque hoy exista solo `hospedajes`

---

## 5. Dónde va cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| El precio mensual o de implementación | `src/config/precios.ts` |
| El número de WhatsApp de ventas o el mensaje prellenado | `src/config/whatsapp.ts` |
| RUC, nombre del titular, correo, horario, ciudad | `src/config/site.ts` |
| Una pregunta frecuente | `src/content/faq/hospedajes/<slug>.md` |
| Los resultados del piloto | `src/content/resultados/hospedajes/<slug>.md` |
| Política de privacidad o términos | `src/content/legal/` |
| Lo que incluye el plan, los pasos, las señales | `src/data/hospedajes/` |
| El orden de las secciones | `src/views/HospedajesLanding.astro` |
| El diseño de una sección | `src/components/sections/hospedajes/<Seccion>.astro` |
| Colores, tipografías, espaciados | `src/styles/global.css` (tokens) |
| Título y descripción para Google y WhatsApp | props de `BaseLayout` en `src/pages/index.astro` |
| La imagen de vista previa de WhatsApp | `public/og/hospedajes.png` |
| Una captura o foto | `src/assets/capturas/` o `src/assets/fotos/` |
| Frases prohibidas | `scripts/frases-prohibidas.json` |

**Criterio entre `content/` y `data/`**

- `content/` → textos que se redactan y cambian con frecuencia, con párrafos (preguntas frecuentes, resultados, legales). Markdown con esquema validado
- `data/` → listas cortas con estructura fija (título + una línea). TypeScript tipado

---

## 6. Configuración global (`src/config/`)

### 6.1 `site.ts`

```ts
export const site = {
  url: 'https://cuadrape.com',
  marca: 'Cuadrape',
  titular: {
    nombre: 'Juan José Angel Salazar Pérez',
    ruc: '', // PENDIENTE: se completa antes de publicar
  },
  ciudad: 'Pucallpa, Ucayali',
  correo: 'contacto@cuadrape.com',
  horarioAtencion: 'lunes a sábado, de 9:00 a 19:00',
} as const;
```

### 6.2 `precios.ts`

```ts
export const precios = {
  hospedajes: {
    mensual: 119,
    implementacion: 300,
    igvIncluido: true,
    maxHabitaciones: 30,
    permanencia: false,
  },
} as const;
```

Ningún componente escribe `119` ni `300`. Se usa `soles(precios.hospedajes.mensual)` desde `src/lib/formato.ts`.

**"Menos de S/X al día" se calcula**, no se escribe:

```ts
// Devuelve el entero inmediatamente superior al costo diario,
// de modo que "menos de S/{n} al día" siempre sea verdad.
export const topeDiario = (mensual: number) => Math.floor(mensual / 30) + 1;
// 119 → 4 ("menos de S/4 al día")
```

### 6.3 `whatsapp.ts`

```ts
export const whatsapp = {
  ventas: '51XXXXXXXXX', // formato internacional, sin + ni espacios
  mensajes: {
    demostracion:
      'Hola, vi la página de Cuadrape y quiero una demostración. Mi hospedaje tiene ___ habitaciones.',
  },
} as const;

export const enlaceWhatsApp = (mensaje = whatsapp.mensajes.demostracion) =>
  `https://wa.me/${whatsapp.ventas}?text=${encodeURIComponent(mensaje)}`;
```

**El número de soporte no existe en este repositorio.** No se agrega nunca.

### 6.4 `productos.ts`

```ts
export const productos = [
  {
    slug: 'hospedajes',
    etiqueta: 'para hospedajes',
    ingreso: 'https://hospedajes.cuadrape.com',
    activo: true,
  },
] as const;
```

La barra superior lee esta lista. Con un producto activo muestra "para hospedajes"; con dos o más, un menú. Así la transición de la sección 13 no requiere rediseñar el header.

---

## 7. Estilos y tokens (`src/styles/global.css`)

```css
@import "tailwindcss";

@theme {
  /* Paleta de Cuadrape, extraída del logo */
  --color-marca: #023F72;       /* azul del logo: botones, enlaces, títulos destacados */
  --color-acento: #E8AF2F;      /* dorado del logo: solo rellenos y detalles, NUNCA texto sobre claro */
  --color-tinta: #0E2439;       /* texto principal (azul muy oscuro, derivado de marca) */
  --color-tinta-suave: #4A5B6C; /* texto secundario */
  --color-fondo: #FFFFFF;       /* fondo de la página */
  --color-superficie: #F2F5F8;  /* bloques alternos (precio, preguntas frecuentes) */
  --color-borde: #D3DCE5;       /* líneas divisorias decorativas */

  /* Tipografía de Cuadrape: una sola familia variable (ver 7.2) */
  --font-titular: "Archivo Variable", "Archivo", system-ui, sans-serif;
  --font-texto: "Archivo Variable", "Archivo", system-ui, sans-serif;
}
```

- Los componentes usan clases derivadas de los tokens (`bg-fondo`, `text-tinta`, `font-titular`), nunca hexadecimales

**Combinaciones permitidas (contraste medido)**

| Texto | Fondo | Contraste | Uso |
|---|---|---|---|
| `tinta` | `fondo` / `superficie` | 15.8 / 14.4 | Texto general |
| `tinta-suave` | `fondo` / `superficie` | 7.0 / 6.4 | Texto secundario |
| `marca` | `fondo` / `superficie` | 10.8 / 9.8 | Títulos destacados, enlaces |
| blanco | `marca` | 10.7 | Botón principal |
| `acento` | `marca` o `tinta` | 5.5 / 8.0 | Detalles sobre fondo oscuro |
| `acento` | `fondo` | **2.0 — prohibido para texto** | Solo rellenos, líneas o formas |

- **El dorado es escaso:** una marca por sección como máximo (un subrayado, un detalle de la foto, un número destacado sobre azul). Si aparece en todas partes, deja de señalar algo
- **No se usa fondo crema ni "papel".** El tono papel vive en la foto del cuaderno
- **Los colores de estado del tablero** (libre, ocupada, en limpieza) **no son tokens de la página**. Aparecen solo dentro de las capturas
- **Cifras con números tabulares:** clase `tabular-nums` en precios, montos y resultados
- Largo de línea del texto: máximo ~70 caracteres (`max-w-prose` o equivalente)
- Mobile-first: se escribe para 360 px y se amplía con `sm:`, `md:`, `lg:`
- Áreas táctiles mínimas de 44×44 px en botones y enlaces
- Foco visible en todos los elementos interactivos (no se elimina el `outline` sin reemplazo)

**Evitar** (sección 8.3 del documento funcional): mismo radio y misma sombra en todo, tarjetas idénticas en rejilla, etiquetas en mayúsculas sobre cada título, animaciones de entrada por sección.

### 7.1 Comportamiento responsive

**Tamaños de referencia** (breakpoints por defecto de Tailwind)

| Nombre | Rango | Prefijo |
|---|---|---|
| Celular | < 768 px (se diseña a 360 px) | sin prefijo |
| Tablet | 768 – 1023 px | `md:` |
| Escritorio | ≥ 1024 px | `lg:` |

- Ancho máximo del contenido: ~1120 px, centrado, en `Contenedor.astro`
- Márgenes laterales: 20 px en celular, 32 px en tablet, automáticos en escritorio
- Los titulares escalan con `clamp()` (≈ 2 rem en celular a ≈ 3.5 rem en escritorio), no con saltos por breakpoint
- En secciones de texto + imagen: **en celular, siempre texto primero e imagen después**

**Comportamiento por sección**

| Sección | Celular | Tablet | Escritorio |
|---|---|---|---|
| Barra superior | Logo con "para hospedajes" en pequeño, **Ingresar** como enlace de texto. Sin botón de demostración (lo cubre el botón fijo) | Logo, "para hospedajes", Ingresar y botón de demostración | Igual que tablet, y la barra queda **fija arriba** al hacer scroll |
| Portada | Titular, subtítulo, botón a ancho completo, precio; captura del tablero debajo. **Titular y botón visibles sin hacer scroll a 360×640** | Igual, con la captura centrada y más grande | Dos columnas: texto a la izquierda (~55 %), captura a la derecha |
| Problema | Los 3 momentos en vertical, unidos por una línea vertical; foto del cuaderno debajo | Igual que celular | Los 3 momentos como línea de tiempo horizontal; foto del cuaderno a la derecha del texto de cierre |
| Cómo se cierra | Texto, captura del aviso y video, apilados | Igual que celular | Dos columnas: video/captura a la **izquierda** y texto a la derecha (alterna con Problema) |
| Panel del dueño | Captura recortada y las 4 señales en lista vertical | Igual que celular | Captura a la izquierda, señales a la derecha |
| Resultados | Contexto, 3 cifras apiladas (cifra grande + etiqueta), gráfico a ancho completo, cita | 3 cifras en una fila | Cifras en fila; gráfico y cita lado a lado |
| Hecho para cómo trabajas | 4 bloques apilados | 2 × 2 | 2 × 2. **Bloques de texto sin borde ni sombra**, no tarjetas |
| Registro de huéspedes | Solo texto | Solo texto | Texto con captura o foto al lado |
| Precio | Una columna: precio, condiciones, incluye, implementación | Una columna, más ancha | Dos columnas dentro de un bloque `superficie`: precio y condiciones a la izquierda, incluye e implementación a la derecha |
| Cómo empezamos | 4 pasos numerados en vertical | Vertical | 4 pasos en fila horizontal |
| Soporte | Una columna, `max-w-prose` | Igual | Igual |
| Preguntas frecuentes | Una columna, `max-w-prose` | Igual | Igual |
| Cierre | Centrado, botón a ancho completo | Botón de ancho automático | Igual que tablet |
| Pie | Datos apilados | 2 columnas | 3 columnas |

**Botones:** ancho completo en celular, ancho automático desde `md:`. Altura mínima de 48 px en celular.

**Referencia visual:** el canvas "Cuadrape — Referencia visual portada" muestra la portada, el problema y la solución en escritorio y celular, más una guía de colores, tipografía y medidas. Ante una duda de estilo, manda el canvas.

**Qué aparece, desaparece o cambia**

| Elemento | Celular | Tablet y escritorio |
|---|---|---|
| Botón fijo de WhatsApp (`WhatsAppFijo.astro`) | Aparece **cuando el botón de la portada sale de la pantalla**, para no mostrar dos botones iguales en la primera pantalla | **Oculto** (`md:hidden`): la barra ya muestra el botón |
| Enlace Ingresar | Visible | Visible |
| Barra superior fija | No (quitaría alto de pantalla) | Solo en escritorio |

**Márgenes seguros (iPhone con barra de gestos, celulares con esquinas redondeadas)**

- La etiqueta viewport incluye `viewport-fit=cover` (ver sección 10); sin eso, los valores `env()` valen cero en iOS
- El botón fijo se posiciona con `bottom: calc(1rem + env(safe-area-inset-bottom))` y respeta también `env(safe-area-inset-left/right)` en horizontal
- En celular, el `<body>` lleva un `padding-bottom` igual al alto del botón fijo más el margen seguro, para que el botón **no tape el pie de página** ni el botón del cierre
- **Nunca** se desactiva el zoom (`maximum-scale` o `user-scalable=no`)

### 7.2 Tipografía

**Familia: Archivo** (Omnibus-Type, Buenos Aires). Licencia libre (OFL), variable en peso y en ancho, con soporte completo del español y cifras tabulares.

**Por qué esta**

- **Una sola familia resuelve titulares y texto** gracias al eje de ancho: titulares en ancho semicondensado y peso alto, texto en ancho normal. Menos archivos que descargar con datos móviles
- **Carácter firme y ordenado**, que encaja con "cuadrar la caja". La parte amable ya la pone el logo redondeado; la página no necesita repetirla
- **Cifras tabulares**, indispensables para precios, montos y resultados
- Pensada para rendir bien en pantalla, incluso a tamaños chicos y en celulares de gama baja
- No es una de las fuentes por defecto que delatan una plantilla

**Uso**

| Elemento | Ancho | Peso | Tamaño celular → escritorio | Interlineado |
|---|---|---|---|---|
| Titular de portada (`h1`) | Semicondensado (`font-stretch: 87.5%`) | 800 | `clamp(2.125rem, 6vw, 3.5rem)` (34 → 56 px) | 1.05 |
| Título de sección (`h2`) | Semicondensado | 700 | `clamp(1.625rem, 4vw, 2.25rem)` (26 → 36 px) | 1.1 |
| Subtítulo / título de bloque (`h3`) | Normal | 700 | 1.125rem → 1.25rem | 1.3 |
| Subtítulo de portada | Normal | 400 | 1.0625rem → 1.1875rem (17 → 19 px) | 1.6 |
| Texto | Normal | 400 | **1.0625rem (17 px)** → 1.125rem | 1.6 |
| Texto secundario | Normal | 400 | 0.9375rem → 1rem | 1.5 |
| Botones | Normal | 600 | 1rem → 1.0625rem | 1 |
| Precio y cifras de resultados | Semicondensado | 800 | `clamp(2.5rem, 8vw, 4rem)` | 1 |

- **Texto base de 17 px en celular, no 16.** El dueño lee en el celular, a veces bajo el sol y a veces con vista cansada
- **Solo tres pesos:** 400, 600 (botones y énfasis puntual) y 700-800 (títulos y cifras). Sin cursivas
- **Cifras:** `tabular-nums` en todo precio, monto o resultado
- **Titulares en oración** ("Que cada turno cuadre"), nunca en MAYÚSCULAS. Las mayúsculas quedan para el logo
- Largo de línea del texto: `max-w-prose` (≈ 65 caracteres)

**Instalación**

- Paquete de Fontsource de la versión variable de Archivo, importado en `global.css`. Verificar en fontsource.org el nombre exacto del paquete y **cómo se importa el eje de ancho**, que puede venir en un archivo aparte del eje de peso
- Solo el subconjunto `latin` (cubre á, é, í, ó, ú, ñ, ü, ¿ y ¡)
- `font-display: swap`
- **Verificación obligatoria al instalar:** escribir `S/119 S/300 1111 0000` con `tabular-nums` y confirmar que los dígitos quedan alineados en columna. Si el paquete no incluye las cifras tabulares, se instala la fuente desde sus archivos oficiales en `public/fonts/`

**Alternativa si en el piloto alguien tiene dificultad para leer:** Atkinson Hyperlegible Next para el texto, manteniendo Archivo en titulares y cifras.

**No usar**

- Tipografías redondeadas que imiten el logo (Nunito, Quicksand, Comfortaa): compiten con él y se ven infantiles en texto largo
- Inter, Roboto, Poppins, Montserrat: son los valores por defecto de las plantillas
- Serif de titular sobre fondo claro: es uno de los rasgos típicos de páginas generadas
- Monoespaciada para cifras: se logra el mismo alineado con `tabular-nums`
- **Fuentes "manuscritas" para el cuaderno.** La letra a mano solo aparece en la foto real de la hoja de cuaderno

---

## 8. Contenido (`src/content.config.ts`)

Los esquemas **validan el contenido al compilar**. Si alguien publica un resultado sin permiso, el build falla.

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const producto = z.enum(['hospedajes']);

const faq = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/faq' }),
  schema: z.object({
    producto,
    pregunta: z.string(),
    orden: z.number(),
    publicado: z.boolean().default(false),
  }),
});

const resultados = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/resultados' }),
  schema: z
    .object({
      producto,
      contexto: z.string(),
      cifras: z.array(z.object({ valor: z.string(), etiqueta: z.string() })).max(3),
      cita: z.string().optional(),
      permiso: z.enum(['ninguno', 'anonimo', 'con-nombre']),
      nombreHotel: z.string().optional(),
      publicado: z.boolean().default(false),
    })
    .refine((d) => !d.publicado || d.permiso !== 'ninguno', {
      message: 'No se publica un resultado sin permiso escrito del hotel',
    })
    .refine((d) => d.permiso === 'con-nombre' || !d.nombreHotel, {
      message: 'nombreHotel solo se permite con permiso con-nombre',
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    titulo: z.string(),
    actualizado: z.coerce.date(),
  }),
});

export const collections = { faq, resultados, legal };
```

**Ejemplo de pregunta frecuente** (`src/content/faq/hospedajes/reemplaza-boleta-sunat.md`):

```md
---
producto: hospedajes
pregunta: ¿Reemplaza mi boleta de SUNAT?
orden: 1
publicado: true
---
No. Sigues emitiendo tu boleta como hoy. Cuadrape controla lo que la boleta no ve: quién ocupó cada habitación, cuánto tiempo y quién cobró.
```

**Contenido pendiente:** se crea el archivo con `publicado: false`. No aparece en la página hasta que se cambie. Así la pregunta sobre la factura puede existir en el repo mientras el contador define la respuesta.

**Los componentes siempre filtran por `publicado`** y ordenan por `orden`.

---

## 9. Imágenes, video, fuentes y JavaScript

### 9.1 Imágenes

| Tipo | Carpeta | Formato de origen |
|---|---|---|
| Capturas del producto | `src/assets/capturas/<producto>/` | PNG al doble de resolución del dispositivo |
| Fotos | `src/assets/fotos/<producto>/` | JPG original, lado mayor ≥ 2000 px, sin filtros |
| Logo | `src/assets/marca/` | SVG |
| Vista previa de WhatsApp | `public/og/` | PNG 1200×630, ya exportado |
| Favicon | `public/` | SVG |

- Todas las imágenes de `src/assets/` se muestran con el componente `Imagen.astro`, que envuelve `<Picture>` de `astro:assets` con AVIF y WebP, varios anchos y `sizes`
- **`alt` obligatorio** y descriptivo en español ("Aviso del sistema que impide registrar un ingreso en la habitación 5"). Imagen decorativa: `alt=""`
- **La imagen de la portada** se carga con `loading="eager"` y `fetchpriority="high"`. Todas las demás, diferidas (valor por defecto)
- `public/` es solo para lo que no debe procesarse (vista previa, favicon, video)
- **Antes de agregar una captura:** confirmar que sale de la empresa de demostración y que no muestra datos reales

### 9.2 Video

- `public/video/bloqueo-reasignacion.mp4`, 6-8 segundos, sin audio, **menos de 1.5 MB**
- `<video muted playsinline loop preload="none" poster="...">`: no se descarga hasta que se reproduce
- Se reproduce al entrar en pantalla (ver 9.4). Si el usuario tiene activado el movimiento reducido, se muestra solo el póster con controles

### 9.3 Fuentes

- Archivo, autoalojada con Fontsource (detalle en 7.2); si hiciera falta, archivos `woff2` en `public/fonts/` con `@font-face` en `global.css`
- `font-display: swap`
- Una sola familia, solo los pesos y ejes que se usan, solo el subconjunto `latin`
- **Ninguna fuente desde Google Fonts** u otro servidor externo

### 9.4 JavaScript permitido

Por defecto, **ninguno**. Excepciones aprobadas:

| Caso | Solución |
|---|---|
| Preguntas frecuentes desplegables | `<details>` / `<summary>` nativo. **Sin JavaScript** |
| Reproducir el video al entrar en pantalla | Script en línea de pocas líneas con `IntersectionObserver`, dentro de `Solucion.astro` |
| Mostrar el botón fijo al salir el botón de la portada | Script en línea con `IntersectionObserver` en `WhatsAppFijo.astro`. Sin JavaScript, el botón queda visible siempre (la página sigue funcionando) |
| Analítica | Script del proveedor, solo en producción (sección 11) |

Cualquier otro JavaScript necesita aprobación de JSP. **No se agregan componentes de React, Vue ni otros frameworks.**

---

## 10. SEO y vista previa (`BaseLayout.astro`)

`BaseLayout` recibe por props `titulo`, `descripcion`, `imagenOg` y `ruta`, y genera:

- `<html lang="es-PE">`
- `<title>` y `<meta name="description">`
- `<link rel="canonical">` con URL absoluta (a partir de `site` en `astro.config.mjs`)
- Open Graph: `og:title`, `og:description`, `og:image` (**URL absoluta**), `og:url`, `og:type`, `og:locale` = `es_PE`
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">` (el `viewport-fit=cover` es necesario para los márgenes seguros de la sección 7.1)
- Favicon

**Palabras del cliente** en título y descripción: *sistema para hospedaje*, *control de caja*, *hospedaje por horas*, *Pucallpa*. Nunca "PMS".

**Otros archivos**

- `astro.config.mjs` define `site: 'https://cuadrape.com'` (lo exige el sitemap)
- `public/robots.txt` apunta al sitemap
- Datos estructurados JSON-LD (`Organization` y `Product` con la oferta de precio) generados en `BaseLayout` **leyendo `src/config/`**, nunca con valores escritos a mano

**WhatsApp guarda en caché la vista previa.** Se prueba pegando el enlace en un chat propio **antes** de enviarlo a un prospecto. Si se cambia la imagen, se cambia también su nombre de archivo (`hospedajes-v2.png`) para forzar la actualización.

---

## 11. Analítica

- Proveedor **sin cookies** (Cloudflare Web Analytics, Plausible o Umami): no requiere banner
- El script se incluye en `BaseLayout` **solo si** `import.meta.env.PROD` y existe `PUBLIC_ANALYTICS_TOKEN`
- `.env.example` documenta la variable; los valores reales van en las variables de entorno de Amplify
- **Evento principal:** clic en cualquier `BotonWhatsApp`. El componente agrega el atributo que el proveedor necesita para registrar el evento
- Los enlaces que se comparten fuera del sitio llevan parámetros de origen (`?utm_source=visita`, `?utm_source=google-business`, etc.)

---

## 12. Verificación de contenido prohibido

`scripts/check-contenido.mjs` recorre los `.html` de `dist/` y falla (código de salida 1) si encuentra alguna entrada de `scripts/frases-prohibidas.json`, ignorando mayúsculas y tildes.

Lista inicial:

```json
[
  "24/7",
  "24 horas",
  "todo incluido",
  "cumple la ley",
  "cumple con la ley",
  "recuperó",
  "S/99",
  "S/ 99",
  "PMS",
  "lorem ipsum",
  "dashboard",
  "revoluciona"
]
```

- Cuando exista el número de soporte, **se agrega a esta lista**, para garantizar que nunca se publique
- La excepción "24 horas" en la sección de soporte ("No prometemos atención 24 horas para todo") se resuelve redactando esa frase de otro modo o agregando una lista de frases permitidas exactas. **No se debilita la regla general**
- También falla si `site.titular.ruc` está vacío en un build de producción

---

## 13. Transición multi-producto

Hoy:

```
src/pages/index.astro  →  <HospedajesLanding />
```

Cuando llegue el segundo producto:

1. Crear `src/pages/hospedajes/index.astro` que renderiza `<HospedajesLanding />`
2. Crear `src/views/PortadaMarca.astro` y hacer que `index.astro` la renderice, con acceso destacado a hospedajes
3. Agregar el nuevo producto en `src/config/productos.ts` (el header cambia solo a menú)
4. Crear sus carpetas en `sections/`, `content/`, `data/`, `capturas/` y `fotos/`
5. Actualizar `public/og/` y los metadatos

**No cambian:** `/privacidad`, `/terminos`, los identificadores de ancla (`#precio`, `#preguntas`) y la estructura de `src/config/`.

**Identificadores de ancla estables desde el día uno:** `#problema`, `#como-funciona`, `#resultados`, `#precio`, `#como-empezamos`, `#soporte`, `#preguntas`. Se usan en enlaces que se comparten por WhatsApp y no se renombran.

---

## 14. Despliegue en AWS Amplify

### 14.1 App separada

La página es **otra app de Amplify**, independiente de la aplicación del producto. Si una se cae o se despliega, la otra no se entera. Queda bajo el mismo AWS Budgets de la cuenta.

### 14.2 `amplify.yml`

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - nvm use
        - npm ci
    build:
      commands:
        - npm run check
        - npm run build
        - npm run check:contenido
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### 14.3 `customHttp.yml`

```yaml
customHeaders:
  - pattern: '/_astro/*'
    headers:
      - key: Cache-Control
        value: 'public, max-age=31536000, immutable'
  - pattern: '**/*'
    headers:
      - key: X-Content-Type-Options
        value: nosniff
      - key: Referrer-Policy
        value: strict-origin-when-cross-origin
```

### 14.4 Redirecciones

- `www.cuadrape.com` → `cuadrape.com`, permanente (301)
- Se configuran en la consola de Amplify, y **se copian en `infra/amplify-redirects.json`**, porque la consola no queda versionada
- No se usan las redirecciones de `astro.config.mjs` para esto: en un sitio estático generan una página intermedia, no un 301 real

### 14.5 Dominio

- `cuadrape.com` sin `www` requiere un registro **ALIAS/ANAME**. Si el registrador no lo admite, el DNS se gestiona en Route 53
- `hospedajes.cuadrape.com` apunta a la app del producto, no a esta

### 14.6 Ramas

| Rama | Despliegue | Acceso |
|---|---|---|
| `main` | Producción, `cuadrape.com` | **Protegida con contraseña de Amplify hasta el lanzamiento** |
| `develop` | Vista previa en URL de Amplify | Siempre protegida con contraseña |
| `feature/*` | Local | — |

**La página se publica después del primer mes de piloto.** Hasta esa fecha, `main` no se expone sin contraseña aunque el dominio ya esté conectado.

---

## 15. Flujo de trabajo

1. Crear rama `feature/<descripcion>` desde `develop`
2. Commits pequeños, en español, que digan qué cambió (`agrega sección de precio`, no `cambios`)
3. Pull request a `develop`. **Cambios de texto, precio o contenido legal los revisa JSP** antes de fusionar
4. Revisión en la URL de vista previa, en un celular real
5. `develop` → `main` solo con la definición de terminado cumplida

Tareas en el tablero Kanban de Jira del proyecto.

---

## 16. Definición de terminado (por sección)

- [ ] Se comporta como indica la tabla de la sección 7.1, revisada a 360, 768, 1024 y 1440 px, y con el celular en horizontal
- [ ] El botón fijo de WhatsApp no tapa contenido y respeta los márgenes seguros
- [ ] Todos los datos vienen de `src/config/`, `src/content/` o `src/data/`
- [ ] No agrega JavaScript fuera de las excepciones de 9.4
- [ ] Todas las imágenes tienen `alt` y usan `Imagen.astro`
- [ ] Una sola `h1` en la página; los títulos de sección son `h2` y respetan la jerarquía
- [ ] Contraste suficiente (nivel AA) y foco visible
- [ ] Respeta el movimiento reducido
- [ ] `npm run check`, `npm run build` y `npm run check:contenido` pasan
- [ ] Revisada en un Android real

**Metas de la página completa**

- Primera pantalla visible en menos de 3 segundos con datos móviles
- Peso total por debajo de ~1 MB, sin contar el video
- Lighthouse móvil: rendimiento, accesibilidad y SEO ≥ 90 (referencia, no sustituye la prueba en celular real)

---

## 17. Qué no hacer

- Escribir precios, números o RUC dentro de componentes
- Copiar bloques de plantillas o librerías de UI
- Agregar React, Vue, Svelte o librerías de animación
- Cargar fuentes, imágenes o scripts desde servidores externos (salvo la analítica aprobada)
- Usar fotos de stock o ilustraciones genéricas
- Usar capturas con datos reales
- Publicar contenido con `publicado: true` que tenga datos pendientes
- Agregar formularios de contacto (el contacto es por WhatsApp)
- Agregar banners de cookies, ventanas emergentes o chats
- Quitar el contorno de foco sin reemplazarlo
- Desactivar `check:contenido` para que el build pase
