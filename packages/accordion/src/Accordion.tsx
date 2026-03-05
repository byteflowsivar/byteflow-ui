import React, { useState, useCallback, useMemo } from 'react';
import './styles.css';

export interface AccordionProps {
    children: React.ReactNode;
    type?: 'single' | 'multiple';
    defaultValue?: string | string[];
    onValueChange?: (value: string | string[]) => void;
    className?: string;
}

interface AccordionContextValue {
    expandedValue: string | string[];
    toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

export const Accordion: React.FC<AccordionProps> = ({
    children,
    type = 'single',
    defaultValue = type === 'single' ? '' : [],
    onValueChange,
    className = '',
}) => {
    const [expandedValue, setExpandedValue] = useState<string | string[]>(defaultValue);

    const toggleItem = useCallback((value: string) => {
        let newValue: string | string[];

        if (type === 'single') {
            newValue = expandedValue === value ? '' : value;
        } else {
            const currentValues = expandedValue as string[];
            newValue = currentValues.includes(value)
                ? currentValues.filter((v) => v !== value)
                : [...currentValues, value];
        }

        setExpandedValue(newValue);
        onValueChange?.(newValue);
    }, [expandedValue, type, onValueChange]);

    const contextValue = useMemo(() => ({
        expandedValue,
        toggleItem,
    }), [expandedValue, toggleItem]);

    return (
        <AccordionContext.Provider value={contextValue}>
            <div className={`bf-accordion ${className}`} role="presentation">
                {children}
            </div>
        </AccordionContext.Provider>
    );
};

export interface AccordionItemProps {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
    value,
    children,
    disabled = false,
    className = '',
}) => {
    const context = React.useContext(AccordionContext);
    if (!context) throw new Error('AccordionItem must be used within Accordion');

    const isExpanded = Array.isArray(context.expandedValue)
        ? context.expandedValue.includes(value)
        : context.expandedValue === value;

    return (
        <div
            className={`bf-accordion-item ${isExpanded ? 'bf-accordion-item--expanded' : ''} ${disabled ? 'bf-accordion-item--disabled' : ''} ${className}`}
            data-state={isExpanded ? 'open' : 'closed'}
        >
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, {
                        value,
                        isExpanded,
                        disabled,
                        onClick: () => !disabled && context.toggleItem(value)
                    });
                }
                return child;
            })}
        </div>
    );
};

export interface AccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
    // Props passed by AccordionItem
    value?: string;
    isExpanded?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
    children,
    className = '',
    value,
    isExpanded,
    disabled,
    onClick,
}) => {
    return (
        <h3 className="bf-accordion-header">
            <button
                type="button"
                className={`bf-accordion-trigger ${className}`}
                onClick={onClick}
                aria-expanded={isExpanded}
                aria-disabled={disabled}
                data-state={isExpanded ? 'open' : 'closed'}
                data-value={value}
            >
                {children}
                <svg
                    className="bf-accordion-chevron"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M3.13523 6.15803C3.3241 5.95657 3.64057 5.94637 3.84203 6.13523L7.5 9.56464L11.158 6.13523C11.3594 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67597 11.842 6.86484L7.84199 10.6148C7.64491 10.7996 7.35509 10.7996 7.15801 10.6148L3.15801 6.86484C2.95655 6.67597 2.94635 6.35949 3.13523 6.15803Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </h3>
    );
};

export interface AccordionContentProps {
    children: React.ReactNode;
    className?: string;
    // Props passed by AccordionItem
    isExpanded?: boolean;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
    children,
    className = '',
    isExpanded,
}) => {
    return (
        <div
            className={`bf-accordion-content ${className}`}
            data-state={isExpanded ? 'open' : 'closed'}
            role="region"
            hidden={!isExpanded}
        >
            <div className="bf-accordion-content-inner">
                {children}
            </div>
        </div>
    );
};
