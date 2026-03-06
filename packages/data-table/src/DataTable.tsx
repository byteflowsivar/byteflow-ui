import React, { useState, useMemo } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@byteflow-ui/table';
import { Pagination } from '@byteflow-ui/pagination';
import { Input } from '@byteflow-ui/input';
import './styles.css';

/**
 * Definición de una columna para el DataTable.
 */
export interface DataTableColumn<T> {
    /** Etiqueta que se mostrará en el encabezado. */
    header: string;
    /** Clave del objeto de datos para acceder al valor. */
    accessorKey: keyof T;
    /** Renderizador personalizado opcional para la celda. */
    cell?: (value: T[keyof T], item: T) => React.ReactNode;
}

/**
 * Propiedades del componente DataTable.
 */
export interface DataTableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
    /** Colección de datos a mostrar. */
    data: T[];
    /** Configuración de las columnas. */
    columns: DataTableColumn<T>[];
    /** Número de elementos por página. Por defecto 10. */
    pageSize?: number;
    /** Clave por la cual se realizará la búsqueda. Si no se provee, el buscador se oculta. */
    searchKey?: keyof T;
}

/**
 * DataTable: Componente de alto nivel para desplegar colecciones de datos con soporte
 * integrado de paginación y filtrado.
 */
export const DataTable = React.forwardRef(<T,>(
    {
        data,
        columns,
        pageSize = 10,
        searchKey,
        className = '',
        style,
        ...props
    }: DataTableProps<T>,
    ref: React.ForwardedRef<HTMLDivElement>
) => {
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = useMemo(() => {
        if (!searchKey || !search) return data;
        return data.filter((item) =>
            String(item[searchKey]).toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search, searchKey]);

    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        return filteredData.slice(start, start + pageSize);
    }, [filteredData, currentPage, pageSize]);

    return (
        <div
            ref={ref}
            className={`bf-data-table ${className}`}
            style={style}
            {...props}
        >
            {searchKey && (
                <div className="bf-data-table__search-wrapper">
                    <Input
                        placeholder={`Buscar por ${String(searchKey)}...`}
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setCurrentPage(1);
                        }}
                    />
                </div>
            )}
            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((col, idx) => (
                            <TableHead key={idx}>{col.header}</TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item, rowIdx) => (
                            <TableRow key={rowIdx}>
                                {columns.map((col, colIdx) => (
                                    <TableCell key={colIdx}>
                                        {col.cell
                                            ? col.cell(item[col.accessorKey], item)
                                            : (item[col.accessorKey] as React.ReactNode)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="bf-data-table__empty">
                                No se encontraron resultados.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="bf-data-table__pagination-wrapper">
                <Pagination
                    total={filteredData.length}
                    current={currentPage}
                    pageSize={pageSize}
                    onChange={setCurrentPage}
                />
            </div>
        </div>
    );
});

DataTable.displayName = 'DataTable';
