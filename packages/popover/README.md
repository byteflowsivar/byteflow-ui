# @byteflow-ui/popover

Componente de popover premium para el kit Byteflow-UI, diseñado para mostrar contenido flotante anclado a un elemento disparador.

## Características

- 🎯 **Posicionamiento Inteligente:** Soporta alineación y lados variables (`top`, `bottom`, `left`, `right`).
- ✨ **Estética Premium:** Efectos de desenfoque de fondo (glassmorphism) y animaciones suaves.
- 📦 **Composición Flexible:** Utiliza un sistema de `Trigger` y `Content`.
- 🚪 **Portal:** Renderizado mediante `React Portal` para evitar problemas de capas.

## Instalación

```bash
npm install @byteflow-ui/popover
```

## Uso

```tsx
import { useState, useRef } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@byteflow-ui/popover';
import { Button } from '@byteflow-ui/button';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    return (
        <Popover>
            <PopoverTrigger>
                <Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
                    Ver Detalles
                </Button>
            </PopoverTrigger>
            
            <PopoverContent 
                isOpen={isOpen} 
                onClose={() => setIsOpen(false)} 
                anchorRef={triggerRef}
                side="bottom"
                align="center"
            >
                <div style={{ padding: '8px' }}>
                    <h4 style={{ margin: '0 0 8px 0' }}>Información Extra</h4>
                    <p style={{ margin: 0, fontSize: '14px', opacity: 0.8 }}>
                        Este es un popover que se posiciona automáticamente.
                    </p>
                </div>
            </PopoverContent>
        </Popover>
    );
};
```

## Propiedades (PopoverContentProps)

| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `required` | Controla si el popover está visible. |
| `onClose` | `() => void` | `required` | Función que se ejecuta al intentar cerrar el popover. |
| `anchorRef` | `RefObject` | `required` | Referencia al elemento al cual se ancla el popover. |
| `side` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'bottom'` | Lado preferido para posicionar el popover. |
| `align` | `'start' \| 'center' \| 'end'` | `'center'` | Alineación del popover respecto al disparador. |
| `sideOffset` | `number` | `8` | Espacio en píxeles entre el disparador y el popover. |
