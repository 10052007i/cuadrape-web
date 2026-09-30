# Landing comercial — Cuadrape para hospedajes

**Documento complementario a:** `00-contexto-proyecto.md`, `01-alcance-funcional-mvp.md`, `02-arquitectura-tecnica-mvp.md`, `04-operacion-y-soporte.md`
**Guía técnica de construcción:** `CLAUDE.md` del repositorio `cuadrape-web`
**Versión:** 1.0
**Estado:** planificación cerrada. Los pendientes que bloquean la publicación están en la sección 12.

---

## 1. Rol de la landing

La venta del producto es presencial y relacional. Por eso la landing cumple dos roles, en este orden de prioridad:

1. **Respaldo después de la visita.** El dueño la abre desde el enlace que se le envía por WhatsApp para confirmar que el producto es serio, y la reenvía a quien también decide (socio, esposa, hijo).
2. **Captación de tráfico frío.** Hospedajes que llegan desde Google, el perfil de Google Business o redes sociales, sin contacto previo.

**Consecuencias de diseño**

- Se diseña primero para **celular con datos móviles**
- La **vista previa del enlace en WhatsApp** es la primera impresión real y se diseña como pieza propia
- La primera pantalla debe entenderse sola (para el tráfico frío); el detalle va más abajo (para el que ya conoce el producto)
- La página es **corta y recorrible solo con los títulos**

---

## 2. Decisiones tomadas

| Tema | Decisión |
|---|---|
| Ubicación | Raíz `cuadrape.com`. Cuando exista un segundo SaaS, la raíz pasa a ser portada de marca con navegación a cada producto |
| Aplicación del producto | `hospedajes.cuadrape.com` (un subdominio por producto). Se descartan los subdominios por hotel |
| Publicación | **Después del primer mes de piloto**, con resultados reales |
| Titular | Se decide con los datos del piloto, según la regla de la sección 4.1 |
| Bloque de fundador | No. Habla el producto. La presencia local se transmite con "implementación presencial en Pucallpa" y la dirección en el pie |
| Identidad legal | Persona natural con RUC. Emisión de factura: **pendiente con el contador** |
| Precio publicado | S/119 al mes, **IGV incluido** |
| Permanencia | **Sin permanencia** |
| Precio piloto (S/99) | **No se publica** |
| Servicios facturables aparte | **No se publican**; solo en el contrato |
| Segundo local | Descuento desde el segundo local; se menciona en preguntas frecuentes **sin monto**. Regla interna igual para todos |
| Cancelación | Se entrega una exportación de los datos y se eliminan tras un plazo |
| WhatsApp de ventas | **Número aparte** del de soporte. El número de soporte no aparece en la página |
| Identidad visual | Logo existente (requiere versión vectorial limpia). Colores: azul `#023F72` y dorado `#E8AF2F`. Tipografía: Archivo |
| Fotos | Las toma JSP con el celular, en una sola sesión |
| Tecnología | Astro + Tailwind, construida por el hermano de JSP (detalle en `CLAUDE.md`) |

---

## 3. Audiencias y objetivo

### 3.1 Audiencias

| Audiencia | Qué necesita saber | Riesgo |
|---|---|---|
| **Dueño** (primaria) | Cuánto pierde hoy, cuánto cuesta, qué tan difícil es | Desconfía del software y de "otro gasto mensual" |
| **Co-decisor familiar** (secundaria) | Que es serio, qué incluye, que no lo amarran | No conoció al proveedor en persona |
| **Recepcionista** (la verá igual) | — | Si la página lo trata como ladrón, sabotea la adopción |

### 3.2 Objetivo de conversión

**Una sola acción: pedir una demostración por WhatsApp.** Sin formulario, sin registro, sin prueba gratuita.

El botón abre un mensaje prellenado:

> Hola, vi la página de Cuadrape y quiero una demostración. Mi hospedaje tiene ___ habitaciones.

El mensaje le ahorra al prospecto pensar qué escribir, y el número de habitaciones es el primer dato para saber si califica.

**La acción mantiene el mismo nombre en toda la página:** "Pide una demostración", en la portada, en el botón fijo del celular y en el cierre.

---

## 4. Mensaje

### 4.1 Regla del titular

El titular se decide al cerrar el primer mes del piloto, con esta regla:

