import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

/**
 * Propiedades del componente DropdownMenu.
 */
export interface DropdownMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children, className = '', ...props }) => {
    return <div className={`bf-dropdown-root ${className}`} {...props}>{children}</div>;
};

export interface DropdownMenuTriggerProps {
    children: React.ReactElement;
    onClick?: () => void;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children }) => {
    return children;
};

export interface DropdownMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    anchorRef: React.RefObject<HTMLElement | null>;
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
    children,
    isOpen,
    onClose,
    anchorRef,
    className = '',
    align = 'start',
    sideOffset = 4,
    ...props
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const [mounted, setMounted] = useState(false);

    const updatePosition = useCallback(() => {
        if (!anchorRef.current || !contentRef.current) return;

        const anchorRect = anchorRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();

        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        let top = anchorRect.bottom + scrollY + sideOffset;
        let left = 0;

        switch (align) {
            case 'start':
                left = anchorRect.left + scrollX;
                break;
            case 'center':
                left = anchorRect.left + scrollX + (anchorRect.width / 2) - (contentRect.width / 2);
                break;
            case 'end':
                left = anchorRect.right + scrollX - contentRect.width;
                break;
        }

        setCoords({ top, left });
    }, [anchorRef, align, sideOffset]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            updatePosition();
            window.addEventListener('scroll', updatePosition, true);
            window.addEventListener('resize', updatePosition);
        }
        return () => {
            window.removeEventListener('scroll', updatePosition, true);
            window.removeEventListener('resize', updatePosition);
        };
    }, [isOpen, updatePosition]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isOpen &&
                contentRef.current &&
                !contentRef.current.contains(event.target as Node) &&
                anchorRef.current &&
                !anchorRef.current.contains(event.target as Node)
            ) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen, onClose, anchorRef]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div
            ref={contentRef}
            className={`bf-dropdown-content ${className}`}
            style={{
                position: 'absolute',
                top: `${coords.top}px`,
                left: `${coords.left}px`,
                zIndex: 1000,
            }}
            onClick={(e) => e.stopPropagation()}
            {...props}
        >
            {children}
        </div>,
        document.body
    );
};

/**
 * DropdownMenuItem: Un ítem seleccionable dentro del menú.
 */
export const DropdownMenuItem = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
    ({ children, className = '', ...props }, ref) => (
        <button ref={ref} className={`bf-dropdown-item ${className}`} {...props}>
            {children}
        </button>
    )
);

/**
 * DropdownMenuLabel: Etiqueta de encabezado para una sección del menú.
 */
export const DropdownMenuLabel = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-dropdown-label ${className}`} {...props}>{children}</div>
);

/**
 * DropdownMenuSeparator: Línea divisora entre ítems o secciones.
 */
export const DropdownMenuSeparator = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-dropdown-separator ${className}`} {...props} />
);

/**
 * DropdownMenuShortcut: Texto de atajo de teclado a la derecha del ítem.
 */
export const DropdownMenuShortcut = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={`bf-dropdown-shortcut ${className}`} {...props}>{children}</span>
);
