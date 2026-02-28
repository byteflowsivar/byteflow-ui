import React from 'react';
import './styles.css';

export interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
    disabled?: boolean;
}

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

export const ItemPrefix = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-item-prefix ${className}`} {...props} />
);

export const ItemContent = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-item-content ${className}`} {...props} />
);

export const ItemSuffix = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-item-suffix ${className}`} {...props} />
);

Item.displayName = 'Item';
ItemPrefix.displayName = 'ItemPrefix';
ItemContent.displayName = 'ItemContent';
ItemSuffix.displayName = 'ItemSuffix';
