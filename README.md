# QR Atelier Studio v5 · React + Vite

Versión rediseñada del generador vectorial. El motor QR ahora **combina las celdas orgánicas en un único contorno SVG**; no hay cuadrículas de parches y los degradados usan `gradientUnits="userSpaceOnUse"`, una sola transición de color para todo el código.

## Usar

- **Sin instalar nada:** abre `QR_Atelier_React_Studio_v5_Offline.html` (entregado aparte).
- **Proyecto de desarrollo React 18:** `npm install`, `npm run dev`. Para compilar: `npm run build`.

## Opciones de QR

- Fluido (trazo unido sin costuras), píldoras (filas redondeadas), puntos, redondeado, rombo y clásico.
- Degradado lineal/radial de cobertura total, colores, ojos personalizables, logos y nivel de corrección.
- Descarga SVG/PNG; exportación de QR o composición completa de tarjeta, etiqueta, menú de mesa, póster, sticker, redes sociales.
- 13 tipos de contenido, historial local, modo claro/oscuro y controles de impresión.

**Escaneabilidad:** se recomienda probar el SVG y PNG finales con el teléfono antes de producir en imprenta, especialmente con logotipos, degradados, superficies reflectantes o módulos especiales.

El ZIP contiene código fuente React + Vite. El archivo HTML autónomo integra React para abrir localmente sin instalar dependencias.
