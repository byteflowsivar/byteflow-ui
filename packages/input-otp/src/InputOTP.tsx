import React, { useState, useRef } from 'react';
import './styles.css';

export interface InputOTPProps {
    /** Número de caracteres/celdas. */
    maxLength?: number;
    /** Valor actual (controlado). */
    value?: string;
    /** Valor inicial (no controlado). */
    defaultValue?: string;
    /** Callback al cambiar el valor completo. */
    onComplete?: (value: string) => void;
    /** Callback en cada cambio de carácter. */
    onChange?: (value: string) => void;
    /** Si es true, solo permite números. */
    numericOnly?: boolean;
    /** Si es true, deshabilita el input. */
    disabled?: boolean;
    /** Clase CSS adicional. */
    className?: string;
}

/**
 * InputOTP: Un componente especializado para capturar códigos de verificación (One Time Password).
 * Gestiona automáticamente el foco, pegado de texto y navegación entre celdas.
 */
export const InputOTP = React.forwardRef<HTMLDivElement, InputOTPProps>(
    ({
        maxLength = 6,
        value: controlledValue,
        defaultValue = '',
        onComplete,
        onChange,
        numericOnly = true,
        disabled = false,
        className = '',
        ...props
    }, ref) => {
        const [internalValue, setInternalValue] = useState(defaultValue);
        const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

        const currentValue = controlledValue !== undefined ? controlledValue : internalValue;
        const values = currentValue.split('').slice(0, maxLength);

        // Asegurar que values tenga la longitud correcta con strings vacíos
        const displayValues = Array.from({ length: maxLength }, (_, i) => values[i] || '');

        const handleChange = (index: number, val: string) => {
            if (disabled) return;

            // Validar si solo se permiten números
            if (numericOnly && val && !/^\d+$/.test(val)) return;

            const newValues = [...displayValues];
            newValues[index] = val.slice(-1); // Solo tomar el último carácter
            const newValueString = newValues.join('');

            if (controlledValue === undefined) {
                setInternalValue(newValueString);
            }
            onChange?.(newValueString);

            if (val && index < maxLength - 1) {
                inputsRef.current[index + 1]?.focus();
            }

            if (newValueString.length === maxLength) {
                onComplete?.(newValueString);
            }
        };

        const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Backspace' && !displayValues[index] && index > 0) {
                inputsRef.current[index - 1]?.focus();
            } else if (e.key === 'ArrowLeft' && index > 0) {
                inputsRef.current[index - 1]?.focus();
            } else if (e.key === 'ArrowRight' && index < maxLength - 1) {
                inputsRef.current[index + 1]?.focus();
            }
        };

        const handlePaste = (e: React.ClipboardEvent) => {
            e.preventDefault();
            const pastedData = e.clipboardData.getData('text').slice(0, maxLength);

            if (numericOnly && !/^\d+$/.test(pastedData)) return;

            if (controlledValue === undefined) {
                setInternalValue(pastedData);
            }
            onChange?.(pastedData);

            // Auto focus al último input llenado o al final
            const focusIndex = Math.min(pastedData.length, maxLength - 1);
            inputsRef.current[focusIndex]?.focus();

            if (pastedData.length === maxLength) {
                onComplete?.(pastedData);
            }
        };

        return (
            <div
                ref={ref}
                className={`bf-input-otp ${disabled ? 'bf-input-otp--disabled' : ''} ${className}`}
                {...props}
            >
                {displayValues.map((char, i) => (
                    <React.Fragment key={i}>
                        <input
                            ref={(el) => { inputsRef.current[i] = el; }}
                            type="text"
                            inputMode={numericOnly ? 'numeric' : 'text'}
                            pattern={numericOnly ? '[0-9]*' : undefined}
                            value={char}
                            onChange={(e) => handleChange(i, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(i, e)}
                            onPaste={handlePaste}
                            disabled={disabled}
                            className="bf-input-otp-slot"
                            autoComplete="one-time-code"
                        />
                        {i === Math.floor(maxLength / 2) - 1 && maxLength > 4 && (
                            <div className="bf-input-otp-separator" aria-hidden="true" />
                        )}
                    </React.Fragment>
                ))}
            </div>
        );
    }
);

InputOTP.displayName = 'InputOTP';
