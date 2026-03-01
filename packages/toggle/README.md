# @byteflow-ui/toggle

El componente **Toggle** es un botón de dos estados que permite a los usuarios alternar una opción o preferencia de forma clara y semántica.

## Instalación

```bash
npm install @byteflow-ui/toggle
```

## Uso

```tsx
import { Toggle } from '@byteflow-ui/toggle';

function App() {
  return (
    <Toggle 
      aria-label="Negrita"
      onPressedChange={(pressed) => console.log('Negrita:', pressed)}
    >
      B
    </Toggle>
  );
}
```

## Características

- **Semántica Clara**: Utiliza el atributo `aria-pressed` para una accesibilidad óptima.
- **Variantes Flexibles**: Soporta `default`, `outline` y `ghost`.
- **Estados Reactivos**: Transiciones suaves entre los estados presionado y no presionado.
- **Micro-interacciones**: Feedback visual inmediato al interactuar.

## Personalización (Variables CSS)

El componente utiliza los tokens globales de Byteflow-UI, pero puedes sobreescribirlos localmente:

| Variable | Propósito |
| :--- | :--- |
| `--bf-toggle-pressed-bg` | Color de fondo cuando está presionado |
| `--bf-toggle-radius` | Radio de curvatura del botón |
