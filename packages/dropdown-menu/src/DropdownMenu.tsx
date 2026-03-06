import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

/**
 * Propiedades del componente DropdownMenu.
 */
export interface DropdownMenuProps {
    /** Contenido del dropdown. */
    children: React.ReactNode;
}

/**
 * DropdownMenu: Contenedor raíz para coordinar el estado de un menú desplegable.
 */
export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
    return <div className="bf-dropdown-root">{children}</div>;
};

/**
 * Propiedades para el disparador del menú.
 */
export interface DropdownMenuTriggerProps {
    /** El elemento (usualmente un botón) que abrirá el menú. */
    children: React.ReactElement;
    /** Callback opcional al hacer click. */
    onClick?: () => void;
}

/**
 * DropdownMenuTrigger: Envuelve el elemento que activará el menú.
 */
export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children }) => {
    return children;
};

/**
 * Propiedades para el contenido del menú desplegable.
 */
export interface DropdownMenuContentProps {
    /** Ítems, etiquetas o separadores del menú. */
    children: React.ReactNode;
    /** Estado controlado de apertura. */
    isOpen: boolean;
    /** Callback para cerrar el menú. */
    onClose: () => void;
    /** Referencia al elemento disparador para el posicionamiento. */
    anchorRef: React.RefObject<HTMLElement | null>;
    /** Clase CSS adicional. */
    className?: string;
    /** Alineación horizontal respecto al disparador. */
    align?: 'start' | 'center' | 'end';
    /** Espaciado respecto al disparador. */
    sideOffset?: number;
}

/**
 * DropdownMenuContent: El contenedor flotante que muestra los ítems del menú.
 * Utiliza Portals para evitar problemas de stacking context y z-index.
 */
export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
    children,
    isOpen,
    onClose,
    anchorRef,
    className = '',
    align = 'start',
    sideOffset = 4,
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
