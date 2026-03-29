import React, { useState, useRef, useEffect, useCallback } from 'react';
import './styles.css';

export interface NavigationMenuProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export const NavigationMenu: React.FC<NavigationMenuProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <nav className={`bf-navigation-menu ${className}`} {...props}>
            <ul className="bf-navigation-menu-list">
                {children}
            </ul>
        </nav>
    );
};

export interface NavigationMenuItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
    children: React.ReactNode;
}

export const NavigationMenuItem: React.FC<NavigationMenuItemProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <li className={`bf-navigation-menu-item ${className}`} {...props}>
            {children}
        </li>
    );
};

export interface NavigationMenuTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export const NavigationMenuTrigger: React.FC<NavigationMenuTriggerProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <button className={`bf-navigation-menu-trigger ${className}`} {...props}>
            {children}
            <svg
                className="bf-navigation-menu-chevron"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M3.13523 6.15803C3.3241 5.95657 3.64057 5.94637 3.84203 6.13523L7.5 9.56464L11.158 6.13523C11.3594 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67597 11.842 6.86484L7.84199 10.6148C7.64491 10.7996 7.35509 10.7996 7.15801 10.6148L3.15801 6.86484C2.95655 6.67597 2.94635 6.35949 3.13523 6.15803Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
};

export interface NavigationMenuContentProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export const NavigationMenuContent: React.FC<NavigationMenuContentProps> = ({
    children,
    className = '',
    ...props
}) => {
    return (
        <div className={`bf-navigation-menu-content ${className}`} {...props}>
            {children}
        </div>
    );
};

export interface NavigationMenuLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: React.ReactNode;
}

export const NavigationMenuLink: React.FC<NavigationMenuLinkProps> = ({
    children,
    href = '#',
    className = '',
    ...props
}) => (
    <a href={href} className={`bf-navigation-menu-link ${className}`} {...props}>
        {children}
    </a>
);

