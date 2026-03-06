import React from 'react';
import './styles.css';

/**
 * Propiedades del componente ScrollArea.
 */
export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Altura máxima que puede alcanzar el área antes de mostrar scroll. */
    maxHeight?: string | number;
    /** Si es true, oculta la barra de scroll visualmente manteniendo la funcionalidad. */
    hideScrollbar?: boolean;
}

/**
 * ScrollArea: Proporciona un área con scroll personalizado y consistente entre navegadores.
 */
export const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
    ({
        children,
        maxHeight,
        hideScrollbar = false,
        className = '',
        style,
        ...props
    }, ref) => {
        const containerStyle: React.CSSProperties = {
            maxHeight: maxHeight || '100%',
            ...style,
        };

        const classes = [
            'bf-scroll-area',
            hideScrollbar ? 'bf-scroll-area--hide-scrollbar' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <div ref={ref} className={classes} style={containerStyle} {...props}>
                <div className="bf-scroll-area-content">
                    {children}
                </div>
            </div>
        );
    }
);

ScrollArea.displayName = 'ScrollArea';
