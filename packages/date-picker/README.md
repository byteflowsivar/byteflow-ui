# @byteflow-ui/date-picker

Componente Date Picker premium para Byteflow UI. Combina un trigger estilizado con un calendario desplegable para una selección de fechas intuitiva y accesible.

## Instalación

```bash
npm install @byteflow-ui/date-picker @byteflow-ui/popover @byteflow-ui/calendar @byteflow-ui/button
```

## Uso

```tsx
import { DatePicker } from '@byteflow-ui/date-picker';
import '@byteflow-ui/date-picker/dist/index.css';

function BirthdayPicker() {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <DatePicker 
      value={date} 
      onValueChange={setDate} 
      placeholder="Elige tu fecha de nacimiento"
    />
  );
}
```

## Propiedades

| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `value` | `Date` | - | Fecha seleccionada. |
| `onValueChange` | `(date: Date) => void` | - | Callback cuando cambia la fecha. |
| `placeholder` | `string` | `'Seleccionar fecha...'` | Texto mostrado cuando no hay fecha. |
| `disabled` | `boolean` | `false` | Deshabilita el selector. |
