import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

export interface SheetProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    side?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
}

export const Sheet: React.FC<SheetProps> = ({
    isOpen,
    onClose,
    children,
    side = 'right',
    className = '',
    closeOnOutsideClick = true,
    closeOnEsc = true,
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
        <div className="bf-sheet-overlay" onClick={closeOnOutsideClick ? onClose : undefined}>
            <div
                className={`bf-sheet-content bf-sheet-content--${side} ${className}`}
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                {children}
                <button className="bf-sheet-close-btn" onClick={onClose} aria-label="Close">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>,
        document.body
    );
};

export const SheetHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bf-sheet-header ${className}`}>{children}</div>
);

export const SheetFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bf-sheet-footer ${className}`}>{children}</div>
);

export const SheetTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <h2 className={`bf-sheet-title ${className}`}>{children}</h2>
);

export const SheetDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <p className={`bf-sheet-description ${className}`}>{children}</p>
);

export const Drawer: React.FC<SheetProps> = (props) => (
    <Sheet {...props} side={props.side || 'bottom'} />
);

