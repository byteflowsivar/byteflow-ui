# @byteflow-ui/scroll-area

Componente Scroll Area con barras de desplazamiento personalizadas para el kit **Byteflow-UI**.

## Características

- ✨ **Personalizado**: Barras de desplazamiento minimalistas y elegantes.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- 🧹 **Limpio**: Opción para ocultar visualmente la barra manteniendo la funcionalidad.

## Instalación

```bash
npm install @byteflow-ui/scroll-area
```

## Uso

```tsx
import { ScrollArea } from '@byteflow-ui/scroll-area';
import '@byteflow-ui/scroll-area/dist/index.css';

function MyList() {
  return (
    <ScrollArea maxHeight={300}>
      <div style={{ padding: '1rem' }}>
        {/* Mucho contenido aquí */}
      </div>
    </ScrollArea>
  );
}
```

## Personalización

```css
:root {
  --bf-scroll-area-width: 6px;
  --bf-scroll-area-thumb: #ff0000;
}
```
