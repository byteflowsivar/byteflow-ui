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

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    isInvalid?: boolean;
}

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

export const FieldLabel = ({ className = '', ...props }: any) => {
    const { id } = useField();
    return <label className={`bf-field-label ${className}`} htmlFor={id} {...props} />;
};

export const FieldDescription = ({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const { descriptionId } = useField();
    return <p id={descriptionId} className={`bf-field-description ${className}`} {...props} />;
};

export const FieldError = ({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => {
    const { errorId, isInvalid } = useField();
    if (!isInvalid) return null;
    return <p id={errorId} className={`bf-field-error ${className}`} {...props} />;
};

Field.displayName = 'Field';
FieldLabel.displayName = 'FieldLabel';
FieldDescription.displayName = 'FieldDescription';
FieldError.displayName = 'FieldError';
