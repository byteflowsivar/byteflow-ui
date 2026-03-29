import React from 'react';
import './styles.css';

export interface TooltipProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content'> {
    content: React.ReactNode;
    children: React.ReactNode;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
    content,
    children,
    position = 'top',
    className = '',
    ...props
}) => {
    return (
        <div className={`bf-tooltip-container ${className}`} tabIndex={0} {...props}>
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
