import React, { useState } from 'react';
import { Calendar } from '@byteflow-ui/calendar';
import { DatePicker } from '@byteflow-ui/date-picker';

export interface PropRow {
    name: string;
    type: string;
    defaultValue: string;
    description: string;
}

export interface CSSVarRow {
    name: string;
    description: string;
}

export interface ComponentDocDefinition {
    id: string;
    name: string;
    description: string;
    variant?: string;
    examples: {
        title: string;
        description?: string;
        render: () => React.ReactNode;
        code: string;
    }[];
    props: PropRow[];
    cssVars: CSSVarRow[];
}

export const datePickerDoc: ComponentDocDefinition = {
    id: 'date-picker',
    name: 'Date Picker',
    description: 'El Date Picker permite a los usuarios seleccionar una fecha a través de un calendario interactivo desplegable.',
    examples: [
        {
            title: 'DatePicker Básico',
            description: 'Un seleccionador de fecha simple con formato en español.',
            render: () => {
                const [date, setDate] = useState<Date | undefined>(undefined);
                return (
                    <div style={{ width: '280px' }}>
                        <DatePicker
                            value={date}
                            onValueChange={setDate}
                            placeholder="Elige una fecha"
                        />
                    </div>
                );
            },
            code: `const [date, setDate] = useState<Date | undefined>(undefined);

<DatePicker 
    value={date} 
    onValueChange={setDate} 
    placeholder="Elige una fecha"
/>`
        },
        {
            title: 'Calendario Inline',
            description: 'El componente Calendario también puede usarse de forma independiente.',
            render: () => {
                const [date, setDate] = useState<Date>(new Date());
                return (
                    <div style={{ border: '1px solid var(--bf-surface-border)', borderRadius: '12px', padding: '16px', display: 'inline-block' }}>
                        <Calendar
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                );
            },
            code: `<Calendar 
    selected={date} 
    onSelect={setDate} 
/>`
        }
    ],
    props: [
        { name: 'value', type: 'Date', defaultValue: '-', description: 'La fecha seleccionada actualmente.' },
        { name: 'onValueChange', type: '(date: Date) => void', defaultValue: '-', description: 'Función callback cuando se selecciona una nueva fecha.' },
        { name: 'placeholder', type: 'string', defaultValue: '"Seleccionar fecha..."', description: 'Texto que aparece cuando no hay fecha elegida.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Deshabilita el selector de fecha.' },
    ],
    cssVars: [
        { name: '--bf-calendar-bg', description: 'Fondo del contenedor del calendario.' },
        { name: '--bf-calendar-day-hover', description: 'Fondo al pasar el mouse sobre un día.' },
        { name: '--bf-calendar-selected-bg', description: 'Fondo del día seleccionado.' },
    ]
};
