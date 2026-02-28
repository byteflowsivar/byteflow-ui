# @byteflow-ui/field

Componente Field compuesto para gestionar formularios de manera accesible en el kit **Byteflow-UI**.

## Características

- 🔗 **Auto-vinculado**: Sincroniza automáticamente IDs entre `Label`, `Control` y `Error`.
- ♿ **Accesible**: Implementa `aria-describedby` y `aria-invalid` de forma transparente.
- 🧩 **Modular**: Compón campos complejos con etiquetas, descripciones y mensajes de error.

## Instalación

```bash
npm install @byteflow-ui/field
```

## Uso

```tsx
import { Field, FieldLabel, FieldDescription, FieldError } from '@byteflow-ui/field';
import { Input } from '@byteflow-ui/input';
import '@byteflow-ui/field/dist/index.css';

function UserForm() {
  return (
    <Field isInvalid={false}>
      <FieldLabel>Nombre de usuario</FieldLabel>
      <Input placeholder="@usuario" />
      <FieldDescription>Usa tu nombre real o un seudónimo.</FieldDescription>
      <FieldError>Este nombre ya está en uso.</FieldError>
    </Field>
  );
}
```

## Personalización

```css
:root {
  --bf-field-gap: 1rem;
  --bf-field-error-color: #ff0000;
}
```
