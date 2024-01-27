import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'unstyled';
}

export const Button = ({
    className,
    variant = 'secondary',
    children = 'Label',
    ...props
}: ButtonProps) => {
    return (
        <button className={classNames(styles.root, styles[variant], className)} {...props}>
            {children}
        </button>
    );
};
