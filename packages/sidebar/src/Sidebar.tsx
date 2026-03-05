import React, { useState, useCallback, useMemo, createContext, useContext } from 'react';
import './styles.css';

export interface SidebarProps {
    children: React.ReactNode;
    defaultCollapsed?: boolean;
    collapsed?: boolean;
    onCollapseChange?: (collapsed: boolean) => void;
    className?: string;
    width?: string;
    collapsedWidth?: string;
}

interface SidebarContextValue {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error('useSidebar must be used within Sidebar');
    return context;
};

export const Sidebar: React.FC<SidebarProps> = ({
    children,
    defaultCollapsed = false,
    collapsed: controlledCollapsed,
    onCollapseChange,
    className = '',
    width = '280px',
    collapsedWidth = '80px',
}) => {
    const [uncontrolledCollapsed, setUncontrolledCollapsed] = useState(defaultCollapsed);
    const isControlled = controlledCollapsed !== undefined;
    const isCollapsed = isControlled ? controlledCollapsed : uncontrolledCollapsed;

    const toggleCollapse = useCallback(() => {
        const nextCollapsed = !isCollapsed;
        if (!isControlled) {
            setUncontrolledCollapsed(nextCollapsed);
        }
        onCollapseChange?.(nextCollapsed);
    }, [isCollapsed, isControlled, onCollapseChange]);

    const contextValue = useMemo(() => ({
        isCollapsed,
        toggleCollapse,
    }), [isCollapsed, toggleCollapse]);

    return (
        <SidebarContext.Provider value={contextValue}>
            <aside
                className={`bf-sidebar ${isCollapsed ? 'bf-sidebar--collapsed' : ''} ${className}`}
                style={{
                    '--sidebar-width': width,
                    '--sidebar-collapsed-width': collapsedWidth
                } as React.CSSProperties}
            >
                <div className="bf-sidebar-wrapper">
                    {children}
                </div>
            </aside>
        </SidebarContext.Provider>
    );
};

export const SidebarHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bf-sidebar-header ${className}`}>{children}</div>
);

export const SidebarFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bf-sidebar-footer ${className}`}>{children}</div>
);

export const SidebarContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bf-sidebar-content ${className}`}>{children}</div>
);

export interface SidebarItemProps {
    icon?: React.ReactNode;
    children: React.ReactNode;
    active?: boolean;
    onClick?: () => void;
    suffix?: React.ReactNode;
    className?: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
    icon,
    children,
    active = false,
    onClick,
    suffix,
    className = '',
}) => {
    const { isCollapsed } = useSidebar();

    return (
        <button
            type="button"
            className={`bf-sidebar-item ${active ? 'bf-sidebar-item--active' : ''} ${className}`}
            onClick={onClick}
            title={isCollapsed ? (typeof children === 'string' ? children : undefined) : undefined}
        >
            {icon && <span className="bf-sidebar-item-icon">{icon}</span>}
            {!isCollapsed && <span className="bf-sidebar-item-label">{children}</span>}
            {!isCollapsed && suffix && <span className="bf-sidebar-item-suffix">{suffix}</span>}
        </button>
    );
};

export const SidebarGroup: React.FC<{ label?: string; children: React.ReactNode; className?: string }> = ({
    label,
    children,
    className = '',
}) => {
    const { isCollapsed } = useSidebar();

    return (
        <div className={`bf-sidebar-group ${className}`}>
            {!isCollapsed && label && <div className="bf-sidebar-group-label">{label}</div>}
            <div className="bf-sidebar-group-content">
                {children}
            </div>
        </div>
    );
};

export const SidebarToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
    const { isCollapsed, toggleCollapse } = useSidebar();

    return (
        <button
            type="button"
            className={`bf-sidebar-toggle ${className}`}
            onClick={toggleCollapse}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: isCollapsed ? 'rotate(180deg)' : 'none' }}
            >
                <path d="M10.1464 2.14645C10.3417 1.95118 10.6583 1.95118 10.8536 2.14645C11.0488 2.34171 11.0488 2.65829 10.8536 2.85355L6.20711 7.5L10.8536 12.1464C11.0488 12.3417 11.0488 12.6583 10.8536 12.8536C10.6583 13.0488 10.3417 13.0488 10.1464 12.8536L4.79289 7.5L10.1464 2.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
            </svg>
        </button>
    );
};
