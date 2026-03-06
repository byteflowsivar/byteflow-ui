import { HoverCard, HoverCardTrigger, HoverCardContent } from '@byteflow-ui/hover-card';
import { Avatar } from '@byteflow-ui/avatar';
import type { ComponentDocDefinition } from './button';

export const hoverCardDoc: ComponentDocDefinition = {
    id: 'hover-card',
    name: 'Hover Card',
    description: 'Permite a los usuarios previsualizar contenido adicional relacionado con un elemento sin necesidad de hacer clic ni perder su ubicación actual.',
    examples: [
        {
            title: 'Perfil de Usuario',
            description: 'Uso de un card informativo al pasar el cursor sobre un avatar.',
            render: () => (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                    <HoverCard openDelay={200} closeDelay={150}>
                        <HoverCardTrigger>
                            <div style={{ cursor: 'pointer', textDecoration: 'underline', color: 'var(--bf-accent)' }}>
                                @byteflow
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent align="start" sideOffset={10}>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Avatar src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" alt="Byteflow" />
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                    <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 600 }}>Byteflow UI</h4>
                                    <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--bf-text-secondary)' }}>
                                        Librería de componentes premium diseñada para crear interfaces modernas y de alto rendimiento.
                                    </p>
                                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.6 }}>
                                        <span>📅 Mar 2024</span>
                                        <span>📍 Cloud</span>
                                    </div>
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                </div>
            ),
            code: `<HoverCard>
  <HoverCardTrigger>
    <span>@usuario</span>
  </HoverCardTrigger>
  <HoverCardContent>
    {/* Contenido de previsualización */}
  </HoverCardContent>
</HoverCard>`
        }
    ],
    props: [
        { name: 'openDelay', type: 'number', defaultValue: '700', description: 'Tiempo en ms antes de mostrar el contenido.' },
        { name: 'closeDelay', type: 'number', defaultValue: '300', description: 'Tiempo en ms antes de ocultar el contenido.' },
        { name: 'align', type: "'start' | 'center' | 'end'", defaultValue: "'center'", description: 'Alineación horizontal.' },
        { name: 'side', type: "'top' | 'bottom' | 'left' | 'right'", defaultValue: "'bottom'", description: 'Lado de aparición.' }
    ],
    cssVars: [
        { name: '--bf-surface', description: 'Color de fondo del card.' },
        { name: '--bf-radius-lg', description: 'Radio de las esquinas.' }
    ]
};
