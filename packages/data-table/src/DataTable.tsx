import React, { useState, useMemo, createContext, useContext } from 'react';
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
    /** Ancho opcional de la columna (ej: '100px', '20%') */
    width?: string | number;
    /** Alineación de texto en la columna */
    align?: 'left' | 'center' | 'right';
    /** Clase CSS adicional para la columna entera (th y td) */
    className?: string;
}

/**
 * Propiedades del componente DataTable.
 */
export interface DataTableProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
    /** Colección de datos a mostrar. */
    data: T[];
    /** Configuración de las columnas. */
    columns: DataTableColumn<T>[];
    /** Número de elementos por página. Por defecto 10. */
    pageSize?: number;
    /** Clave por la cual se realizará la búsqueda. Si no se provee, el buscador se oculta (en layout por defecto). */
    searchKey?: keyof T;
    /** Clases globales para reescribir th y td desde la raíz */
    classNames?: {
        th?: string;
        td?: string;
    };
    /** Contenido opcional para personalizar el layout. Puede recibir una función que expone el contexto. */
    children?: React.ReactNode | ((context: DataTableContextValue<T>) => React.ReactNode);
}

/**
 * Valores expuestos por el contexto del DataTable
 */
export interface DataTableContextValue<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    pageSize: number;
    searchKey?: keyof T;
    search: string;
    setSearch: (value: string) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    filteredData: T[];
    paginatedData: T[];
    classNames?: { th?: string; td?: string };
}

// @ts-ignore Permitimos instanciar el contexto vacío inicialmente pero se asegura uso dentro de <DataTable>
const DataTableContext = createContext<DataTableContextValue<any> | undefined>(undefined);

/**
 * Hook para acceder al contexto del DataTable en subcomponentes.
 */
export function useDataTable<T>() {
    const context = useContext(DataTableContext) as DataTableContextValue<T> | undefined;
    if (!context) {
        throw new Error('useDataTable debe usarse dentro de un componente DataTable');
    }
    return context;
}

/**
 * DataTableRoot: Componente orquestador
 */
const DataTableRoot = React.forwardRef(<T,>(
    {
        data,
        columns,
        pageSize = 10,
        searchKey,
        className = '',
        classNames,
        style,
        children,
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

    const contextValue: DataTableContextValue<T> = {
        data,
        columns,
        pageSize,
        searchKey,
        search,
        setSearch,
        currentPage,
        setCurrentPage,
        filteredData,
        paginatedData,
        classNames
    };

    // Render clásico en caso de no proveer children (Monolito)
    const defaultRender = (
        <>
            {searchKey && <DataTableToolbar />}
            <DataTableTableView />
            <DataTablePaginationView />
        </>
    );

    return (
        <DataTableContext.Provider value={contextValue}>
            <div
                ref={ref}
                className={`bf-data-table ${className}`}
                style={style}
                {...props}
            >
                {typeof children === 'function' ? children(contextValue) : children || defaultRender}
            </div>
        </DataTableContext.Provider>
    );
}) as unknown as <T>(props: DataTableProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }) => ReturnType<typeof React.forwardRef>;

/**
 * Subcomponente: Search / Toolbar
 */
export const DataTableToolbar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => {
        const { searchKey, search, setSearch, setCurrentPage } = useDataTable<any>();

        return (
            <div ref={ref} className={`bf-data-table__search-wrapper ${className}`} {...props}>
                {children || (
                    searchKey ? (
                        <Input
                            placeholder={`Buscar por ${String(searchKey)}...`}
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    ) : null
                )}
            </div>
        );
    }
);
DataTableToolbar.displayName = 'DataTable.Toolbar';

/**
 * Subcomponente: Table view (renderiza el table con los datos paginados)
 */
export const DataTableTableView = React.forwardRef<HTMLTableElement, React.HTMLAttributes<HTMLTableElement>>(
    ({ className = '', ...props }, ref) => {
        const { columns, paginatedData, classNames } = useDataTable<any>();

        return (
            <Table ref={ref} className={className} {...props}>
                <TableHeader>
                    <TableRow>
                        {columns.map((col, idx) => (
                            <TableHead
                                key={idx}
                                style={{ width: col.width, textAlign: col.align }}
                                className={`${classNames?.th || ''} ${col.className || ''}`.trim()}
                            >
                                {col.header}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item, rowIdx) => (
                            <TableRow key={rowIdx}>
                                {columns.map((col, colIdx) => (
                                    <TableCell
                                        key={colIdx}
                                        style={{ textAlign: col.align }}
                                        className={`${classNames?.td || ''} ${col.className || ''}`.trim()}
                                    >
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
        );
    }
);
DataTableTableView.displayName = 'DataTable.Table';

/**
 * Subcomponente: Pagination view
 */
export const DataTablePaginationView = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => {
        const { filteredData, currentPage, pageSize, setCurrentPage } = useDataTable<any>();

        return (
            <div ref={ref} className={`bf-data-table__pagination-wrapper ${className}`} {...props}>
                <Pagination
                    total={filteredData.length}
                    current={currentPage}
                    pageSize={pageSize}
                    onChange={setCurrentPage}
                />
            </div>
        );
    }
);
DataTablePaginationView.displayName = 'DataTable.Pagination';

// Composición exportada
type DataTableComponent = typeof DataTableRoot & {
    Toolbar: typeof DataTableToolbar;
    Table: typeof DataTableTableView;
    Pagination: typeof DataTablePaginationView;
};

export const DataTable = DataTableRoot as DataTableComponent;
DataTable.Toolbar = DataTableToolbar;
DataTable.Table = DataTableTableView;
DataTable.Pagination = DataTablePaginationView;
