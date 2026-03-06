import React from 'react';
import './styles.css';

/**
 * Propiedades del componente AspectRatio.
 */
export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Relación de aspecto deseada (ej. 16/9 = 1.77, 4/3 = 1.33). Por defecto es 1. */
    ratio?: number;
}

/**
 * AspectRatio: Utilidad para mostrar contenido con una relación de aspecto fija, útil para imágenes o videos responsivos.
 */
export const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
    ({ ratio = 1, children, className = '', style, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`bf-aspect-ratio ${className}`}
                style={{
                    aspectRatio: `${ratio} / 1`,
                    ...style,
                }}
                {...props}
            >
                {children}
            </div>
        );
    }
);

AspectRatio.displayName = 'AspectRatio';
