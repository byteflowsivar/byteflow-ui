# @byteflow-ui/tooltip

Componente Tooltip premium para el kit **Byteflow-UI**.

## Características

- 🎯 **Preciso**: 4 posiciones automáticas (top, bottom, left, right).
- ⚡ **Ligero**: Basado íntegramente en CSS para el posicionamiento y animaciones.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- ♿ **Accesible**: Soporta foco por teclado y roles ARIA.

## Instalación

```bash
npm install @byteflow-ui/tooltip
```

## Uso

```tsx
import { Tooltip } from '@byteflow-ui/tooltip';
import { Button } from '@byteflow-ui/button';
import '@byteflow-ui/tooltip/dist/index.css';

function App() {
  return (
    <Tooltip content="Información útil" position="top">
      <Button>Hover me</Button>
    </Tooltip>
  );
}
```

### Posiciones

```tsx
<Tooltip content="Arriba" position="top">...</Tooltip>
<Tooltip content="Abajo" position="bottom">...</Tooltip>
<Tooltip content="Izquierda" position="left">...</Tooltip>
<Tooltip content="Derecha" position="right">...</Tooltip>
```

## Personalización

```css
:root {
  --bf-tooltip-bg: #1e293b;
  --bf-tooltip-radius: 0.5rem;
}
```
