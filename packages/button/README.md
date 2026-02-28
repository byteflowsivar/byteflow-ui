# @byteflow-ui/button

Un componente de botón altamente personalizable, accesible y listo para producción, parte del kit **Byteflow-UI**.

## Características

- 🎨 **Múltiples Variantes**: Primary, Secondary, Ghost.
- 📏 **Tamaños Flexibles**: Small, Medium, Large.
- ♿ **Accesible**: Implementa roles ARIA y estados de navegación por teclado.
- ⌛ **Estado de Carga**: Soporte nativo para `isLoading`.
- 🌓 **Tematizable**: Basado en variables CSS con el prefijo `bf-`.

## Instalación

```bash
npm install @byteflow-ui/button
```

## Uso

```tsx
import { Button } from '@byteflow-ui/button';
import '@byteflow-ui/button/dist/index.css';

function App() {
  return (
    <Button variant="primary" onClick={() => console.log('Click!')}>
      Mi Botón Premium
    </Button>
  );
}
```

## Personalización

Puedes personalizar el botón usando las siguientes variables CSS:

```css
:root {
  --bf-button-primary-bg: #ff0000;
  --bf-button-radius: 4px;
}
```
