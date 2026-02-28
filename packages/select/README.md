# @byteflow-ui/select

Componente de selección premium para el kit **Byteflow-UI**.

## Características

- 🎯 **Intuitivo**: Diseño limpio con chevron integrado.
- 🧱 **Flexible**: Soporta opciones vía props `options` o como `children`.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- ♿ **Accesible**: Basado en el elemento nativo `select` para máxima compatibilidad.

## Instalación

```bash
npm install @byteflow-ui/select
```

## Uso

### Usando la prop `options`

```tsx
import { Select } from '@byteflow-ui/select';
import '@byteflow-ui/select/dist/index.css';

const paises = [
  { label: 'México', value: 'mx' },
  { label: 'España', value: 'es' },
  { label: 'Colombia', value: 'co' },
];

function App() {
  return (
    <Select 
      label="País de residencia"
      options={paises}
      placeholder="Selecciona un país"
      required
    />
  );
}
```

### Usando `children`

```tsx
<Select label="Categoría">
  <option value="1">Electrónica</option>
  <option value="2">Hogar</option>
</Select>
```

## Personalización

```css
:root {
  --bf-select-radius: 1rem;
  --bf-select-height: 3rem;
}
```
