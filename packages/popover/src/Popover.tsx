import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

export interface PopoverProps {
    children: React.ReactNode;
}

export const Popover: React.FC<PopoverProps> = ({ children }) => {
    return <div className="bf-popover-root">{children}</div>;
};

export interface PopoverTriggerProps {
    children: React.ReactElement;
    onClick?: () => void;
}

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children }) => {
    return children;
};

export interface PopoverContentProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    anchorRef: React.RefObject<HTMLElement | null>;
    className?: string;
    align?: 'start' | 'center' | 'end';
    side?: 'top' | 'bottom' | 'left' | 'right';
    sideOffset?: number;
}

export const PopoverContent: React.FC<PopoverContentProps> = ({
    children,
    isOpen,
    onClose,
    anchorRef,
    className = '',
    align = 'center',
    side = 'bottom',
    sideOffset = 8,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const [mounted, setMounted] = useState(false);

    const updatePosition = useCallback(() => {
        if (!anchorRef.current || !contentRef.current) return;

        const anchorRect = anchorRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();

        let top = 0;
        let left = 0;

        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        // Positioning logic
        switch (side) {
            case 'top':
                top = anchorRect.top + scrollY - contentRect.height - sideOffset;
                break;
            case 'bottom':
                top = anchorRect.bottom + scrollY + sideOffset;
                break;
            case 'left':
                left = anchorRect.left + scrollX - contentRect.width - sideOffset;
                break;
            case 'right':
                left = anchorRect.right + scrollX + sideOffset;
                break;
        }

        // Alignment logic
        if (side === 'top' || side === 'bottom') {
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
        } else {
            switch (align) {
                case 'start':
                    top = anchorRect.top + scrollY;
                    break;
                case 'center':
                    top = anchorRect.top + scrollY + (anchorRect.height / 2) - (contentRect.height / 2);
                    break;
                case 'end':
                    top = anchorRect.bottom + scrollY - contentRect.height;
                    break;
            }
        }

        setCoords({ top, left });
    }, [anchorRef, align, side, sideOffset]);

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
            className={`bf-popover-content ${className}`}
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
 * PopoverTitle: Título para el contenido del Popover.
 */
export const PopoverTitle = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-popover-title ${className}`} {...props}>{children}</div>
);

/**
 * PopoverDescription: Texto descriptivo para el Popover.
 */
export const PopoverDescription = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-popover-description ${className}`} {...props}>{children}</div>
);
