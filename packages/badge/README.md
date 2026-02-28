# @byteflow-ui/badge

Componente Badge premium para el kit **Byteflow-UI**.

## Características

- 🎨 **Variantes**: 6 variantes predefinidas (primary, secondary, outline, success, warning, error).
- 📏 **Escalable**: Tres tamaños disponibles (S, M, L).
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- 🧱 **Ligero**: Implementación minimalista y eficiente.

## Instalación

```bash
npm install @byteflow-ui/badge
```

## Uso

```tsx
import { Badge } from '@byteflow-ui/badge';
import '@byteflow-ui/badge/dist/index.css';

function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      <Badge variant="primary">Nuevo</Badge>
      <Badge variant="success">Completado</Badge>
      <Badge variant="error" size="sm">Urgente</Badge>
    </div>
  );
}
```

### Variantes

```tsx
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
```

### Tamaños

```tsx
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

## Personalización

```css
:root {
  --bf-badge-radius: 4px;
  --bf-badge-font-weight: 700;
}
```
