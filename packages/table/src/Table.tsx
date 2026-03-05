import React from 'react';
import './styles.css';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> { }

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
    ({ className = '', ...props }, ref) => (
        <div className="bf-table-container">
            <table ref={ref} className={`bf-table ${className}`} {...props} />
        </div>
    )
);
Table.displayName = 'Table';

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className = '', ...props }, ref) => <thead ref={ref} className={`bf-table-header ${className}`} {...props} />
);
TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className = '', ...props }, ref) => <tbody ref={ref} className={`bf-table-body ${className}`} {...props} />
);
TableBody.displayName = 'TableBody';

export const TableFooter = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
    ({ className = '', ...props }, ref) => <tfoot ref={ref} className={`bf-table-footer ${className}`} {...props} />
);
TableFooter.displayName = 'TableFooter';

export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
    ({ className = '', ...props }, ref) => <tr ref={ref} className={`bf-table-row ${className}`} {...props} />
);
TableRow.displayName = 'TableRow';

export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
    ({ className = '', ...props }, ref) => <th ref={ref} className={`bf-table-head ${className}`} {...props} />
);
TableHead.displayName = 'TableHead';

export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
    ({ className = '', ...props }, ref) => <td ref={ref} className={`bf-table-cell ${className}`} {...props} />
);
TableCell.displayName = 'TableCell';

export const TableCaption = React.forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
    ({ className = '', ...props }, ref) => <caption ref={ref} className={`bf-table-caption ${className}`} {...props} />
);
TableCaption.displayName = 'TableCaption';
