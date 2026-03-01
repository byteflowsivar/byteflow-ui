# @byteflow-ui/input-group

El componente **Input Group** es un contenedor versátil que permite fusionar visualmente campos de entrada con otros elementos como iconos, botones o texto estático.

## Instalación

```bash
npm install @byteflow-ui/input-group
```

## Uso

```tsx
import { InputGroup, InputGroupText } from '@byteflow-ui/input-group';
import { Input } from '@byteflow-ui/input';
import { Button } from '@byteflow-ui/button';

function App() {
  return (
    <InputGroup fullWidth>
      <InputGroupText>https://</InputGroupText>
      <Input placeholder="byteflow.ui" />
      <Button variant="primary">Copiar</Button>
    </InputGroup>
  );
}
```

## Características

- **Diseño Unificado**: Fusiona bordes y radios de los elementos hijos automáticamente.
- **Versatilidad**: Soporta cualquier combinación de `Input`, `Button` y `InputGroupText`.
- **Feedback de Foco**: El grupo entero reacciona visualmente cuando cualquier elemento interno recibe el foco.
- **Responsivo**: Se adapta al ancho del contenedor con la prop `fullWidth`.

## Personalización (Variables CSS)

| Variable | Propósito |
| :--- | :--- |
| `--bf-input-group-bg` | Color de fondo de los complementos de texto |
| `--bf-input-group-border` | Color de los bordes internos |
