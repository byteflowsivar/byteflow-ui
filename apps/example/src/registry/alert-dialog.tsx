import React, { useState } from 'react';
import { AlertDialog, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter } from '@byteflow-ui/alert-dialog';
import { Button } from '@byteflow-ui/button';

export interface PropRow {
    name: string;
    type: string;
    defaultValue: string;
    description: string;
}

export interface CSSVarRow {
    name: string;
    description: string;
}

export interface ComponentDocDefinition {
    id: string;
    name: string;
    description: string;
    variant?: string;
    examples: {
        title: string;
        description?: string;
        render: () => React.ReactNode;
        code: string;
    }[];
    props: PropRow[];
    cssVars: CSSVarRow[];
}

export const alertDialogDoc: ComponentDocDefinition = {
    id: 'alert-dialog',
    name: 'Alert Dialog',
    description: 'El Alert Dialog es un diálogo modal que interrumpe al usuario con contenido crítico y requiere una acción confirmada para cerrarse.',
    examples: [
        {
            title: 'Confirmación de Acción',
            description: 'Se utiliza para confirmar acciones irreversibles como eliminar una cuenta.',
            render: () => {
                const [isOpen, setIsOpen] = useState(false);
                return (
                    <div>
                        <Button variant="ghost" style={{ color: '#ef4444' }} onClick={() => setIsOpen(true)}>Eliminar cuenta</Button>
                        <AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
                            <AlertDialogHeader>
                                <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                                    y todos tus datos de nuestros servidores.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancelar</Button>
                                <Button variant="primary" style={{ backgroundColor: '#ef4444' }} onClick={() => setIsOpen(false)}>Eliminar</Button>
                            </AlertDialogFooter>
                        </AlertDialog>
                    </div>
                );
            },
            code: `const [isOpen, setIsOpen] = useState(false);

<AlertDialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <AlertDialogHeader>
    <AlertDialogTitle>¿Está seguro?</AlertDialogTitle>
    <AlertDialogDescription>Esta acción no se puede deshacer.</AlertDialogDescription>
  </AlertDialogHeader>
  <AlertDialogFooter>
    <Button onClick={() => setIsOpen(false)}>Cancelar</Button>
    <Button variant="danger" onClick={() => setIsOpen(false)}>Eliminar</Button>
  </AlertDialogFooter>
</AlertDialog>`
        }
    ],
    props: [
        { name: 'isOpen', type: 'boolean', defaultValue: 'false', description: 'Indica si el diálogo está abierto.' },
        { name: 'onClose', type: '() => void', defaultValue: '-', description: 'Callback que se ejecuta al cerrar el diálogo.' },
        { name: 'closeOnEsc', type: 'boolean', defaultValue: 'true', description: 'Si el diálogo se cierra al presionar la tecla Esc.' },
    ],
    cssVars: [
        { name: '--bf-dialog-bg', description: 'Color de fondo del modal.' },
        { name: '--bf-overlay-bg', description: 'Color del fondo (backdrop) semitransparente.' },
    ]
};
