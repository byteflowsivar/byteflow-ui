import React, { createContext, useContext, useState } from 'react';
import { Toggle } from '@byteflow-ui/toggle';
import './styles.css';

interface ToggleGroupContextValue {
    value: string | string[];
    onValueChange: (value: string) => void;
    type: 'single' | 'multiple';
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | undefined>(undefined);

/**
 * Propiedades del componente ToggleGroup.
 */
export interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Tipo de selección: 'single' (radio-like) o 'multiple' (checkbox-like). */
    type: 'single' | 'multiple';
    /** Valor o valores seleccionados actualmente (modo controlado). */
    value?: string | string[];
    /** Valor o valores seleccionados inicialmente (modo no controlado). */
    defaultValue?: string | string[];
    /** Callback disparado cuando cambia la selección. */
    onValueChange?: (value: string | string[]) => void;
    /** Variante visual que heredarán todos los ítems del grupo. */
    variant?: 'default' | 'outline' | 'ghost';
    /** Tamaño que heredarán todos los ítems del grupo. */
    size?: 'sm' | 'md' | 'lg';
}

/**
 * ToggleGroup: Coordina un conjunto de botones Toggle para selección única o múltiple con una estética consistente.
 */
export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
    ({
        type = 'single',
        value: controlledValue,
        defaultValue,
        onValueChange,
        variant = 'default',
        size = 'md',
        children,
        className = '',
        ...props
    }, ref) => {
        const [internalValue, setInternalValue] = useState<string | string[]>(
            defaultValue || (type === 'multiple' ? [] : '')
        );

        const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

        const handleValueChange = (itemValue: string) => {
            let nextValue: string | string[];

            if (type === 'single') {
                nextValue = currentValue === itemValue ? '' : itemValue;
            } else {
                const values = Array.isArray(currentValue) ? currentValue : [];
                nextValue = values.includes(itemValue)
                    ? values.filter((v) => v !== itemValue)
                    : [...values, itemValue];
            }

            if (controlledValue === undefined) {
                setInternalValue(nextValue);
            }
            onValueChange?.(nextValue);
        };

        return (
            <ToggleGroupContext.Provider value={{ value: currentValue, onValueChange: handleValueChange, type, variant, size }}>
                <div
                    ref={ref}
                    className={`bf-toggle-group bf-toggle-group--${variant} ${className}`}
                    role="group"
                    {...props}
                >
                    {children}
                </div>
            </ToggleGroupContext.Provider>
        );
    }
);

/**
 * Propiedades del ítem individual de un ToggleGroup.
 */
export interface ToggleGroupItemProps extends React.ComponentPropsWithoutRef<typeof Toggle> {
    /** Valor único que representa a este ítem dentro del grupo. */
    value: string;
}

/**
 * ToggleGroupItem: El botón individual dentro del grupo. Hereda estilos y comportamiento del contexto.
 */
export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
    ({ value, className = '', children, ...props }, ref) => {
        const context = useContext(ToggleGroupContext);
        if (!context) throw new Error('ToggleGroupItem debe usarse dentro de ToggleGroup');

        const isPressed = Array.isArray(context.value)
            ? context.value.includes(value)
            : context.value === value;

        return (
            <Toggle
                ref={ref}
                pressed={isPressed}
                onPressedChange={() => context.onValueChange(value)}
                variant={context.variant}
                size={context.size}
                className={`bf-toggle-group-item ${className}`}
                {...props}
            >
                {children}
            </Toggle>
        );
    }
);

ToggleGroup.displayName = 'ToggleGroup';
ToggleGroupItem.displayName = 'ToggleGroupItem';
