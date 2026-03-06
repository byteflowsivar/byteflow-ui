import type { ComponentDocDefinition } from './button';
import { Switch } from '@byteflow-ui/switch';

export const switchDoc: ComponentDocDefinition = {
    id: 'switch',
    name: 'Switch',
    description: 'Un control deslizante para alternar entre dos estados. Es la alternativa moderna al checkbox para opciones que tienen un efecto inmediato.',
    examples: [
        {
            title: 'Configuración del Sistema',
            description: 'Diferentes tamaños y estados del switch.',
            render: () => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <Switch label="Notificaciones de escritorio" defaultChecked />
                    <Switch label="Modo avión" size="sm" />
                    <Switch label="Backup automático" size="lg" defaultChecked />
                    <Switch label="Opción de pago" disabled />
                </div>
            ),
            code: `<Switch label="Notificaciones de escritorio" defaultChecked />
<Switch label="Modo avión" size="sm" />
<Switch label="Backup automático" size="lg" />`
        }
    ],
    props: [
        { name: 'label', type: 'string', defaultValue: '-', description: 'Texto descriptivo al lado del switch.' },
        { name: 'checked', type: 'boolean', defaultValue: 'false', description: 'Estado actual del switch.' },
        { name: 'size', type: "'sm' | 'md' | 'lg'", defaultValue: "'md'", description: 'Tamaño del control.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Si está deshabilitado.' }
    ],
    cssVars: [
        { name: '--bf-switch-bg-checked', description: 'Color de fondo cuando está activado.' },
        { name: '--bf-switch-width', description: 'Ancho total del track.' },
        { name: '--bf-switch-transition', description: 'Velocidad de la animación.' }
    ]
};
