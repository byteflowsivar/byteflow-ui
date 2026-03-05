import React from 'react';
import './styles.css';

export interface PaginationProps {
    total: number;
    current: number;
    onChange: (page: number) => void;
    pageSize?: number;
    siblingCount?: number;
    className?: string;
    showEdges?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
    total,
    current,
    onChange,
    pageSize = 10,
    siblingCount = 1,
    className = '',
    showEdges = true,
}) => {
    const totalPages = Math.ceil(total / pageSize);

    const range = (start: number, end: number) => {
        const length = end - start + 1;
        return Array.from({ length }, (_, idx) => idx + start);
    };

    const paginationRange = useMemo(() => {
        const totalPageNumbers = siblingCount + 5;

        if (totalPageNumbers >= totalPages) {
            return range(1, totalPages);
        }

        const leftSiblingIndex = Math.max(current - siblingCount, 1);
        const rightSiblingIndex = Math.min(current + siblingCount, totalPages);

        const shouldShowLeftDots = leftSiblingIndex > 2;
        const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

        const firstPageIndex = 1;
        const lastPageIndex = totalPages;

        if (!shouldShowLeftDots && shouldShowRightDots) {
            let leftItemCount = 3 + 2 * siblingCount;
            let leftRange = range(1, leftItemCount);
            return [...leftRange, 'DOTS', totalPages];
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            let rightItemCount = 3 + 2 * siblingCount;
            let rightRange = range(totalPages - rightItemCount + 1, totalPages);
            return [firstPageIndex, 'DOTS', ...rightRange];
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            let middleRange = range(leftSiblingIndex, rightSiblingIndex);
            return [firstPageIndex, 'DOTS', ...middleRange, 'DOTS', lastPageIndex];
        }

        return [];
    }, [totalPages, current, siblingCount]);

    if (current === 0 || paginationRange.length < 2) {
        return null;
    }

    return (
        <nav className={`bf-pagination ${className}`} aria-label="Pagination">
            <ul className="bf-pagination-list">
                {/* Previous Button */}
                <li>
                    <button
                        type="button"
                        className="bf-pagination-item bf-pagination-nav"
                        onClick={() => current > 1 && onChange(current - 1)}
                        disabled={current === 1}
                        aria-label="Anterior"
                    >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64049 8.86461 3.84194L5.4352 7.49999L8.86461 11.158C9.05348 11.3595 9.04327 11.6759 8.84182 11.8648C8.64036 12.0537 8.32388 12.0435 8.13501 11.842L4.13501 7.59203C3.95392 7.39887 3.95392 7.10111 4.13501 6.90795L8.13501 2.65798C8.32388 2.45653 8.64036 2.44632 8.84182 2.63519L8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </li>

                {paginationRange.map((pageNumber, idx) => {
                    if (pageNumber === 'DOTS') {
                        return <li key={`dots-${idx}`} className="bf-pagination-dots">&#8230;</li>;
                    }

                    return (
                        <li key={pageNumber}>
                            <button
                                type="button"
                                className={`bf-pagination-item ${pageNumber === current ? 'bf-pagination-item--active' : ''}`}
                                onClick={() => onChange(pageNumber as number)}
                                aria-current={pageNumber === current ? 'page' : undefined}
                            >
                                {pageNumber}
                            </button>
                        </li>
                    );
                })}

                {/* Next Button */}
                <li>
                    <button
                        type="button"
                        className="bf-pagination-item bf-pagination-nav"
                        onClick={() => current < totalPages && onChange(current + 1)}
                        disabled={current === totalPages}
                        aria-label="Siguiente"
                    >
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64049 6.1356 3.84194L9.56501 7.49999L6.1356 11.158C5.94673 11.3595 5.95694 11.6759 6.1584 11.8648C6.35985 12.0537 6.67633 12.0435 6.8652 11.842L10.8652 7.59203C11.0463 7.39887 11.0463 7.10111 10.8652 6.90795L6.8652 2.65798C6.67633 2.44632 6.35985 2.45653 6.1584 2.63519V3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

import { useMemo } from 'react';
