import React from 'react';
import { Dialog, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogProps } from '@byteflow-ui/dialog';
import './styles.css';

export interface AlertDialogProps extends Omit<DialogProps, 'closeOnOutsideClick'> {
    // Alert Dialog usually doesn't close on outside click for critical actions
}

export const AlertDialog: React.FC<AlertDialogProps> = ({
    isOpen,
    onClose,
    children,
    className = '',
    closeOnEsc = true,
}) => {
    return (
        <Dialog
            isOpen={isOpen}
            onClose={onClose}
            className={`bf-alert-dialog ${className}`}
            closeOnOutsideClick={false}
            closeOnEsc={closeOnEsc}
        >
            {children}
        </Dialog>
    );
};

export const AlertDialogHeader = DialogHeader;
export const AlertDialogTitle = DialogTitle;
export const AlertDialogDescription = DialogDescription;
export const AlertDialogFooter = DialogFooter;

// Alias for specific alert dialog styles if needed, but we reuse dialog components
// for consistency in the composite pattern.
