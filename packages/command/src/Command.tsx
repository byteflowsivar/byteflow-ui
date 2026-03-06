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
    setSearch: (value: string) => void;
}

const CommandContext = createContext<CommandContextValue | undefined>(undefined);

/**
 * Command: Contenedor principal para una paleta de comandos o buscador.
 */
export const Command = React.forwardRef<HTMLDivElement, CommandProps>(
    ({ children, className = '', onKeyDown, ...props }, ref) => {
        const [search, setSearch] = useState('');

        return (
            <CommandContext.Provider value={{ search, setSearch }}>
                <div
                    ref={ref}
                    className={`bf-command ${className}`}
                    onKeyDown={onKeyDown}
                    role="application"
                    {...props}
                >
                    {children}
                </div>
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
        if (!context) throw new Error('CommandInput must be used within Command');

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
                    onChange={(e) => context.setSearch(e.target.value)}
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
    ({ children, className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-command-empty ${className}`} {...props}>
            {children}
        </div>
    )
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
        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            onSelect?.(value || '');
            props.onClick?.(e);
        };

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
