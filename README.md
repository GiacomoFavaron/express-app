# Portal (Laboratorio) - Render App

Pequeño portal web solicitado en el enunciado del laboratorio. Implementa las versiones mínimas requeridas:

- Versión 1 — Página de bienvenida `/` (personalizada).
- Versión 2 — Nueva ruta `/servicios` con listado de servicios.
- Versión 3 — `/mejoras` con propuestas y la mejora implementada.

## Ejecutar localmente

Instale dependencias y arranque la aplicación:

```bash
cd render_app
npm install
npm start
```

Luego abrir `http://localhost:3000/`.

## Imagen para la página principal

Coloca la imagen adjunta en la carpeta `public/images/` y nómbrala `lab-image.png`.

Path: `render_app/public/images/lab-image.png`

Si la imagen está en su equipo, cópiela ahí y recargue la página para verla en la portada.

## Generar la memoria en PDF

He incluido `lab_report.md` con la memoria en español. Para generar un PDF, por ejemplo usando `pandoc`:

```bash
cd render_app
pandoc lab_report.md -o lab_report.pdf --metadata title="Memoria - Portal Web"
```

Si necesita que genere el PDF yo mismo, suba la imagen al proyecto (`public/images/lab-image.png`) y coméntamelo; puedo intentar generar el PDF y añadirlo al repositorio si dispone de `pandoc` en el entorno.

## Rutas principales

- `/` — Página de inicio (personalizada).
- `/servicios` — Listado de servicios ofrecidos.
- `/mejoras` — Propuestas y mejoras implementadas.

## Notas para entrega

- Haga commits para cada versión (por ejemplo: `v1`, `v2`, `v3`) y suba el repositorio a GitHub.
- Describa en la memoria (README o fichero aparte) el código nuevo implementado.
