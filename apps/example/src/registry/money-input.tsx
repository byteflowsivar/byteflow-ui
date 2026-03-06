import type { ComponentDocDefinition } from './button';
import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@byteflow-ui/card';
import { Button } from '@byteflow-ui/button';
import { MoneyInput } from '@byteflow-ui/money-input';

export const moneyInputDoc: ComponentDocDefinition = {
    id: 'money-input',
    name: 'MoneyInput',
    description: 'Un campo de entrada optimizado para valores monetarios. Gestiona automáticamente el enmascaramiento, símbolos de moneda y decimales, asegurando que la entrada del usuario sea válida y legible.',
    examples: [
        {
            title: 'Caso de Uso Real: Suscripción',
            description: 'Un ejemplo de cómo integrar MoneyInput en un flujo de facturación.',
            render: () => {
                const [value, setValue] = useState(125000);
                return (
                    <Card style={{ maxWidth: '400px' }}>
                        <CardHeader>
                            <CardTitle>Configuración de Presupuesto</CardTitle>
                            <CardDescription>Indica el monto mensual para tu equipo.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <MoneyInput
                                label="Presupuesto Mensual"
                                value={value}
                                onChange={setValue}
                            />
                            <div style={{ marginTop: '1rem', fontSize: '0.875rem', color: 'var(--bf-text-secondary)' }}>
                                Valor en centavos: <strong>{value}</strong>
                            </div>
                            <Button style={{ width: '100%', marginTop: '1.5rem' }}>Guardar Cambios</Button>
                        </CardContent>
                    </Card>
                );
            },
            code: `const [value, setValue] = useState(125000); // $1,250.00

<MoneyInput 
    label="Presupuesto Mensual"
    value={value}
    onChange={setValue}
/>`
        }
    ],
    props: [
        { name: 'value', type: 'number', defaultValue: '0', description: 'El valor monetario expresado en la unidad mínima (centavos).' },
        { name: 'onChange', type: '(value: number) => void', defaultValue: '-', description: 'Callback que recibe el nuevo valor en centavos.' },
        { name: 'label', type: 'string', defaultValue: "''", description: 'Etiqueta descriptiva del campo.' },
        { name: 'currency', type: 'string', defaultValue: "'USD'", description: 'Símbolo de moneda a mostrar.' }
    ],
    cssVars: [
        { name: '--bf-money-input-primary-color', description: 'Color del acento del input.' },
        { name: '--bf-money-input-bg-color', description: 'Color de fondo del campo.' }
    ]
};
