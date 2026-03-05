# @byteflow-ui/data-table

Componente Data Table (Orquestador) premium para Byteflow UI. Combina `Table`, `Pagination` e `Input` para ofrecer una solución lista para el despliegue y manejo de colecciones de datos con búsqueda y paginación integradas.

## Instalación

```bash
npm install @byteflow-ui/data-table @byteflow-ui/table @byteflow-ui/pagination @byteflow-ui/input
```

## Uso

```tsx
import { DataTable } from '@byteflow-ui/data-table';

const data = [
  { id: 1, name: "Victor Cornejo", role: "Developer" },
  { id: 2, name: "Jane Doe", role: "Designer" },
  // ... más datos
];

const columns = [
  { header: "ID", accessorKey: "id" },
  { header: "Nombre", accessorKey: "name" },
  { header: "Rol", accessorKey: "role" },
];

function UserTable() {
  return (
    <DataTable 
      data={data} 
      columns={columns} 
      pageSize={5} 
      searchKey="name" 
    />
  );
}
```

## Propiedades

| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `data` | `T[]` | **Requerido** | Array de objetos de datos. |
| `columns` | `DataTableColumn<T>[]` | **Requerido** | Definición de columnas. |
| `pageSize` | `number` | `10` | Cantidad de ítems por página. |
| `searchKey` | `keyof T` | - | Clave del objeto para habilitar búsqueda de texto. |
