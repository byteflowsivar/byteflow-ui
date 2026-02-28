import React from 'react';
import './styles.css';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'rectangular' | 'circular' | 'rounded';
    width?: string | number;
    height?: string | number;
}

export const Skeleton = ({
    variant = 'rectangular',
    width,
    height,
    className = '',
    style,
    ...props
}: SkeletonProps) => {
    const containerClasses = [
        'bf-skeleton',
        `bf-skeleton--${variant}`,
        className
    ].filter(Boolean).join(' ');

    const customStyle = {
        ...style,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
    };

    return (
        <div
            className={containerClasses}
            style={customStyle}
            {...props}
        />
    );
};

Skeleton.displayName = 'Skeleton';
