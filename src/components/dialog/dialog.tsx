import { ReactNode } from 'react';
import {
    Dialog as AriakitDialog,
    DialogDismiss as AriakitDialogDismiss,
    DialogOptions,
    DialogProvider as AriakitDialogProvider,
} from '@ariakit/react';
import { IconButton } from '../icon-button/icon-button';
import classNames from 'classnames';
import styles from './dialog.module.scss';

export interface DialogElementsClassNames {
    backdrop?: string;
}

export interface DialogProps extends DialogOptions {
    className?: string;
    children?: ReactNode;
    dismissible?: boolean;
    elementsClassNames?: DialogElementsClassNames;
}

export const Dialog = ({
    className,
    elementsClassNames = {},
    dismissible = false,
    children,
    ...props
}: DialogProps) => {
    return (
        <AriakitDialogProvider>
            <AriakitDialog
                className={classNames(styles.root, className)}
                backdrop={
                    <div
                        className={classNames(styles.backdrop, elementsClassNames.backdrop)}
                        hidden={!open}
                    />
                }
                {...props}
            >
                {children}
                {dismissible && (
                    <AriakitDialogDismiss
                        render={<IconButton className={styles.dismissButton} icon="close" />}
                    ></AriakitDialogDismiss>
                )}
            </AriakitDialog>
        </AriakitDialogProvider>
    );
};
