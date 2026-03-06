import { Field, FieldLabel, FieldDescription, FieldError } from '@byteflow-ui/field';
import { Input } from '@byteflow-ui/input';
import type { ComponentDocDefinition } from './button';

export const fieldDoc: ComponentDocDefinition = {
    id: 'field',
    name: 'Field',
    description: 'Contenedor estructural para campos de formulario. Gestiona la relación semántica entre etiquetas, descripciones y mensajes de error usando IDs vinculados automáticamente.',
    examples: [
        {
            title: 'Campo Estructurado',
            description: 'Uso de Field para envolver un Input y proporcionar contexto adicional.',
            render: () => (
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Field>
                        <FieldLabel>Contraseña</FieldLabel>
                        <Input type="password" placeholder="Tu código secreto" />
                        <FieldDescription>Usa al menos 12 caracteres mezclando letras y números.</FieldDescription>
                    </Field>
                </div>
            ),
            code: `<Field>
    <FieldLabel>Contraseña</FieldLabel>
    <Input type="password" />
    <FieldDescription>Mínimo 12 caracteres.</FieldDescription>
</Field>`
        },
        {
            title: 'Estado de Error',
            description: 'Cuando el campo es inválido, muestra el mensaje de error correspondiente.',
            render: () => (
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Field isInvalid={true}>
                        <FieldLabel>Email de Trabajo</FieldLabel>
                        <Input defaultValue="usuario@invalido" error />
                        <FieldError>Por favor, ingresa un correo corporativo válido.</FieldError>
                    </Field>
                </div>
            ),
            code: `<Field isInvalid>
    <FieldLabel>Email</FieldLabel>
    <Input error />
    <FieldError>Email inválido.</FieldError>
</Field>`
        }
    ],
    props: [
        { name: 'isInvalid', type: 'boolean', defaultValue: 'false', description: 'Activa el estado de error en los subcomponentes vinculados.' }
    ],
    cssVars: [
        { name: '--bf-field-gap', description: 'Espaciado vertical entre subcomponentes.' },
        { name: '--bf-field-label-size', description: 'Tamaño de la fuente de la etiqueta.' },
        { name: '--bf-field-error-color', description: 'Color del mensaje de error.' }
    ]
};
