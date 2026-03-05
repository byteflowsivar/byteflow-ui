import React, { useState, useMemo } from 'react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@byteflow-ui/table';
import { Pagination } from '@byteflow-ui/pagination';
import { Input } from '@byteflow-ui/input';

export interface DataTableColumn<T> {
    header: string;
    accessorKey: keyof T;
    cell?: (value: any, item: T) => React.ReactNode;
}

export interface DataTableProps<T> {
    data: T[];
    columns: DataTableColumn<T>[];
    pageSize?: number;
    searchKey?: keyof T;
}

export function DataTable<T>({
    data,
    columns,
    pageSize = 10,
    searchKey,
}: DataTableProps<T>) {
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
        <div className="bf-data-table-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {searchKey && (
                <div style={{ maxWidth: '300px' }}>
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
                                            : (item[col.accessorKey] as any)}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} style={{ textAlign: 'center', padding: '3rem', opacity: 0.5 }}>
                                No se encontraron resultados.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Pagination
                    total={filteredData.length}
                    current={currentPage}
                    pageSize={pageSize}
                    onChange={setCurrentPage}
                />
            </div>
        </div>
    );
}
