# @byteflow-ui/kbd

Componente Kbd (Teclado) premium para Byteflow UI. Proporciona una representación visual semántica para teclas y atajos de teclado, con estilos consistentes con el resto de la librería.

## Instalación

```bash
npm install @byteflow-ui/kbd
```

## Uso

```tsx
import { Kbd } from '@byteflow-ui/kbd';
import '@byteflow-ui/kbd/dist/index.css';

function Shortcut() {
  return (
    <div className="flex items-center gap-2">
      <span>Presiona</span>
      <Kbd>⌘</Kbd>
      <span>+</span>
      <Kbd>K</Kbd>
      <span>para buscar.</span>
    </div>
  );
}
```

## Propiedades

Acepta todas las propiedades estándar del elemento `<kbd>`.
