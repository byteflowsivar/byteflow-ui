# @byteflow-ui/item

Componente Item base para listas y menús en el kit **Byteflow-UI**.

## Características

- 🧱 **Estructura Modular**: Usa `Prefix`, `Content` y `Suffix` para control total del layout.
- ✨ **Estados Interactivos**: Soporte nativo para `hover`, `selected` y `disabled`.
- 🌓 **Tematizable**: Colores y radios de borde personalizables por tokens.

## Instalación

```bash
npm install @byteflow-ui/item
```

## Uso

```tsx
import { Item, ItemPrefix, ItemContent, ItemSuffix } from '@byteflow-ui/item';
import { Badge } from '@byteflow-ui/badge';
import '@byteflow-ui/item/dist/index.css';

function UserItem() {
  return (
    <Item onClick={() => console.log('Click!')}>
      <ItemPrefix>👤</ItemPrefix>
      <ItemContent>
        <span style={{ fontWeight: 600 }}>Victor Hugo</span>
        <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>Desarrollador Senior</span>
      </ItemContent>
      <ItemSuffix>
        <Badge variant="success">Activo</Badge>
      </ItemSuffix>
    </Item>
  );
}
```

## Personalización

```css
:root {
  --bf-item-bg-selected: #ff0000;
  --bf-item-radius: 0px;
}
```
