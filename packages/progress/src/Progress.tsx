import React from 'react';
import './styles.css';

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: number | null;
    max?: number;
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
    ({ className = '', value, max = 100, ...props }, ref) => {
        const percentage = value != null ? Math.min(Math.max(value, 0), max) : null;
        const isIndeterminate = percentage === null;

        return (
            <div
                ref={ref}
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={max}
                aria-valuenow={percentage !== null ? percentage : undefined}
                className={`bf-progress ${isIndeterminate ? 'bf-progress--indeterminate' : ''} ${className}`}
                {...props}
            >
                <div
                    className="bf-progress-indicator"
                    style={{
                        transform: `translateX(-${100 - (percentage || 0)}%)`,
                    }}
                />
            </div>
        );
    }
);

Progress.displayName = 'Progress';
