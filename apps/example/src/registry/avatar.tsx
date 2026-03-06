import { Avatar } from '@byteflow-ui/avatar';
import type { ComponentDocDefinition } from './button';

export const avatarDoc: ComponentDocDefinition = {
    id: 'avatar',
    name: 'Avatar',
    description: 'Representación visual de usuarios o entidades. Soporta imágenes, iniciales como fallback y diferentes formas y tamaños.',
    examples: [
        {
            title: 'Tipos de Avatar',
            description: 'Uso con imagen, iniciales y avatar vacío.',
            render: () => (
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop" alt="User" />
                    <Avatar alt="Victor Hugo">VH</Avatar>
                    <Avatar />
                </div>
            ),
            code: `<Avatar src="https://example.com/photo.jpg" alt="User" />
<Avatar alt="Victor Hugo">VH</Avatar>
<Avatar />`
        },
        {
            title: 'Formas y Tamaños',
            description: 'Avatares cuadrados y de diferentes dimensiones.',
            render: () => (
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <Avatar size="sm" alt="Small">S</Avatar>
                    <Avatar size="lg" alt="Large">L</Avatar>
                    <Avatar size="xl" shape="square" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop" />
                </div>
            ),
            code: `<Avatar size="sm">S</Avatar>
<Avatar size="lg">L</Avatar>
<Avatar size="xl" shape="square" src="..." />`
        }
    ],
    props: [
        { name: 'src', type: 'string', defaultValue: '-', description: 'URL de la imagen del avatar.' },
        { name: 'alt', type: 'string', defaultValue: '-', description: 'Texto alternativo para accesibilidad.' },
        { name: 'size', type: "'sm' | 'md' | 'lg' | 'xl'", defaultValue: "'md'", description: 'Dimensiones del avatar.' },
        { name: 'shape', type: "'circle' | 'square'", defaultValue: "'circle'", description: 'Forma del contenedor.' }
    ],
    cssVars: [
        { name: '--bf-avatar-size', description: 'Tamaño del avatar.' },
        { name: '--bf-avatar-radius', description: 'Radio de borde.' },
        { name: '--bf-avatar-bg', description: 'Color de fondo del fallback.' }
    ]
};
