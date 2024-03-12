import classNames from 'classnames';
import { forwardRef } from 'react';
import { Button, ButtonProps } from '../button/button';
import { Icon, IconOptions } from '../icon/icon';
import styles from './icon-button.module.scss';

export interface IconButtonProps extends ButtonProps {
    icon?: IconOptions;
}

export const IconButton = forwardRef(({ className, icon = 'close', ...props }: IconButtonProps) => {
    return (
        <Button className={classNames(styles.root, className)} {...props}>
            <Icon icon={icon} />
        </Button>
    );
});
