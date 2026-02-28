import React from 'react';
import './styles.css';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'primary' | 'secondary' | 'ghost';
}

export const Spinner = ({
    size = 'md',
    variant = 'primary',
    className = '',
    ...props
}: SpinnerProps) => {
    const containerClasses = [
        'bf-spinner',
        `bf-spinner--${size}`,
        `bf-spinner--${variant}`,
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses} role="status" {...props}>
            <svg
                viewBox="0 0 50 50"
                className="bf-spinner-svg"
            >
                <circle
                    className="bf-spinner-track"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                />
                <circle
                    className="bf-spinner-head"
                    cx="25"
                    cy="25"
                    r="20"
                    fill="none"
                    strokeWidth="5"
                />
            </svg>
            <span className="bf-sr-only">Cargando...</span>
        </div>
    );
};

Spinner.displayName = 'Spinner';
