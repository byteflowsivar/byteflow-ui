import { useState, useRef } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut } from '@byteflow-ui/dropdown-menu';
import { Button } from '@byteflow-ui/button';
import type { ComponentDocDefinition } from './button';

export const dropdownMenuDoc: ComponentDocDefinition = {
    id: 'dropdown-menu',
    name: 'Dropdown Menu',
    description: 'Muestra un menú de acciones o funciones adicionales cuando se activa un disparador.',
    examples: [
        {
            title: 'Perfil de Usuario',
            description: 'Menú típico con etiquetas, atajos y separadores.',
            render: () => {
                const [isOpen, setIsOpen] = useState(false);
                const buttonRef = useRef<HTMLButtonElement>(null);
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button ref={buttonRef} variant="secondary" onClick={() => setIsOpen(!isOpen)}>Mi Cuenta</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            anchorRef={buttonRef}
                            align="end"
                        >
                            <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setIsOpen(false)}>
                                👤 Perfil
                                <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setIsOpen(false)}>
                                💳 Facturación
                                <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setIsOpen(false)}>
                                ⚙️ Ajustes
                                <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem onClick={() => setIsOpen(false)} style={{ color: 'var(--bf-error, #ef4444)' }}>
                                🚪 Cerrar Sesión
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                );
            },
            code: `<DropdownMenu>
  <DropdownMenuTrigger>
    <Button ref={ref} onClick={...}>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent isOpen={isOpen} onClose={...} anchorRef={ref}>
    <DropdownMenuLabel>...</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>...</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`
        }
    ],
    props: [
        { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Estado de apertura del menú.' },
        { name: 'onClose', type: '() => void', defaultValue: '-', description: 'Función para cerrar el menú.' },
        { name: 'align', type: "'start' | 'center' | 'end'", defaultValue: "'start'", description: 'Alineación horizontal.' }
    ],
    cssVars: [
        { name: '--bf-dropdown-bg', description: 'Fondo del menú.' },
        { name: '--bf-dropdown-radius', description: 'Radio de las esquinas.' }
    ]
};
