# @byteflow-ui/label

Componente de etiqueta accesible para formularios, parte del kit **Byteflow-UI**.

## Características

- ♿ **Accesible**: Basado en el elemento nativo `<label>`.
- 📍 **Indicador de Requerido**: Soporte opcional para mostrar un asterisco rojo.
- 🎨 **Estilizado Consistente**: Alineado con el sistema de diseño Byteflow.
- 🌓 **Tematizable**: Soporte para Modo Claro y Oscuro mediante CSS variables.

## Instalación

```bash
npm install @byteflow-ui/label
```

## Uso

```tsx
import { Label } from '@byteflow-ui/label';
import '@byteflow-ui/label/dist/index.css';

function App() {
  return (
    <div>
      <Label htmlFor="email" required>
        Correo Electrónico
      </Label>
      <input id="email" type="email" />
    </div>
  );
}
```

## Personalización

```css
:root {
  --bf-label-font-weight: 600;
  --bf-label-required-color: var(--bf-accent);
}
```
