import React from 'react';
import './styles.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
}

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
