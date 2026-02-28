# @byteflow-ui/aspect-ratio

Componente Aspect Ratio para controlar proporciones de elementos en el kit **Byteflow-UI**.

## Características

- 📐 **Preciso**: Mantiene proporciones exactas mediante la propiedad CSS `aspect-ratio`.
- 🖼️ **Multimedia**: Ideal para imágenes, videos y mapas.
- 🌓 **Tematizable**: Consistente con el resto del kit.

## Instalación

```bash
npm install @byteflow-ui/aspect-ratio
```

## Uso

```tsx
import { AspectRatio } from '@byteflow-ui/aspect-ratio';
import '@byteflow-ui/aspect-ratio/dist/index.css';

function ImageCard() {
  return (
    <div style={{ width: 300 }}>
      <AspectRatio ratio={16 / 9}>
        <img 
          src="https://images.unsplash.com/photo-1588345921523-c2dcd57f7dcb?w=800&dpr=2" 
          alt="Paisaje" 
        />
      </AspectRatio>
    </div>
  );
}
```

## Proporciones Comunes

- **Cuadrado**: `ratio={1}`
- **Video HD**: `ratio={16 / 9}`
- **Fotografía cinematográfica**: `ratio={21 / 9}`
- **Retrato**: `ratio={3 / 4}`
