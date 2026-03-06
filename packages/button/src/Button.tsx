import React from 'react';
import './styles.css';

/**
 * Propiedades del componente Button.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** La variante visual del botón que define su nivel de importancia: primary (acción principal), secondary (acción de apoyo) o ghost (acción mínima). */
    variant?: 'primary' | 'secondary' | 'ghost';
    /** Tamaño del botón para ajustar su jerarquía visual en diferentes contextos de UI. */
    size?: 'sm' | 'md' | 'lg';
    /** Cuando es true, muestra un indicador de carga (spinner) y deshabilita la interacción para prevenir clicks duplicados. */
    isLoading?: boolean;
}

/**
 * Button: El componente fundamental para la interacción del usuario. 
 * Diseñado internamente para ser accesible y proporcionar feedback visual inmediato, incluyendo estados de carga y deshabilitado.
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