- **Si hay un dato concreto y atribuible, con permiso para publicarlo**, el titular lleva ese dato. Ejemplo: *"En su primer mes, un hospedaje de [N] habitaciones en Pucallpa registró [N] salidas antes de tiempo y S/[X] en diferencias de caja."*
- **Si los datos son débiles o no hay permiso:** *"Que cada turno cuadre."*

El sistema **registra señales, no demuestra fraude**. El titular dice *registró* o *detectó*, nunca *recuperó* ni *descubrió robos*, salvo que la comparación antes/después lo sostenga con claridad.

### 4.2 Ángulos evaluados

| Ángulo | Idea | Uso |
|---|---|---|
| A. Control a distancia | Sabe lo que pasa en tu hospedaje aunque no estés | Apoyo en la sección del panel del dueño |
| B. La pérdida invisible | Hay dinero que entra al hospedaje y no llega a caja | Sección del problema, contado con un caso concreto |
| C. La caja que cuadra | Que cada turno cuadre | Titular por defecto; conecta con el nombre de la marca |

### 4.3 Jerarquía de argumentos

1. **Control sin estar presente.** El dueño ve liberaciones, diferencias de caja y cobros desde su celular
2. **Bloqueo de reasignación.** El diferencial único, explicado con el caso real y no con el nombre técnico
3. **Hecho para alquiler por horas.** El competidor calcula noches y penalidades por salida tardía
4. **Caja por método de pago.** No es diferencial, pero es concreto
5. **Registro de huéspedes y bloqueo de menores.** Protección legal para el dueño, planteada como tranquilidad y nunca con miedo
6. **Fácil para el recepcionista.** Tres toques, celular o PC, un video de capacitación
7. **Soporte local**, con reglas escritas

No se presentan como novedad el arqueo, los roles ni la bitácora: el competidor también los tiene.

### 4.4 Tono

- **Control y claridad, no sospecha.** Frase ancla: *"Todo queda registrado a nombre de quien lo hizo, también cuando lo hizo bien."*
- **Vocabulario del cliente:** hospedaje, cuaderno, turno, caja, cuadrar, Yape, habitación, recepción
- **Vocabulario prohibido:** PMS, SaaS, dashboard, plataforma integral, optimiza, potencia, revoluciona, IA, solución

### 4.5 Objeciones

| Objeción | Respuesta base |
|---|---|
| "Es otro gasto mensual" | Menos de S/4 al día. Después del piloto, se ancla en el caso real |
| "Ya emito boleta en SUNAT" | No la reemplaza: controla lo que la boleta no ve |
| "Mi personal no sabe de sistemas" | Tres toques, funciona en el celular, hay video de capacitación |
| "¿Y si se va el internet?" | Se anota en papel y se registra dentro del mismo turno |
| "El otro sistema tiene más cosas" | Este está hecho para hospedajes por horas |
| "¿Y los datos de mis huéspedes?" | Sin fotos de documentos, datos aislados por hospedaje |
| "¿Me amarran con contrato?" | Sin permanencia |
| "Tengo dos hospedajes" | Cada local con su acceso; precio especial desde el segundo |

### 4.6 Lo que la página no dice

- Atención 24 horas o 24/7
- "Todo incluido" (existen servicios que se cobran aparte, aunque no se publiquen)
- "Cumple la ley" o "te protege legalmente"
- "Recuperó" o porcentajes de recuperación sin datos que lo sostengan
- Operación offline, facturación SUNAT o impresión como si existieran
- Fechas del roadmap
- El precio piloto de S/99
- El número de WhatsApp de soporte
- Nombres de hoteles piloto sin permiso escrito
- Que el sistema "cumple con el libro de registro oficial" (pregunta abierta)

---

## 5. Arquitectura de secciones

Página única más páginas legales. Cada título debe entenderse sin leer el texto de abajo.

