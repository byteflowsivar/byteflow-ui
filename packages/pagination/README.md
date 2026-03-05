# @byteflow-ui/pagination

Componente Pagination premium para Byteflow UI. Permite navegar a través de grandes conjuntos de datos divididos en múltiples páginas de forma intuitiva y accesible.

## Instalación

```bash
npm install @byteflow-ui/pagination
```

## Uso

```tsx
import { Pagination } from '@byteflow-ui/pagination';
import '@byteflow-ui/pagination/dist/index.css';

function MyTable() {
  const [page, setPage] = useState(1);
  
  return (
    <Pagination 
      total={100} 
      current={page} 
      pageSize={10} 
      onChange={setPage} 
    />
  );
}
```

## Propiedades

| Prop | Tipo | Default | Descripción |
| --- | --- | --- | --- |
| `total` | `number` | **Requerido** | Número total de registros. |
| `current` | `number` | **Requerido** | Página actual. |
| `onChange` | `(page: number) => void` | **Requerido** | Callback cuando cambia la página. |
| `pageSize` | `number` | `10` | Cantidad de registros por página. |
| `siblingCount` | `number` | `1` | Número de páginas hermanas a mostrar a cada lado de la página actual. |
| `showEdges` | `boolean` | `true` | Muestra los botones de primera y última página. |
| `className` | `string` | `''` | Clase CSS adicional. |
