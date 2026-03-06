import React, { createContext, useContext, useState } from 'react';
import './styles.css';

interface TabsContextProps {
    activeValue: string;
    setActiveValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

/**
 * Propiedades del componente Tabs (Pestañas).
 */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Valor de la pestaña seleccionada por defecto. */
    defaultValue: string;
    /** Valor de la pestaña seleccionada (modo controlado). */
    value?: string;
    /** Callback disparado al cambiar de pestaña. */
    onValueChange?: (value: string) => void;
}

/**
 * Tabs: Componente para organizar contenido en múltiples vistas accesibles mediante pestañas.
 */
export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
    ({
        defaultValue,
        value,
        onValueChange,
        children,
        className = '',
        ...props
    }, ref) => {
        const [internalValue, setInternalValue] = useState(defaultValue);

        const activeValue = value !== undefined ? value : internalValue;

        const setActiveValue = (newValue: string) => {
            if (value === undefined) {
                setInternalValue(newValue);
            }
            onValueChange?.(newValue);
        };

        return (
            <TabsContext.Provider value={{ activeValue, setActiveValue }}>
                <div
                    ref={ref}
                    className={`bf-tabs ${className}`}
                    {...props}
                >
                    {children}
                </div>
            </TabsContext.Provider>
        );
    }
);

/**
 * Propiedades de la lista de gatillos de pestañas.
 */
export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> { }

/**
 * TabsList: Contenedor para los TabsTrigger.
 */
export const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
    ({ children, className = '', ...props }, ref) => (
        <div
            ref={ref}
            className={`bf-tabs-list ${className}`}
            role="tablist"
            {...props}
        >
            {children}
        </div>
    )
);

/**
 * Propiedades del gatillo de una pestaña.
 */
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Valor único asociado a la pestaña que este gatillo activa. */
    value: string;
}

/**
 * TabsTrigger: El botón que activa una pestaña específica.
 */
export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
    ({ value, children, className = '', disabled, ...props }, ref) => {
        const context = useContext(TabsContext);
        if (!context) throw new Error('TabsTrigger debe usarse dentro de Tabs');

        const isActive = context.activeValue === value;

        return (
            <button
                ref={ref}
                type="button"
                role="tab"
                aria-selected={isActive}
                disabled={disabled}
                className={`bf-tabs-trigger ${isActive ? 'bf-tabs-trigger--active' : ''} ${className}`}
                onClick={(e) => {
                    context.setActiveValue(value);
                    props.onClick?.(e);
                }}
                {...props}
            >
                {children}
            </button>
        );
    }
);

/**
 * Propiedades del contenido de una pestaña.
 */
export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Valor que debe coincidir con el del TabsTrigger para mostrar este contenido. */
    value: string;
}

/**
 * TabsContent: El contenedor que muestra el contenido asociado a una pestaña.
 */
export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
    ({ value, children, className = '', ...props }, ref) => {
        const context = useContext(TabsContext);
        if (!context) throw new Error('TabsContent debe usarse dentro de Tabs');

        if (context.activeValue !== value) return null;

        return (
            <div
                ref={ref}
                role="tabpanel"
                className={`bf-tabs-content ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';
