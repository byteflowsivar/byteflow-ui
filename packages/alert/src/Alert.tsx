import React from 'react';
import './styles.css';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'info' | 'success' | 'warning' | 'error';
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
    ({ className = '', variant = 'info', children, ...props }, ref) => {
        return (
            <div
                ref={ref}
                role="alert"
                className={`bf-alert bf-alert--${variant} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Alert.displayName = 'Alert';

export const AlertTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className = '', children, ...props }, ref) => (
        <h5
            ref={ref}
            className={`bf-alert-title ${className}`}
            {...props}
        >
            {children}
        </h5>
    )
);

AlertTitle.displayName = 'AlertTitle';

export const AlertDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div
            ref={ref}
            className={`bf-alert-description ${className}`}
            {...props}
        >
            {children}
        </div>
    )
);

AlertDescription.displayName = 'AlertDescription';
