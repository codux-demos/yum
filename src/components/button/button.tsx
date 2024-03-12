import classNames from 'classnames';
import { forwardRef } from 'react';
import { BaseButton, BaseButtonProps } from '../base-button/base-button';
import styles from './button.module.scss';

export interface ButtonProps extends BaseButtonProps {
    variant?: 'primary' | 'secondary' | 'unstyled';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'secondary', children = 'Label', ...props }, ref) => {
        return (
            <BaseButton
                className={classNames(styles.root, styles[variant], className)}
                {...props}
                ref={ref}
            >
                {children}
            </BaseButton>
        );
    }
);
