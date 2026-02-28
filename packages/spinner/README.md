# @byteflow-ui/spinner

Componente Spinner premium para el kit **Byteflow-UI**.

## Características

- 🌀 **Animado**: Animación suave de rotación y trazo oscilante.
- 📐 **Escalable**: Tamaños desde `sm` hasta `xl`.
- 🌓 **Tematizable**: Soporte para Modo Claro y Oscuro.
- ♿ **Accesible**: Incluye roles `status` y texto alternativo oculto para lectores de pantalla.

## Instalación

```bash
npm install @byteflow-ui/spinner
```

## Uso

### Básico

```tsx
import { Spinner } from '@byteflow-ui/spinner';
import '@byteflow-ui/spinner/dist/index.css';

function LoadingState() {
  return <Spinner size="md" variant="primary" />;
}
```

### Tamaños

```tsx
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />
```

## Personalización

```css
:root {
  --bf-spinner-color: #ff0000;
  --bf-spinner-track: #f0f0f0;
}
```
