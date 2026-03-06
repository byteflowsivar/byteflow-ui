import { useState } from 'react';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@byteflow-ui/dialog';
import { Button } from '@byteflow-ui/button';
import { Input } from '@byteflow-ui/input';
import { Field, FieldLabel } from '@byteflow-ui/field';
import type { ComponentDocDefinition } from './button';

export const dialogDoc: ComponentDocDefinition = {
    id: 'dialog',
    name: 'Dialog',
    description: 'Ventana modal que interrumpe al usuario para mostrar información crítica o tareas que requieren atención inmediata.',
    examples: [
        {
            title: 'Ejemplo de Formulario',
            description: 'Un diálogo modal con campos de entrada y acciones.',
            render: () => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                    <>
                        <Button onClick={() => setIsOpen(true)}>Editar Perfil</Button>
                        <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                            <DialogHeader>
                                <DialogTitle>Editar Perfil</DialogTitle>
                                <DialogDescription>Realiza cambios en tu perfil aquí. Haz clic en guardar cuando termines.</DialogDescription>
                            </DialogHeader>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '0.5rem 0' }}>
                                <Field>
                                    <FieldLabel>Nombre</FieldLabel>
                                    <Input defaultValue="Victor Hugo" />
                                </Field>
                                <Field>
                                    <FieldLabel>Usuario</FieldLabel>
                                    <Input defaultValue="@vhugo" />
                                </Field>
                            </div>
                            <DialogFooter>
                                <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancelar</Button>
                                <Button onClick={() => setIsOpen(false)}>Guardar cambios</Button>
                            </DialogFooter>
                        </Dialog>
                    </>
                );
            },
            code: `<Button onClick={() => setIsOpen(true)}>Open</Button>
<Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <DialogHeader>
    <DialogTitle>Título</DialogTitle>
    <DialogDescription>Descripción...</DialogDescription>
  </DialogHeader>
  {/* Contenido */}
  <DialogFooter>
    <Button onClick={...}>Guardar</Button>
  </DialogFooter>
</Dialog>`
        }
    ],
    props: [
        { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Indica si el diálogo está visible.' },
        { name: 'onClose', type: '() => void', defaultValue: '-', description: 'Función para cerrar el diálogo.' },
        { name: 'closeOnOutsideClick', type: 'boolean', defaultValue: 'true', description: 'Cierra al hacer clic en el overlay.' },
        { name: 'closeOnEsc', type: 'boolean', defaultValue: 'true', description: 'Cierra al presionar Escape.' }
    ],
    cssVars: [
        { name: '--bf-dialog-bg', description: 'Color de fondo del contenido.' },
        { name: '--bf-dialog-radius', description: 'Radio de las esquinas.' },
        { name: '--bf-dialog-shadow', description: 'Sombra del diálogo.' }
    ]
};
