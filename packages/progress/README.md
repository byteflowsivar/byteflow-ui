# @byteflow-ui/progress

Componente de barra de progreso visual para indicar el avance de una tarea.

## Instalación

```bash
npm install @byteflow-ui/progress
```

## Uso

### Determinado
```tsx
import { Progress } from '@byteflow-ui/progress';
import '@byteflow-ui/progress/dist/index.css';

function Example() {
  return <Progress value={60} />;
}
```

### Indeterminado
```tsx
function Example() {
  return <Progress />;
}
```

## Props

| Prop | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `value` | `number` | `null` | El valor actual (0-max). Si es null, se muestra como indeterminado. |
| `max` | `number` | `100` | El valor máximo posible. |
