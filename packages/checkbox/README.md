# @byteflow-ui/checkbox

Componente Checkbox premium y accesible para el kit **Byteflow-UI**.

## Características

- ✨ **Diseño Custom**: Estética moderna con animaciones fluidas.
- ♿ **Accesible**: Usa un input nativo oculto, permitiendo navegación por teclado y uso de lectores de pantalla.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- 🔗 **Integración con Label**: Mantiene la consistencia de etiquetas del sistema.

## Instalación

```bash
npm install @byteflow-ui/checkbox
```

## Uso

```tsx
import { Checkbox } from '@byteflow-ui/checkbox';
import '@byteflow-ui/checkbox/dist/index.css';

function App() {
  return (
    <Checkbox 
      label="Acepto los términos y condiciones"
      required
    />
  );
}
```

### Estados

```tsx
<Checkbox label="Seleccionado" defaultChecked />
<Checkbox label="Deshabilitado" disabled />
```

## Personalización

```css
:root {
  --bf-checkbox-checked-bg: #8b5cf6; /* Cambiar color de acento */
  --bf-checkbox-radius: 50%; /* Convertir a circular */
}
```
