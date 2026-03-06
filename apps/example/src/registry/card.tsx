import type { ComponentDocDefinition } from './button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@byteflow-ui/card';
import { Button } from '@byteflow-ui/button';

export const cardDoc: ComponentDocDefinition = {
    id: 'card',
    name: 'Card',
    description: 'La tarjeta es un contenedor versátil para agrupar contenido relacionado de forma elegante. Incluye subcomponentes para cabeceras, descripciones, contenido principal y pies de página.',
    examples: [
        {
            title: 'Tarjeta de Producto',
            description: 'Un ejemplo de cómo usar la estructura de la tarjeta para mostrar información de producto.',
            render: () => (
                <Card style={{ width: '350px' }}>
                    <CardHeader>
                        <CardTitle>Plan Enterprise</CardTitle>
                        <CardDescription>Para equipos que necesitan escala y control total.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <li>✅ Usuarios ilimitados</li>
                            <li>✅ Soporte 24/7</li>
                            <li>✅ SSO & Seguridad avanzada</li>
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button style={{ width: '100%' }}>Contactar Ventas</Button>
                    </CardFooter>
                </Card>
            ),
            code: `<Card>
    <CardHeader>
        <CardTitle>Plan Enterprise</CardTitle>
        <CardDescription>Para equipos que necesitan escala.</CardDescription>
    </CardHeader>
    <CardContent>
        {/* Tu contenido aquí */}
    </CardContent>
    <CardFooter>
        <Button>Contactar Ventas</Button>
    </CardFooter>
</Card>`
        }
    ],
    props: [
        { name: 'children', type: 'ReactNode', defaultValue: '-', description: 'Contenido de la tarjeta.' }
    ],
    cssVars: [
        { name: '--bf-card-bg', description: 'Color de fondo de la tarjeta.' },
        { name: '--bf-card-border', description: 'Color del borde.' },
        { name: '--bf-card-radius', description: 'Radio de las esquinas.' }
    ]
};