| # | Sección | Propósito | Contenido |
|---|---|---|---|
| 0 | Barra superior | Identidad y accesos | Logo de Cuadrape, "para hospedajes", **Ingresar** (discreto) y **Pide una demostración**. En celular, botón de WhatsApp fijo en toda la página |
| 1 | Portada | Entenderse en 5 segundos | Titular, subtítulo, botón, precio con IGV y sin permanencia, captura real del tablero |
| 2 | El problema | Que el dueño se reconozca | Caso de la habitación de 4 horas en 3 momentos + otras fugas |
| 3 | Cómo se cierra | Mostrar el diferencial | El mismo caso continuado + video corto del bloqueo |
| 4 | Panel del dueño | Vender el control | Captura del panel + 4 señales |
| 5 | Resultados del piloto | Prueba real | Contexto, 3 cifras, gráfico antes/después, cita real |
| 6 | Hecho para cómo trabajas | Resolver "¿me sirve?" | Tarifas, métodos de pago, friobar, dispositivos |
| 7 | Registro de huéspedes | Protección legal | Todos los ocupantes, bloqueo de menores, datos protegidos |
| 8 | Precio | Sin sorpresas | Plan único, qué incluye, implementación |
| 9 | Cómo empezamos | Bajar el miedo al cambio | 4 pasos |
| 10 | Soporte | Honestidad como diferencial | Canal, horario, urgencias |
| 11 | Preguntas frecuentes | Objeciones restantes | Ver sección 7 |
| 12 | Cierre y pie | Último contacto y datos legales | Botón, titular del negocio, RUC, ciudad, enlaces legales |

**Por qué este orden:** problema → solución → prueba antes que las características, porque el tráfico frío necesita entender el caso primero. El precio va después de la prueba: S/119 se lee distinto después de ver cuánto perdió un hospedaje real. Implementación y soporte responden al "¿y después qué?" que aparece al considerar pagar.

**Fuera de la página:** comparación con el competidor por nombre, blog, chatbot, ventanas emergentes, lista larga de funciones con íconos, página "Nosotros".

---

## 6. Precios y servicios

### 6.1 Qué se publica

| Se publica | No se publica |
|---|---|
| S/119 al mes, IGV incluido, plan único | Precio piloto S/99 |
| Hasta 30 habitaciones, usuarios ilimitados | Condiciones negociadas |
| Implementación S/300, una sola vez, IGV incluido (confirmar) | Prueba gratuita |
| Sin permanencia | Servicios facturables aparte |
| Lo que incluye la mensualidad | Monto del descuento por segundo local |
| "Más de 30 habitaciones: escríbenos" | Fechas del roadmap |

### 6.2 Presentación

- **Una sola tarjeta de precio.** No se inventan planes para llenar una tabla: la simplicidad es la ventaja frente a los tres planes del competidor
- **Escala diaria:** menos de S/4 al día
- **"IGV incluido" y "sin permanencia" pegados al precio**, no en letra pequeña ni en las preguntas frecuentes
- **"Incluye:" seguido de una lista exacta.** Nunca "todo incluido"
- **La implementación se explica, no solo se cobra:** visita, carga de habitaciones y tarifas, capacitación presencial por rol, revisión del primer reporte
- **Una línea sobre cómo se paga la mensualidad** (transferencia, Yape u otros que se definan)
- **Sin prueba gratuita pública.** "Sin permanencia" cumple la función de bajar el riesgo. Si un prospecto lo pide, la herramienta es negociar la implementación uno a uno
- **El roadmap no aparece cerca del precio.** Solo en la pregunta frecuente sobre SUNAT, sin fechas

---

## 7. Texto borrador por sección

Lo que va entre [corchetes] depende de los datos del piloto o de decisiones pendientes.

### 0 · Barra superior

Logo de Cuadrape con el texto *para hospedajes*. A la derecha: **Ingresar** (enlace discreto a `hospedajes.cuadrape.com`) y **Pide una demostración**.

### 1 · Portada

**Titular:** según la regla de la sección 4.1.

> Sistema de control para hospedajes que alquilan por horas. Cada ingreso, cobro y salida queda registrado a nombre de quien lo hizo, y tú lo ves desde tu celular.
>
> **[Pide una demostración]**
>
> S/119 al mes, IGV incluido. Sin permanencia.

Imagen: captura real del tablero en un celular.

### 2 · El problema

> **Una habitación, dos cobros, una sola entrada a caja.**
>
> **2:00 p.m.** Una pareja alquila la 5 por 4 horas.
> **3:00 p.m.** Se van antes. A la habitación le quedan 3 horas pagadas.
> **3:30 p.m.** Llega otra pareja y paga en efectivo. En el cuaderno no aparece.
>
> No hace falta que nadie mienta: basta con no anotar. Y desde fuera, es imposible de ver.
>
> También pasa con cobros a otra tarifa, efectivo que no cuadra en el cambio de turno, días sueltos en estadías largas y consumos del friobar que no se anotan.

