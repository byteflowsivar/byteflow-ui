import React from 'react';
import { Label } from '@byteflow-ui/label';
import './styles.css';

/**
 * Propiedades del componente Textarea.
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Etiqueta de texto para el campo. */
    label?: string;
    /** Mensaje de error a mostrar. Cambia el color del borde y activa aria-invalid. */
    error?: string;
    /** Si el campo es obligatorio. Muestra un asterisco si hay label. */
    required?: boolean;
}

/**
 * Textarea: Campo de entrada de texto multilínea con soporte para etiquetas y errores.
 */
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = '', label, error, required, disabled, id, ...props }, ref) => {
        const textareaId = id || `bf-textarea-${Math.random().toString(36).substr(2, 9)}`;
        const errorId = error ? `${textareaId}-error` : undefined;

        const textareaClasses = [
            'bf-textarea',
            error ? 'bf-textarea--error' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <div className="bf-textarea-container">
                {label && (
                    <Label
                        htmlFor={textareaId}
                        required={required}
                        disabled={disabled}
                    >
                        {label}
                    </Label>
                )}
                <textarea
                    id={textareaId}
                    ref={ref}
                    className={textareaClasses}
                    disabled={disabled}
                    required={required}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={errorId}
                    {...props}
                />
                {error && (
                    <span id={errorId} className="bf-textarea__error-msg">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
