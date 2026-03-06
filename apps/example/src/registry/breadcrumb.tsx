import React from 'react';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from '@byteflow-ui/breadcrumb';
import type { ComponentDocDefinition } from './button';

export const breadcrumbDoc: ComponentDocDefinition = {
    id: 'breadcrumb',
    name: 'Breadcrumb',
    description: 'Ayuda a los usuarios a entender su ubicación actual dentro de una jerarquía de navegación y a regresar fácilmente a niveles superiores.',
    examples: [
        {
            title: 'Jerarquía Estándar',
            description: 'Uso típico con separadores e indicadores de ubicación actual.',
            render: () => (
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>Documentos</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbEllipsis />
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Reporte de Ventas</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            ),
            code: `<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem><BreadcrumbLink>Home</BreadcrumbLink></BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem><BreadcrumbPage>Reporte</BreadcrumbPage></BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`
        }
    ],
    props: [],
    cssVars: [
        { name: '--bf-breadcrumb-gap', description: 'Espaciado entre elementos.' },
        { name: '--bf-breadcrumb-link-color', description: 'Color de los enlaces.' },
        { name: '--bf-breadcrumb-separator-color', description: 'Color del separador.' }
    ]
};
