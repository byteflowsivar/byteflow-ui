import { Badge } from '@byteflow-ui/badge';
import type { ComponentDocDefinition } from './button';

export const badgeDoc: ComponentDocDefinition = {
    id: 'badge',
    name: 'Badge',
    description: 'El Badge es un elemento visual pequeño utilizado para resaltar estados, categorías o etiquetas numéricas. Ofrece múltiples variantes semánticas para comunicar significado de forma inmediata.',
    examples: [
        {
            title: 'Variantes de Estado',
            description: 'Usa las variantes predefinidas para comunicar éxito, advertencia o error.',
            render: () => (
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <Badge variant="primary">Noticia</Badge>
                    <Badge variant="success">Completado</Badge>
                    <Badge variant="warning">Pendiente</Badge>
                    <Badge variant="error">Fallido</Badge>
                    <Badge variant="outline">Borrador</Badge>
                </div>
            ),
            code: `<Badge variant="primary">Noticia</Badge>
<Badge variant="success">Completado</Badge>
<Badge variant="warning">Pendiente</Badge>
<Badge variant="error">Fallido</Badge>
<Badge variant="outline">Borrador</Badge>`
        },
        {
            title: 'Tamaños',
            description: 'Disponible en tres tamaños para adaptarse a diferentes contextos de UI.',
            render: () => (
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <Badge size="sm">Small</Badge>
                    <Badge size="md">Medium</Badge>
                    <Badge size="lg">Large</Badge>
                </div>
            ),
            code: `<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`
        }
    ],
    props: [
        { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error'", defaultValue: "'secondary'", description: 'Define el estilo visual del badge.' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Controla el tamaño del badge.' },
        { name: 'children', type: 'ReactNode', defaultValue: '-', description: 'Contenido a mostrar dentro del badge.' }
    ],
    cssVars: [
        { name: '--bf-badge-bg', description: 'Color de fondo personalizado.' },
        { name: '--bf-badge-color', description: 'Color del texto.' },
        { name: '--bf-badge-radius', description: 'Radio de borde del badge.' }
    ]
};
