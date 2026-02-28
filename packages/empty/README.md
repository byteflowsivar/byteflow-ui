# @byteflow-ui/empty

Componente Empty State para gestionar estados vacíos en el kit **Byteflow-UI**.

## Características

- 🧩 **Modular**: Compón estados vacíos con `Empty`, `Icon`, `Title`, `Description` y `Action`.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- 🎨 **Flexible**: Centrado automático y espaciado consistente.

## Instalación

```bash
npm install @byteflow-ui/empty
```

## Uso

```tsx
import { 
  Empty, 
  EmptyIcon, 
  EmptyTitle, 
  EmptyDescription, 
  EmptyAction 
} from '@byteflow-ui/empty';
import { Button } from '@byteflow-ui/button';
import '@byteflow-ui/empty/dist/index.css';

function NoResults() {
  return (
    <Empty>
      <EmptyIcon>🔍</EmptyIcon>
      <EmptyTitle>No se encontraron resultados</EmptyTitle>
      <EmptyDescription>
        Intenta ajustar tus filtros de búsqueda para encontrar lo que buscas.
      </EmptyDescription>
      <EmptyAction>
        <Button variant="secondary">Limpiar Filtros</Button>
      </EmptyAction>
    </Empty>
  );
}
```

## Personalización

```css
:root {
  --bf-empty-icon-size: 4rem;
  --bf-empty-gap: 2rem;
}
```
