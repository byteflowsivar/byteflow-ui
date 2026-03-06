import { Tabs, TabsList, TabsTrigger, TabsContent } from '@byteflow-ui/tabs';
import { Card, CardContent } from '@byteflow-ui/card';
import type { ComponentDocDefinition } from './button';

export const tabsDoc: ComponentDocDefinition = {
    id: 'tabs',
    name: 'Tabs',
    description: 'Organiza el contenido en vistas separadas que pueden alternarse, permitiendo optimizar el espacio en pantalla.',
    examples: [
        {
            title: 'Configuración de Perfil',
            description: 'Uso de pestañas para dividir secciones de ajustes.',
            render: () => (
                <div style={{ width: '400px' }}>
                    <Tabs defaultValue="account">
                        <TabsList>
                            <TabsTrigger value="account">Cuenta</TabsTrigger>
                            <TabsTrigger value="password">Seguridad</TabsTrigger>
                            <TabsTrigger value="notifications">Avisos</TabsTrigger>
                        </TabsList>
                        <TabsContent value="account">
                            <Card>
                                <CardContent style={{ paddingTop: '1.5rem' }}>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Gestiona los detalles de tu cuenta y preferencias de perfil.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="password">
                            <Card>
                                <CardContent style={{ paddingTop: '1.5rem' }}>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Cambia tu contraseña y configura la autenticación de dos factores.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="notifications">
                            <Card>
                                <CardContent style={{ paddingTop: '1.5rem' }}>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Controla cómo y cuándo recibes notificaciones del sistema.</p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            ),
            code: `<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Cuenta</TabsTrigger>
    <TabsTrigger value="password">Seguridad</TabsTrigger>
  </TabsList>
  <TabsContent value="account">...</TabsContent>
  <TabsContent value="password">...</TabsContent>
</Tabs>`
        }
    ],
    props: [
        { name: 'defaultValue', type: 'string', defaultValue: '-', description: 'Valor de la pestaña activa por defecto.' },
        { name: 'value', type: 'string', defaultValue: '-', description: 'Valor controlado de la pestaña activa.' },
        { name: 'onValueChange', type: '(value: string) => void', defaultValue: '-', description: 'Callback al cambiar de pestaña.' }
    ],
    cssVars: [
        { name: '--bf-tabs-bg', description: 'Fondo de la lista de pestañas.' },
        { name: '--bf-tabs-radius', description: 'Radio de las esquinas.' },
        { name: '--bf-tabs-active-bg', description: 'Fondo de la pestaña activa.' }
    ]
};
