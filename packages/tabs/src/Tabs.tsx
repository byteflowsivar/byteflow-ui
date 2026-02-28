import { createContext, useContext, useState, ReactNode } from 'react';
import './styles.css';

interface TabsContextProps {
    activeValue: string;
    setActiveValue: (value: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

export interface TabsProps {
    defaultValue: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: ReactNode;
    className?: string;
}

export const Tabs = ({
    defaultValue,
    value,
    onValueChange,
    children,
    className = '',
}: TabsProps) => {
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
            <div className={`bf-tabs ${className}`}>
                {children}
            </div>
        </TabsContext.Provider>
    );
};

export interface TabsListProps {
    children: ReactNode;
    className?: string;
}

export const TabsList = ({ children, className = '' }: TabsListProps) => (
    <div className={`bf-tabs-list ${className}`}>
        {children}
    </div>
);

export interface TabsTriggerProps {
    value: string;
    children: ReactNode;
    className?: string;
    disabled?: boolean;
}

export const TabsTrigger = ({ value, children, className = '', disabled }: TabsTriggerProps) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('TabsTrigger must be used within Tabs');

    const isActive = context.activeValue === value;

    return (
        <button
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={disabled}
            className={`bf-tabs-trigger ${isActive ? 'bf-tabs-trigger--active' : ''} ${className}`}
            onClick={() => context.setActiveValue(value)}
        >
            {children}
        </button>
    );
};

export interface TabsContentProps {
    value: string;
    children: ReactNode;
    className?: string;
}

export const TabsContent = ({ value, children, className = '' }: TabsContentProps) => {
    const context = useContext(TabsContext);
    if (!context) throw new Error('TabsContent must be used within Tabs');

    if (context.activeValue !== value) return null;

    return (
        <div role="tabpanel" className={`bf-tabs-content ${className}`}>
            {children}
        </div>
    );
};

Tabs.displayName = 'Tabs';
TabsList.displayName = 'TabsList';
TabsTrigger.displayName = 'TabsTrigger';
TabsContent.displayName = 'TabsContent';
