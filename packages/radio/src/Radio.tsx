import React, { createContext, useContext } from 'react';
import { Label } from '@byteflow-ui/label';
import './styles.css';

// Contexto para manejar el estado del grupo de radios
interface RadioContextProps {
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}

const RadioContext = createContext<RadioContextProps | undefined>(undefined);

// Componente RadioGroup
export interface RadioGroupProps {
    children: React.ReactNode;
    name?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    orientation?: 'vertical' | 'horizontal';
    className?: string;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
    children,
    name,
    value,
    onChange,
    disabled,
    orientation = 'vertical',
    className = ''
}) => {
    const containerClasses = [
        'bf-radio-group',
        orientation === 'horizontal' ? 'bf-radio-group--horizontal' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <RadioContext.Provider value={{ name, value, onChange, disabled }}>
            <div className={containerClasses} role="radiogroup">
                {children}
            </div>
        </RadioContext.Provider>
    );
};

// Componente Radio
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    label?: string;
    required?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
    ({ className = '', label, required, disabled: radioDisabled, value: radioValue, id, ...props }, ref) => {
        const context = useContext(RadioContext);
        const radioId = id || `bf-radio-${Math.random().toString(36).substr(2, 9)}`;

        // Si el Radio está dentro de un RadioGroup, hereda el nombre y el estado
        const name = context?.name || props.name;
        const checked = context ? context.value === radioValue : props.checked;
        const onChange = context?.onChange || props.onChange;
        const disabled = context?.disabled || radioDisabled;

        const containerClasses = [
            'bf-radio-container',
            disabled ? 'bf-radio-container--disabled' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <label className={containerClasses} htmlFor={radioId}>
                <input
                    type="radio"
                    id={radioId}
                    ref={ref}
                    name={name}
                    value={radioValue}
                    checked={checked}
                    onChange={onChange}
                    className="bf-radio-input"
                    disabled={disabled}
                    required={required}
                    {...props}
                />
                <div className="bf-radio-custom">
                    <div className="bf-radio-dot" />
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

Radio.displayName = 'Radio';
