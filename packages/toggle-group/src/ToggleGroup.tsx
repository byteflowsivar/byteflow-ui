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

export interface ToggleGroupProps {
    /** Tipo de selección. */
    type: 'single' | 'multiple';
    /** Valor actual (controlado). */
    value?: string | string[];
    /** Valor inicial (no controlado). */
    defaultValue?: string | string[];
    /** Callback al cambiar el valor. */
    onValueChange?: (value: any) => void;
    /** Variante visual para todos los ítems. */
    variant?: 'default' | 'outline' | 'ghost';
    /** Tamaño para todos los ítems. */
    size?: 'sm' | 'md' | 'lg';
    /** Contenido compuesto de ToggleGroupItem. */
    children: React.ReactNode;
    /** Clase CSS adicional. */
    className?: string;
}

/**
 * ToggleGroup: Coordina un conjunto de botones Toggle para selección única o múltiple.
 */
export const ToggleGroup: React.FC<ToggleGroupProps> = ({
    type = 'single',
    value: controlledValue,
    defaultValue,
    onValueChange,
    variant = 'default',
    size = 'md',
    children,
    className = '',
}) => {
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
            <div className={`bf-toggle-group bf-toggle-group--${variant} ${className}`} role="group">
                {children}
            </div>
        </ToggleGroupContext.Provider>
    );
};

export interface ToggleGroupItemProps extends React.ComponentPropsWithoutRef<typeof Toggle> {
    value: string;
}

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

ToggleGroupItem.displayName = 'ToggleGroupItem';
