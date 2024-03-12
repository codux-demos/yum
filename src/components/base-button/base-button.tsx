import { Button, ButtonProps } from '@ariakit/react';
import classNames from 'classnames';
import { forwardRef } from 'react';
import styles from './base-button.module.scss';

export interface BaseButtonProps extends ButtonProps {}

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ className, children, accessibleWhenDisabled = true, ...props }, ref) => {
        return (
            <Button
                className={classNames(styles.root, className)}
                accessibleWhenDisabled
                {...props}
                ref={ref}
            >
                {children}
            </Button>
        );
    }
);
