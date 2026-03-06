import { useState } from 'react';
import type { ComponentDocDefinition } from './button';
import { Slider } from '@byteflow-ui/slider';

export const sliderDoc: ComponentDocDefinition = {
    id: 'slider',
    name: 'Slider',
    description: 'Permite a los usuarios seleccionar un valor de un rango definido moviendo un indicador a lo largo de una barra horizontal.',
    examples: [
        {
            title: 'Control de Volumen',
            description: 'Un ejemplo típico de uso de slider con estado controlado.',
            render: () => {
                const [val, setVal] = useState(45);
                return (
                    <div style={{ width: '100%', maxWidth: '400px' }}>
                        <Slider
                            label={`Volumen: ${val}%`}
                            value={val}
                            onChange={setVal}
                            min={0}
                            max={100}
                        />
                    </div>
                );
            },
            code: `const [val, setVal] = useState(45);

<Slider 
    label="Volumen" 
    value={val} 
    onChange={setVal} 
    min={0} 
    max={100} 
/>`
        }
    ],
    props: [
        { name: 'value', type: 'number', defaultValue: '0', description: 'Valor actual del slider.' },
        { name: 'min', type: 'number', defaultValue: '0', description: 'Valor mínimo.' },
        { name: 'max', type: 'number', defaultValue: '100', description: 'Valor máximo.' },
        { name: 'step', type: 'number', defaultValue: '1', description: 'Incremento entre pasos.' }
    ],
    cssVars: [
        { name: '--bf-slider-track-bg', description: 'Fondo del carril.' },
        { name: '--bf-slider-thumb-bg', description: 'Color del tirador.' }
    ]
};
