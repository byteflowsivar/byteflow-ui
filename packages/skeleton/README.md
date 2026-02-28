# @byteflow-ui/skeleton

Componente Skeleton premium para el kit **Byteflow-UI**.

## Características

- ✨ **Animado**: Animación de pulso suave por defecto.
- 📐 **Versátil**: Soporta formas circulares, rectangulares y redondeadas.
- 🌓 **Tematizable**: Se adapta automáticamente al Modo Claro y Oscuro.
- 📏 **Flexible**: Control total sobre ancho y alto.

## Instalación

```bash
npm install @byteflow-ui/skeleton
```

## Uso

### Básico

```tsx
import { Skeleton } from '@byteflow-ui/skeleton';
import '@byteflow-ui/skeleton/dist/index.css';

function MyLoadingComponent() {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Skeleton variant="circular" width={40} height={40} />
      <div style={{ flex: 1 }}>
        <Skeleton variant="text" width="60%" height={20} style={{ marginBottom: '8px' }} />
        <Skeleton variant="text" width="40%" height={16} />
      </div>
    </div>
  );
}
```

### Variantes

```tsx
<Skeleton variant="circular" width={80} height={80} />
<Skeleton variant="rounded" width="100%" height={200} />
<Skeleton variant="rectangular" width="100%" height={40} />
```

## Personalización

```css
:root {
  --bf-skeleton-bg: #e0e0e0;
  --bf-skeleton-pulse-opacity: 0.3;
}
```
