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
    /** Indica si el campo tiene un estado de error. */
    isInvalid?: boolean;
}

/**
 * Field: Contenedor principal que provee contexto (id, errores) a sus sub-componentes.
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
 * FieldLabel: Etiqueta vinculada automáticamente al input dentro del Field.
 */
export const FieldLabel = ({ className = '', ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) => {
    const { id } = useField();
    return <label className={`bf-field-label ${className}`} htmlFor={id} {...props} />;
};

/**
 * FieldDescription: Texto de ayuda o descripción para el campo.
 */
export const FieldDescription = ({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const { descriptionId } = useField();
    return <p id={descriptionId} className={`bf-field-description ${className}`} {...props} />;
};

/**
 * FieldError: Muestra el mensaje de error solo si Field tiene isInvalid={true}.
 */
export const FieldError = ({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const { errorId, isInvalid } = useField();
    if (!isInvalid) return null;
    return <p id={errorId} className={`bf-field-error ${className}`} {...props} />;
};

Field.displayName = 'Field';
FieldLabel.displayName = 'FieldLabel';
FieldDescription.displayName = 'FieldDescription';
FieldError.displayName = 'FieldError';
