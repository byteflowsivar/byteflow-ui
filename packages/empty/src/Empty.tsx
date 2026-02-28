import React from 'react';
import './styles.css';

export interface EmptyProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
    ({ className = '', ...props }, ref) => (
        <div
            ref={ref}
            className={`bf-empty ${className}`}
            {...props}
        />
    )
);

export const EmptyIcon = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-empty-icon ${className}`} {...props}>
        {children}
    </div>
);

export const EmptyTitle = ({ className = '', ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={`bf-empty-title ${className}`} {...props} />
);

export const EmptyDescription = ({ className = '', ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`bf-empty-description ${className}`} {...props} />
);

export const EmptyAction = ({ className = '', ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`bf-empty-action ${className}`} {...props} />
);

Empty.displayName = 'Empty';
EmptyIcon.displayName = 'EmptyIcon';
EmptyTitle.displayName = 'EmptyTitle';
EmptyDescription.displayName = 'EmptyDescription';
EmptyAction.displayName = 'EmptyAction';
