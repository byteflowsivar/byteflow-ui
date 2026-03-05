import React, { useState, useCallback, useMemo } from 'react';
import './styles.css';

export interface CollapsibleProps {
    children: React.ReactNode;
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    disabled?: boolean;
    className?: string;
}

interface CollapsibleContextValue {
    isOpen: boolean;
    disabled: boolean;
    toggle: () => void;
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | undefined>(undefined);

export const Collapsible: React.FC<CollapsibleProps> = ({
    children,
    defaultOpen = false,
    open: controlledOpen,
    onOpenChange,
    disabled = false,
    className = '',
}) => {
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isControlled = controlledOpen !== undefined;
    const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

    const toggle = useCallback(() => {
        if (disabled) return;
        const nextOpen = !isOpen;
        if (!isControlled) {
            setUncontrolledOpen(nextOpen);
        }
        onOpenChange?.(nextOpen);
    }, [disabled, isOpen, isControlled, onOpenChange]);

    const contextValue = useMemo(() => ({
        isOpen,
        disabled,
        toggle,
    }), [isOpen, disabled, toggle]);

    return (
        <CollapsibleContext.Provider value={contextValue}>
            <div
                className={`bf-collapsible ${isOpen ? 'bf-collapsible--open' : ''} ${disabled ? 'bf-collapsible--disabled' : ''} ${className}`}
                data-state={isOpen ? 'open' : 'closed'}
                data-disabled={disabled ? '' : undefined}
            >
                {children}
            </div>
        </CollapsibleContext.Provider>
    );
};

export interface CollapsibleTriggerProps {
    children: React.ReactNode;
    className?: string;
}

export const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({
    children,
    className = '',
}) => {
    const context = React.useContext(CollapsibleContext);
    if (!context) throw new Error('CollapsibleTrigger must be used within Collapsible');

    return (
        <button
            type="button"
            className={`bf-collapsible-trigger ${className}`}
            onClick={context.toggle}
            aria-expanded={context.isOpen}
            aria-disabled={context.disabled}
            data-state={context.isOpen ? 'open' : 'closed'}
            disabled={context.disabled}
        >
            {children}
        </button>
    );
};

export interface CollapsibleContentProps {
    children: React.ReactNode;
    className?: string;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({
    children,
    className = '',
}) => {
    const context = React.useContext(CollapsibleContext);
    if (!context) throw new Error('CollapsibleContent must be used within Collapsible');

    return (
        <div
            className={`bf-collapsible-content ${className}`}
            data-state={context.isOpen ? 'open' : 'closed'}
            hidden={!context.isOpen}
        >
            <div className="bf-collapsible-content-inner">
                {children}
            </div>
        </div>
    );
};
