import React from 'react';
import './styles.css';

export interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}

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
