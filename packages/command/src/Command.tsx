import React, { useState, useCallback, useMemo, createContext, useContext, useEffect, useRef } from 'react';
import './styles.css';

/**
 * Propiedades del componente Command.
 */
export interface CommandProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Contenido del comando. */
    children: React.ReactNode;
}

interface CommandContextValue {
    search: string;
    filteredCount: number;
}

interface CommandActionsContextValue {
    setSearch: (value: string) => void;
    registerItem: (id: string, isVisible: boolean) => void;
    unregisterItem: (id: string) => void;
}

const CommandContext = createContext<CommandContextValue | undefined>(undefined);
const CommandActionsContext = createContext<CommandActionsContextValue | undefined>(undefined);

/**
 * Command: Contenedor principal para una paleta de comandos o buscador.
 */
export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
    ({ children, className = '', onKeyDown, ...props }, ref) => {
        const [search, setSearch] = useState('');
        const [visibleItems, setVisibleItems] = useState<Record<string, boolean>>({});

        const registerItem = useCallback((id: string, isVisible: boolean) => {
            setVisibleItems(prev => {
                if (prev[id] === isVisible) return prev;
                return { ...prev, [id]: isVisible };
            });
        }, []);

        const unregisterItem = useCallback((id: string) => {
            setVisibleItems(prev => {
                if (!(id in prev)) return prev;
                const newItems = { ...prev };
                delete newItems[id];
                return newItems;
            });
        }, []);

        const filteredCount = useMemo(() =>
            Object.values(visibleItems).filter(visible => visible === true).length
            , [visibleItems]);

        const stateValue = useMemo(() => ({
            search,
            filteredCount
        }), [search, filteredCount]);

        const actionsValue = useMemo(() => ({
            setSearch,
            registerItem,
            unregisterItem
        }), [registerItem, unregisterItem]);

        return (
            <CommandContext.Provider value={stateValue}>
                <CommandActionsContext.Provider value={actionsValue}>
                    <div
                        ref={ref}
                        className={`bf-command ${className}`}
                        onKeyDown={onKeyDown}
                        role="application"
                        {...props}
                    >
                        {children}
                    </div>
                </CommandActionsContext.Provider>
            </CommandContext.Provider>
        );
    }
);

/**
 * Propiedades para el input del Command.
 */
export interface CommandInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

/**
 * CommandInput: Campo de búsqueda para la paleta de comandos.
 */
export const CommandInput = React.forwardRef<HTMLInputElement, CommandInputProps>(
    ({ className = '', ...props }, ref) => {
        const context = useContext(CommandContext);
        const actions = useContext(CommandActionsContext);
        if (!context || !actions) throw new Error('CommandInput must be used within Command');

        return (
            <div className="bf-command-input-wrapper">
                <svg
                    className="bf-command-search-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    />
                </svg>
                <input
                    ref={ref}
                    className={`bf-command-input ${className}`}
                    value={context.search}
                    onChange={(e) => actions.setSearch(e.target.value)}
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck={false}
                    {...props}
                />
            </div>
        );
    }
);

/**
 * CommandList: Contenedor para los grupos e ítems de resultados.
 */
export const CommandList = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-command-list ${className}`} {...props}>
            {children}
        </div>
    )
);

/**
 * CommandEmpty: Mensaje a mostrar cuando no hay resultados de búsqueda.
 */
export const CommandEmpty = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ children, className = '', ...props }, ref) => {
        const context = useContext(CommandContext);
        if (!context) return null;

        // Solo se muestra si hay una búsqueda activa Y no hay items filtrados
        if (context.search !== '' && context.filteredCount === 0) {
            return (
                <div ref={ref} className={`bf-command-empty ${className}`} {...props}>
                    {children}
                </div>
            );
        }

        return null;
    }
);

/**
 * CommandGroup: Agrupa ítems relacionados con un encabezado opcional.
 */
export const CommandGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { heading?: string }>(
    ({ children, heading, className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-command-group ${className}`} role="group" {...props}>
            {heading && <div className="bf-command-group-heading">{heading}</div>}
            <div className="bf-command-group-content">{children}</div>
        </div>
    )
);

/**
 * Propiedades para un ítem del comando.
 */
export interface CommandItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onSelect'> {
    /** Callback al seleccionar el ítem. */
    onSelect?: (value: string) => void;
    /** Valor del ítem para la selección. */
    value?: string;
}

/**
 * CommandItem: Un ítem seleccionable dentro de la paleta.
 */
export const CommandItem = React.forwardRef<HTMLButtonElement, CommandItemProps>(
    ({ children, onSelect, value, className = '', ...props }, ref) => {
        const context = useContext(CommandContext);
        const actions = useContext(CommandActionsContext);
        const id = useRef(Math.random().toString(36).substr(2, 9)).current;

        const itemValue = value || (typeof children === 'string' ? children : '');
        const isVisible = useMemo(() => {
            if (!context?.search) return true;
            return itemValue.toLowerCase().includes(context.search.toLowerCase());
        }, [context?.search, itemValue]);

        // Registrar/desregistrar y actualizar visibilidad
        // Separamos esto en un efecto que NO depende de context (el objeto que cambia mucho)
        // sino de las acciones estables y el valor de isVisible real.
        useEffect(() => {
            if (!actions) return;
            actions.registerItem(id, isVisible);
            return () => actions.unregisterItem(id);
        }, [id, isVisible, actions]);

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            onSelect?.(value || '');
            props.onClick?.(e);
        };

        if (!isVisible) return null;

        return (
            <button
                ref={ref}
                type="button"
                className={`bf-command-item ${className}`}
                onClick={handleClick}
                role="option"
                {...props}
            >
                {children}
            </button>
        );
    }
);

/**
 * Separador visual para grupos de comandos.
 */
export const CommandSeparator = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-command-separator ${className}`} {...props} />
    )
);

/**
 * Atajo de teclado visual para un ítem.
 */
export const CommandShortcut = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={`bf-command-shortcut ${className}`} {...props}>{children}</span>
);
