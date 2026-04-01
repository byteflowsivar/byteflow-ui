---
description: Flujo de trabajo para generar documentación interactiva de Storybook e integraciones de Snapshot Testing (Regresión Visual) para un componente nuevo o modificado.
---

1. Analiza el componente React (el archivo `.tsx`) y sus respectivas interfaces de TypeScript (props principales en `.types.ts` o en el propio archivo).
2. Comprende todas las propiedades (props), tipos permitidos, datos obligatorios y sus valores por defecto (ej. variantes de color, estados de tamaño, botones deshabilitados, etc.).
3. Crea un archivo `[NombreComponente].stories.tsx` en el mismo directorio (o directorio designado de tests) con la configuración estándar de Component Story Format (CSF) de Storybook v7/v8.
4. Genera una historia principal (Story "Default") mostrando el componente con sus props mínimas obligatorias y mockeando posibles estados complejos.
5. Genera automáticamente historias secundarias cubriendo las variaciones más importantes (ej. "Primary", "Secondary", "Disabled", "ErrorState") de manera que herramientas como Chromatic o Lost Pixel puedan hacer un barrido y detectar diferencias en píxeles.
6. Mapea las descripciones extraídas de los tipos de TypeScript mediante `JSDoc` hacia el objeto `argTypes` de Storybook, para enriquecer los controles automáticos.
7. Presenta al usuario el resumen de las variaciones cubiertas y el esqueleto funcional del código para el archivo de Storybook y aplícalo dentro del monorepo.
