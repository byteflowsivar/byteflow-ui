import React from 'react';
import './styles.css';

/**
 * Propiedades del componente InputGroup.
 */
export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Contenido del grupo (inputs, botones, texto). */
    children: React.ReactNode;
    /** Si es true, el grupo ocupará todo el ancho disponible del contenedor. */
    fullWidth?: boolean;
}

/**
 * InputGroup: Un contenedor que organiza inputs con complementos (addons) o elementos.
 * Permite fusionar visualmente varios elementos en un solo campo físico.
 */
export const InputGroup = React.forwardRef<HTMLDivElement, InputGroupProps>(
    ({ children, className = '', fullWidth = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`bf-input-group ${fullWidth ? 'bf-input-group--full-width' : ''} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

/**
 * Propiedades del texto complementario para InputGroup.
 */
export interface InputGroupTextProps extends React.HTMLAttributes<HTMLSpanElement> { }

/**
 * InputGroupText: Elemento para mostrar texto estático o iconos dentro de un InputGroup.
 */
export const InputGroupText = React.forwardRef<HTMLSpanElement, InputGroupTextProps>(
    ({ className = '', ...props }, ref) => (
        <span
            ref={ref}
            className={`bf-input-group-text ${className}`}
            {...props}
        />
    )
);

InputGroup.displayName = 'InputGroup';
InputGroupText.displayName = 'InputGroupText';
