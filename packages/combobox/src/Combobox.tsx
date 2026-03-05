import React, { useState, useRef, useCallback } from 'react';
import { Popover, PopoverTrigger, PopoverContent } from '@byteflow-ui/popover';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '@byteflow-ui/command';
import { Button } from '@byteflow-ui/button';
import './styles.css';

export interface ComboboxOption {
    value: string;
    label: string;
}

export interface ComboboxProps {
    options: ComboboxOption[];
    value?: string;
    onValueChange?: (value: string) => void;
    placeholder?: string;
    emptyText?: string;
    className?: string;
    disabled?: boolean;
}

export const Combobox: React.FC<ComboboxProps> = ({
    options,
    value,
    onValueChange,
    placeholder = 'Seleccionar opción...',
    emptyText = 'No se encontraron resultados.',
    className = '',
    disabled = false,
}) => {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>(null);

    const handleSelect = (selectedValue: string) => {
        onValueChange?.(selectedValue);
        setOpen(false);
    };

    const selectedLabel = options.find((opt) => opt.value === value)?.label || placeholder;

    return (
        <div className={`bf-combobox ${className}`}>
            <Popover>
                <PopoverTrigger>
                    <Button
                        ref={triggerRef}
                        variant="secondary"
                        role="combobox"
                        aria-expanded={open}
                        className="bf-combobox-trigger"
                        onClick={() => !disabled && setOpen(!open)}
                        disabled={disabled}
                    >
                        {selectedLabel}
                        <svg
                            className="bf-combobox-chevron"
                            width="12"
                            height="12"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819L7.5 8.6364L10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179C9.89245 5.25605 9.60753 5.25605 9.43179 5.43179L7.5 7.36358L5.56821 5.43179C5.39247 5.25605 5.10755 5.25605 4.93179 5.43179Z"
                                fill="currentColor"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            />
                        </svg>
                    </Button>
                </PopoverTrigger>
                <PopoverContent
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    anchorRef={triggerRef}
                    className="bf-combobox-content"
                    side="bottom"
                    align="start"
                >
                    <Command>
                        <CommandInput placeholder={`Buscar en ${placeholder.toLowerCase()}...`} />
                        <CommandList>
                            <CommandEmpty>{emptyText}</CommandEmpty>
                            <CommandGroup>
                                {options.map((option) => (
                                    <CommandItem
                                        key={option.value}
                                        value={option.value}
                                        onSelect={handleSelect}
                                        className={option.value === value ? 'bf-combobox-item--selected' : ''}
                                    >
                                        <svg
                                            className={`bf-combobox-check ${option.value === value ? 'bf-combobox-check--visible' : ''}`}
                                            width="15"
                                            height="15"
                                            viewBox="0 0 15 15"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29781 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78748L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        {option.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
        </div>
    );
};
