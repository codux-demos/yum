import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './link-button.module.scss';

export interface LinkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const LinkButton = ({ className, children, ...props }: LinkButtonProps) => {
    return (
        <button className={classNames(styles.root, className)} {...props}>
            {children}
        </button>
    );
};
