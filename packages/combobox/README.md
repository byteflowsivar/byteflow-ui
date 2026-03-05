# @byteflow-ui/combobox

Componente Combobox (Búsqueda + Selección) premium para Byteflow UI. Combina la potencia del componente `Command` con la versatilidad de un `Popover` para ofrecer una experiencia de selección con filtrado fluido.

## Instalación

```bash
npm install @byteflow-ui/combobox @byteflow-ui/popover @byteflow-ui/command @byteflow-ui/button
```

## Uso

```tsx
import { Combobox } from '@byteflow-ui/combobox';
import '@byteflow-ui/combobox/dist/index.css';

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

function FrameworkSelect() {
  const [value, setValue] = useState("");

  return (
    <Combobox 
      options={frameworks} 
      value={value} 
      onValueChange={setValue} 
      placeholder="Seleccionar framework..."
    />
  );
}
```

## Propiedades

| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `options` | `ComboboxOption[]` | **Requerido** | Lista de {value, label} a mostrar. |
| `value` | `string` | - | Valor seleccionado actualmente. |
| `onValueChange` | `(value: string) => void` | - | Callback cuando se selecciona una opción. |
| `placeholder` | `string` | `'Seleccionar...'` | Texto cuando no hay selección. |
| `emptyText` | `string` | `'No hay resultados.'` | Texto cuando el filtro no coincide. |
| `disabled` | `boolean` | `false` | Deshabilita la interacción. |
