import React from 'react';
import './styles.css';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Badge = ({
    variant = 'secondary',
    size = 'md',
    className = '',
    children,
    ...props
}: BadgeProps) => {
    const badgeClasses = [
        'bf-badge',
        `bf-badge--${variant}`,
        `bf-badge--${size}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={badgeClasses} {...props}>
            {children}
        </div>
    );
};

Badge.displayName = 'Badge';
