# @byteflow-ui/switch

Componente Switch (Toggle) premium para el kit **Byteflow-UI**.

## Características

- ⚡ **Reactivo**: Animaciones fluidas de 60fps.
- 📏 **Escalable**: Tres tamaños disponibles (S, M, L).
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- ♿ **Accesible**: Basado en input nativo con rol `switch`.

## Instalación

```bash
npm install @byteflow-ui/switch
```

## Uso

```tsx
import { Switch } from '@byteflow-ui/switch';
import '@byteflow-ui/switch/dist/index.css';

function App() {
  return (
    <Switch 
      label="Activar notificaciones"
      defaultChecked
    />
  );
}
```

### Tamaños

```tsx
<Switch size="sm" label="Pequeño" />
<Switch size="md" label="Mediano" />
<Switch size="lg" label="Grande" />
```

## Personalización

```css
:root {
  --bf-switch-bg-checked: #10b981; /* Verde esmeralda */
  --bf-switch-width: 4rem;
}
```
