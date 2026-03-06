import React, { useState, useCallback, useMemo } from 'react';
import './styles.css';

/**
 * Propiedades del componente Accordion.
 */
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Determina si se puede abrir un solo ítem o varios simultáneamente. */
    type?: 'single' | 'multiple';
    /** Valor del ítem (o ítems) expandidos por defecto. */
    defaultValue?: string | string[];
    /** Callback disparado al cambiar los ítems expandidos. */
    onValueChange?: (value: string | string[]) => void;
}

interface AccordionContextValue {
    expandedValue: string | string[];
    toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined);

/**
 * Accordion: Una lista de secciones de contenido que se pueden expandir o contraer.
 */
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
    ({
        children,
        type = 'single',
        defaultValue = type === 'single' ? '' : [],
        onValueChange,
        className = '',
        ...props
    }, ref) => {
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
                <div
                    ref={ref}
                    className={`bf-accordion ${className}`}
                    role="presentation"
                    {...props}
                >
                    {children}
                </div>
            </AccordionContext.Provider>
        );
    }
);

/**
 * Propiedades de un ítem del Accordion.
 */
export interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Identificador único para este ítem. */
    value: string;
    /** Si el ítem está deshabilitado. */
    disabled?: boolean;
}

/**
 * AccordionItem: Representa una sección individual dentro del Accordion.
 */
export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({
        value,
        children,
        disabled = false,
        className = '',
        ...props
    }, ref) => {
        const context = React.useContext(AccordionContext);
        if (!context) throw new Error('AccordionItem must be used within Accordion');

        const isExpanded = Array.isArray(context.expandedValue)
            ? context.expandedValue.includes(value)
            : context.expandedValue === value;

        return (
            <div
                ref={ref}
                className={`bf-accordion-item ${isExpanded ? 'bf-accordion-item--expanded' : ''} ${disabled ? 'bf-accordion-item--disabled' : ''} ${className}`}
                data-state={isExpanded ? 'open' : 'closed'}
                {...props}
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
    }
);

/**
 * Propiedades del activador de un ítem del Accordion.
 */
export interface AccordionTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Props pasadas internamente por AccordionItem (habitualmente no se pasan manualmente). */
    isExpanded?: boolean;
}

/**
 * AccordionTrigger: El encabezado interactivo que expande o contrae el AccordionItem.
 */
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
    ({
        children,
        className = '',
        isExpanded,
        disabled,
        onClick,
        ...props
    }, ref) => {
        return (
            <h3 className="bf-accordion-header">
                <button
                    ref={ref}
                    type="button"
                    className={`bf-accordion-trigger ${className}`}
                    onClick={onClick}
                    aria-expanded={isExpanded}
                    aria-disabled={disabled}
                    data-state={isExpanded ? 'open' : 'closed'}
                    {...props}
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
    }
);

/**
 * Propiedades del contenido expandible del Accordion.
 */
export interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Prop pasada internamente por AccordionItem. */
    isExpanded?: boolean;
}

/**
 * AccordionContent: Contenedor que alberga el contenido revelado por un AccordionItem.
 */
export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
    ({
        children,
        className = '',
        isExpanded,
        ...props
    }, ref) => {
        return (
            <div
                ref={ref}
                className={`bf-accordion-content ${className}`}
                data-state={isExpanded ? 'open' : 'closed'}
                role="region"
                hidden={!isExpanded}
                {...props}
            >
                <div className="bf-accordion-content-inner">
                    {children}
                </div>
            </div>
        );
    }
);

Accordion.displayName = 'Accordion';
AccordionItem.displayName = 'AccordionItem';
AccordionTrigger.displayName = 'AccordionTrigger';
AccordionContent.displayName = 'AccordionContent';
