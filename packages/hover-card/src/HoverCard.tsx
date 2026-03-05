import React, { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

export interface HoverCardProps {
    children: React.ReactNode;
    openDelay?: number;
    closeDelay?: number;
}

export const HoverCard: React.FC<HoverCardProps> = ({
    children,
    openDelay = 700,
    closeDelay = 300
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openTimerRef = useRef<number | null>(null);
    const closeTimerRef = useRef<number | null>(null);

    const handleOpen = useCallback(() => {
        if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
        openTimerRef.current = window.setTimeout(() => setIsOpen(true), openDelay);
    }, [openDelay]);

    const handleClose = useCallback(() => {
        if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
        closeTimerRef.current = window.setTimeout(() => setIsOpen(false), closeDelay);
    }, [closeDelay]);

    return (
        <div
            className="bf-hover-card-root"
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
        >
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { isOpen, onClose: handleClose });
                }
                return child;
            })}
        </div>
    );
};

export interface HoverCardTriggerProps {
    children: React.ReactElement;
}

export const HoverCardTrigger: React.FC<HoverCardTriggerProps> = ({ children }) => {
    return children;
};

export interface HoverCardContentProps {
    children: React.ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
    side?: 'top' | 'bottom' | 'left' | 'right';
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
}

export const HoverCardContent: React.FC<HoverCardContentProps> = ({
    children,
    isOpen,
    className = '',
    side = 'bottom',
    align = 'center',
    sideOffset = 8,
}) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ top: 0, left: 0 });
    const [mounted, setMounted] = useState(false);

    const updatePosition = useCallback(() => {
        if (!contentRef.current) return;

        // Find the trigger by looking at parent
        const trigger = contentRef.current.parentElement?.querySelector('.bf-hover-card-root > *:first-child');
        if (!trigger) return;

        const anchorRect = trigger.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();

        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        let top = 0;
        let left = 0;

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

        if (side === 'top' || side === 'bottom') {
            switch (align) {
                case 'start': left = anchorRect.left + scrollX; break;
                case 'center': left = anchorRect.left + scrollX + (anchorRect.width / 2) - (contentRect.width / 2); break;
                case 'end': left = anchorRect.right + scrollX - contentRect.width; break;
            }
        } else {
            switch (align) {
                case 'start': top = anchorRect.top + scrollY; break;
                case 'center': top = anchorRect.top + scrollY + (anchorRect.height / 2) - (contentRect.height / 2); break;
                case 'end': top = anchorRect.bottom + scrollY - contentRect.height; break;
            }
        }

        setCoords({ top, left });
    }, [align, side, sideOffset]);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (isOpen) {
            updatePosition();
        }
    }, [isOpen, updatePosition]);

    if (!mounted || !isOpen) return null;

    return createPortal(
        <div
            ref={contentRef}
            className={`bf-hover-card-content ${className}`}
            style={{
                position: 'absolute',
                top: `${coords.top}px`,
                left: `${coords.left}px`,
                zIndex: 1000,
                pointerEvents: 'auto',
            }}
        >
            {children}
        </div>,
        document.body
    );
};
