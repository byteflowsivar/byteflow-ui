import React from 'react';
import { Label } from '@byteflow-ui/label';
import './styles.css';

export interface SelectOption {
    label: string;
    value: string | number;
    disabled?: boolean;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    label?: string;
    options?: SelectOption[];
    error?: string;
    placeholder?: string;
}

const ChevronIcon = () => (
    <svg
        className="bf-select-chevron"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M5 7.5L10 12.5L15 7.5"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({ className = '', label, options = [], error, placeholder, id, required, disabled, children, ...props }, ref) => {
        const selectId = id || `bf-select-${Math.random().toString(36).substr(2, 9)}`;
        const errorId = error ? `${selectId}-error` : undefined;

        const selectClasses = [
            'bf-select',
            error ? 'bf-select--error' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <div className="bf-select-container">
                {label && (
                    <Label
                        htmlFor={selectId}
                        required={required}
                        disabled={disabled}
                    >
                        {label}
                    </Label>
                )}
                <div className="bf-select-wrapper">
                    <select
                        id={selectId}
                        ref={ref}
                        className={selectClasses}
                        disabled={disabled}
                        required={required}
                        aria-invalid={error ? 'true' : 'false'}
                        aria-describedby={errorId}
                        {...props}
                    >
                        {placeholder && (
                            <option value="" disabled hidden>
                                {placeholder}
                            </option>
                        )}
                        {options.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                                disabled={option.disabled}
                            >
                                {option.label}
                            </option>
                        ))}
                        {children}
                    </select>
                    <ChevronIcon />
                </div>
                {error && (
                    <span id={errorId} className="bf-select__error-msg">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Select.displayName = 'Select';
