import { useToast, ToastProvider } from '@byteflow-ui/toast';
import { Button } from '@byteflow-ui/button';
import type { ComponentDocDefinition } from './button';

const ToastExample = () => {
    const { toast } = useToast();

    return (
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="secondary" onClick={() => toast({ title: 'Mensaje enviado', description: 'Tu mensaje ha sido entregado correctamente.' })}>
                Estándar
            </Button>
            <Button onClick={() => toast({ title: 'Operación exitosa', description: 'Los cambios se guardaron en la nube.', variant: 'success' })}>
                Éxito
            </Button>
            <Button variant="ghost" onClick={() => toast({ title: 'Error crítico', description: 'No se pudo procesar la solicitud.', variant: 'error' })}>
                Error
            </Button>
        </div>
    );
};

export const toastDoc: ComponentDocDefinition = {
    id: 'toast',
    name: 'Toast',
    description: 'Sistema de notificaciones efímeras para proporcionar feedback no intrusivo al usuario sobre los resultados de sus acciones.',
    examples: [
        {
            title: 'Tipos de Notificaciones',
            description: 'Dispara diferentes estados de notificación usando el hook `useToast`. El componente debe estar envuelto en un `ToastProvider`.',
            render: () => (
                <ToastProvider>
                    <ToastExample />
                </ToastProvider>
            ),
            code: `// 1. Envuelve tu App en el ToastProvider
import { ToastProvider } from '@byteflow-ui/toast';

<ToastProvider>
  <App />
</ToastProvider>

// 2. Usa el hook useToast para disparar notificaciones
import { useToast } from '@byteflow-ui/toast';

const MyComponent = () => {
  const { toast } = useToast();
  
  return (
    <Button onClick={() => toast({ 
      title: 'Éxito', 
      description: 'Guardado correctamente', 
      variant: 'success' 
    })}>
      Notificar
    </Button>
  );
};`
        }
    ],
    props: [
        { name: 'title', type: 'string', defaultValue: '-', description: 'Título principal de la notificación.' },
        { name: 'description', type: 'string', defaultValue: '-', description: 'Detalle opcional del mensaje.' },
        { name: 'variant', type: "'default' | 'success' | 'error' | 'warning' | 'info'", defaultValue: "'default'", description: 'Estilo visual de la notificación.' },
        { name: 'duration', type: 'number', defaultValue: '5000', description: 'Tiempo en ms antes de desaparecer.' }
    ],
    cssVars: [
        { name: '--bf-toast-bg', description: 'Fondo del toast.' },
        { name: '--bf-toast-radius', description: 'Radio de las esquinas.' }
    ]
};
