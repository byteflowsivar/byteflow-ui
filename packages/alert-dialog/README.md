# @byteflow-ui/alert-dialog

Componente de diálogo de alerta para acciones críticas que requieren confirmación explícita del usuario. Extiende la funcionalidad de `@byteflow-ui/dialog`.

## Características

- 🛡️ **Seguridad:** No se cierra al hacer click fuera del modal (requiere acción explícita).
- 🎨 **Estética Coherente:** Mantiene el diseño premium del kit Byteflow-UI.
- ♿ **Semántica:** Diseñado para roles de `alertdialog`.

## Instalación

```bash
npm install @byteflow-ui/alert-dialog @byteflow-ui/dialog @byteflow-ui/button
```

## Uso

```tsx
import { useState } from 'react';
import { AlertDialog, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from '@byteflow-ui/alert-dialog';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button variant="error" onClick={() => setIsOpen(true)}>Eliminar Cuenta</Button>
            
            <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                        y removerá tus datos de nuestros servidores.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                
                <AlertDialogFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancelar</Button>
                    <Button variant="error" onClick={() => setIsOpen(false)}>Sí, eliminar cuenta</Button>
                </AlertDialogFooter>
            </AlertDialog>
        </>
    );
};
```

## Propiedades (AlertDialogProps)

| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `required` | Controla si el diálogo está visible. |
| `onClose` | `() => void` | `required` | Función que se ejecuta al intentar cerrar el diálogo. |
| `children` | `React.ReactNode` | `required` | Contenido del diálogo. |
| `className` | `string` | `""` | Clase CSS adicional para el contenedor. |
| `closeOnEsc` | `boolean` | `true` | Si se debe cerrar al presionar la tecla Escape. |
