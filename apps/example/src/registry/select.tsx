import React from 'react';
import { Select } from '@byteflow-ui/select';

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

const countries = [
    { value: "us", label: "Estados Unidos" },
    { value: "mx", label: "México" },
    { value: "es", label: "España" },
    { value: "cl", label: "Chile" },
    { value: "sv", label: "El Salvador" },
];

export const selectDoc: ComponentDocDefinition = {
    id: 'select',
    name: 'Select',
    description: 'El Select permite elegir una opción de una lista desplegable. Es ideal para formularios donde el espacio es limitado.',
    examples: [
        {
            title: 'Uso Básico',
            description: 'Un select simple con etiqueta y opciones.',
            render: () => (
                <div style={{ width: '320px' }}>
                    <Select
                        label="País de residencia"
                        options={countries}
                        placeholder="Selecciona tu país"
                    />
                </div>
            ),
            code: `<Select
    label="País de residencia"
    options={countries}
    placeholder="Selecciona tu país"
/>`
        },
        {
            title: 'Con Error',
            description: 'Muestra un mensaje de error y cambia el estilo del borde.',
            render: () => (
                <div style={{ width: '320px' }}>
                    <Select
                        label="País de residencia"
                        options={countries}
                        error="Debes seleccionar un país"
                        placeholder="Selecciona tu país"
                        defaultValue=""
                    />
                </div>
            ),
            code: `<Select
    label="País de residencia"
    options={options}
    error="Debes seleccionar un país"
    placeholder="Selecciona tu país"
/>`
        }
    ],
    props: [
        { name: 'label', type: 'string', defaultValue: '-', description: 'Etiqueta descriptiva sobre el campo.' },
        { name: 'options', type: 'SelectOption[]', defaultValue: '[]', description: 'Lista de opciones { value, label }.' },
        { name: 'error', type: 'string', defaultValue: '-', description: 'Mensaje de error que invalida el campo.' },
        { name: 'placeholder', type: 'string', defaultValue: '-', description: 'Texto que se muestra cuando no hay una opción seleccionada.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Deshabilita el selector.' },
    ],
    cssVars: [
        { name: '--bf-select-bg', description: 'Color de fondo del selector.' },
        { name: '--bf-select-border', description: 'Color del borde del selector.' },
        { name: '--bf-select-radius', description: 'Radio de borde.' },
    ]
};
