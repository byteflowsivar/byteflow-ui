import React from 'react';
import './styles.css';

export interface InputGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** Si es true, el grupo ocupará todo el ancho disponible. */
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

export interface InputGroupTextProps extends React.HTMLAttributes<HTMLSpanElement> { }

/**
 * InputGroupText: Elemento para mostrar texto estático dentro del InputGroup.
 */
export const InputGroupText = ({ className = '', ...props }: InputGroupTextProps) => (
    <span className={`bf-input-group-text ${className}`} {...props} />
);

InputGroup.displayName = 'InputGroup';
InputGroupText.displayName = 'InputGroupText';
