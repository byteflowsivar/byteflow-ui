import type { ComponentDocDefinition } from './button';
import { Input } from '@byteflow-ui/input';

export const inputDoc: ComponentDocDefinition = {
    id: 'input',
    name: 'Input',
    description: 'El componente básico de entrada de texto. Implementado con altos estándares de accesibilidad, gestionando automáticamente IDs, etiquetas vinculadas y estados de error ARIA.',
    examples: [
        {
            title: 'Ejemplos de Entrada',
            description: 'Diferentes estados del input: estándar, con error y deshabilitado.',
            render: () => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '400px' }}>
                    <Input label="Nombre de Usuario" placeholder="ej. vhugo" />
                    <Input label="Email" type="email" defaultValue="hola@byteflow.ui" />
                    <Input label="Contraseña" type="password" error="Mínimo 8 caracteres" />
                    <Input label="Campo Bloqueado" disabled defaultValue="Valor no editable" />
                </div>
            ),
            code: `<Input label="Nombre de Usuario" placeholder="ej. vhugo" />
<Input label="Email" type="email" defaultValue="hola@byteflow.ui" />
<Input label="Contraseña" type="password" error="Mínimo 8 caracteres" />`
        }
    ],
    props: [
        { name: 'label', type: 'string', defaultValue: '-', description: 'Etiqueta descriptiva.' },
        { name: 'error', type: 'string', defaultValue: '-', description: 'Mensaje de error que activa el estado visual de error.' },
        { name: 'required', type: 'boolean', defaultValue: 'false', description: 'Marca el campo como obligatorio.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Deshabilita el input.' }
    ],
    cssVars: [
        { name: '--bf-input-bg', description: 'Color de fondo del input.' },
        { name: '--bf-input-border', description: 'Color del borde.' },
        { name: '--bf-input-radius', description: 'Radio de borde.' }
    ]
};
