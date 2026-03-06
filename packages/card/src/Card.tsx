import React from 'react';
import './styles.css';

/**
 * Propiedades del componente Card.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> { }

/**
 * Card: Contenedor versátil para agrupar contenido relacionado, como imágenes, texto y acciones.
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-card ${className}`} {...props} />
    )
);

/**
 * CardHeader: Contenedor superior de la tarjeta, ideal para títulos y descripciones.
 */
export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-card-header ${className}`} {...props} />
    )
);

/**
 * CardTitle: Título principal de la tarjeta.
 */
export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
    ({ className = '', ...props }, ref) => (
        <h3 ref={ref} className={`bf-card-title ${className}`} {...props} />
    )
);

/**
 * CardDescription: Texto secundario descriptivo que acompaña al título.
 */
export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
    ({ className = '', ...props }, ref) => (
        <p ref={ref} className={`bf-card-description ${className}`} {...props} />
    )
);

/**
 * CardContent: El cuerpo principal de la tarjeta donde reside la mayor parte del contenido.
 */
export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-card-content ${className}`} {...props} />
    )
);

/**
 * CardFooter: Sección inferior de la tarjeta, comúnmente utilizada para acciones o botones.
 */
export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className = '', ...props }, ref) => (
        <div ref={ref} className={`bf-card-footer ${className}`} {...props} />
    )
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';
