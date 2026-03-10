import React from 'react';
import { Textarea } from '@byteflow-ui/textarea';

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

export const textareaDoc: ComponentDocDefinition = {
    id: 'textarea',
    name: 'Textarea',
    description: 'El campo Textarea permite a los usuarios ingresar y editar texto en múltiples líneas.',
    examples: [
        {
            title: 'Uso Básico',
            description: 'Un campo de texto multilínea estándar con etiqueta.',
            render: () => (
                <div style={{ width: '400px' }}>
                    <Textarea
                        label="Comentarios"
                        placeholder="Escribe tu opinión aquí..."
                        rows={4}
                    />
                </div>
            ),
            code: `<Textarea
    label="Comentarios"
    placeholder="Escribe tu opinión aquí..."
    rows={4}
/>`
        },
        {
            title: 'Con Error',
            description: 'Muestra un estado de error cuando la validación falla.',
            render: () => (
                <div style={{ width: '400px' }}>
                    <Textarea
                        label="Descripción"
                        placeholder="Escribe la descripción..."
                        error="La descripción es demasiado corta"
                        defaultValue="Texto insuficiente"
                    />
                </div>
            ),
            code: `<Textarea
    label="Descripción"
    error="La descripción es demasiado corta"
    defaultValue="Texto insuficiente"
/>`
        }
    ],
    props: [
        { name: 'label', type: 'string', defaultValue: '-', description: 'Etiqueta del campo.' },
        { name: 'error', type: 'string', defaultValue: '-', description: 'Mensaje de error que invalida el campo.' },
        { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Muestra un indicador de obligatoriedad.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Deshabilita el área de texto.' },
    ],
    cssVars: [
        { name: '--bf-textarea-bg', description: 'Color de fondo del área de texto.' },
        { name: '--bf-textarea-border', description: 'Color del borde.' },
        { name: '--bf-textarea-radius', description: 'Radio de borde.' },
    ]
};
