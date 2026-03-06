import { useState } from 'react';
import { Item, ItemPrefix, ItemContent, ItemSuffix } from '@byteflow-ui/item';
import type { ComponentDocDefinition } from './button';

export const itemDoc: ComponentDocDefinition = {
    id: 'item',
    name: 'Item',
    description: 'Bloque de construcción versátil para listas, menús y selecciones. Soporta prefijos (iconos/avatares), contenido principal y sufijos (badges/flechas).',
    examples: [
        {
            title: 'Lista de Configuración',
            description: 'Uso de items para opciones de un menú lateral.',
            render: () => {
                const [selected, setSelected] = useState('settings');
                return (
                    <div style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                        <Item
                            selected={selected === 'profile'}
                            onClick={() => setSelected('profile')}
                        >
                            <ItemPrefix>👤</ItemPrefix>
                            <ItemContent>
                                <span style={{ fontWeight: 500 }}>Mi Perfil</span>
                            </ItemContent>
                        </Item>
                        <Item
                            selected={selected === 'settings'}
                            onClick={() => setSelected('settings')}
                        >
                            <ItemPrefix>⚙️</ItemPrefix>
                            <ItemContent>
                                <span style={{ fontWeight: 500 }}>Ajustes de Cuenta</span>
                            </ItemContent>
                            <ItemSuffix>
                                <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>Alt+S</span>
                            </ItemSuffix>
                        </Item>
                        <Item disabled>
                            <ItemPrefix>🔒</ItemPrefix>
                            <ItemContent>
                                <span style={{ fontWeight: 500 }}>Seguridad Avanzada</span>
                            </ItemContent>
                            <ItemSuffix>✨ PRO</ItemSuffix>
                        </Item>
                    </div>
                );
            },
            code: `<Item selected={isActive} onClick={...}>
  <ItemPrefix>Icon</ItemPrefix>
  <ItemContent>Label</ItemContent>
  <ItemSuffix>Badge</ItemSuffix>
</Item>`
        }
    ],
    props: [
        { name: 'selected', type: 'boolean', defaultValue: 'false', description: 'Indica si el ítem está seleccionado visualmente.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Deshabilita la interacción.' }
    ],
    cssVars: [
        { name: '--bf-item-bg-hover', description: 'Color de fondo en hover.' },
        { name: '--bf-item-bg-selected', description: 'Color de fondo cuando está seleccionado.' },
        { name: '--bf-item-text-selected', description: 'Color del texto cuando está seleccionado.' }
    ]
};
