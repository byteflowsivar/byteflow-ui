import React, { useState, useRef } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@byteflow-ui/popover';
import { Calendar } from '@byteflow-ui/calendar';
import { Button } from '@byteflow-ui/button';
import './styles.css';

export interface DatePickerProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: Date;
    onValueChange?: (date: Date) => void;
    placeholder?: string;
    disabled?: boolean;
}

export const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onValueChange,
    placeholder = 'Seleccionar fecha...',
    className = '',
    disabled = false,
    ...props
}) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const handleSelect = (date: Date) => {
        onValueChange?.(date);
        setOpen(false);
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    };

    return (
        <div className={`bf-date-picker ${className}`} {...props}>
            <Popover>
                <PopoverTrigger>
                    <Button
                        ref={triggerRef}
                        variant="secondary"
                        className={`bf-date-picker-trigger ${!value ? 'bf-date-picker-trigger--empty' : ''}`}
                        onClick={() => !disabled && setOpen(!open)}
                        disabled={disabled}
                    >
                        <svg
                            className="bf-date-picker-icon"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.5 1C3.22386 1 3 1.22386 3 1.5V2.05C2.18341 2.19632 1.5 2.91001 1.5 3.75V11.25C1.5 12.2165 2.2835 13 3.25 13H11.75C12.7165 13 13.5 12.2165 13.5 11.25V3.75C13.5 2.91001 12.8166 2.19632 12 2.05V1.5C12 1.22386 11.7761 1 11.5 1C11.2239 1 11 1.22386 11 1.5V2H4V1.5C4 1.22386 3.77614 1 3.5 1ZM12.5 4.75V11.25C12.5 11.6642 12.1642 12 11.75 12H3.25C2.83579 12 2.5 11.6642 2.5 11.25V4.75H12.5ZM12.5 3.75C12.5 4.02614 12.2761 4.25 12 4.25H3C2.72386 4.25 2.5 4.02614 2.5 3.75C2.5 3.47386 2.72386 3.25 3 3.25H12C12.2761 3.25 12.5 3.47386 12.5 3.75Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                        {value ? formatDate(value) : placeholder}
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    anchorRef={triggerRef}
                    className="bf-date-picker-content"
                    side="bottom"
                    align="start"
                >
                    <Calendar selected={value} onSelect={handleSelect} />
                </PopoverContent>
            </Popover>
        </div>
    );
};
