import React from 'react';
import './styles.css';

/**
 * Propiedades del componente Item.
 */
export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Indica si el ítem está seleccionado visualmente. */
    selected?: boolean;
    /** Deshabilita la interacción con el ítem. */
    disabled?: boolean;
}

/**
 * Item: Un componente base flexible para elementos de lista, menús o selectores. 
 * Soporta prefijos (iconos), contenido principal y sufijos (badges, flechas).
 */
export const Item = React.forwardRef<HTMLDivElement, ItemProps>(
    ({ selected = false, disabled = false, className = '', ...props }, ref) => {
        const classes = [
            'bf-item',
            selected ? 'bf-item--selected' : '',
            disabled ? 'bf-item--disabled' : '',
            className
        ].filter(Boolean).join(' ');

        return (
            <div
                ref={ref}
                className={classes}
                aria-selected={selected}
                aria-disabled={disabled}
                {...props}
            />
        );
    }
);

/**
 * ItemPrefix: Contenedor para elementos que preceden al contenido principal (ej. Iconos, Avatares).
 */
export const ItemPrefix = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-item-prefix ${className}`} {...props} />
    )
);

/**
 * ItemContent: Contenedor para el cuerpo principal o texto del ítem.
 */
export const ItemContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-item-content ${className}`} {...props} />
    )
);

/**
 * ItemSuffix: Contenedor para elementos que siguen al contenido principal (ej. Badges, Shortcuts).
 */
export const ItemSuffix = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-item-suffix ${className}`} {...props} />
    )
);

Item.displayName = 'Item';
ItemPrefix.displayName = 'ItemPrefix';
ItemContent.displayName = 'ItemContent';
ItemSuffix.displayName = 'ItemSuffix';
