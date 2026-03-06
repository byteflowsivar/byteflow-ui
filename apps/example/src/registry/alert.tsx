import { Alert, AlertTitle, AlertDescription } from '@byteflow-ui/alert';
import type { ComponentDocDefinition } from './button';

export const alertDoc: ComponentDocDefinition = {
    id: 'alert',
    name: 'Alert',
    description: 'Muestra mensajes importantes de forma prominente pero no intrusiva. Ideal para feedback del sistema, advertencias o confirmaciones de éxito.',
    examples: [
        {
            title: 'Variantes Semánticas',
            description: 'Diferentes tonos para diferentes tipos de mensajes.',
            render: () => (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
                    <Alert variant="info">
                        <AlertTitle>Actualización disponible</AlertTitle>
                        <AlertDescription>Una nueva versión de la plataforma está lista para descargar.</AlertDescription>
                    </Alert>
                    <Alert variant="success">
                        <AlertTitle>Pago procesado</AlertTitle>
                        <AlertDescription>Tu suscripción se ha renovado correctamente. Recibirás el recibo por email.</AlertDescription>
                    </Alert>
                    <Alert variant="error">
                        <AlertTitle>Error de conexión</AlertTitle>
                        <AlertDescription>No hemos podido sincronizar tus cambios. Por favor, reintenta en unos momentos.</AlertDescription>
                    </Alert>
                </div>
            ),
            code: `<Alert variant="info">
    <AlertTitle>Heads up!</AlertTitle>
    <AlertDescription>You can add components to your app using the cli.</AlertDescription>
</Alert>`
        }
    ],
    props: [
        { name: 'variant', type: "'info' | 'success' | 'warning' | 'error'", defaultValue: "'info'", description: 'Determina el estilo visual y el icono predeterminado.' },
        { name: 'children', type: 'ReactNode', defaultValue: '-', description: 'Contenido de la alerta (AlertTitle, AlertDescription).' }
    ],
    cssVars: [
        { name: '--bf-alert-radius', description: 'Radio de borde de la alerta.' },
        { name: '--bf-alert-bg', description: 'Fondo personalizado.' }
    ]
};
