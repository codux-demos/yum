import { BaseButton, BaseButtonProps } from '../base-button/base-button';
import classNames from 'classnames';
import styles from './button.module.scss';

export interface ButtonProps extends BaseButtonProps {
    variant?: 'primary' | 'secondary' | 'unstyled';
}

export const Button = ({
    className,
    variant = 'secondary',
    children = 'Label',
    ...props
}: ButtonProps) => {
    return (
        <BaseButton className={classNames(styles.root, styles[variant], className)} {...props}>
            {children}
        </BaseButton>
    );
};
