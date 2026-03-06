import React from 'react';
import { ScrollArea } from '@byteflow-ui/scroll-area';
import type { ComponentDocDefinition } from './button';

export const scrollAreaDoc: ComponentDocDefinition = {
    id: 'scroll-area',
    name: 'ScrollArea',
    description: 'Aumenta el control sobre el scroll nativo, proporcionando una estética consistente en todos los navegadores y sistemas operativos.',
    examples: [
        {
            title: 'Lista de Etiquetas',
            description: 'Un área con scroll personalizado para contenido largo.',
            render: () => (
                <ScrollArea style={{ height: '200px', width: '300px', border: '1px solid var(--bf-surface-border)', borderRadius: '8px', padding: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <h4 style={{ margin: 0, fontWeight: 600 }}>Tags de Proyecto</h4>
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} style={{ fontSize: '0.85rem', color: 'var(--bf-text-secondary)', borderBottom: '1px solid var(--bf-surface-border)', paddingBottom: '0.5rem' }}>
                                v1.2.0-rc.{20 - i} - Publicado hace {i + 1} días
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            ),
            code: `<ScrollArea style={{ height: '200px' }}>
  {/* Contenido largo */}
</ScrollArea>`
        }
    ],
    props: [
        { name: 'hideScrollbar', type: 'boolean', defaultValue: 'false', description: 'Oculta visualmente la barra de scroll pero mantiene la funcionalidad.' }
    ],
    cssVars: [
        { name: '--bf-scroll-area-thumb', description: 'Color del indicador de scroll.' },
        { name: '--bf-scroll-area-width', description: 'Ancho de la barra de scroll.' },
        { name: '--bf-scroll-area-track', description: 'Fondo del carril de scroll.' }
    ]
};
