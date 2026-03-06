import React, { useState } from 'react';
import './styles.css';

/**
 * Propiedades del componente Toggle.
 */
export interface ToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Estado del toggle (controlado). Indicar true para 'presionado'. */
    pressed?: boolean;
    /** Estado inicial del toggle cuando no es controlado. */
    defaultPressed?: boolean;
    /** Callback disparado cuando el estado del toggle cambia. */
    onPressedChange?: (pressed: boolean) => void;
    /** Estética visual: default (relleno), outline (borde), ghost (transparente). */
    variant?: 'default' | 'outline' | 'ghost';
    /** Tamaño del botón de toggle. */
    size?: 'sm' | 'md' | 'lg';
}

/**
 * Toggle: Un botón de dos estados que permite alternar una opción.
 * A diferencia del Switch, el Toggle se comporta y se ve como un botón que se queda "hundido".
 */
export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
    ({
        pressed: controlledPressed,
        defaultPressed = false,
        onPressedChange,
        variant = 'default',
        size = 'md',
        className = '',
        onClick,
        ...props
    }, ref) => {
        const [internalPressed, setInternalPressed] = useState(defaultPressed);

        const isPressed = controlledPressed !== undefined ? controlledPressed : internalPressed;

        const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
            const nextPressed = !isPressed;
            if (controlledPressed === undefined) {
                setInternalPressed(nextPressed);
            }
            onPressedChange?.(nextPressed);
            onClick?.(e);
        };

        const toggleClasses = [
            'bf-toggle',
            `bf-toggle--${variant}`,
            `bf-toggle--${size}`,
            isPressed ? 'bf-toggle--pressed' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <button
                type="button"
                ref={ref}
                aria-pressed={isPressed}
                className={toggleClasses}
                onClick={handleClick}
                {...props}
            />
        );
    }
);

Toggle.displayName = 'Toggle';
