import React from 'react';
import { Skeleton } from '@byteflow-ui/skeleton';

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

export const skeletonDoc: ComponentDocDefinition = {
    id: 'skeleton',
    name: 'Skeleton',
    description: 'El Skeleton se utiliza para mostrar un marcador de posición mientras el contenido real se está cargando, mejorando la percepción de velocidad de la aplicación.',
    examples: [
        {
            title: 'Perfil de Usuario',
            description: 'Un ejemplo de cómo estructurar esqueletos para simular un perfil.',
            render: () => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Skeleton variant="circular" width={50} height={50} />
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <Skeleton variant="rectangular" width="150px" height="15px" />
                        <Skeleton variant="rectangular" width="100px" height="10px" />
                    </div>
                </div>
            ),
            code: `<Skeleton variant="circular" width={50} height={50} />
<div className="space-y-2">
  <Skeleton width="150px" height="15px" />
  <Skeleton width="100px" height="10px" />
</div>`
        },
        {
            title: 'Variantes',
            description: 'Soporta diferentes formas: rectangular, circular y redondeada.',
            render: () => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rounded" width="200px" height="40px" />
                    <Skeleton variant="rectangular" width="300px" height="20px" />
                </div>
            ),
            code: `<Skeleton variant="circular" width={40} height={40} />
<Skeleton variant="rounded" width="200px" height="40px" />
<Skeleton variant="rectangular" width="300px" height="20px" />`
        }
    ],
    props: [
        { name: 'variant', type: "'rectangular' | 'circular' | 'rounded'", defaultValue: "'rectangular'", description: 'La forma visual del esqueleto.' },
        { name: 'width', type: 'string | number', defaultValue: '-', description: 'Ancho personalizado del esqueleto.' },
        { name: 'height', type: 'string | number', defaultValue: '-', description: 'Altura personalizada del esqueleto.' },
    ],
    cssVars: [
        { name: '--bf-skeleton-bg', description: 'Color base del esqueleto.' },
        { name: '--bf-skeleton-pulse-color', description: 'Color del destello en la animación de pulso.' },
    ]
};
