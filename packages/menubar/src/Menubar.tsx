import React, { useState, useCallback, useRef, useEffect } from 'react';
import './styles.css';

export interface MenubarProps {
    children: React.ReactNode;
    className?: string;
}

interface MenubarContextValue {
    activeMenu: string | null;
    setActiveMenu: (id: string | null) => void;
}

const MenubarContext = React.createContext<MenubarContextValue | undefined>(undefined);

export const Menubar: React.FC<MenubarProps> = ({
    children,
    className = '',
}) => {
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const menubarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menubarRef.current && !menubarRef.current.contains(event.target as Node)) {
                setActiveMenu(null);
            }
        };

        if (activeMenu) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeMenu]);

    return (
        <MenubarContext.Provider value={{ activeMenu, setActiveMenu }}>
            <div ref={menubarRef} className={`bf-menubar ${className}`} role="menubar">
                {children}
            </div>
        </MenubarContext.Provider>
    );
};

export const MenubarMenu: React.FC<{ children: React.ReactNode; value: string }> = ({
    children,
    value,
}) => {
    return (
        <div className="bf-menubar-menu">
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as React.ReactElement<any>, { value });
                }
                return child;
            })}
        </div>
    );
};

export const MenubarTrigger: React.FC<{ children: React.ReactNode; value?: string }> = ({
    children,
    value,
}) => {
    const context = React.useContext(MenubarContext);
    if (!context) throw new Error('MenubarTrigger must be used within Menubar');

    const isOpen = context.activeMenu === value;

    const handleMouseEnter = () => {
        if (context.activeMenu && value) {
            context.setActiveMenu(value);
        }
    };

    const handleClick = () => {
        if (value) {
            context.setActiveMenu(isOpen ? null : value);
        }
    };

    return (
        <button
            type="button"
            className={`bf-menubar-trigger ${isOpen ? 'bf-menubar-trigger--active' : ''}`}
            onMouseEnter={handleMouseEnter}
            onClick={handleClick}
            role="menuitem"
            aria-haspopup="true"
            aria-expanded={isOpen}
        >
            {children}
        </button>
    );
};

export const MenubarContent: React.FC<{ children: React.ReactNode; value?: string }> = ({
    children,
    value,
}) => {
    const context = React.useContext(MenubarContext);
    if (!context) throw new Error('MenubarContent must be used within Menubar');

    const isOpen = context.activeMenu === value;

    if (!isOpen) return null;

    return (
        <div className="bf-menubar-content" role="menu">
            {children}
        </div>
    );
};

export const MenubarItem: React.FC<{
    children: React.ReactNode;
    onClick?: () => void;
    shortcut?: string;
    disabled?: boolean;
    className?: string;
}> = ({
    children,
    onClick,
    shortcut,
    disabled = false,
    className = '',
}) => {
        const context = React.useContext(MenubarContext);

        const handleAction = () => {
            if (disabled) return;
            onClick?.();
            context?.setActiveMenu(null);
        };

        return (
            <button
                type="button"
                className={`bf-menubar-item ${disabled ? 'bf-menubar-item--disabled' : ''} ${className}`}
                onClick={handleAction}
                disabled={disabled}
                role="menuitem"
            >
                <span className="bf-menubar-item-label">{children}</span>
                {shortcut && <span className="bf-menubar-item-shortcut">{shortcut}</span>}
            </button>
        );
    };

export const MenubarSeparator: React.FC = () => (
    <div className="bf-menubar-separator" />
);

export const MenubarLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bf-menubar-label">{children}</div>
);
