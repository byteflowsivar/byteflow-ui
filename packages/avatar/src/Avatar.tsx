import React, { useState } from 'react';
import './styles.css';

/**
 * Propiedades del componente Avatar.
 */
export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    /** URL de la imagen de perfil. Si falla o no se provee, se mostrará el fallback. */
    src?: string;
    /** Texto alternativo para la imagen, importante para la accesibilidad por lectores de pantalla. */
    alt?: string;
    /** Contenido personalizado (ej. iniciales o iconos) a mostrar cuando la imagen no esté disponible. */
    fallback?: React.ReactNode;
    /** Determina las dimensiones físicas del avatar dentro del espacio de la UI. */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /** La forma geométrica del avatar: circle (estándar) o square (más industrial/moderno). */
    shape?: 'circle' | 'square';
}

/**
 * Avatar: Una representación visual premium para usuarios o entidades. 
 * Maneja internamente el ciclo de vida de carga de la imagen y proporciona una transición elegante hacia el fallback.
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
                    {fallback || (alt ? alt.substring(0, 2).toUpperCase() : '?')}
                </div>
            )}
        </div>
    );
});

Avatar.displayName = 'Avatar';
