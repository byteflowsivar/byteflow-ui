import { Tooltip } from '@byteflow-ui/tooltip';
import { Button } from '@byteflow-ui/button';
import type { ComponentDocDefinition } from './button';

export const tooltipDoc: ComponentDocDefinition = {
    id: 'tooltip',
    name: 'Tooltip',
    description: 'Breve mensaje informativo que aparece cuando el usuario pasa el cursor sobre un elemento o le da el foco.',
    examples: [
        {
            title: 'Posicionamiento',
            description: 'El tooltip puede ubicarse en cualquiera de los cuatro lados del elemento.',
            render: () => (
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Tooltip content="Muestra información arriba" position="top">
                        <Button variant="secondary">Arriba</Button>
                    </Tooltip>
                    <Tooltip content="Muestra información abajo" position="bottom">
                        <Button variant="secondary">Abajo</Button>
                    </Tooltip>
                    <Tooltip content="Muestra información a la izquierda" position="left">
                        <Button variant="secondary">Izquierda</Button>
                    </Tooltip>
                    <Tooltip content="Muestra información a la derecha" position="right">
                        <Button variant="secondary">Derecha</Button>
                    </Tooltip>
                </div>
            ),
            code: `<Tooltip content="Guardar cambios" position="top">
  <Button>Guardar</Button>
</Tooltip>`
        }
    ],
    props: [
        { name: 'content', type: 'ReactNode', defaultValue: '-', description: 'Texto o elemento a mostrar dentro del tooltip.' },
        { name: 'position', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'top'", description: 'Lado de aparición.' }
    ],
    cssVars: [
        { name: '--bf-tooltip-bg', description: 'Color de fondo.' },
        { name: '--bf-tooltip-text', description: 'Color del texto.' },
        { name: '--bf-tooltip-radius', description: 'Radio de borde.' }
    ]
};
