import React, { useState, useCallback } from 'react';
import './styles.css';

export interface MoneyInputProps {
    /** Valor opcional en centavos (ej: 100 para $1.00) */
    value?: number;
    /** Símbolo de moneda, por defecto '$' */
    currencySymbol?: string;
    /** Callback cuando el valor cambia, recibe el valor en centavos */
    onChange?: (value: number) => void;
    /** Etiqueta para el input */
    label?: string;
    /** Clase CSS adicional para el contenedor */
    className?: string;
    /** Nombre para el input */
    name?: string;
    /** Indica si el input está deshabilitado */
    disabled?: boolean;
}

/**
 * Componente MoneyInput que formatea la entrada de derecha a izquierda.
 * Útil para ingresar montos financieros de manera intuitiva.
 */
export const MoneyInput: React.FC<MoneyInputProps> = ({
    value: controlledValue,
    currencySymbol = '$',
    onChange,
    label,
    className = '',
    name,
    disabled = false,
}) => {
    // Estado interno para manejar el valor si no es controlado externamente
    const [internalValue, setInternalValue] = useState<number>(0);

    // Usar el valor controlado si existe, sino el interno
    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

    /**
     * Formatea un número (centavos) a un string con formato de moneda.
     * Ej: 100 -> "$1.00"
     */
    const formatValue = useCallback((amount: number): string => {
        const decimalPart = (amount % 100).toString().padStart(2, '0');
        const wholePart = Math.floor(amount / 100).toLocaleString('en-US'); // Podría ser locale-aware en el futuro
        return `${currencySymbol}${wholePart}.${decimalPart}`;
    }, [currencySymbol]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 1. Obtener solo los dígitos del valor actual (eliminando símbolos y puntos)
        const rawValue = e.target.value.replace(/\D/g, '');

        // 2. Convertir a número entero (centavos)
        const newAmount = parseInt(rawValue, 10) || 0;

        // 3. Actualizar estados
        if (controlledValue === undefined) {
            setInternalValue(newAmount);
        }

        if (onChange) {
            onChange(newAmount);
        }
    };

    return (
        <div className={`money-input-container ${className} ${disabled ? 'disabled' : ''}`}>
            {label && <label className="money-input-label">{label}</label>}
            <div className="money-input-wrapper">
                <input
                    type="text"
                    name={name}
                    className="money-input-field"
                    value={formatValue(currentValue)}
                    onChange={handleInputChange}
                    placeholder={`${currencySymbol}0.00`}
                    disabled={disabled}
                    inputMode="numeric" // Mejora la experiencia en móviles (teclado numérico)
                />
            </div>
        </div>
    );
};
