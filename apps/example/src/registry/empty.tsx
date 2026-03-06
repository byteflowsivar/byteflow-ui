import { Empty, EmptyTitle, EmptyDescription, EmptyAction } from '@byteflow-ui/empty';
import { Button } from '@byteflow-ui/button';
import type { ComponentDocDefinition } from './button';

export const emptyDoc: ComponentDocDefinition = {
    id: 'empty',
    name: 'Empty',
    description: 'Componente informativo para estados donde no hay datos disponibles, guiando al usuario sobre qué acción tomar a continuación.',
    examples: [
        {
            title: 'Sin Resultados',
            description: 'Estado vacío con una acción sugerida para continuar.',
            render: () => (
                <Empty>
                    <EmptyTitle>No hay transacciones aún</EmptyTitle>
                    <EmptyDescription>Tus movimientos aparecerán aquí en cuanto realices tu primera operación.</EmptyDescription>
                    <EmptyAction>
                        <Button>Nueva Transacción</Button>
                    </EmptyAction>
                </Empty>
            ),
            code: `<Empty>
    <EmptyTitle>No hay transacciones</EmptyTitle>
    <EmptyDescription>Realiza tu primera operación.</EmptyDescription>
    <EmptyAction><Button>Nueva</Button></EmptyAction>
</Empty>`
        }
    ],
    props: [],
    cssVars: [
        { name: '--bf-empty-icon-size', description: 'Tamaño del icono (si se provee).' },
        { name: '--bf-empty-icon-color', description: 'Color del icono.' },
        { name: '--bf-empty-gap', description: 'Espacio entre los subcomponentes.' }
    ]
};
