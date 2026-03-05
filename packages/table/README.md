# @byteflow-ui/table

Componente Table premium para Byteflow UI. Proporciona una estructura semántica y estilizada para el despliegue de colecciones de datos, con soporte para scroll horizontal, estados de hover y temas dinámicos.

## Instalación

```bash
npm install @byteflow-ui/table
```

## Uso

```tsx
import { 
  Table, 
  TableHeader, 
  TableBody, 
  TableFooter, 
  TableRow, 
  TableHead, 
  TableCell, 
  TableCaption 
} from '@byteflow-ui/table';
import '@byteflow-ui/table/dist/index.css';

const invoices = [
  { id: "INV001", status: "Pagado", method: "Tarjeta Cr", total: "$250.00" },
  { id: "INV002", status: "Pendiente", method: "PayPal", total: "$150.00" },
];

function InvoiceTable() {
  return (
    <Table>
      <TableCaption>Lista de facturas recientes.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Factura</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Método</TableHead>
          <TableHead style={{ textAlign: 'right' }}>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell style={{ textAlign: 'right' }}>{invoice.total}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
```

## Propiedades

Todos los subcomponentes aceptan las props estándar de sus equivalentes HTML (`table`, `thead`, `tbody`, `tr`, `th`, `td`).
