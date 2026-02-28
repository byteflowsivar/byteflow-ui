import React from 'react';
import { Label } from '@byteflow-ui/label';
import './styles.css';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    required?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = '', label, error, required, disabled, id, ...props }, ref) => {
        const textareaId = id || `bf-textarea-${Math.random().toString(36).substr(2, 9)}`;
        const errorId = error ? `${textareaId}-error` : undefined;

        const textareaClasses = [
            'bf-textarea',
            error ? 'bf-textarea--error' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <div className="bf-textarea-container">
                {label && (
                    <Label
                        htmlFor={textareaId}
                        required={required}
                        disabled={disabled}
                    >
                        {label}
                    </Label>
                )}
                <textarea
                    id={textareaId}
                    ref={ref}
                    className={textareaClasses}
                    disabled={disabled}
                    required={required}
                    aria-invalid={error ? 'true' : 'false'}
                    aria-describedby={errorId}
                    {...props}
                />
                {error && (
                    <span id={errorId} className="bf-textarea__error-msg">
                        {error}
                    </span>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';
