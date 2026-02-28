import React from 'react';
import './styles.css';

export interface TooltipProps {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    className?: string;
    delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    className = '',
}) => {
    return (
        <div className={`bf-tooltip-container ${className}`} tabIndex={0}>
            {children}
            <div
                className={`bf-tooltip bf-tooltip--${position}`}
                role="tooltip"
            >
                {content}
            </div>
        </div>
    );
};

Tooltip.displayName = 'Tooltip';
