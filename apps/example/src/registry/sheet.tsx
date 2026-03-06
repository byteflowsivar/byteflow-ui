import { useState } from 'react';
import { Sheet, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@byteflow-ui/sheet';
import { Button } from '@byteflow-ui/button';
import { Input } from '@byteflow-ui/input';
import { Field, FieldLabel } from '@byteflow-ui/field';
import type { ComponentDocDefinition } from './button';

export const sheetDoc: ComponentDocDefinition = {
    id: 'sheet',
    name: 'Sheet',
    description: 'Paneles laterales (o desde cualquier lado) que se activan como modales. Ideales para configuraciones profundas o formularios complejos sin perder el contexto total.',
    examples: [
        {
            title: 'Panel Lateral de Edición',
            description: 'Uso de un panel desde la derecha para edición de datos.',
            render: () => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <Button variant="secondary" onClick={() => setIsOpen(true)}>Abrir Panel Derecho</Button>
                        <Sheet isOpen={isOpen} onClose={() => setIsOpen(false)} side="right">
                            <SheetHeader>
                                <SheetTitle>Configuración de Proyecto</SheetTitle>
                                <SheetDescription>Modifica los parámetros globales de tu workspace aquí.</SheetDescription>
                            </SheetHeader>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', padding: '1rem 0' }}>
                                <Field>
                                    <FieldLabel>Nombre del Proyecto</FieldLabel>
                                    <Input defaultValue="Byteflow UI Lib" />
                                </Field>
                                <Field>
                                    <FieldLabel>Identificador</FieldLabel>
                                    <Input defaultValue="bf-lib-01" />
                                </Field>
                            </div>
                            <SheetFooter>
                                <Button onClick={() => setIsOpen(false)}>Guardar configuración</Button>
                            </SheetFooter>
                        </Sheet>
                    </div>
                );
            },
            code: `<Sheet isOpen={isOpen} onClose={...} side="right">
  <SheetHeader>
    <SheetTitle>Título</SheetTitle>
    <SheetDescription>Descripción...</SheetDescription>
  </SheetHeader>
  {/* Contenido */}
  <SheetFooter>
    <Button>Acción</Button>
  </SheetFooter>
</Sheet>`
        }
    ],
    props: [
        { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Indica si el panel está visible.' },
        { name: 'side', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'right'", description: 'Lado desde donde aparece el panel.' },
        { name: 'onClose', type: '() => void', defaultValue: '-', description: 'Función para cerrar el panel.' }
    ],
    cssVars: [
        { name: '--bf-sheet-bg', description: 'Color de fondo del panel.' },
        { name: '--bf-sheet-radius', description: 'Radio de las esquinas (según el lado).' }
    ]
};
