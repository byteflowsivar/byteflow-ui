import React from 'react';
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

export const buttonDoc: ComponentDocDefinition = {
    id: 'button',
    name: 'Button',
    description: 'El botón es el componente interactivo fundamental de la librería. Permite a los usuarios realizar acciones y navegar a través de la interfaz con feedback visual inmediato.',
    examples: [
        {
            title: 'Variantes Básicas',
            description: 'El botón principal se usa para la acción más importante, mientras que el secundario y ghost se usan para acciones de apoyo.',
            render: () => (
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>
            ),
            code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>`
        },
        {
            title: 'Estados de Carga',
            description: 'Muestra un indicador de carga cuando una acción está en proceso.',
            render: () => <Button isLoading>Procesando...</Button>,
            code: `<Button isLoading>Procesando...</Button>`
        }
    ],
    props: [
        { name: 'variant', type: "'primary' | 'secondary' | 'ghost'", defaultValue: "'primary'", description: 'Determina el estilo visual y nivel de jerarquía.' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Controla las dimensiones del botón.' },
        { name: 'isLoading', type: 'boolean', defaultValue: 'false', description: 'Muestra un spinner y deshabilita el botón.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Deshabilita la interacción.' }
    ],
    cssVars: [
        { name: '--bf-button-primary-bg', description: 'Color de fondo para la variante primaria.' },
        { name: '--bf-button-primary-text', description: 'Color del texto para la variante primaria.' },
        { name: '--bf-button-radius', description: 'Radio de borde del botón.' }
    ]
};
