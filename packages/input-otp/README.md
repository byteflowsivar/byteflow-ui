# @byteflow-ui/input-otp

El componente **Input OTP** es un campo de entrada especializado para capturar códigos de un solo uso (One-Time Passwords) o códigos de verificación de forma fluida y accesible.

## Instalación

```bash
npm install @byteflow-ui/input-otp
```

## Uso

```tsx
import { InputOTP } from '@byteflow-ui/input-otp';

function App() {
  return (
    <InputOTP 
      maxLength={6} 
      onComplete={(code) => console.log('Código listo:', code)} 
    />
  );
}
```

## Características

- **Gestión Automática de Foco**: Salta automáticamente a la siguiente celda al escribir y retrocede al borrar.
- **Soporte para Pegado**: Permite pegar códigos completos desde el portapapeles, distribuyéndolos correctamente entre las celdas.
- **Validación Integrada**: Soporta modo numérico estricto mediante la prop `numericOnly`.
- **Accesibilidad**: Utiliza `inputMode` y `autoComplete="one-time-code"` para una mejor UX en dispositivos móviles.
- **Diseño Ergonómico**: Espaciado y tamaños optimizados para legibilidad y facilidad de uso táctil.

## Personalización (Variables CSS)

| Variable | Propósito |
| :--- | :--- |
| `--bf-otp-slot-bg` | Color de fondo de cada celda |
| `--bf-otp-slot-border` | Color del borde de la celda |
| `--bf-otp-slot-focus` | Color del borde al recibir foco |
