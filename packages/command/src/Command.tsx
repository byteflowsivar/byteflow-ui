import React, { useState, useCallback, useMemo, createContext, useContext, useEffect, useRef } from 'react';
import './styles.css';

export interface CommandProps {
    children: React.ReactNode;
    className?: string;
    onKeyDown?: (e: React.KeyboardEvent) => void;
}

interface CommandContextValue {
    search: string;
    setSearch: (value: string) => void;
}

const CommandContext = createContext<CommandContextValue | undefined>(undefined);

export const Command: React.FC<CommandProps> = ({ children, className = '', onKeyDown }) => {
    const [search, setSearch] = useState('');

    return (
        <CommandContext.Provider value={{ search, setSearch }}>
            <div className={`bf-command ${className}`} onKeyDown={onKeyDown} role="application">
                {children}
            </div>
        </CommandContext.Provider>
    );
};

export interface CommandInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

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

CommandInput.displayName = 'CommandInput';

export const CommandList: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = '',
}) => <div className={`bf-command-list ${className}`}>{children}</div>;

export const CommandEmpty: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = '',
}) => {
    const context = useContext(CommandContext);
    // This is a simple implementation, usually you'd check for visible items
    return <div className={`bf-command-empty ${className}`}>{children}</div>;
};

export const CommandGroup: React.FC<{ children: React.ReactNode; heading?: string; className?: string }> = ({
    children,
    heading,
    className = '',
}) => (
    <div className={`bf-command-group ${className}`} role="group">
        {heading && <div className="bf-command-group-heading">{heading}</div>}
        <div className="bf-command-group-content">{children}</div>
    </div>
);

export interface CommandItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onSelect'> {
    children: React.ReactNode;
    onSelect?: (value: string) => void;
    value?: string;
    className?: string;
}

export const CommandItem: React.FC<CommandItemProps> = ({
    children,
    onSelect,
    value,
    className = '',
    ...props
}) => {
    const handleClick = () => {
        onSelect?.(value || '');
    };

    return (
        <button
            type="button"
            className={`bf-command-item ${className}`}
            onClick={handleClick}
            role="option"
            {...props}
        >
            {children}
        </button>
    );
};

export const CommandSeparator: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`bf-command-separator ${className}`} />
);

export const CommandShortcut: React.FC<{ children: React.ReactNode; className?: string }> = ({
    children,
    className = '',
}) => <span className={`bf-command-shortcut ${className}`}>{children}</span>;