### 3 · Cómo se cierra

> **Con Cuadrape, la 5 no se vuelve a alquilar sin dejar rastro.**
>
> Mientras tenga tiempo pagado, el sistema no acepta un nuevo ingreso. Si el huésped se fue antes, el recepcionista marca *Liberar antes de tiempo* y escribe el motivo. Tú lo ves.
>
> Todo queda a nombre de quien lo hizo, también cuando lo hizo bien.

### 4 · Panel del dueño

> **Lo que antes no veías, ahora lo ves en tu celular.**
>
> - Habitaciones liberadas antes de tiempo, con el motivo y quién lo hizo
> - Faltantes y sobrantes de caja, por turno y por recepcionista
> - Cuánto se cobró en efectivo, Yape y POS, y quién cobra en efectivo más que el resto
> - Ingresos registrados tarde, con la hora real en que se anotaron

### 5 · Resultados del piloto

Estructura, sin texto hasta tener datos:

- **Contexto en una línea:** [N] habitaciones, 2 recepcionistas, antes llevaban cuaderno
- **Tres cifras** del primer mes
- **Gráfico** de ingresos antes y después
- **Cita textual del dueño**, real y con permiso. No se redacta por él

### 6 · Hecho para cómo trabajas

> **Por horas, por noche o por semana.** Tú defines las tarifas. El recepcionista elige; nunca escribe el monto.
>
> **Efectivo, Yape y POS, cada uno por su lado.** Al cerrar el turno, solo se cuenta el efectivo. Lo digital se revisa con su número de operación.
>
> **El friobar también.** Gaseosas, cervezas y todo lo que vendes en la habitación, con su stock.
>
> **En el celular, la tablet o la PC.** Sin instalar nada. Un ingreso se registra en [menos de 15 segundos].

El dato de los 15 segundos solo se publica si se midió en el piloto.

### 7 · Registro de huéspedes

> **Cada ocupante registrado. Ningún menor de edad, sin excepciones.**
>
> El sistema pide el documento de todos los que entran, no solo de quien paga. Si alguien es menor de 18 años, el ingreso no se puede completar, y nadie puede saltarse ese control. Los huéspedes que vuelven se completan solos con su número de documento.
>
> No guardamos fotos de documentos. Los datos de tu hospedaje son solo tuyos.

### 8 · Precio

> **S/119 al mes**
> Menos de S/4 al día. Precio final, IGV incluido.
>
> Hasta 30 habitaciones. Usuarios ilimitados.
> **Sin permanencia: cancelas cuando quieras.**
>
> **Incluye:**
> - Soporte por WhatsApp de lunes a sábado
> - Actualizaciones y funciones nuevas
> - Servidores y copias de seguridad
> - Videos de capacitación para personal nuevo
>
> **Implementación: S/300, una sola vez.** Visitamos tu hospedaje en Pucallpa, cargamos tus habitaciones y tarifas, y capacitamos a tu personal.
>
> ¿Más de 30 habitaciones? Escríbenos.

### 9 · Cómo empezamos

> 1. **Te mostramos el sistema**, en tu hospedaje o por videollamada.
> 2. **Lo dejamos listo:** habitaciones, tarifas, métodos de pago y usuarios.
> 3. **Capacitamos a tu equipo:** una sesión presencial por rol, más videos para después.
> 4. **Revisamos juntos tu primer reporte**, al terminar el primer mes.

El paso 4 es un compromiso de tiempo con cada cliente nuevo. Se publica solo si se va a cumplir siempre.

### 10 · Soporte

> **Soporte local, con reglas claras.**
>
> Como cliente, tienes un WhatsApp de soporte exclusivo, de lunes a sábado de 9:00 a 19:00. Si el sistema no te deja registrar ingresos o cobrar, te respondemos en menos de 2 horas, cualquier día y a cualquier hora.
>
> No prometemos atención 24 horas para todo. Prometemos responder rápido cuando de verdad importa.

El número de soporte **no se publica**: se entrega en la implementación.

### 11 · Preguntas frecuentes

