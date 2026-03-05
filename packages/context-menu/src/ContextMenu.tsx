import React, { useState, useRef, useEffect } from 'react';

import { createPortal } from 'react-dom';
import './styles.css';

export interface ContextMenuProps {
    children: React.ReactNode;
}

export const ContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
    return <div className="bf-context-menu-root">{children}</div>;
};

export interface ContextMenuTriggerProps {
    children: React.ReactElement;
    onContextMenu?: (e: React.MouseEvent) => void;
}

export const ContextMenuTrigger: React.FC<ContextMenuTriggerProps> = ({ children }) => {
    return children;
};

export interface ContextMenuContentProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    anchorPoint: { x: number; y: number };
    className?: string;
}

export const ContextMenuContent: React.FC<ContextMenuContentProps> = ({
    children,
    isOpen,
    onClose,
    anchorPoint,
    className = '',
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && contentRef.current && !contentRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        const handleScrollOrResize = () => {
            if (isOpen) onClose();
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            window.addEventListener('scroll', handleScrollOrResize, true);
            window.addEventListener('resize', handleScrollOrResize);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScrollOrResize, true);
            window.removeEventListener('resize', handleScrollOrResize);
        };
    }, [isOpen, onClose]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div
            ref={contentRef}
            className={`bf-context-menu-content ${className}`}
            style={{
                position: 'fixed',
                top: `${anchorPoint.y}px`,
                left: `${anchorPoint.x}px`,
                zIndex: 1000,
            }}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </div>,
        document.body
    );
};

export const ContextMenuItem: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...props }) => (
    <button className={`bf-context-menu-item ${className}`} {...props}>
        {children}
    </button>
);

export const ContextMenuLabel: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bf-context-menu-label ${className}`}>{children}</div>
);

export const ContextMenuSeparator: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`bf-context-menu-separator ${className}`} />
);

export const ContextMenuShortcut: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <span className={`bf-context-menu-shortcut ${className}`}>{children}</span>
);
