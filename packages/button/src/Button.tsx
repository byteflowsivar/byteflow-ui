import React from 'react';
import './styles.css';

/**
 * Propiedades para el componente Button.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** La variante visual del botón. */
    variant?: 'primary' | 'secondary' | 'ghost';
    /** El tamaño del botón. */
    size?: 'sm' | 'md' | 'lg';
    /** Si es true, muestra un spinner de carga y deshabilita el botón. */
    isLoading?: boolean;
}

/**
 * Button: Componente interactivo fundamental para acciones del usuario.
 * Soporta múltiples estados, variantes y tamaños.
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className = '', variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
        const baseClass = 'bf-button';
        const variantClass = `${baseClass}--${variant}`;
        const sizeClass = `${baseClass}--${size}`;
        const loadingClass = isLoading ? `${baseClass}--loading` : '';

        const combinedClasses = [
            baseClass,
            variantClass,
            sizeClass,
            loadingClass,
            className
        ].filter(Boolean).join(' ');

        return (
            <button
                ref={ref}
                className={combinedClasses}
                disabled={disabled || isLoading}
                aria-busy={isLoading}
                {...props}
            >
                {isLoading && (
                    <span className="bf-button__loader" aria-hidden="true">
                        {/* Simple spinner placeholder */}
                        <svg className="bf-button__spinner" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
                        </svg>
                    </span>
                )}
                <span className="bf-button__content">{children}</span>
            </button>
        );
    }
);

Button.displayName = 'Button';
