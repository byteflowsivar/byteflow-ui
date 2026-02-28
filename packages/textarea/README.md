# @byteflow-ui/textarea

Componente de entrada de texto multilínea premium para el kit **Byteflow-UI**.

## Características

- 📝 **Multilínea**: Ideal para descripciones, comentarios y textos extensos.
- ✨ **Visual Premium**: Bordes suaves, estados de foco dinámicos y soporte para errores.
- 🌓 **Tematizable**: Soporte completo para Modo Claro y Oscuro.
- ♿ **Accesible**: Uso de atributos ARIA y etiquetas semánticas.

## Instalación

```bash
npm install @byteflow-ui/textarea
```

## Uso

```tsx
import { Textarea } from '@byteflow-ui/textarea';
import '@byteflow-ui/textarea/dist/index.css';

function App() {
  return (
    <Textarea 
      label="Descripción del proyecto"
      placeholder="Cuéntanos más sobre tu idea..."
      required
    />
  );
}
```

### Con Error

```tsx
<Textarea 
  label="Comentarios"
  error="Este campo no puede quedar vacío"
/>
```

## Personalización

```css
:root {
  --bf-textarea-min-height: 200px;
  --bf-textarea-radius: 0; /* Bordes cuadrados */
}
```
