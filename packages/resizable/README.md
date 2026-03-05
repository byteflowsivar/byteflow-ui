# @byteflow-ui/resizable

Componente Resizable (Paneles divisibles) premium para Byteflow UI. Permite crear interfaces de múltiples paneles (estilo IDE) con divisores configurables y soporte para orientación horizontal y vertical.

## Instalación

```bash
npm install @byteflow-ui/resizable
```

## Uso

```tsx
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from '@byteflow-ui/resizable';
import '@byteflow-ui/resizable/dist/index.css';

function IDE() {
  return (
    <ResizablePanelGroup direction="horizontal" style={{ height: '400px', border: '1px solid #ccc' }}>
      <ResizablePanel defaultSize={20}>
        <div style={{ padding: '1rem' }}>Explorador</div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <div style={{ padding: '1rem' }}>Editor de Código</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
```

## Propiedades

| Componente | Prop | Descripción |
| --- | --- | --- |
| `ResizablePanelGroup` | `direction` | `'horizontal' \| 'vertical'` (default: `'horizontal'`). |
| `ResizablePanel` | `defaultSize` | Porcentaje de espacio inicial (0-100). |
| `ResizableHandle` | `withHandle` | Muestra un ícono visual en el divisor. |
