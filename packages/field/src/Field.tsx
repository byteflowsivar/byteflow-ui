import React, { createContext, useContext, useId } from 'react';
import './styles.css';

interface FieldContextProps {
    id: string;
    errorId: string;
    descriptionId: string;
    isInvalid: boolean;
}

const FieldContext = createContext<FieldContextProps | undefined>(undefined);

export const useField = () => {
    const context = useContext(FieldContext);
    if (!context) {
        throw new Error('useField must be used within a Field provider');
    }
    return context;
};

/**
 * Propiedades del contenedor principal del campo.
 */
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Indica si el campo tiene un estado de error, afectando la visibilidad de FieldError. */
    isInvalid?: boolean;
}

/**
 * Field: Contenedor principal que provee contexto (id, errores) a sus sub-componentes.
 * Facilita la creación de formularios accesibles coordinando etiquetas, descripciones y errores.
 */
export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
    ({ isInvalid = false, children, className = '', ...props }, ref) => {
        const id = useId();
        const errorId = `${id}-error`;
        const descriptionId = `${id}-description`;

        return (
            <FieldContext.Provider value={{ id, errorId, descriptionId, isInvalid }}>
                <div
                    ref={ref}
                    className={`bf-field ${className}`}
                    {...props}
                >
                    {children}
                </div>
            </FieldContext.Provider>
        );
    }
);

/**
 * Propiedades de FieldLabel.
 */
export interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { }

/**
 * FieldLabel: Etiqueta vinculada automáticamente al input dentro del Field mediante la propiedad htmlFor.
 */
export const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
    ({ className = '', ...props }, ref) => {
        const { id } = useField();
        return (
            <label
                ref={ref}
                className={`bf-field-label ${className}`}
                htmlFor={id}
                {...props}
            />
        );
    }
);

/**
 * Propiedades de FieldDescription.
 */
export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> { }

/**
 * FieldDescription: Texto de ayuda o descripción para el campo, vinculado mediante aria-describedby.
 */
export const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
    ({ className = '', ...props }, ref) => {
        const { descriptionId } = useField();
        return (
            <p
                ref={ref}
                id={descriptionId}
                className={`bf-field-description ${className}`}
                {...props}
            />
        );
    }
);

/**
 * Propiedades de FieldError.
 */
export interface FieldErrorProps extends React.HTMLAttributes<HTMLParagraphElement> { }

/**
 * FieldError: Muestra el mensaje de error de forma condicional cuando el Field padre tiene isInvalid={true}.
 */
export const FieldError = React.forwardRef<HTMLParagraphElement, FieldErrorProps>(
    ({ className = '', ...props }, ref) => {
        const { errorId, isInvalid } = useField();
        if (!isInvalid) return null;
        return (
            <p
                ref={ref}
                id={errorId}
                className={`bf-field-error ${className}`}
                {...props}
            />
        );
    }
);

Field.displayName = 'Field';
FieldLabel.displayName = 'FieldLabel';
FieldDescription.displayName = 'FieldDescription';
FieldError.displayName = 'FieldError';
