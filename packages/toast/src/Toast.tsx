import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

export interface ToastProps {
    id: string;
    title?: string;
    description?: string;
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    onClose: (id: string) => void;
}

const Toast: React.FC<ToastProps> = ({
    id,
    title,
    description,
    variant = 'default',
    duration = 5000,
    onClose
}) => {
    React.useEffect(() => {
        if (duration === Infinity) return;
        const timer = setTimeout(() => onClose(id), duration);
        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    return (
        <div className={`bf-toast bf-toast--${variant}`} role="alert">
            <div className="bf-toast-content">
                {title && <div className="bf-toast-title">{title}</div>}
                {description && <div className="bf-toast-description">{description}</div>}
            </div>
            <button className="bf-toast-close" onClick={() => onClose(id)} aria-label="Close">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </button>
        </div>
    );
};

interface ToastContextType {
    toast: (props: Omit<ToastProps, 'id' | 'onClose'>) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Omit<ToastProps, 'onClose'>[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const toast = useCallback(({ title, description, variant, duration }: Omit<ToastProps, 'id' | 'onClose'>) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, title, description, variant, duration }]);
    }, []);

    const value = useMemo(() => ({ toast }), [toast]);

    return (
        <ToastContext.Provider value={value}>
            {children}
            {createPortal(
                <div className="bf-toast-container">
                    {toasts.map((t) => (
                        <Toast key={t.id} {...t} onClose={removeToast} />
                    ))}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
};

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};
