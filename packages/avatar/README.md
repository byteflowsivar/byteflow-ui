# @byteflow-ui/avatar

Componente Avatar premium para el kit **Byteflow-UI**.

## Características

- 🖼️ **Robusto**: Manejo automático de errores de carga de imagen.
- 🔠 **Fallbacks**: Muestra iniciales o un icono personalizado si la imagen falla o no se proporciona.
- 📏 **Escalable**: Tamaños predefinidos: `sm`, `md`, `lg`, `xl`.
- 🔷 **Formas**: Soporte para círculos (default) y cuadrados redondeados.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.

## Instalación

```bash
npm install @byteflow-ui/avatar
```

## Uso

```tsx
import { Avatar } from '@byteflow-ui/avatar';
import '@byteflow-ui/avatar/dist/index.css';

function App() {
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {/* Con imagen */}
      <Avatar src="user.jpg" alt="Victor Hugo" />
      
      {/* Fallback automático por iniciales */}
      <Avatar alt="Victor Hugo" />
      
      {/* Fallback personalizado */}
      <Avatar fallback={<IconUser />} />
      
      {/* Tamaños y formas */}
      <Avatar size="lg" shape="square" alt="UX" />
    </div>
  );
}
```

### Tamaños

```tsx
<Avatar size="sm" />
<Avatar size="md" />
<Avatar size="lg" />
<Avatar size="xl" />
```

## Personalización

```css
:root {
  --bf-avatar-radius: 4px;
  --bf-avatar-size: 64px;
}
```
