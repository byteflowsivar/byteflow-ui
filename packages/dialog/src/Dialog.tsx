import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

/**
 * Propiedades del componente Dialog.
 */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
}

export const Dialog: React.FC<DialogProps> = ({
    isOpen,
    onClose,
    children,
    className = '',
    closeOnOutsideClick = true,
    closeOnEsc = true,
    ...props
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isOpen && closeOnEsc && e.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, closeOnEsc, onClose]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div 
            className="bf-dialog-overlay" 
            onClick={closeOnOutsideClick ? onClose : undefined} 
            role="presentation"
        >
            <div
                className={`bf-dialog-content-wrapper ${className}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                {...props}
            >
                {children}
                <button className="bf-dialog-close-btn" onClick={onClose} aria-label="Cerrar">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>,
        document.body
    );
};

/**
 * DialogHeader: Contenedor para el título y descripción del diálogo.
 */
export const DialogHeader = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-dialog-header ${className}`} {...props}>{children}</div>
);

/**
 * DialogFooter: Contenedor para las acciones (botones) del diálogo.
 */
export const DialogFooter = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-dialog-footer ${className}`} {...props}>{children}</div>
);

/**
 * DialogTitle: Título accesible del diálogo.
 */
export const DialogTitle = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={`bf-dialog-title ${className}`} {...props}>{children}</h2>
);

/**
 * DialogDescription: Texto descriptivo adicional para el diálogo.
 */
export const DialogDescription = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`bf-dialog-description ${className}`} {...props}>{children}</p>
);
