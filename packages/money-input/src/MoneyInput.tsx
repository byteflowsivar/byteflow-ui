import React, { useState, useCallback } from 'react';
import './styles.css';

export interface MoneyInputProps {
    /** Valor en centavos (ej: 100 para $1.00). Si se omite, el componente maneja su propio estado interno. */
    value?: number;
    /** Símbolo de moneda que se mostrará. Por defecto '$'. */
    currencySymbol?: string;
    /** Configuración regional para el formato de miles (ej: 'es-MX', 'en-US'). Por defecto 'en-US'. */
    locale?: string;
    /** Callback que se dispara al cambiar el valor. Recibe el monto exacto en centavos. */
    onChange?: (value: number) => void;
    /** Texto opcional que aparece arriba del campo de entrada. */
    label?: string;
    /** Clase CSS para el contenedor principal. Útil para integración con frameworks como Tailwind. */
    className?: string;
    /** Estilos en línea para el contenedor principal. */
    containerStyle?: React.CSSProperties;
    /** Estilos en línea directamente para el elemento input. */
    inputStyle?: React.CSSProperties;
    /** Atributo 'name' estándar para formularios. */
    name?: string;
    /** Si es true, el usuario no podrá interactuar con el campo. */
    disabled?: boolean;
}

/**
 * MoneyInput: Un componente de alto rendimiento para entrada de moneda.
 * Implementa una máscara de derecha a izquierda para una experiencia financiera premium.
 */
export const MoneyInput: React.FC<MoneyInputProps> = ({
    value: controlledValue,
    currencySymbol = '$',
    locale = 'en-US',
    onChange,
    label,
    className = '',
    containerStyle,
    inputStyle,
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
        const wholePart = Math.floor(amount / 100).toLocaleString(locale);
        return `${currencySymbol}${wholePart}.${decimalPart}`;
    }, [currencySymbol, locale]);

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
        <div
            className={`money-input-container ${className} ${disabled ? 'disabled' : ''}`}
            style={containerStyle}
        >
            {label && <label className="money-input-label">{label}</label>}
            <div className="money-input-wrapper">
                <input
                    type="text"
                    name={name}
                    className="money-input-field"
                    style={inputStyle}
                    value={formatValue(currentValue)}
                    onChange={handleInputChange}
                    placeholder={`${currencySymbol}0.00`}
                    disabled={disabled}
                    inputMode="numeric"
                />
            </div>
        </div>
    );
};
