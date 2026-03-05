# @byteflow-ui/accordion

Componente Accordion premium para Byteflow UI. Permite organizar contenido en secciones colapsables, ideal para preguntas frecuentes, menús laterales o desgloses de información.

## Instalación

```bash
npm install @byteflow-ui/accordion
```

## Uso

```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@byteflow-ui/accordion';
import '@byteflow-ui/accordion/dist/index.css';

function App() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>¿Qué es Byteflow UI?</AccordionTrigger>
        <AccordionContent>
          Es un kit de componentes premium diseñado para aplicaciones React modernas.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

## Propiedades

### Accordion
| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `type` | `'single' \| 'multiple'` | `'single'` | Define si se puede abrir uno o varios elementos a la vez. |
| `defaultValue` | `string \| string[]` | - | Valor inicial de los ítems expandidos. |
| `onValueChange` | `(value: string \| string[]) => void` | - | Callback cuando cambia el estado de expansión. |

### AccordionItem
| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `value` | `string` | **Requerido** | Identificador único del ítem. |
| `disabled` | `boolean` | `false` | Deshabilita la interacción con el ítem. |
