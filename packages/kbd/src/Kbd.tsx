import React from 'react';
import './styles.css';

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export const Kbd = React.forwardRef<HTMLElement, KbdProps>(
    ({ children, className = '', ...props }, ref) => (
        <kbd ref={ref} className={`bf-kbd ${className}`} {...props}>
            {children}
        </kbd>
    )
);

Kbd.displayName = 'Kbd';
