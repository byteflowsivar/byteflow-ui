import React, { useState, useEffect } from 'react';
import { Progress } from '@byteflow-ui/progress';
import { Button } from '@byteflow-ui/button';
import type { ComponentDocDefinition } from './button';

export const progressDoc: ComponentDocDefinition = {
    id: 'progress',
    name: 'Progress',
    description: 'Indicador visual del estado de carga o avance de una tarea. Soporta estados determinados e indeterminados con animaciones fluidas.',
    examples: [
        {
            title: 'Progreso Determinado',
            description: 'Usa el valor de carga para mostrar el porcentaje exacto.',
            render: () => {
                const [value, setValue] = useState(33);
                return (
                    <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <Progress value={value} />
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Button size="sm" onClick={() => setValue(Math.max(0, value - 10))}>-10%</Button>
                            <Button size="sm" onClick={() => setValue(Math.min(100, value + 10))}>+10%</Button>
                        </div>
                    </div>
                );
            },
            code: `<Progress value={33} />`
        },
        {
            title: 'Estado Indeterminado',
            description: 'Ideal para tareas donde no se conoce el tiempo de finalización.',
            render: () => (
                <div style={{ width: '100%', maxWidth: '400px' }}>
                    <Progress value={null} />
                </div>
            ),
            code: `<Progress value={null} />`
        }
    ],
    props: [
        { name: 'value', type: 'number | null', defaultValue: '0', description: 'Porcentaje de progreso (0-100). null activa el modo indeterminado.' }
    ],
    cssVars: [
        { name: '--bf-progress-indicator-bg', description: 'Color de la barra de progreso.' },
        { name: '--bf-progress-radius', description: 'Radio de borde del carril.' }
    ]
};
