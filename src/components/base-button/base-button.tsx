import { Button, ButtonProps } from '@ariakit/react';
import classNames from 'classnames';
import styles from './base-button.module.scss';

export interface BaseButtonProps extends ButtonProps {}

export const BaseButton = ({
    className,
    children,
    accessibleWhenDisabled = true,
    ...props
}: BaseButtonProps) => {
    return (
        <Button className={classNames(styles.root, className)} accessibleWhenDisabled {...props}>
            {children}
        </Button>
    );
};
