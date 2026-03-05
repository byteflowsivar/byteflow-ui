# @byteflow-ui/toast

Sistema de notificaciones `Toast` premium para Byteflow-UI, diseñado para proporcionar retroalimentación no intrusiva al usuario.

## Características

- 🏗️ **Sistema de Proveedor:** Usa `ToastProvider` para gestionar múltiples notificaciones apiladas.
- 🪝 **Hook Simple:** Dispara notificaciones desde cualquier lugar con `useToast()`.
- ✨ **Estética Premium:** Glassmorphism, animaciones suaves y variantes de color para diferentes estados.
- 🕒 **Auto-cierre:** Tiempo de vida configurable para cada notificación.
- 📱 **Responsivo:** Se adapta perfectamente a dispositivos móviles.

## Instalación

```bash
npm install @byteflow-ui/toast
```

## Uso

### 1. Configura el Proveedor

Envuelve tu aplicación (o la sección que necesite toasts) con el `ToastProvider`.

```tsx
import { ToastProvider } from '@byteflow-ui/toast';
import '@byteflow-ui/toast/dist/index.css';

function App() {
  return (
    <ToastProvider>
      <MainContent />
    </ToastProvider>
  );
}
```

### 2. Dispara Toasts

```tsx
import { useToast } from '@byteflow-ui/toast';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const { toast } = useToast();

    return (
        <Button onClick={() => toast({
            title: "Éxito",
            description: "Tu perfil ha sido guardado correctamente.",
            variant: "success"
        })}>
            Guardar Cambios
        </Button>
    );
};
```

## API

### `toast(options)`

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `title` | `string` | `undefined` | Título de la notificación. |
| `description` | `string` | `undefined` | Texto de descripción de la notificación. |
| `variant` | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | El estilo visual de la notificación. |
| `duration` | `number` | `5000` | Tiempo en ms antes de que se cierre automáticamente. |
