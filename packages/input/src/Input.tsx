import React from 'react';
import { Label } from '@byteflow-ui/label';
import './styles.css';

/**
 * Propiedades para el componente Input.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Etiqueta descriptiva opcional. */
    label?: string;
    /** Mensaje de error. Si se provee, cambia el estado visual del input. */
    error?: string;
    /** Indica si el campo es obligatorio. */
    required?: boolean;
}

/**
 * Input: Campo de entrada de texto estándar con soporte para etiquetas y mensajes de error.
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', label, error, required, disabled, id, ...props }, ref) => {
        const inputId = id || `bf-input-${Math.random().toString(36).substr(2, 9)}`;
        const baseClass = 'bf-input';
        const errorClass = error ? `${baseClass}--error` : '';

        const combinedClasses = [
            baseClass,
            errorClass,
            className
        ].filter(Boolean).join(' ');

        return (
            <div className="bf-input-container">
                {label && (
                    <Label
                        htmlFor={inputId}
                        required={required}
                        disabled={disabled}
                    >
                        {label}
                    </Label>
                )}
                <input
                    id={inputId}
                    ref={ref}
                    className={combinedClasses}
                    disabled={disabled}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    {...props}
                />
                {error && (
                    <span className="bf-input__error-message" id={`${inputId}-error`}>
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';
