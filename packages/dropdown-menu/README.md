# @byteflow-ui/dropdown-menu

Componente de menú desplegable premium para el kit Byteflow-UI, diseñado para mostrar una lista de acciones o opciones cuando se interactúa con un disparador.

## Características

- ✨ **Estética Premium:** Efectos de desenfoque de fondo (glassmorphism), sombras suaves y animaciones de entrada.
- 📦 **Componentes Compuestos:** Incluye `Item`, `Label`, `Separator` y `Shortcut` para una personalización completa.
- 📱 **Responsivo:** Se adapta correctamente en móviles y tablets.
- 🚪 **Portal:** Renderizado mediante `React Portal` para evitar problemas de posicionamiento y `z-index`.

## Instalación

```bash
npm install @byteflow-ui/dropdown-menu @byteflow-ui/button
```

## Uso

```tsx
import { useState, useRef } from 'react';
import { 
    DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuContent, 
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut
} from '@byteflow-ui/dropdown-menu';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                    Mi Cuenta
                </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                anchorRef={triggerRef}
                align="end"
            >
                <DropdownMenuLabel>Ajustes</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => alert('Perfil')}>
                    Ver Perfil
                    <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => alert('Facturación')}>
                    Facturación
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setIsOpen(false)} style={{ color: '#ef4444' }}>
                    Cerrar Sesión
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
```

## Propiedades (DropdownMenuContentProps)

| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `required` | Controla si el menú está visible. |
| `onClose` | `() => void` | `required` | Función que se ejecuta al intentar cerrar el menú. |
| `anchorRef` | `RefObject` | `required` | Referencia al elemento al cual se ancla el menú. |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Alineación del menú respecto al disparador. |
| `sideOffset` | `number` | `4` | Espacio en píxeles entre el disparador y el menú. |
