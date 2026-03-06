import React from 'react';
import './styles.css';

/**
 * Propiedades del componente Empty.
 */
export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> { }

/**
 * Empty: Se utiliza para mostrar un estado amigable cuando no hay datos disponibles en una lista, tabla o sección.
 */
export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
    ({ className = '', ...props }, ref) => (
        <div
            ref={ref}
            className={`bf-empty ${className}`}
            {...props}
        />
    )
);

/**
 * EmptyIcon: Contenedor para el icono o ilustración central del estado vacío.
 */
export const EmptyIcon = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', children, ...props }, ref) => (
        <div
            ref={ref}
            className={`bf-empty-icon ${className}`}
            {...props}
        >
            {children}
        </div>
    )
);

/**
 * EmptyTitle: El mensaje de título principal para el estado vacío.
 */
export const EmptyTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className = '', ...props }, ref) => (
        <h3 ref={ref} className={`bf-empty-title ${className}`} {...props} />
    )
);

/**
 * EmptyDescription: Texto detallado que explica por qué la sección está vacía y qué puede hacer el usuario.
 */
export const EmptyDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className = '', ...props }, ref) => (
        <p ref={ref} className={`bf-empty-description ${className}`} {...props} />
    )
);

/**
 * EmptyAction: Contenedor para botones o enlaces de acción (CTA) que ayuden al usuario a salir del estado vacío.
 */
export const EmptyAction = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-empty-action ${className}`} {...props} />
    )
);

Empty.displayName = 'Empty';
EmptyIcon.displayName = 'EmptyIcon';
EmptyTitle.displayName = 'EmptyTitle';
EmptyDescription.displayName = 'EmptyDescription';
EmptyAction.displayName = 'EmptyAction';
