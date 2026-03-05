# @byteflow-ui/dialog

Componente de diálogo modal premium para el kit Byteflow-UI, diseñado con un enfoque en la estética moderna, accesibilidad y facilidad de uso.

## Características

- ✨ **Estética Premium:** Efectos de desenfoque de fondo (glassmorphism) y animaciones suaves.
- ♿ **Accesibilidad:** Soporte para navegación por teclado (Esc para cerrar) y gestión de foco.
- 📱 **Responsivo:** Se adapta fluidamente a diferentes tamaños de pantalla.
- 📦 **Composición Flexible:** Sub-componentes para cabecera, título, descripción y pie de página.
- 🚪 **Portal:** Renderizado mediante `React Portal` para evitar problemas de `z-index`.

## Instalación

```bash
npm install @byteflow-ui/dialog
```

## Uso

```tsx
import { useState } from 'react';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@byteflow-ui/dialog';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Abrir Modal</Button>
            
            <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <DialogHeader>
                    <DialogTitle>Confirmación de Acción</DialogTitle>
                    <DialogDescription>
                        ¿Estás seguro de que deseas archivar este proyecto? Esta acción se puede revertir luego.
                    </DialogDescription>
                </DialogHeader>
                
                <DialogFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancelar</Button>
                    <Button variant="primary" onClick={() => setIsOpen(false)}>Confirmar</Button>
                </DialogFooter>
            </Dialog>
        </>
    );
};
```

## Propiedades (DialogProps)

| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `required` | Controla si el modal está visible. |
| `onClose` | `() => void` | `required` | Función que se ejecuta al intentar cerrar el modal. |
| `children` | `React.ReactNode` | `required` | Contenido del modal. |
| `className` | `string` | `""` | Clase CSS adicional para el contenedor de contenido. |
| `closeOnOutsideClick` | `boolean` | `true` | Si se debe cerrar al hacer click fuera del modal. |
| `closeOnEsc` | `boolean` | `true` | Si se debe cerrar al presionar la tecla Escape. |
