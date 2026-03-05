# @byteflow-ui/calendar

Componente Calendar premium para Byteflow UI. Proporciona una interfaz intuitiva y elegante para la visualización y selección de fechas, con navegación por meses y soporte para temas oscuros.

## Instalación

```bash
npm install @byteflow-ui/calendar
```

## Uso

```tsx
import { Calendar } from '@byteflow-ui/calendar';
import '@byteflow-ui/calendar/dist/index.css';

function DatePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar 
      selected={date} 
      onSelect={setDate} 
      className="border rounded-md"
    />
  );
}
```

## Propiedades

| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `selected` | `Date \| Date[]` | - | Fecha(s) seleccionada(s). |
| `onSelect` | `(date: Date) => void` | - | Callback cuando se selecciona una fecha. |
| `mode` | `'single' \| 'range' \| 'multiple'` | `'single'` | Modo de selección (proximamente soporte completo para range/multiple). |
| `className` | `string` | `''` | Clase CSS adicional. |
