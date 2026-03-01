# @byteflow-ui/slider

El componente **Slider** es un control deslizante premium diseñado para permitir a los usuarios seleccionar un valor numérico de forma intuitiva y visual.

## Instalación

```bash
npm install @byteflow-ui/slider
```

## Uso

```tsx
import { Slider } from '@byteflow-ui/slider';

function App() {
  return (
    <Slider 
      label="Volumen"
      min={0}
      max={100}
      defaultValue={50}
      onChange={(val) => console.log(val)}
    />
  );
}
```

## Características

- **Accesibilidad Completa**: Soporte para ARIA y navegación por teclado (flechas, Home, End).
- **Estética Premium**: Micro-animaciones en el pulgar (thumb) y gradientes de marca.
- **Controlado y No Controlado**: Funciona de ambas formas.
- **Adaptable**: Soporta temas claro y oscuro mediante variables CSS.

## Personalización (Variables CSS)

| Variable | Default | Propósito |
| :--- | :--- | :--- |
| `--bf-slider-track-bg` | `var(--bf-surface-border)` | Color de la pista de fondo |
| `--bf-slider-range-bg` | `var(--bf-accent-gradient)` | Color del rango seleccionado |
| `--bf-slider-thumb-bg` | `var(--bf-surface)` | Color del pulgar |
| `--bf-slider-thumb-border` | `var(--bf-accent)` | Color del borde del pulgar |
