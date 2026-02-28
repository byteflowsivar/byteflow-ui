import React, { useState } from 'react';
import './styles.css';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
    src?: string;
    alt?: string;
    fallback?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    shape?: 'circle' | 'square';
}

export const Avatar = ({
    src,
    alt = '',
    fallback,
    size = 'md',
    shape = 'circle',
    className = '',
    ...props
}: AvatarProps) => {
    const [hasError, setHasError] = useState(false);

    const containerClasses = [
        'bf-avatar',
        `bf-avatar--${size}`,
        shape === 'square' ? 'bf-avatar--square' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={containerClasses} {...props}>
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
};

Avatar.displayName = 'Avatar';
