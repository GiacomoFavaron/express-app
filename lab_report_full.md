**Memoria del Laboratorio 1 — Portal Web**

**Asignatura:** Desarrollo Web / Prácticas

**Alumno:** [Nombre del alumno]

**Fecha:** 14/12/2025

---

**Resumen**

Este documento recoge el desarrollo de un portal web mínimo solicitado en el laboratorio. El objetivo era crear una aplicación Express con tres versiones: una página de bienvenida personalizada (`/`), una nueva ruta `/servicios` con listado de servicios, y una página `/mejoras` donde se describan propuestas y mejoras implementadas.

---

**Índice**

1. Objetivo
2. Entorno y herramientas
3. Estructura del proyecto
4. Desarrollo por versiones
   - v1 — Página de bienvenida
   - v2 — Ruta `/servicios`
   - v3 — `/mejoras` y mejoras propuestas
5. Fragmentos de código relevantes
6. Comandos para ejecución y generación de PDF
7. Control de versiones (tags/commits)
8. Conclusiones

---

**1. Objetivo**

Crear un pequeño portal web con diferentes vistas según la ruta elegida y documentar el código nuevo implementado. El trabajo se entregará en GitHub y debe poder desplegarse en Render.

**2. Entorno y herramientas**

- Node.js (>=14)
- npm
- Express (generado con `express-generator`)
- EJS como motor de vistas
- Editor de texto (VS Code u otro)
- (Opcional) Pandoc para convertir la memoria en PDF

**Herramientas adicionales utilizadas**

- `git` para control de versiones
- `curl` o navegador para probar rutas
- `pandoc` y una distribución TeX si se desea generar PDF localmente

Si se desplegará en Render, se usa la integración con GitHub y el `start` script definido en `package.json`.

**3. Estructura del proyecto (relevante)**

- `app.js` — Configuración Express
- `bin/www` — Script de arranque
- `routes/index.js` — Rutas del sitio (se añadieron `/servicios` y `/mejoras`)
- `views/` — Plantillas EJS (`index.ejs`, `servicios.ejs`, `mejoras.ejs`)
- `public/` — Recursos estáticos (`stylesheets/style.css`, `images/`)
- `lab_report_full.md` — Memoria (este archivo)

Estructura de carpetas (resumen):

```
render_app/
├─ app.js
├─ bin/www
├─ package.json
├─ routes/
│  └─ index.js
├─ views/
│  ├─ index.ejs
│  ├─ servicios.ejs
│  └─ mejoras.ejs
└─ public/
  ├─ images/
  └─ stylesheets/style.css
```

**4. Desarrollo por versiones**

v1 — Página de bienvenida (`/`)
- Personalicé la página de inicio para que represente la portada de la "empresa" (ACME Consulting en el ejemplo), con cabecera, navegación y sección hero.
- Se sustituyó el contenido por defecto por un diseño sencillo y profesional.

v2 — Nueva ruta `/servicios`
- Añadida la ruta y la vista para mostrar un listado de servicios que ofrece la empresa. Los datos se sirven desde el servidor como un array simple.

v3 — `/mejoras`
- Añadida la ruta y la vista que detalla las mejoras propuestas y señala las implementadas (navegación, estilos, ruta de servicios, hero con imagen).

Detalles por versión (pasos y decisiones)

- v1: Después de generar el esqueleto con `express-generator`, se personalizó `views/index.ejs` y `public/stylesheets/style.css`. Se preservó la configuración de vista EJS en `app.js`.
- v2: Se añadió lógica en `routes/index.js` para proporcionar un array `services` al renderizar la vista `servicios.ejs`. Esta aproximación es suficiente para el laboratorio; la persistencia no fue requerida.
- v3: Se añadió `mejoras.ejs` y se documentaron las mejoras. También se reorganizó el `hero` para mostrar la imagen y el botón superpuesto.

**5. Fragmentos de código relevantes**

A continuación se incluyen extractos de los cambios más importantes realizados durante el laboratorio. Estos fragmentos se incluyen como ejemplos para que el corrector identifique qué se programó.

- `routes/index.js` (añadidas rutas `/servicios` y `/mejoras`):

```javascript
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ACME Consulting', description: 'Soluciones tecnológicas a medida para su negocio.' });
});

/* GET servicios page. */
router.get('/servicios', function(req, res, next) {
  const services = [
    { name: 'Desarrollo Web', desc: 'Construcción de aplicaciones web modernas.' },
    { name: 'Consultoría IT', desc: 'Asesoría en transformación digital.' },
    { name: 'Soporte y Mantenimiento', desc: 'Planes de soporte 24/7.' }
  ];
  res.render('servicios', { title: 'Servicios - ACME Consulting', services: services });
});

/* GET mejoras page. */
router.get('/mejoras', function(req, res, next) {
  const improvements = [
    'Navegación principal con accesos a secciones',
    'Estilos básicos y diseño responsive',
    'Página de servicios con datos dinámicos'
  ];
  res.render('mejoras', { title: 'Mejoras propuestas', improvements: improvements });
});

module.exports = router;
```

- `views/index.ejs` (hero full-bleed con overlay y botón sobre la imagen):

```html
<section class="hero">
  <div class="hero-figure">
    <img src="/images/lab-image.png" alt="Imagen del laboratorio" class="hero-image" />
    <div class="hero-overlay">
      <h2 class="hero-title"><%= title %></h2>
      <p class="lead"><%= description %></p>
      <a class="btn btn-hero" href="/servicios">Ver servicios</a>
    </div>
  </div>
</section>
```

- `views/servicios.ejs` (listado dinámico de servicios):

```html
<h2>Servicios</h2>
<ul class="services">
  <% services.forEach(function(s){ %>
    <li class="service-item">
      <h3><%= s.name %></h3>
      <p><%= s.desc %></p>
    </li>
  <% }); %>
</ul>
```

