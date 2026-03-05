# @byteflow-ui/context-menu

Componente de menú contextual premium para el kit Byteflow-UI, diseñado para aparecer al hacer clic derecho sobre un área específica.

## Características

- 🖱️ **Disparador Nativo:** Se activa mediante el evento de clic derecho (`onContextMenu`).
- ✨ **Estética Premium:** Efectos de desenfoque de fondo (glassmorphism), sombras profundas y animaciones fluidas.
- 📦 **Componentes Compuestos:** Incluye `Item`, `Label`, `Separator` y `Shortcut` para una personalización completa.
- 🚪 **Portal:** Renderizado mediante `React Portal` para evitar problemas de capas y recortes.

## Instalación

```bash
npm install @byteflow-ui/context-menu
```

## Uso

```tsx
import { useState } from 'react';
import { 
    ContextMenu, 
    ContextMenuTrigger, 
    ContextMenuContent, 
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuSeparator,
    ContextMenuShortcut
} from '@byteflow-ui/context-menu';

export const MyComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        setAnchorPoint({ x: e.clientX, y: e.clientY });
        setIsOpen(true);
    };

    return (
        <>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div 
                        onContextMenu={handleContextMenu}
                        style={{ 
                            width: '300px', 
                            height: '200px', 
                            border: '2px dashed #444', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            borderRadius: '12px'
                        }}
                    >
                        Click Derecho Aquí
                    </div>
                </ContextMenuTrigger>
                
                <ContextMenuContent 
                    isOpen={isOpen} 
                    onClose={() => setIsOpen(false)} 
                    anchorPoint={anchorPoint}
                >
                    <ContextMenuLabel>Acciones de Archivo</ContextMenuLabel>
                    <ContextMenuItem onClick={() => alert('Abrir')}>
                        Abrir
                        <ContextMenuShortcut>⌘O</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem onClick={() => alert('Editar')}>
                        Editar
                        <ContextMenuShortcut>⌘E</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem onClick={() => alert('Eliminar')} style={{ color: '#ef4444' }}>
                        Eliminar
                        <ContextMenuShortcut>⌘⌫</ContextMenuShortcut>
                    </ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </>
    );
};
```

## Propiedades (ContextMenuContentProps)

| Propiedad | Tipo | Por defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `isOpen` | `boolean` | `required` | Controla si el menú está visible. |
| `onClose` | `() => void` | `required` | Función que se ejecuta al intentar cerrar el menú. |
| `anchorPoint` | `{ x: number; y: number }` | `required` | Coordenadas donde aparecerá el menú. |
| `className` | `string` | `""` | Clase CSS adicional. |
