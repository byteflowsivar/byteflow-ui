import type { ComponentDocDefinition } from './button';
import { Checkbox } from '@byteflow-ui/checkbox';

export const checkboxDoc: ComponentDocDefinition = {
    id: 'checkbox',
    name: 'Checkbox',
    description: 'Un control de selección binaria con estética Byteflow-UI. Reemplaza el input nativo con un diseño personalizado, manteniendo la accesibilidad nativa.',
    examples: [
        {
            title: 'Configuración de Preferencias',
            description: 'Uso de checkboxes para múltiples opciones.',
            render: () => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <Checkbox label="Acepto los términos y condiciones" defaultChecked />
                    <Checkbox label="Recibir notificaciones por email" />
                    <Checkbox label="Modo experimental (Beta)" />
                    <Checkbox label="Opción restringida" disabled />
                </div>
            ),
            code: `<Checkbox label="Acepto los términos y condiciones" defaultChecked />
<Checkbox label="Recibir notificaciones por email" />
<Checkbox label="Opción restringida" disabled />`
        }
    ],
    props: [
        { name: 'label', type: 'string', defaultValue: '-', description: 'Texto que acompaña al checkbox.' },
        { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Obligatoriedad del campo.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Deshabilita la interacción.' }
    ],
    cssVars: [
        { name: '--bf-checkbox-bg-checked', description: 'Color de fondo cuando está marcado.' },
        { name: '--bf-checkbox-radius', description: 'Radio de borde del checkbox.' }
    ]
};
