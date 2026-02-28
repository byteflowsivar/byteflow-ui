import React from 'react';
import { Label } from '@byteflow-ui/label';
import './styles.css';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    size?: 'sm' | 'md' | 'lg';
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
    ({ className = '', label, size = 'md', id, disabled, ...props }, ref) => {
        const switchId = id || `bf-switch-${Math.random().toString(36).substr(2, 9)}`;

        const containerClasses = [
            'bf-switch-container',
            `bf-switch-container--${size}`,
            disabled ? 'bf-switch-container--disabled' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <label className={containerClasses} htmlFor={switchId}>
                <input
                    type="checkbox"
                    id={switchId}
                    ref={ref}
                    className="bf-switch-input"
                    disabled={disabled}
                    role="switch"
                    aria-checked={props.checked || props.defaultChecked}
                    {...props}
                />
                <div className="bf-switch-track">
                    <div className="bf-switch-thumb" />
                </div>
                {label && (
                    <Label
                        as="span"
                        disabled={disabled}
                        style={{ cursor: 'inherit', margin: 0 }}
                    >
                        {label}
                    </Label>
                )}
            </label>
        );
    }
);

Switch.displayName = 'Switch';
