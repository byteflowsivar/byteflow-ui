# @byteflow-ui/sheet

Componente de panel superpuesto (`Sheet`) o cajón inferior (`Drawer`) premium para el kit Byteflow-UI. Ideal para sidebars, menús móviles o formularios rápidos.

## Características

- 🗺️ **Multi-posición:** Soporta los cuatro lados de la pantalla (`top`, `bottom`, `left`, `right`).
- ✨ **Estética Premium:** Efectos de desenfoque de fondo (glassmorphism), sombras profundas y animaciones fluidas.
- 📱 **Mobile Ready:** El componente `Drawer` está pre-configurado para abrirse desde abajo, optimizado para UX móvil.
- ♿ **Accesibilidad:** Soporte para navegación por teclado y gestión de foco.
- 🚪 **Portal:** Renderizado mediante `React Portal`.

## Instalación

```bash
npm install @byteflow-ui/sheet
```

## Uso de Sheet (Sidebar)

```tsx
import { useState } from 'react';
import { Sheet, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@byteflow-ui/sheet';
import { Button } from '@byteflow-ui/button';

export const SidebarDemo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Abrir Menú Lateral</Button>
            
            <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} side="right">
                <SheetHeader>
                    <SheetTitle>Menú de Ajustes</SheetTitle>
                    <SheetDescription>
                        Gestiona las preferencias de tu cuenta y notificaciones.
                    </SheetDescription>
                </SheetHeader>
                
                <div style={{ flex: 1 }}>
                    {/* Contenido del menú */}
                </div>
                
                <SheetFooter>
                    <Button variant="ghost" onClick={() => setIsOpen(false)}>Cerrar</Button>
                    <Button variant="primary">Guardar Cambios</Button>
                </SheetFooter>
            </Sheet>
        </>
    );
};
```

## Uso de Drawer (Mobile style)

```tsx
import { Drawer } from '@byteflow-ui/sheet';

// Drawer es idéntico a Sheet pero side="bottom" por defecto
<Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <SheetHeader>
        <SheetTitle>Acciones Rápidas</SheetTitle>
    </SheetHeader>
    {/* ... */}
</Drawer>
```

## Propiedades (SheetProps)

| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `required` | Controla si el panel está visible. |
| `onClose` | `() => void` | `required` | Función que se ejecuta al intentar cerrar el panel. |
| `children` | `React.ReactNode` | `required` | Contenido del panel. |
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'right'` | Lado desde donde se desliza el panel. |
| `className` | `string` | `""` | Clase CSS adicional. |
| `closeOnOutsideClick` | `boolean` | `true` | Si se debe cerrar al hacer click fuera. |
| `closeOnEsc` | `boolean` | `true` | Si se debe cerrar al presionar Escape. |
