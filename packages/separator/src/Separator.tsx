import React from 'react';
import './styles.css';

export interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
    decorative?: boolean;
}

export const Separator = ({
    orientation = 'horizontal',
    decorative = true,
    className = '',
    ...props
}: SeparatorProps) => {
    const containerClasses = [
        'bf-separator',
        `bf-separator--${orientation}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div
            role={decorative ? 'none' : 'separator'}
            aria-orientation={decorative ? undefined : orientation}
            className={containerClasses}
            {...props}
        />
    );
};

Separator.displayName = 'Separator';
