import React from 'react';
import './styles.css';

/**
 * Propiedades del componente Badge.
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    /** La variante visual del badge que determina su color y estilo. */
    variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'error';
    /** El tamaño del badge. */
    size?: 'sm' | 'md' | 'lg';
}

/**
 * Badge: Un pequeño elemento visual para mostrar estados, etiquetas o recuentos numéricos.
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({
        variant = 'secondary',
        size = 'md',
        className = '',
        children,
        ...props
    }, ref) => {
        const badgeClasses = [
            'bf-badge',
            `bf-badge--${variant}`,
            `bf-badge--${size}`,
            className
        ].filter(Boolean).join(' ');

        return (
            <div ref={ref} className={badgeClasses} {...props}>
                {children}
            </div>
        );
    }
);

Badge.displayName = 'Badge';
