---
description: Flujo de trabajo obligatorio para crear o modificar componentes en Byteflow-UI
---

# Reglas Previas Obligatorias para Byteflow-UI

Este flujo de trabajo garantiza que todos los componentes creados mantengan un estándar estricto de calidad, consistencia y arquitectura.

1. **ANTES de escribir o modificar código**, DEBES LEER el archivo `AGENT.md` ubicado en la raíz del repositorio.
2. Aplica todas las directrices establecidas en `AGENT.md` (uso de TypeScript estricto, accesibilidad, componentes funcionales `React`, variables CSS/Tailwind, etc.).
3. Asegúrate de crear el componente dentro de su respectivo espacio de trabajo en la carpeta `packages/` con su propio `package.json`.
4. Documenta el funcionamiento del componente en un archivo `README.md` propio.
5. **Al finalizar**, asegúrate de registrar el nuevo componente y su versión en el archivo `COMPONENTS.md` ubicado en la raíz del repositorio.
