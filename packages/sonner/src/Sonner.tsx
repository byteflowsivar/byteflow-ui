import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

export interface SonnerToastProps {
    id: string;
    message: string;
    description?: string;
    type?: 'default' | 'success' | 'error' | 'warning' | 'info';
    duration?: number;
    onClose: (id: string) => void;
    index: number;
    total: number;
}

const SonnerToast: React.FC<SonnerToastProps> = ({
    id,
    message,
    description,
    type = 'default',
    duration = 4000,
    onClose,
    index,
    total
}) => {
    React.useEffect(() => {
        if (duration === Infinity) return;
        const timer = setTimeout(() => onClose(id), duration);
        return () => clearTimeout(timer);
    }, [id, duration, onClose]);

    // Sonner stacking logic
    const scale = 1 - (total - 1 - index) * 0.05;
    const yOffset = (total - 1 - index) * 10;
    const opacity = 1 - (total - 1 - index) * 0.2;

    return (
        <div
            className={`bf-sonner-toast bf-sonner-toast--${type}`}
            style={{
                '--index': index,
                '--total': total,
                transform: `translateY(-${yOffset}px) scale(${scale})`,
                opacity: opacity >= 0 ? opacity : 0,
                zIndex: index
            } as any}
        >
            <div className="bf-sonner-content">
                <div className="bf-sonner-message">{message}</div>
                {description && <div className="bf-sonner-description">{description}</div>}
            </div>
            <button className="bf-sonner-close" onClick={() => onClose(id)}>
                <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
            </button>
        </div>
    );
};

interface SonnerContextType {
    toast: (message: string, options?: Omit<SonnerToastProps, 'id' | 'message' | 'onClose' | 'index' | 'total'>) => void;
}

const SonnerContext = createContext<SonnerContextType | undefined>(undefined);

/**
 * Propiedades opcionales para disparar un toast.
 */
export type SonnerOptions = Omit<SonnerToastProps, 'id' | 'message' | 'onClose' | 'index' | 'total'>;

export const Toaster: React.FC = () => {
    const context = useContext(SonnerContext);
    if (!context) return null;
    return null; // The logic is in ToasterProvider, but we follow sonner's API name
};

/**
 * ToasterProvider: Proveedor de contexto para manejar las notificaciones Sonner.
 */
export const ToasterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [toasts, setToasts] = useState<Omit<SonnerToastProps, 'onClose' | 'index' | 'total'>[]>([]);

    const removeToast = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const toast = useCallback((message: string, options?: SonnerOptions) => {
        const id = Math.random().toString(36).substr(2, 9);
        setToasts((prev) => [...prev, { id, message, ...options }]);
    }, []);

    const value = useMemo(() => ({ toast }), [toast]);

    return (
        <SonnerContext.Provider value={value}>
            {children}
            {createPortal(
                <div className="bf-sonner-container">
                    {toasts.map((t, i) => (
                        <SonnerToast
                            key={t.id}
                            {...t}
                            onClose={removeToast}
                            index={i}
                            total={toasts.length}
                        />
                    ))}
                </div>,
                document.body
            )}
        </SonnerContext.Provider>
    );
};

/**
 * Objeto imperativo para disparar toasts (Placeholder).
 */
export const sonner = {
    toast: (_message: string, _options?: SonnerOptions) => {
        // This is a placeholder for the imperative API if needed, 
        // but since we use context, we'll mostly use the hook.
    }
};


export const useSonner = () => {
    const context = useContext(SonnerContext);
    if (!context) {
        throw new Error('useSonner must be used within a ToasterProvider');
    }
    return context;
};
