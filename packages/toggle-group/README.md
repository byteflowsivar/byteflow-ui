# @byteflow-ui/toggle-group

El componente **Toggle Group** permite agrupar múltiples botones de toggle para realizar selecciones únicas o múltiples de forma orquestada.

## Instalación

```bash
npm install @byteflow-ui/toggle-group @byteflow-ui/toggle
```

## Uso

### Selección Única
```tsx
import { ToggleGroup, ToggleGroupItem } from '@byteflow-ui/toggle-group';

function App() {
  return (
    <ToggleGroup type="single" defaultValue="c" variant="outline">
      <ToggleGroupItem value="l">Izquierda</ToggleGroupItem>
      <ToggleGroupItem value="c">Centro</ToggleGroupItem>
      <ToggleGroupItem value="r">Derecha</ToggleGroupItem>
    </ToggleGroup>
  );
}
```

### Selección Múltiple
```tsx
<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold">B</ToggleGroupItem>
  <ToggleGroupItem value="italic">I</ToggleGroupItem>
  <ToggleGroupItem value="underline">U</ToggleGroupItem>
</ToggleGroup>
```

## Características

- **Modos Flexibles**: Soporta `single` (radio-like) y `multiple` (checkbox-like).
- **Herencia de Estilos**: La `variant` y el `size` se propagan automáticamente del contenedor a los ítems.
- **Accesibilidad**: Rol de `group` y manejo correcto de estados presionados individuales.
- **Diseño Cohesivo**: Los botones se agrupan eliminando bordes dobles y redondeando las esquinas exteriores.