> **¿Reemplaza mi boleta de SUNAT?**
> No. Sigues emitiendo tu boleta como hoy. Cuadrape controla lo que la boleta no ve: quién ocupó cada habitación, cuánto tiempo y quién cobró.
>
> **¿Y si se va el internet?**
> Anota en papel la hora, la habitación, la tarifa, el pago y los ocupantes. Cuando vuelva la conexión, lo registras dentro del mismo turno. No se pierde nada ni se descuadra la caja.
>
> **¿Qué pasa si cambio de recepcionista?**
> Le envías el video de capacitación. Es gratis, siempre.
>
> **¿Necesito comprar equipos?**
> No. Funciona en el celular, la tablet o la PC que ya tienes, con internet.
>
> **¿Quién ve los datos de mis huéspedes?**
> Solo tú y tu personal, cada uno según su rol. Tus recepcionistas no pueden descargar la lista de huéspedes.
>
> **¿Puedo cancelar cuando quiera?**
> Sí, sin permanencia. Si cancelas, te entregamos toda tu información en un archivo y la eliminamos de nuestros sistemas a los [N] días.
>
> **Tengo más de un hospedaje, ¿cómo funciona?**
> Cada local tiene su propio acceso y sus propios reportes. Desde el segundo local tienes un precio especial; escríbenos.
>
> **¿Emiten factura?**
> [Pendiente: definición con el contador]

### 12 · Cierre y pie

> **Míralo funcionando en tu propio hospedaje.**
> **[Pide una demostración]**

Pie de página, en líneas separadas: nombre del titular, RUC, Pucallpa (Ucayali), correo de contacto, Política de privacidad, Términos, [Libro de reclamaciones].

---

## 8. Dirección visual

### 8.1 Principio

La página se parece al producto y a su cliente, no a una startup genérica. **Un solo elemento memorable** (el contraste cuaderno → tablero); todo lo demás, sobrio y disciplinado.

### 8.2 Concepto central: del cuaderno al tablero

- **Sección del problema:** una hoja de cuaderno escrita a mano, con tachones, horarios apretados y un espacio donde "falta" un ingreso. **Datos inventados, escritos para la foto.** Nunca la foto de un cuaderno real de un hotel
- **Sección de solución:** el tablero limpio mostrando la misma habitación 5
- El contraste cuenta la historia sin texto

### 8.3 Lo prohibido

Estas son las señales de una página hecha con plantilla o con IA:

- Degradados morado-azul, manchas difusas de fondo, efecto de vidrio esmerilado
- Ilustraciones isométricas o 3D de personas con laptops
- Rejilla de tarjetas idénticas con ícono lineal, título y dos líneas; mismo radio y misma sombra gris en todo
- Fotos de stock: recepcionistas sonrientes, lobbies de lujo, apretones de manos
- Laptop o celular flotando en ángulo sobre degradado
- Contadores animados, franjas de "confían en nosotros", estrellas de valoración
- Modo oscuro con acentos neón
- Emojis como íconos
- Etiquetas en MAYÚSCULAS espaciadas encima de cada título
- Resaltar una sola palabra del titular en otro color o en cursiva
- Textos unidos con puntos medios ("A · B · C") y flechas "→" al final de botones
- Numeración 01 / 02 / 03 en contenido que no es una secuencia. **Sí se usa** en la sección del problema (horas) y en "Cómo empezamos" (pasos), porque ahí sí hay orden
- Animaciones de entrada en cada sección al hacer scroll

### 8.4 Color

- La paleta sale de los **colores existentes de Cuadrape**
- **Alto contraste** en textos: se lee en el celular, a veces bajo el sol
- **El acento de la marca no coincide con los colores de estado del tablero** (libre, ocupada, en limpieza). Si coincide, se reduce el uso del acento en la página; los colores de estado no se tocan
- La empresa de demostración usa un **color primario neutro**, para que las capturas no muestren tres acentos compitiendo
- **Revisar la paleta contra las combinaciones más repetidas de las páginas generadas:** fondo crema con titulares serif y acento terracota, o fondo casi negro con un acento verde ácido. El tono papel vive en la foto del cuaderno, no necesariamente como fondo de toda la página

### 8.5 Tipografía

