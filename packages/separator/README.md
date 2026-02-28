# @byteflow-ui/separator

Componente Separator premium para el kit **Byteflow-UI**.

## Características

- 📏 **Orientación**: Soporte para líneas horizontales (default) y verticales.
- ♿ **Accesibilidad**: Roles ARIA correctos (`separator` o `none` para decorativo).
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro mediante variables CSS.
- 🪶 **Ligero**: Sin dependencias externas pesadas.

## Instalación

```bash
npm install @byteflow-ui/separator
```

## Uso

```tsx
import { Separator } from '@byteflow-ui/separator';
import '@byteflow-ui/separator/dist/index.css';

function App() {
  return (
    <div>
      <h3>Sección 1</h3>
      <Separator className="my-4" />
      <h3>Sección 2</h3>
      
      <div style={{ display: 'flex', height: '20px', alignItems: 'center' }}>
        <span>Link 1</span>
        <Separator orientation="vertical" className="mx-4" />
        <span>Link 2</span>
      </div>
    </div>
  );
}
```

## Personalización

```css
:root {
  --bf-separator-bg: #ccc;
}
```
