# AGENT.md - Byteflow-UI Component Guidelines

Este documento sirve como guía de buenas prácticas y reglas para la creación, mantenimiento y desarrollo de componentes dentro del kit **Byteflow-UI**, un ecosistema de componentes basado en una arquitectura monorepo.

El Agente de IA (o desarrollador) debe seguir estrictamente estas reglas al generar nuevo código, refactorizar componentes o añadir funcionalidades al kit.

---

## 1. Arquitectura y Estructura del Monorepo

Byteflow-UI utiliza espacios de trabajo (`workspaces`) para mantener una arquitectura modular:
*   `packages/*`: Contiene los componentes individuales de la UI y utilidades compartidas.
*   `apps/*`: Contiene aplicaciones de ejemplo, documentación o implementaciones de prueba.

**Reglas de Estructura:**
*   Cada nuevo componente o grupo de componentes debe ser creado dentro del directorio `packages/`.
*   Un componente debe tener su propio `package.json` para definir sus dependencias de manera aislada.
*   La estructura recomendada para un componente es:
    ```
    packages/nombre-componente/
    ├── src/
    │   ├── NombreComponente.tsx  # Componente principal
    │   ├── index.ts              # Exportaciones públicas
    │   └── NombreComponente.types.ts # Definiciones de tipos/interfaces
    ├── package.json
    ├── README.md                 # Documentación del componente
    └── tsconfig.json             # Configuración local de TypeScript
    ```

## 2. Desarrollo de Componentes (React + TypeScript)

*   **TypeScript Estricto:** Todos los componentes DEBEN estar escritos con TypeScript. Es obligatorio definir interfaces para las *props* (`*Props`). No uses `any`.
*   **Componentes Funcionales:** Utiliza siempre Componentes Funcionales (Functional Components) de React y `Hooks`. Evita los componentes de clase.
*   **Convención de Nombres:**
    *   Archivos de componentes: PascalCase (`Button.tsx`).
    *   Carpetas: kebab-case (`packages/button`).
    *   Hooks personalizados: camelCase, prefijo "use" (`useClickOutside.ts`).
*   **Exportaciones Claras:** Usa exportaciones nombradas (named exports) en lugar de *default exports* para mantener la consistencia en las importaciones.
    ```typescript
    // ✅ Bien
    export const Button = ({ label }: ButtonProps) => { ... }
    // ❌ Mal
    export default Button;
    ```
*   **Reutilización y Composición:** Reutiliza siempre los componentes base (Atomic Design) ya existentes dentro del kit Byteflow-UI en lugar de crear marcas HTML nativas desde cero. Por ejemplo, si un componente `<Notification />` requiere un botón para cerrarse, este debe implementar el componente `<Button />` o `<IconButton />` del mismo monorepo. Asegúrate de declarar correctamente la dependencia interna en el `package.json` del paquete consumidor.

## 3. Estilos y Diseño (UI/UX)

*   **Agnosticismo o Framework Definido:** Asegúrate de seguir la tecnología de estilos establecida en el proyecto (por ejemplo, Tailwind CSS, CSS Modules, Styled Components o Vanilla CSS). Si no se especifica, prioriza soluciones modulares para evitar colisiones.
*   **Diseño Premium y Moderno:** Los componentes deben lucir modernos, con soporte para interactividad (estados de hover, focus, active) y accesibilidad visual.
*   **Tematización:** Soporta variables CSS (Custom Properties) para colores, tipografías y espaciados, permitiendo temas dinámicos (Light/Dark mode) cuando sea necesario.
*   **Responsividad:** Los componentes deben de ser fluidos o adaptarse mediante media queries (o clases utilitarias de *mobile-first*) para funcionar correctamente tanto en móviles como escritorios.

## 4. Accesibilidad (a11y)

*   Todos los componentes interactivos deben soportar navegación por teclado.
*   Asegúrate de incluir atributos `aria-*` y `role` correctamente definidos cuando la semántica nativa de HTML no sea suficiente.
*   Los contrastes visuales deben cumplir con al menos el estándar WCAG AA.
*   Usa elementos HTML semánticos (`<button>`, `<nav>`, `<aside>`, `<header>`) en lugar de `<div>` donde aplique.

## 5. Pruebas y Control de Calidad

*   Cada componente debe poder ser testeado y funcionar de forma aislada.
*   El código no debe generar avisos (`warnings`) o errores (`errors`) en la consola del navegador.
*   Asegúrate de limpiar eventos o timeouts (`useEffect` cleanup) para evitar *memory leaks*.

## 6. Documentación

*   **Docstrings:** Cada archivo, clase y función compleja que se agregue debe estar justificada y tener comentarios JSDoc claros explicando su propósito.
*   **README:** Cada paquete de componente dentro de `packages/` debe tener su propio `README.md` que muestre ejemplos de uso e instalación.
*   **CHANGELOG:** Cada componente debe documentar todos sus cambios, mejoras o arreglos en un archivo `CHANGELOG.md` dentro de su carpeta, agrupados por versiones (ej: `## [1.0.0]`).
*   **Registro Centralizado:** Se debe mantener actualizado el archivo [`COMPONENTS.md`](./COMPONENTS.md) en la raíz del proyecto. Este archivo actúa como un índice de todos los componentes disponibles, su versión actual y un breve resumen de su funcionalidad.

## 7. Convenciones de Commits

*   **Idioma:** Todos los mensajes de commit DEBEN escribirse en **español**.
*   **Estándar:** Se debe seguir la convención de [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/).
*   **Formato:** `<tipo>[ámbito opcional]: <descripción>`
    *   `feat`: Una nueva característica.
    *   `fix`: Una corrección de errores.
    *   `docs`: Cambios en la documentación.
    *   `style`: Cambios que no afectan el significado del código (espacios, formato, etc.).
    *   `refactor`: Cambio de código que no corrige un error ni añade una característica.
    *   `perf`: Cambio de código que mejora el rendimiento.
    *   `test`: Añadir pruebas faltantes o corregir pruebas existentes.
    *   `chore`: Cambios en el proceso de construcción o herramientas auxiliares.

## 8. Versionamiento

*   **Estándar:** Byteflow-UI sigue estrictamente el [Versionamiento Semántico (SemVer 2.0.0)](https://semver.org/lang/es/).
*   **Incrementos:**
    *   **MAYOR (X.0.0):** Cuando se realizan cambios incompatibles en la API.
    *   **MENOR (0.X.0):** Cuando se añade funcionalidad de manera compatible con versiones anteriores.
    *   **PARCHE (0.0.X):** Cuando se realizan correcciones de errores compatibles con versiones anteriores.

---

## Resumen de Comandos del Proyecto

*   `npm run build`: Construye todos los paquetes y aplicaciones del monorepo (`--workspaces`).
*   `npm run dev`: Levanta los entornos de desarrollo locales.
*   `npm run lint`: Ejecuta el análisis de calidad de código en el monorepo.

---

> **Nota para el Agente:** Al recibir un requerimiento de desarrollo para Byteflow-UI, verifica primero estas reglas y asegúrate de aplicar TypeScript estricto, accesibilidad, y seguir la arquitectura basada en monorepo de npm workspaces.
