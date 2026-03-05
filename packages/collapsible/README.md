# @byteflow-ui/collapsible

Componente Collapsible premium para Byteflow UI. Ideal para secciones que el usuario puede expandir o contraer a discreción, como detalles técnicos, configuraciones avanzadas o paneles de información secundaria.

## Instalación

```bash
npm install @byteflow-ui/collapsible
```

## Uso

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@byteflow-ui/collapsible';
import '@byteflow-ui/collapsible/dist/index.css';

function App() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Ver más detalles</CollapsibleTrigger>
      <CollapsibleContent>
        Aquí puedes colocar cualquier contenido que desees ocultar inicialmente y 
        permitir que el usuario lo expanda bajo demanda.
      </CollapsibleContent>
    </Collapsible>
  );
}
```

## Propiedades

### Collapsible
| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `defaultOpen` | `boolean` | `false` | Estado inicial del componente. |
| `open` | `boolean` | - | Estado controlado del componente. |
| `onOpenChange` | `(open: boolean) => void` | - | Callback cuando cambia el estado. |
| `disabled` | `boolean` | `false` | Deshabilita la interacción. |
