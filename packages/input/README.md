# @byteflow-ui/input

Componente de entrada de texto base, parte del kit **Byteflow-UI**. Integra automáticamente el componente `@byteflow-ui/label` para una mejor accesibilidad.

## Características

- 🏷️ **Etiqueta Integrada**: Soporte nativo para etiquetas accesibles.
- ⚠️ **Gestión de Errores**: Estados visuales de error con mensajes descriptivos.
- ♿ **Accesible**: Atributos ARIA preconfigurados para lectores de pantalla.
- 🌓 **Tematizable**: Soporte para Modo Claro y Oscuro mediante CSS variables.

## Instalación

```bash
npm install @byteflow-ui/input
```

## Uso

```tsx
import { Input } from '@byteflow-ui/input';
import '@byteflow-ui/input/dist/index.css';

function App() {
  return (
    <Input
      label="Nombre de Usuario"
      placeholder="Ej. rex2002xp"
      required
    />
  );
}
```

### Con Error

```tsx
<Input
  label="Contraseña"
  type="password"
  error="La contraseña debe tener al menos 8 caracteres"
/>
```

## Personalización

```css
:root {
  --bf-input-radius: 0.25rem;
  --bf-input-ring: var(--bf-primary);
}
```
