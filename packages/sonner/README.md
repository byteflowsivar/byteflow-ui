# @byteflow-ui/sonner

Componente Sonner para Byteflow-UI, que proporciona notificaciones apiladas (stacked) con animaciones de profundidad y perspectiva, siguiendo la estética de Sonner pero adaptado al sistema premium de Byteflow.

## Características

- 🥞 **Apilamiento Real (Stacked):** Los toasts se apilan unos encima de otros, reduciendo su escala y opacidad progresivamente.
- ✨ **Estética Premium:** Glassmorphism profundo, bordes refinados y animaciones de resorte.
- 🪝 **Hook `useSonner`:** Dispara notificaciones fácilmente.
- 📱 **Mobile Optimized:** Configurado para ocupar el ancho total en móviles o mantenerse en la esquina en escritorio.

## Diferencia con `@byteflow-ui/toast`

Mientras que `toast` es un sistema más directo y tradicional, `sonner` se enfoca en la elegancia visual del apilamiento, ideal para aplicaciones donde se pueden disparar múltiples notificaciones seguidas.

## Instalación

```bash
npm install @byteflow-ui/sonner
```

## Uso

### 1. Configura el ToasterProvider

```tsx
import { ToasterProvider } from '@byteflow-ui/sonner';
import '@byteflow-ui/sonner/dist/index.css';

function App() {
  return (
    <ToasterProvider>
      <MainContent />
    </ToasterProvider>
  );
}
```

### 2. Dispara notificaciones

```tsx
import { useSonner } from '@byteflow-ui/sonner';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const { toast } = useSonner();

    return (
        <Button onClick={() => toast("Nueva Notificación", {
            description: "Este es un mensaje apilado estilo Sonner.",
            type: "success"
        })}>
            Enviar Mensaje
        </Button>
    );
};
```

## API

### `toast(message, options)`

| Opción | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `description` | `string` | `undefined` | Texto secundario. |
| `type` | `'default' \| 'success' \| 'error' \| 'warning' \| 'info'` | `'default'` | Variante visual. |
| `duration` | `number` | `4000` | Tiempo de vida en ms. |
