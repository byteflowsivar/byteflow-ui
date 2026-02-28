import React from 'react';
import './styles.css';

export interface ScrollAreaProps extends React.HTMLAttributes<HTMLDivElement> {
    maxHeight?: string | number;
    hideScrollbar?: boolean;
}

export const ScrollArea = ({
    children,
    maxHeight,
    hideScrollbar = false,
    className = '',
    style,
    ...props
}: ScrollAreaProps) => {
    const containerStyle: React.CSSProperties = {
        maxHeight: maxHeight || '100%',
        ...style,
    };

    const classes = [
        'bf-scroll-area',
        hideScrollbar ? 'bf-scroll-area--hide-scrollbar' : '',
        className
    ].filter(Boolean).join(' ');

    return (
        <div className={classes} style={containerStyle} {...props}>
            <div className="bf-scroll-area-content">
                {children}
            </div>
        </div>
    );
};

ScrollArea.displayName = 'ScrollArea';
