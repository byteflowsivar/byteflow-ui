import React from 'react';
import './styles.css';

/**
 * Propiedades del componente Table.
 */
export interface TableProps extends React.HTMLAttributes<HTMLTableElement> { }

/**
 * Table: Componente base para construir tablas de datos estructuradas.
 */
export const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className = '', ...props }, ref) => (
        <div className="bf-table-container">
            <table ref={ref} className={`bf-table ${className}`} {...props} />
        </div>
    )
);
Table.displayName = 'Table';

/**
 * TableHeader: Contenedor para las filas de encabezado (thead).
 */
export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className = '', ...props }, ref) => <thead ref={ref} className={`bf-table-header ${className}`} {...props} />
);
TableHeader.displayName = 'TableHeader';

/**
 * TableBody: Contenedor para el contenido principal de la tabla (tbody).
 */
export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className = '', ...props }, ref) => <tbody ref={ref} className={`bf-table-body ${className}`} {...props} />
);
TableBody.displayName = 'TableBody';

/**
 * TableFooter: Contenedor para las filas de resumen al final de la tabla (tfoot).
 */
export const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className = '', ...props }, ref) => <tfoot ref={ref} className={`bf-table-footer ${className}`} {...props} />
);
TableFooter.displayName = 'TableFooter';

/**
 * TableRow: Representa una fila individual dentro de la tabla (tr).
 */
export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
    ({ className = '', ...props }, ref) => <tr ref={ref} className={`bf-table-row ${className}`} {...props} />
);
TableRow.displayName = 'TableRow';

/**
 * TableHead: Celda de encabezado (th). Usualmente contiene nombres de columnas.
 */
export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
    ({ className = '', ...props }, ref) => <th ref={ref} className={`bf-table-head ${className}`} {...props} />
);
TableHead.displayName = 'TableHead';

/**
 * TableCell: Celda estándar de contenido (td).
 */
export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
    ({ className = '', ...props }, ref) => <td ref={ref} className={`bf-table-cell ${className}`} {...props} />
);
TableCell.displayName = 'TableCell';

/**
 * TableCaption: Título o descripción descriptiva que se muestra junto a la tabla.
 */
export const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
    ({ className = '', ...props }, ref) => <caption ref={ref} className={`bf-table-caption ${className}`} {...props} />
);
TableCaption.displayName = 'TableCaption';
