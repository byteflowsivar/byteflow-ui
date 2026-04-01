---
description: Flujo de trabajo para validar y asegurar que un componente cumple con estándares de accesibilidad, atributos ARIA y E2E testing (data-testid).
---

1. Analiza el código fuente del componente (archivos `.tsx`) especificado por el usuario.
2. Identifica el nodo raíz del componente y todos los elementos interactivos del DOM (`button`, `input`, `a`, `select`, modales, menús, etc.).
3. Verifica que todos los elementos interactivos y el contenedor principal posean el atributo `data-testid`. Si faltan, inyéctalos o proponlos siguiendo la convención: `byteflow-[nombre-componente]-[elemento]` (ej. `byteflow-button-root`, `byteflow-datatable-next-button`).
4. Realiza una auditoría de roles ARIA:
    *   Verifica que los elementos `<button>` o `<a>` puramente gráficos (ej. con iconos y sin texto) tengan `aria-label` descriptivos.
    *   Asegúrate de que etiquetas visualmente ocultas estén accesibles a lectores de pantalla (como `aria-hidden="true"` en SVGs decorativos).
    *   Revisa estados dinámicos (como `aria-expanded`, `aria-selected`, `aria-invalid`).
5. Extrae todos los `data-testid` utilizados en el componente y elabora un mapa estructurado en JSON. Proporciona esta lista al usuario o guárdala en un archivo central si así se acostumbra (ej. `selectores.json`).
6. Presenta al usuario un reporte con las inyecciones/correcciones de accesibilidad propuestas y realiza los cambios en el archivo `.tsx` luego de recibir la confirmación o en el mismo paso si es seguro.
