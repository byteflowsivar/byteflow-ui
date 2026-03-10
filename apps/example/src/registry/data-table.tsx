import { DataTable } from '@byteflow-ui/data-table';
import type { ComponentDocDefinition } from './button';

export const dataTableDoc: ComponentDocDefinition = {
    id: 'data-table',
    name: 'Data Table',
    description: 'Componente (Orquestador) para mostrar grandes colecciones de datos con soporte integrado de paginación, búsqueda (filtrado local) y personalización avanzada de columnas mediate arquitectura Headless UI.',
    examples: [
        {
            title: 'Listado de Usuarios (Composición Headless)',
            description: 'Implementación completa asumiendo una gestión de usuarios. Se utiliza la API compuesta para posicionar el buscador junto a un título personalizado, aplicar clases CSS específicas por columna y renderizar celdas personalizadas para el estado.',
            render: () => {
                type User = { id: number; name: string; email: string; role: string; status: string };

                const data: User[] = [
                    { id: 1, name: "Victor Cornejo", email: "victor@example.com", role: "Developer", status: "Activo" },
                    { id: 2, name: "Jane Doe", email: "jane@example.com", role: "Designer", status: "Activo" },
                    { id: 3, name: "John Smith", email: "john@example.com", role: "Manager", status: "Inactivo" },
                    { id: 4, name: "Alice Johnson", email: "alice@example.com", role: "QA Tester", status: "Activo" },
                    { id: 5, name: "Bob Wilson", email: "bob@example.com", role: "DevOps", status: "Activo" },
                    { id: 6, name: "Eva Davis", email: "eva@example.com", role: "Designer", status: "Inactivo" },
                ];

                const columns = [
                    { header: "ID", accessorKey: "id" as const, width: "60px", align: "center" as const },
                    { header: "Usuario", accessorKey: "name" as const },
                    { header: "Email", accessorKey: "email" as const },
                    { header: "Rol", accessorKey: "role" as const },
                    {
                        header: "Estado",
                        accessorKey: "status" as const,
                        align: "center" as const,
                        cell: (val: any) => (
                            <span style={{
                                padding: '4px 8px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                fontWeight: 500,
                                backgroundColor: val === 'Activo' ? 'var(--bf-success-bg, #dcfce7)' : 'var(--bf-error-bg, #fee2e2)',
                                color: val === 'Activo' ? 'var(--bf-success-fg, #166534)' : 'var(--bf-error-fg, #991b1b)'
                            }}>
                                {val}
                            </span>
                        )
                    },
                ];

                return (
                    <div style={{ width: '100%' }}>
                        <DataTable
                            data={data}
                            columns={columns}
                            pageSize={4}
                            searchKey="name"
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Gestión de Usuarios</h3>
                                <DataTable.Toolbar />
                            </div>

                            <div style={{ border: '1px solid var(--bf-surface-border)', borderRadius: '0.5rem', overflow: 'hidden' }}>
                                <DataTable.Table />
                            </div>

                            <DataTable.Pagination />
                        </DataTable>
                    </div>
                );
            },
            code: `import { DataTable } from '@byteflow-ui/data-table';
import '@byteflow-ui/data-table/index.css';

const data = [
  { id: 1, name: "Victor Cornejo", email: "victor@example.com", role: "Developer" },
  // ... más usuarios
];

const columns = [
  { header: "ID", accessorKey: "id" as const, width: "60px", align: "center" as const },
  { header: "Usuario", accessorKey: "name" as const, className: "font-medium" },
  { header: "Rol", accessorKey: "role" as const },
];

function UserManager() {
  return (
    <DataTable 
      data={data} 
      columns={columns} 
      pageSize={10} 
      searchKey="name"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h3>Usuarios de la Aplicación</h3>
        <DataTable.Toolbar /> 
      </div>
      
      <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem' }}>
        <DataTable.Table />
      </div>
      
      <DataTable.Pagination />
    </DataTable>
  );
}`
        }
    ],
    props: [
        { name: 'data', type: 'T[]', defaultValue: '-', description: 'Colección de datos a mostrar en la tabla.' },
        { name: 'columns', type: 'DataTableColumn[]', defaultValue: '-', description: 'Configuración de columnas para el mapeo, anchos, alineación y renderizado.' },
        { name: 'pageSize', type: 'number', defaultValue: '10', description: 'Número de elementos visibles por cada página.' },
        { name: 'searchKey', type: 'keyof T', defaultValue: 'undefined', description: 'Llave del objeto que se usará para filtrar/buscar en el input.' },
        { name: 'classNames', type: '{ th?: string, td?: string }', defaultValue: '-', description: 'Objeto opcional para propagar utilidades CSS globalmente a todas las columnas.' }
    ],
    cssVars: [
        { name: '--data-table-gap', description: 'Separación entre la tabla y los controles auxiliares (paginación/búsqueda).' }
    ]
};
