# @byteflow-ui/alert

Componente de alerta para mostrar mensajes de retroalimentación de estado de manera clara y estética.

## Instalación

```bash
npm install @byteflow-ui/alert
```

## Uso

```tsx
import { Alert, AlertTitle, AlertDescription } from '@byteflow-ui/alert';
import '@byteflow-ui/alert/dist/index.css';

function Example() {
  return (
    <Alert variant="info">
      <AlertTitle>Información</AlertTitle>
      <AlertDescription>
        Este es un mensaje informativo para el usuario.
      </AlertDescription>
    </Alert>
  );
}
```

## Variantes

- `info` (por defecto)
- `success`
- `warning`
- `error`

## Variables CSS

| Variable | Descripción | Valor por defecto |
| :--- | :--- | :--- |
| `--bf-alert-bg` | Color de fondo | `var(--bf-surface)` |
| `--bf-alert-border` | Color del borde | `var(--bf-surface-border)` |
| `--bf-alert-radius` | Radio de esquinas | `var(--bf-radius-lg)` |
