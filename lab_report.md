# Memoria del laboratorio — Portal Web (Versión inicial)

## Objetivo

Crear un pequeño portal web con diferentes vistas según la ruta elegida. Implementar las tres versiones mínimas solicitadas:

- Versión 1: Página de bienvenida (`/`) personalizada.
- Versión 2: Nueva ruta `/servicios` con listado de servicios.
- Versión 3: Página `/mejoras` con propuestas y una mejora implementada.

## Resumen de lo implementado

1. Personalización de la página de inicio (`/`) con un encabezado, navegación, sección 'hero' y pie de página. Se añadió una imagen representativa en la cabecera de la página principal.
2. Nueva ruta `/servicios` que muestra un listado dinámico de servicios desde el servidor.
3. Nueva ruta `/mejoras` que describe propuestas y documenta la mejora implementada.
4. Estilos CSS básicos y responsive en `public/stylesheets/style.css`.

## Archivos nuevos y modificados (resumen técnico)

- `routes/index.js` — Añadidas rutas `/servicios` y `/mejoras`, y contenido dinámico para la vista.
- `views/index.ejs` — Página de inicio personalizada; ahora referencia a `/images/lab-image.png`.
- `views/servicios.ejs` — Nueva vista para mostrar servicios.
- `views/mejoras.ejs` — Nueva vista que documenta mejoras.
- `public/stylesheets/style.css` — Estilos actualizados para layout, hero, navegación y tarjeta de servicios.
- `lab_report.md` — Este documento con la memoria inicial (fácil de convertir a PDF).
- `README.md` — Instrucciones de uso y pasos para entrega (actualizado con instrucciones para la imagen y el PDF).

## Cómo incluir la imagen que te proporcioné

Copia la imagen que tienes en los adjuntos y colócala en:

`render_app/public/images/lab-image.png`

(Si prefieres otro nombre, actualiza la ruta en `views/index.ejs`.)

## Generar el PDF de la memoria

Recomiendo usar `pandoc` para convertir este `lab_report.md` a PDF con una sola línea (requiere tener `pandoc` y una distribución TeX instalada como `tectonic` o `TeX Live`):

```bash
cd render_app
pandoc lab_report.md -o lab_report.pdf --metadata title="Memoria - Portal Web"
```

Alternativamente, si usas `npm` y quieres generar desde HTML, puedes instalar `markdown-pdf` u otras herramientas.

## Siguientes pasos / mejoras propuestas

- Añadir un sistema de versiones con tags `v1`, `v2`, `v3` en Git (commits separados por versión).
- Añadir formulario de contacto o formulario de solicitud de servicio.
- Implementar persistencia (base de datos) para gestionar servicios y usuarios.

---

Fecha de creación: TODO (actualizar antes de entrega)

