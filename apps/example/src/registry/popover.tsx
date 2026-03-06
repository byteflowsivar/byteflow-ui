import { useState, useRef } from 'react';
import { Popover, PopoverTrigger, PopoverContent, PopoverTitle, PopoverDescription } from '@byteflow-ui/popover';
import { Button } from '@byteflow-ui/button';
import { Input } from '@byteflow-ui/input';
import { Field, FieldLabel } from '@byteflow-ui/field';
import type { ComponentDocDefinition } from './button';

export const popoverDoc: ComponentDocDefinition = {
    id: 'popover',
    name: 'Popover',
    description: 'Muestra contenido flotante relativo a un elemento disparador. A diferencia del Tooltip, puede contener elementos interactivos.',
    examples: [
        {
            title: 'Ejemplo Interactivo',
            description: 'Popover con mini-formulario de configuración.',
            render: () => {
                const [isOpen, setIsOpen] = useState(false);
                const buttonRef = useRef<HTMLButtonElement>(null);
                return (
                    <Popover>
                        <PopoverTrigger>
                            <Button ref={buttonRef} variant="secondary" onClick={() => setIsOpen(!isOpen)}>Dimensiones</Button>
                        </PopoverTrigger>
                        <PopoverContent
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                            anchorRef={buttonRef}
                            align="start"
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ borderBottom: '1px solid var(--bf-surface-border)', paddingBottom: '0.5rem' }}>
                                    <PopoverTitle>Dimensiones</PopoverTitle>
                                    <PopoverDescription>Ajusta el tamaño del contenedor.</PopoverDescription>
                                </div>
                                <Field>
                                    <FieldLabel>Ancho</FieldLabel>
                                    <Input defaultValue="100%" />
                                </Field>
                                <Field>
                                    <FieldLabel>Alto</FieldLabel>
                                    <Input defaultValue="auto" />
                                </Field>
                            </div>
                        </PopoverContent>
                    </Popover>
                );
            },
            code: `<Popover>
  <PopoverTrigger>
    <Button ref={ref} onClick={...}>Open</Button>
  </PopoverTrigger>
  <PopoverContent isOpen={isOpen} onClose={...} anchorRef={ref}>
    {/* Contenido interactivo */}
  </PopoverContent>
</Popover>`
        }
    ],
    props: [
        { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Estado de apertura del contenido.' },
        { name: 'onClose', type: '() => void', defaultValue: '-', description: 'Función para cerrar el popover.' },
        { name: 'anchorRef', type: 'RefObject', defaultValue: '-', description: 'Referencia al elemento disparador para posicionamiento.' },
        { name: 'align', type: "'start' | 'center' | 'end'", defaultValue: "'center'", description: 'Alineación horizontal.' },
        { name: 'side', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'bottom'", description: 'Lado del disparador donde aparecerá.' }
    ],
    cssVars: [
        { name: '--bf-popover-bg', description: 'Color de fondo.' },
        { name: '--bf-popover-radius', description: 'Radio de borde.' }
    ]
};
