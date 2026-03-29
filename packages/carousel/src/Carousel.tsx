import React, { createContext, useContext, useCallback, useRef, useState, useEffect } from 'react';
import './styles.css';

interface CarouselContextProps {
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollNext: boolean;
    canScrollPrev: boolean;
}

const CarouselContext = createContext<CarouselContextProps | undefined>(undefined);

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const Carousel: React.FC<CarouselProps> = ({
    children,
    className = '',
    ...props
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    const onScroll = useCallback(() => {
        if (!containerRef.current) return;
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollPrev(scrollLeft > 0);
        setCanScrollNext(scrollLeft < scrollWidth - clientWidth - 1);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', onScroll);
            onScroll();
            return () => container.removeEventListener('scroll', onScroll);
        }
    }, [onScroll]);

    const scrollPrev = useCallback(() => {
        containerRef.current?.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
    }, []);

    const scrollNext = useCallback(() => {
        containerRef.current?.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
    }, []);

    return (
        <CarouselContext.Provider value={{ scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
            <div className={`bf-carousel ${className}`} role="region" aria-roledescription="carousel" {...props}>
                <div ref={containerRef} className="bf-carousel-viewport">
                    <div className="bf-carousel-content">{children}</div>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

export interface CarouselItemProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const CarouselItem: React.FC<CarouselItemProps> = ({
    children,
    className = '',
    ...props
}) => (
    <div className={`bf-carousel-item ${className}`} role="group" aria-roledescription="slide" {...props}>
        {children}
    </div>
);

export interface CarouselButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const CarouselPrevious: React.FC<CarouselButtonProps> = ({ className = '', ...props }) => {
    const context = useContext(CarouselContext);
    if (!context) throw new Error('CarouselPrevious must be used within Carousel');

    return (
        <button
            className={`bf-carousel-btn bf-carousel-btn--prev ${className}`}
            onClick={(e) => {
                context.scrollPrev();
                props.onClick?.(e);
            }}
            disabled={!context.canScrollPrev || props.disabled}
            aria-label="Anterior"
            {...props}
        >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94627 8.84182 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
        </button>
    );
};

export const CarouselNext: React.FC<CarouselButtonProps> = ({ className = '', ...props }) => {
    const context = useContext(CarouselContext);
    if (!context) throw new Error('CarouselNext must be used within Carousel');

    return (
        <button
            className={`bf-carousel-btn bf-carousel-btn--next ${className}`}
            onClick={(e) => {
                context.scrollNext();
                props.onClick?.(e);
            }}
            disabled={!context.canScrollNext || props.disabled}
            aria-label="Siguiente"
            {...props}
        >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.1584 3.13514C5.95694 3.32401 5.94673 3.64042 6.13559 3.84188L9.565 7.49991L6.13559 11.1579C5.94673 11.3594 5.95694 11.6758 6.1584 11.8647C6.35985 12.0535 6.67627 12.0433 6.86513 11.8419L10.6151 7.84188C10.7954 7.64955 10.7954 7.35027 10.6151 7.15794L6.86513 3.15794C6.67627 2.94627 6.35985 2.95648 6.1584 3.13514Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
            </svg>
        </button>
    );
};

