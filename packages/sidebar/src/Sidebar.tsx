import React, { useState, useCallback, useMemo, createContext, useContext } from 'react';
import './styles.css';

/**
 * Propiedades del componente Sidebar (Barra lateral).
 */
export interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
    /** Determina si la barra lateral comienza colapsada. */
    defaultCollapsed?: boolean;
    /** Estado controlado para determinar si la barra lateral está colapsada. */
    collapsed?: boolean;
    /** Callback disparado al cambiar el estado de colapso. */
    onCollapseChange?: (collapsed: boolean) => void;
    /** Ancho de la barra lateral expandida. Ej: '280px'. */
    width?: string;
    /** Ancho de la barra lateral colapsada. Ej: '80px'. */
    collapsedWidth?: string;
}

interface SidebarContextValue {
    isCollapsed: boolean;
    toggleCollapse: () => void;
}

const SidebarContext = createContext<SidebarContextValue | undefined>(undefined);

/**
 * Hook para acceder al estado del Sidebar dentro de sus subcomponentes.
 */
export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) throw new Error('useSidebar debe usarse dentro de Sidebar');
    return context;
};

/**
 * Sidebar: Barra lateral de navegación altamente personalizable y colapsable.
 */
export const Sidebar = React.forwardRef<HTMLElement, SidebarProps>(
    ({
        children,
        defaultCollapsed = false,
        collapsed: controlledCollapsed,
        onCollapseChange,
        className = '',
        width = '280px',
        collapsedWidth = '80px',
        style,
        ...props
    }, ref) => {
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
                    ref={ref}
                    className={`bf-sidebar ${isCollapsed ? 'bf-sidebar--collapsed' : ''} ${className}`}
                    style={{
                        '--sidebar-width': width,
                        '--sidebar-collapsed-width': collapsedWidth,
                        ...style
                    } as React.CSSProperties}
                    {...props}
                >
                    <div className="bf-sidebar-wrapper">
                        {children}
                    </div>
                </aside>
            </SidebarContext.Provider>
        );
    }
);

/**
 * SidebarHeader: Sección superior de la barra lateral.
 */
export const SidebarHeader = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-sidebar-header ${className}`} {...props}>{children}</div>
);

/**
 * SidebarFooter: Sección inferior de la barra lateral.
 */
export const SidebarFooter = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-sidebar-footer ${className}`} {...props}>{children}</div>
);

/**
 * SidebarContent: Área central de scroll para los ítems de navegación.
 */
export const SidebarContent = ({ children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-sidebar-content ${className}`} {...props}>{children}</div>
);

/**
 * Propiedades para un ítem de navegación en la barra lateral.
 */
export interface SidebarItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Icono a mostrar. Se mantiene visible incluso al colapsar. */
    icon?: React.ReactNode;
    /** Indica si el ítem es la ruta activa. */
    active?: boolean;
    /** Contenido adicional a la derecha (solo visible si no está limitado). */
    suffix?: React.ReactNode;
}

/**
 * SidebarItem: Botón de navegación individual dentro de la barra lateral.
 */
export const SidebarItem = React.forwardRef<HTMLButtonElement, SidebarItemProps>(
    ({
        icon,
        children,
        active = false,
        onClick,
        suffix,
        className = '',
        ...props
    }, ref) => {
        const { isCollapsed } = useSidebar();

        return (
            <button
                ref={ref}
                type="button"
                className={`bf-sidebar-item ${active ? 'bf-sidebar-item--active' : ''} ${className}`}
                onClick={onClick}
                title={isCollapsed ? (typeof children === 'string' ? children : undefined) : undefined}
                {...props}
            >
                {icon && <span className="bf-sidebar-item-icon">{icon}</span>}
                {!isCollapsed && <span className="bf-sidebar-item-label">{children}</span>}
                {!isCollapsed && suffix && <span className="bf-sidebar-item-suffix">{suffix}</span>}
            </button>
        );
    }
);

/**
 * SidebarGroup: Agrupa ítems de navegación bajo un título.
 */
export const SidebarGroup = ({ label, children, className = '', ...props }: React.HTMLAttributes<HTMLDivElement> & { label?: string }) => {
    const { isCollapsed } = useSidebar();

    return (
        <div className={`bf-sidebar-group ${className}`} {...props}>
            {!isCollapsed && label && <div className="bf-sidebar-group-label">{label}</div>}
            <div className="bf-sidebar-group-content">
                {children}
            </div>
        </div>
    );
};

/**
 * SidebarToggle: Botón predefinido para contraer o expandir la barra lateral.
 */
export const SidebarToggle = ({ className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { isCollapsed, toggleCollapse } = useSidebar();

    return (
        <button
            type="button"
            className={`bf-sidebar-toggle ${className}`}
            onClick={toggleCollapse}
            aria-label={isCollapsed ? 'Expandir barra lateral' : 'Colapsar barra lateral'}
            {...props}
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

Sidebar.displayName = 'Sidebar';
SidebarItem.displayName = 'SidebarItem';
