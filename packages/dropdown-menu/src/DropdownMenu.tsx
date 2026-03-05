import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

export interface DropdownMenuProps {
    children: React.ReactNode;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ children }) => {
    return <div className="bf-dropdown-root">{children}</div>;
};

export interface DropdownMenuTriggerProps {
    children: React.ReactElement;
    onClick?: () => void;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({ children }) => {
    return children;
};

export interface DropdownMenuContentProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    anchorRef: React.RefObject<HTMLElement | null>;
    className?: string;
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

export const DropdownMenuItem: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...props }) => (
    <button className={`bf-dropdown-item ${className}`} {...props}>
        {children}
    </button>
);

export const DropdownMenuLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bf-dropdown-label ${className}`}>{children}</div>
);

export const DropdownMenuSeparator: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`bf-dropdown-separator ${className}`} />
);

export const DropdownMenuShortcut: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <span className={`bf-dropdown-shortcut ${className}`}>{children}</span>
);
