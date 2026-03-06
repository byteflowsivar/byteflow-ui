import React from 'react';
import { Label } from '@byteflow-ui/label';
import './styles.css';

/**
 * Propiedades del componente Checkbox.
 */
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    /** Etiqueta de texto que aparece a la derecha del checkbox, facilitando la identificación de la opción. */
    label?: string;
    /** Indica si la selección de este checkbox es obligatoria para continuar (ej. términos y condiciones). */
    required?: boolean;
}

/**
 * Checkbox: Un control de selección binaria con estética Byteflow-UI. 
 * Reemplaza el input nativo con un diseño personalizado, manteniendo la accesibilidad nativa mediante el uso de un input oculto.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
    ({ className = '', label, required, disabled, id, ...props }, ref) => {
        const checkboxId = id || `bf-checkbox-${Math.random().toString(36).substr(2, 9)}`;

        const containerClasses = [
            'bf-checkbox-container',
            disabled ? 'bf-checkbox-container--disabled' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <label className={containerClasses} htmlFor={checkboxId}>
                <input
                    type="checkbox"
                    id={checkboxId}
                    ref={ref}
                    className="bf-checkbox-input"
                    disabled={disabled}
                    required={required}
                    {...props}
                />
                <div className="bf-checkbox-custom">
                    <span className="bf-checkbox-checkmark">
                        <svg viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12" />
                        </svg>
                    </span>
                </div>
                {label && (
                    <Label
                        as="span"
                        required={required}
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

Checkbox.displayName = 'Checkbox';
