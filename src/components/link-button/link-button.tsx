import classNames from 'classnames';
import styles from './link-button.module.scss';
import { ButtonProps } from '../button/button';
import { Button } from '@ariakit/react';

export interface LinkButtonProps extends ButtonProps {}

export const LinkButton = ({ className, children, ...props }: LinkButtonProps) => {
    return (
        <Button className={classNames(styles.root, className)} {...props}>
            {children}
        </Button>
    );
};
