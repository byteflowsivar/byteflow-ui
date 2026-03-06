import React from 'react';
import { Label } from '@byteflow-ui/label';
import './styles.css';

/**
 * Propiedades del componente Input.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Texto de la etiqueta que identifica el propósito del campo. */
    label?: string;
    /** Mensaje de error a pie de campo. Si se provee, el borde del input cambiará a rojo para indicar un estado inválido. */
    error?: string;
    /** Si es true, añade un indicador visual (ej. asterisco) resaltando que el campo es obligatorio. */
    required?: boolean;
}

/**
 * Input: El componente básico de entrada de texto. 
 * Implementado con altos estándares de accesibilidad, gestionando automáticamente IDs, etiquetas vinculadas y estados de error ARIA.
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
