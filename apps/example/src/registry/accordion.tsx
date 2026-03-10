import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@byteflow-ui/accordion';

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

export const accordionDoc: ComponentDocDefinition = {
    id: 'accordion',
    name: 'Accordion',
    description: 'El Accordion permite organizar contenido en secciones que se pueden expandir o contraer, optimizando el espacio vertical de la interfaz.',
    examples: [
        {
            title: 'Uso Básico',
            description: 'Un acordeón simple con múltiples secciones.',
            render: () => (
                <Accordion type="single" defaultValue="item-1" style={{ width: '450px' }}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>¿Es accesible?</AccordionTrigger>
                        <AccordionContent>
                            Sí. Cumple con los estándares WAI-ARIA para componentes de tipo acordeón.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>¿Se puede personalizar?</AccordionTrigger>
                        <AccordionContent>
                            Totalmente. Puedes usar variables CSS para cambiar colores, bordes y animaciones.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>¿Soporta múltiples secciones?</AccordionTrigger>
                        <AccordionContent>
                            Sí, cambiando la prop `type` a "multiple" puedes abrir varias secciones a la vez.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ),
            code: `<Accordion type="single" defaultValue="item-1">
  <AccordionItem value="item-1">
    <AccordionTrigger>¿Es accesible?</AccordionTrigger>
    <AccordionContent>
      Sí. Cumple con los estándares WAI-ARIA.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>¿Se puede personalizar?</AccordionTrigger>
    <AccordionContent>
      Totalmente. Puedes usar variables CSS.
    </AccordionContent>
  </AccordionItem>
</Accordion>`
        }
    ],
    props: [
        { name: 'type', type: "'single' | 'multiple'", defaultValue: "'single'", description: 'Determina si se puede abrir un solo ítem o varios.' },
        { name: 'defaultValue', type: 'string | string[]', defaultValue: '-', description: 'Valor del ítem o ítems expandidos por defecto.' },
        { name: 'onValueChange', type: '(value: string | string[]) => void', defaultValue: '-', description: 'Callback al cambiar la selección.' },
    ],
    cssVars: [
        { name: '--bf-accordion-border', description: 'Color del borde de los ítems.' },
        { name: '--bf-accordion-trigger-hover', description: 'Color de fondo al pasar el mouse por el trigger.' },
    ]
};
