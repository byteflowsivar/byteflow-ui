import React from 'react';
import './styles.css';

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    as?: 'label' | 'span';
    required?: boolean;
    disabled?: boolean;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className = '', as: Component = 'label', required, disabled, children, ...props }, ref) => {
        const baseClass = 'bf-label';
        const disabledClass = disabled ? `${baseClass}--disabled` : '';

        const combinedClasses = [
            baseClass,
            disabledClass,
            className
        ].filter(Boolean).join(' ');

        return (
            <Component
                ref={ref as any}
                className={combinedClasses}
                {...props}
            >
                {children}
                {required && (
                    <span className="bf-label__required" aria-hidden="true">
                        *
                    </span>
                )}
            </Component>
        );
    }
);

Label.displayName = 'Label';
