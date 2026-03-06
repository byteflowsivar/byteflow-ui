import React, { useState } from 'react';
import './styles.css';

/**
 * Propiedades para el componente Avatar.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** URL de la imagen. */
    src?: string;
    /** Texto alternativo para la imagen. */
    alt?: string;
    /** Contenido a mostrar si la imagen falla u omite. */
    fallback?: React.ReactNode;
    /** El tamaño del avatar. */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** La forma del avatar. */
    shape?: 'circle' | 'square';
}

/**
 * Avatar: Representación visual de un usuario o entidad.
 * Soporta fallbacks automáticos y diferentes formas/tamaños.
 */
export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>((
    {
        src,
        alt = '',
        fallback,
        size = 'md',
        shape = 'circle',
        className = '',
        ...props
    },
    ref
) => {
    const [hasError, setHasError] = useState(false);

    const containerClasses = [
        'bf-avatar',
        `bf-avatar--${size}`,
        shape === 'square' ? 'bf-avatar--square' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div ref={ref} className={containerClasses} {...props}>
            {src && !hasError ? (
                <img
                    src={src}
                    alt={alt}
                    className="bf-avatar-image"
                    onError={() => setHasError(true)}
                />
            ) : (
                <div className="bf-avatar-fallback">
                    {fallback || alt.substring(0, 2) || '?'}
                </div>
            )}
        </div>
    );
});

Avatar.displayName = 'Avatar';
