# @byteflow-ui/radio

Componente Radio premium para selección única dentro de un conjunto de opciones, parte del kit **Byteflow-UI**.

## Características

- 🔘 **RadioGroup Intuitivo**: Gestión automática de estado para grupos de radios.
- ✨ **Diseño Refinado**: Estética moderna con animaciones de escala.
- ♿ **Accesible**: Implementación semántica con soporte para navegación por teclado.
- 🌓 **Tematizable**: Soporte nativo para Modo Claro y Oscuro.

## Instalación

```bash
npm install @byteflow-ui/radio
```

## Uso

```tsx
import { Radio, RadioGroup } from '@byteflow-ui/radio';
import '@byteflow-ui/radio/dist/index.css';

function App() {
  const [value, setValue] = useState('opcion1');

  return (
    <RadioGroup 
      name="mi-grupo" 
      value={value} 
      onChange={(e) => setValue(e.target.value)}
    >
      <Radio label="Opción 1" value="opcion1" />
      <Radio label="Opción 2" value="opcion2" />
      <Radio label="Opción 3" value="opcion3" disabled />
    </RadioGroup>
  );
}
```

### Orientación Horizontal

```tsx
<RadioGroup orientation="horizontal">
  <Radio label="Sí" value="yes" />
  <Radio label="No" value="no" />
</RadioGroup>
```

## Personalización

```css
:root {
  --bf-radio-checked-border: #10b981; /* Verde esmeralda */
  --bf-radio-dot-color: #10b981;
}
```
