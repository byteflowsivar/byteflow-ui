import React from 'react';
import './styles.css';

/**
 * Propiedades del componente Breadcrumb.
 */
export interface BreadcrumbProps extends React.ComponentPropsWithoutRef<'nav'> {
    /** Elemento opcional para usar como separador entre niveles. */
    separator?: React.ReactNode;
}

/**
 * Breadcrumb: Ayuda a los usuarios a visualizar la jerarquía de navegación y volver a niveles superiores.
 */
export const Breadcrumb = React.forwardRef<HTMLElement, BreadcrumbProps>(
    ({ ...props }, ref) => <nav ref={ref} aria-label="breadcrumb" {...props} />
);

/**
 * BreadcrumbList: Lista ordenada (ol) que contiene los elementos del breadcrumb.
 */
export const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(
    ({ className = '', ...props }, ref) => (
        <ol
            ref={ref}
            className={`bf-breadcrumb-list ${className}`}
            {...props}
        />
    )
);

/**
 * BreadcrumbItem: Contenedor individual para cada nivel de navegación.
 */
export const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
    ({ className = '', ...props }, ref) => (
        <li
            ref={ref}
            className={`bf-breadcrumb-item ${className}`}
            {...props}
        />
    )
);

/**
 * BreadcrumbLink: Enlace interactivo dentro del breadcrumb.
 */
export const BreadcrumbLink = React.forwardRef<HTMLAnchorElement, React.ComponentPropsWithoutRef<'a'>>(
    ({ className = '', ...props }, ref) => (
        <a
            ref={ref}
            className={`bf-breadcrumb-link ${className}`}
            {...props}
        />
    )
);

/**
 * BreadcrumbPage: Representa la página actual dentro de la ruta (estado no interactivo).
 */
export const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
    ({ className = '', ...props }, ref) => (
        <span
            ref={ref}
            role="link"
            aria-disabled="true"
            aria-current="page"
            className={`bf-breadcrumb-page ${className}`}
            {...props}
        />
    )
);

/**
 * BreadcrumbSeparator: El elemento visual que separa los niveles.
 */
export const BreadcrumbSeparator = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
    ({ children, className = '', ...props }, ref) => (
        <li
            ref={ref}
            role="presentation"
            aria-hidden="true"
            className={`bf-breadcrumb-separator ${className}`}
            {...props}
        >
            {children || (
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.1584 11.4746L5.45142 10.7676L8.71899 7.50001L5.45142 4.23243L6.1584 3.52545L10.133 7.50001L6.1584 11.4746Z"
                        fill="currentColor"
                    />
                </svg>
            )}
        </li>
    )
);

/**
 * BreadcrumbEllipsis: Indicador visual para rutas truncadas o muy largas.
 */
export const BreadcrumbEllipsis = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(
    ({ className = '', ...props }, ref) => (
        <span
            ref={ref}
            role="presentation"
            aria-hidden="true"
            className={`bf-breadcrumb-ellipsis ${className}`}
            {...props}
        >
            <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM13.625 7.5C13.625 8.12132 13.1213 8.625 12.5 8.625C11.8787 8.625 11.375 8.12132 11.375 7.5C11.375 6.87868 11.8787 6.375 12.5 6.375C13.1213 6.375 13.625 6.87868 13.625 7.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>
            <span className="bf-sr-only">Más opciones</span>
        </span>
    )
);

Breadcrumb.displayName = 'Breadcrumb';
BreadcrumbList.displayName = 'BreadcrumbList';
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbLink.displayName = 'BreadcrumbLink';
BreadcrumbPage.displayName = 'BreadcrumbPage';
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator';
BreadcrumbEllipsis.displayName = 'BreadcrumbEllipsis';