- `views/mejoras.ejs` (propuestas y mejora implementada):

```html
<h2>Mejoras propuestas</h2>
<ol>
  <% improvements.forEach(function(it){ %>
    <li><%= it %></li>
  <% }); %>
</ol>

<section>
  <h3>Mejora implementada</h3>
  <p>Se añadió navegación superior y estilos básicos. También se creó la ruta <code>/servicios</code> con contenido dinámico.</p>
</section>
```

- Fragmento de `public/stylesheets/style.css` (estilos del hero y botón):

```css
.hero-figure{position:relative;width:100%;height:420px;overflow:hidden}
.hero-image{width:100%;height:100%;object-fit:cover;display:block}
.hero-overlay{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);color:#fff;text-align:center;padding:24px;border-radius:8px;background:linear-gradient(180deg, rgba(0,0,0,0.28), rgba(0,0,0,0.38));max-width:90%;}
.btn-hero{padding:12px 18px;font-weight:600;box-shadow:0 6px 18px rgba(0,0,0,0.2)}
```

**6. Comandos para ejecución y generación de PDF**

- Ejecutar localmente:

```bash
cd render_app
npm install
npm start
# Abrir http://localhost:3000/
```

- Generar PDF de esta memoria (si dispone de `pandoc` y TeX):

```bash
cd render_app
pandoc lab_report_full.md -o lab_report_full.pdf --metadata title="Memoria - Portal Web"
```

Si no dispone de `pandoc`, se puede exportar desde un editor Markdown (VS Code + extensión) o utilizar un convertidor online.

**7. Control de versiones (sugerencia para entrega)**

Hacer commits y tags por versión, por ejemplo:

```bash
# después de implementar la versión 1
git add .
git commit -m "v1: Página de bienvenida personalizada"
git tag -a v1 -m "Versión 1 - Página de bienvenida"

# después de implementar la versión 2
git commit -am "v2: Añadida ruta /servicios y vista"
git tag -a v2 -m "Versión 2 - /servicios"

# después de implementar la versión 3
git commit -am "v3: Añadida /mejoras y mejoras de UI"
git tag -a v3 -m "Versión 3 - /mejoras"

# subir tags y commits
git push origin main --tags
```

**8. Conclusiones**

- Se ha implementado un portal web básico con las tres versiones solicitadas.
- El código añadido está documentado en este informe con fragmentos representativos.
- Como mejoras futuras se propone añadir persistencia (base de datos), formulario de contacto y despliegue automático en Render mediante integración con GitHub.

---

**Apéndice — Archivos modificados (resumen)**

- `routes/index.js` — (añadidas rutas `/servicios`, `/mejoras`)
- `views/index.ejs`, `views/servicios.ejs`, `views/mejoras.ejs`
- `public/stylesheets/style.css`
- `README.md` — Instrucciones de uso y generación de PDF

---

**Sección ampliada: Diseño y decisiones de implementación**

- Enfoque: mantener el proyecto sencillo y entendible para evaluación. Se priorizó claridad del código sobre optimizaciones prematuras.
- Separación de preocupaciones: rutas en `routes/`, vistas en `views/`, estilos en `public/stylesheets`.
- Datos: los servicios se representan como un array en memoria dentro de la ruta para facilitar la evaluación. Si se quisiera persistencia, se propondría SQLite o MongoDB según preferencia.

**Diagrama simple de flujo (texto)**

1. Cliente solicita `/` -> Servidor renderiza `index.ejs` con `title` y `description`.
2. Cliente pulsa "Ver servicios" -> Navega a `/servicios`.
3. Servidor maneja `/servicios`, construye array `services` y renderiza `servicios.ejs`.

**Pruebas realizadas (casos manuales)**

- Caso 1: Acceso `GET /` — Resultado esperado: status 200 y renderizar título, descripción y hero con imagen.
- Caso 2: Acceso `GET /servicios` — Resultado esperado: status 200 y listado de 3 servicios visibles.
- Caso 3: Acceso `GET /mejoras` — Resultado esperado: status 200 y listado de mejoras.
- Caso 4: Archivo de imagen faltante — El `img` mostrará fallo visual; recomendable añadir `public/images/lab-image.png`.

Se probaron las rutas con navegador y con `curl`:

```bash
curl -i http://localhost:3000/
curl -i http://localhost:3000/servicios
```

**Despliegue en Render (instrucciones resumidas)**

1. Crear repositorio en GitHub y subir el proyecto.
2. En Render, crear nuevo "Web Service" y conectar a GitHub.
3. Configurar branch `main` y comando de start (`npm start`). Render detectará Node y hará `npm install`.
4. Añadir variable de entorno si fuera necesaria; en este proyecto no hay variables obligatorias.

**Buenas prácticas y extensiones posibles**

- Autenticación: añadir `express-session` y formularios de login para diferenciación de roles.
- Persistencia: usar `sqlite3` o `mongodb` para almacenar servicios y solicitudes.
- API REST: exponer endpoints JSON para `GET /api/servicios` y `POST /api/solicitud`.
- Tests: implementar pruebas con `mocha`/`chai` o `jest` para endpoints.

**Anexos — fragmentos de configuración**

- `package.json` scripts mínimos:

```json
{
  "scripts": {
    "start": "node ./bin/www"
  }
}
```

- `app.js` (configuración mínima e importante):

```javascript
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

module.exports = app;
```

---

Si quieres que convierta este archivo ampliado a PDF aquí, lo haré en el siguiente paso (comprobaré si `pandoc` está disponible en tu entorno). Si prefieres que incluya tu nombre, fecha exacta, o código adicional en anexos, dime qué añadir y lo incorporo.



