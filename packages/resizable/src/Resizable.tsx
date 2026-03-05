import React, { useState, useCallback, useRef, useEffect } from 'react';
import './styles.css';

interface ResizablePanelGroupProps {
    children: React.ReactNode;
    direction?: 'horizontal' | 'vertical';
    className?: string;
}

export const ResizablePanelGroup: React.FC<ResizablePanelGroupProps> = ({
    children,
    direction = 'horizontal',
    className = '',
}) => {
    return (
        <div className={`bf-resizable-group bf-resizable-group--${direction} ${className}`}>
            {children}
        </div>
    );
};

interface ResizablePanelProps {
    children: React.ReactNode;
    defaultSize?: number;
    className?: string;
}

export const ResizablePanel: React.FC<ResizablePanelProps> = ({
    children,
    defaultSize,
    className = '',
}) => {
    const style = defaultSize ? { flex: `${defaultSize} 1 0%` } : { flex: '1 1 0%' };
    return (
        <div className={`bf-resizable-panel ${className}`} style={style}>
            {children}
        </div>
    );
};

interface ResizableHandleProps {
    className?: string;
    withHandle?: boolean;
}

export const ResizableHandle: React.FC<ResizableHandleProps> = ({
    className = '',
    withHandle = false,
}) => {
    return (
        <div className={`bf-resizable-handle ${className}`}>
            {withHandle && (
                <div className="bf-resizable-handle-icon">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 4.5C5.22386 4.5 5 4.72386 5 5C5 5.27614 5.22386 5.5 5.5 5.5C5.77614 5.5 6 5.27614 6 5C6 4.72386 5.77614 4.5 5.5 4.5ZM7.5 4.5C7.22386 4.5 7 4.72386 7 5C7 5.27614 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.27614 8 5C8 4.72386 7.77614 4.5 7.5 4.5ZM9.5 4.5C9.22386 4.5 9 4.72386 9 5C9 5.27614 9.22386 5.5 9.5 5.5C9.77614 5.5 10 5.27614 10 5C10 4.72386 9.77614 4.5 9.5 4.5ZM5.5 7.5C5.22386 7.5 5 7.72386 5 8C5 8.27614 5.22386 8.5 5.5 8.5C5.77614 8.5 6 8.27614 6 8C6 7.72386 5.77614 7.5 5.5 7.5ZM7.5 7.5C7.22386 7.5 7 7.72386 7 8C7 8.27614 7.22386 8.5 7.5 8.5C7.77614 8.5 8 8.27614 8 8C8 7.72386 7.77614 7.5 7.5 7.5ZM9.5 7.5C9.22386 7.5 9 7.72386 9 8C9 8.27614 9.22386 8.5 9.5 8.5C9.77614 8.5 10 8.27614 10 8C10 7.72386 9.77614 7.5 9.5 7.5ZM5.5 10.5C5.22386 10.5 5 10.7239 5 11C5 11.2761 5.22386 11.5 5.5 11.5C5.77614 11.5 6 11.2761 6 11C6 10.7239 5.77614 10.5 5.5 10.5ZM7.5 10.5C7.22386 10.5 7 10.7239 7 11C7 11.2761 7.22386 11.5 7.5 11.5C7.77614 11.5 8 11.2761 8 11C8 10.7239 7.77614 10.5 7.5 10.5ZM9.5 10.5C9.22386 10.5 9 10.7239 9 11C9 11.2761 9.22386 11.5 9.5 11.5C9.77614 11.5 10 11.2761 10 11C10 10.7239 9.77614 10.5 9.5 10.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                </div>
            )}
        </div>
    );
};