- **Archivo**, una sola familia variable: titulares en ancho semicondensado y peso alto, texto en ancho normal. Carácter firme y ordenado que complementa al logo redondeado sin imitarlo
- Texto base de 17 px en celular, pensando en lectura bajo el sol y con vista cansada
- Líneas de texto de menos de 80 caracteres
- **Cifras con números tabulares** (alineados como en una caja registradora): S/119, diferencias de caja, resultados del piloto
- Titulares en oración, nunca en mayúsculas
- Detalle de tamaños, pesos e instalación: `CLAUDE.md`, sección 7.2

### 8.6 Imágenes

| Usar | No usar |
|---|---|
| Capturas reales recortadas al detalle: aviso de bloqueo, motivo de liberación, cierre por método, panel de alertas | Capturas de pantalla completa reducidas hasta ser ilegibles |
| Fotos de objetos: llave con llavero numerado, cuaderno, sencillo en caja, celular con Yape ficticio | Camas, parejas, cualquier sugerencia del uso de la habitación |
| Video de 6-8 segundos sin sonido: tocar una habitación ocupada y ver el bloqueo | Animaciones decorativas |

La **llave con llavero numerado** puede funcionar como ícono de la página: es inconfundiblemente "hospedaje" y remite a la habitación 5 del caso.

**Sesión de fotos:** una sola sesión, mismo lugar, luz natural lateral sin sol directo, mismo fondo, sin filtros, lente limpio, resolución máxima, cada objeto en vertical y horizontal. **Ningún dato real visible.**

### 8.7 Movimiento

Solo el video del bloqueo, que se reproduce al llegar a su sección. Las interacciones del usuario (abrir una pregunta frecuente) pueden tener una transición breve. Se respeta la preferencia de movimiento reducido del sistema.

### 8.8 Vista previa en WhatsApp

Imagen de 1200×630 diseñada a propósito: logo, titular y una captura del tablero, legible en miniatura.

### 8.9 Coordinación con el producto

Desde este plan, **la interfaz del producto es material de venta**. El tablero y el panel del dueño deben verse bien en capturas antes del lanzamiento.

---

## 9. Dominios, rutas y transición multi-producto

### 9.1 Estructura

| Dirección | Contenido |
|---|---|
| `cuadrape.com` | Landing de hospedajes (hoy); portada de marca (futuro) |
| `www.cuadrape.com` | Redirige de forma permanente a `cuadrape.com` |
| `hospedajes.cuadrape.com` | Aplicación del producto |
| `cuadrape.com/privacidad`, `/terminos` | Páginas legales. **Sus direcciones no cambian nunca** |

### 9.2 Transición cuando llegue el segundo SaaS

1. El contenido de hospedajes pasa a `cuadrape.com/hospedajes`
2. La raíz se convierte en portada de marca, con **acceso destacado a hospedajes** (la raíz no se redirige: sigue existiendo, así que los enlaces antiguos llegan a la portada y de ahí a hospedajes con un toque)
3. La barra superior cambia "para hospedajes" por un menú de productos
4. Se actualizan la vista previa de WhatsApp, el perfil de Google Business y Search Console

**Para que esto sea rápido, el texto nunca define a Cuadrape como "el sistema de hospedajes":** se escribe "Cuadrape para hospedajes".

Tarea registrada en Jira desde ahora.

### 9.3 Botón Ingresar

Obligatorio en la barra superior. Los clientes van a escribir `cuadrape.com` para entrar al sistema; sin un enlace visible, cada recepcionista nuevo termina preguntando por soporte.

---

## 10. Legal y datos

| Elemento | Contenido | Observación |
|---|---|---|
| Política de privacidad | Titular (nombre, RUC), qué datos recoge la página (casi ninguno: el contacto es por WhatsApp; solo analítica sin cookies), cómo ejercer los derechos sobre los datos | Los datos de huéspedes **no van aquí**: el hotel es el responsable y Cuadrape los trata por encargo |
| Contrato con cada hotel | Cláusula de **encargo de tratamiento** de datos de huéspedes; servicios facturables aparte; plazo de eliminación al cancelar | Los términos publicados deben coincidir con el contrato |
| Términos | Sin permanencia, datos al cancelar, soporte | Idénticos al contrato en lo que coincidan |
| Libro de reclamaciones virtual | Obligación del Código de Protección al Consumidor | Confirmar con contador o abogado. Barato de incluir y da confianza |
| Marca en Indecopi | Protección del nombre Cuadrape | **Solicitud presentada antes de publicar** |
| Banco de datos de prospectos | Lista de contactos comerciales | Verificar si requiere inscripción ante la Autoridad de Protección de Datos Personales |

