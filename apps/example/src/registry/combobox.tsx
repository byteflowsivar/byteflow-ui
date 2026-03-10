import React, { useState } from 'react';
import { Combobox } from '@byteflow-ui/combobox';

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

const frameworks = [
    { value: "next.ts", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
];

export const comboboxDoc: ComponentDocDefinition = {
    id: 'combobox',
    name: 'Combobox',
    description: 'El Combobox combina un campo de entrada con un menú desplegable para permitir a los usuarios filtrar y seleccionar opciones de una lista.',
    examples: [
        {
            title: 'Ancho Fluido (w-full)',
            description: 'El combobox se adapta al 100% de su contenedor o puedes darle el tamaño que necesites (e.g. w-64, w-[300px]).',
            render: () => {
                const [value, setValue] = useState("");
                return (
                    <div className="w-full max-w-sm">
                        <Combobox
                            options={frameworks}
                            value={value}
                            onValueChange={setValue}
                            placeholder="Seleccionar framework..."
                            className="w-full"
                        />
                    </div>
                );
            },
            code: `const frameworks = [
    { value: "next.ts", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
];

const [value, setValue] = useState("");

<Combobox
    options={frameworks}
    value={value}
    onValueChange={setValue}
    placeholder="Seleccionar framework..."
/>`
        },
        {
            title: 'Estado Deshabilitado',
            description: 'El combobox puede ser deshabilitado para prevenir la interacción.',
            render: () => (
                <div style={{ width: '300px' }}>
                    <Combobox
                        options={frameworks}
                        disabled
                        placeholder="Framework deshabilitado"
                    />
                </div>
            ),
            code: `<Combobox
    options={options}
    disabled
    placeholder="Framework deshabilitado"
/>`
        },
        {
            title: 'Dentro de un Formulario',
            description: 'Verifica que el combobox no envíe el formulario accidentalmente al abrirlo o presionar Enter.',
            render: () => {
                const [value, setValue] = useState("");
                const handleSubmit = (e: React.FormEvent) => {
                    e.preventDefault();
                    alert("Formulario enviado con éxito");
                };
                return (
                    <form onSubmit={handleSubmit} style={{ width: '300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <Combobox
                            options={frameworks}
                            value={value}
                            onValueChange={setValue}
                            placeholder="Seleccionar framework..."
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '0.5rem',
                                background: 'var(--bf-accent)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                cursor: 'pointer'
                            }}
                        >
                            Enviar Formulario
                        </button>
                    </form>
                );
            },
            code: `<form onSubmit={handleSubmit}>
    <Combobox
        options={frameworks}
        value={value}
        onValueChange={setValue}
        placeholder="Seleccionar framework..."
    />
    <button type="submit">Enviar Formulario</button>
</form>`
        }
    ],
    props: [
        { name: 'options', type: 'ComboboxOption[]', defaultValue: '[]', description: 'Lista de opciones { value, label } para el menú.' },
        { name: 'value', type: 'string', defaultValue: '""', description: 'Valor de la opción seleccionada.' },
        { name: 'onValueChange', type: '(value: string) => void', defaultValue: '-', description: 'Callback que se ejecuta al seleccionar una opción.' },
        { name: 'placeholder', type: 'string', defaultValue: '"Seleccionar opción..."', description: 'Texto que se muestra cuando no hay una opción seleccionada.' },
        { name: 'emptyText', type: 'string', defaultValue: '"No se encontraron resultados."', description: 'Mensaje que se muestra cuando el filtro no devuelve resultados.' },
        { name: 'disabled', type: 'boolean', defaultValue: 'false', description: 'Indica si el componente está deshabilitado.' },
    ],
    cssVars: [
        { name: '--bf-combobox-width', description: 'Ancho del disparador del combobox.' },
        { name: '--bf-combobox-content-width', description: 'Ancho de la lista desplegable.' },
    ]
};