**Eliminación al cancelar:** la promesa honesta es *"se eliminan de nuestros sistemas a los [N] días, y de las copias de seguridad en su ciclo normal de rotación"*. Requiere:

- Exportación de salida **manual** mientras no exista la exportación a Excel (v2): ingresos, pagos, cierres de caja y huéspedes
- Un **procedimiento de eliminación de empresa** documentado, ejecutado con usuario administrador de base de datos, porque el usuario de la aplicación no tiene permiso de borrado sobre las tablas inmutables

---

## 11. Medición

- **Evento principal:** clic en el botón de WhatsApp. Todo lo demás es contexto
- **Analítica sin cookies**, para no necesitar banner
- **Origen del tráfico** con parámetros en los enlaces que se comparten (visita, redes, Google Business)
- **Embudo manual** en hoja o Jira: clics → conversaciones → demostraciones → clientes
- **Revisión mensual**
- **Regla de las tres repeticiones:** si una pregunta de prospecto se repite tres veces por WhatsApp, se agrega a las preguntas frecuentes o se corrige la sección que no la respondía

---

## 12. Pendientes y checklist de lanzamiento

### A. Durante el piloto (no se pueden recuperar después)

- [ ] Números del mes anterior de cada piloto, como línea base
- [ ] Permiso escrito de cada piloto para publicar resultados (anónimo o con nombre) y usar una cita
- [ ] Medición del tiempo real de registro de un ingreso
- [ ] Al cerrar el mes: liberaciones, diferencias de caja, cobros por método y friobar

### B. Decisiones de negocio y legales

- [ ] Contador: régimen tributario, factura, IGV incluido en la implementación
- [ ] Plazo N de eliminación y formato de la exportación de salida
- [ ] Procedimiento de eliminación de empresa documentado
- [ ] Regla interna del descuento por segundo local
- [ ] Confirmar el compromiso de revisar el primer reporte con cada cliente
- [ ] Medios de pago de la mensualidad
- [ ] Solicitud de marca en Indecopi
- [ ] Libro de reclamaciones virtual e inscripción del banco de datos
- [ ] Política de privacidad y términos alineados con el contrato
- [ ] Cláusula de encargo de tratamiento en el contrato
- [ ] Formato oficial de libro de registro de huéspedes (mientras no se sepa, no se menciona)

### C. Material

- [ ] Empresa de demostración con datos ficticios y color primario neutro
- [ ] Tablero y panel del dueño con buena presentación
- [ ] Capturas recortadas al detalle
- [ ] Video del bloqueo de reasignación
- [ ] Sesión de fotos de objetos
- [ ] Hoja de cuaderno ficticia
- [ ] Verificación del acento de Cuadrape frente a los colores de estado
- [ ] Imagen de vista previa para WhatsApp
- [ ] Texto final con titular y preguntas frecuentes resueltas

### D. Infraestructura (detalle en `CLAUDE.md`)

- [ ] Dominio raíz apuntando a Amplify (ALIAS o Route 53)
- [ ] Redirección de `www` a la raíz
- [ ] Aplicación en `hospedajes.cuadrape.com` con cookie de sesión limitada al subdominio
- [ ] `contacto@cuadrape.com` con SPF y DKIM
- [ ] WhatsApp Business de ventas: perfil, horario, respuesta automática y bienvenida
- [ ] Analítica sin cookies, Search Console y perfil de Google Business

### E. Día antes de publicar

- [ ] Prueba en Android de gama baja con datos móviles
- [ ] Vista previa probada pegando el enlace en un chat propio
- [ ] Verificación de contenido prohibido sin errores (sección 4.6)
- [ ] "IGV incluido" y "sin permanencia" junto al precio
- [ ] Tarea de transición multi-producto creada en Jira

### F. Después de publicar

- [ ] Revisión mensual de clics por origen y embudo manual
- [ ] Preguntas repetidas convertidas en preguntas frecuentes o correcciones
- [ ] Resultados actualizados con más meses o clientes
