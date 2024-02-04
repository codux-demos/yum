import { BaseButton, BaseButtonProps } from '../base-button/base-button';
import classNames from 'classnames';
import styles from './link-button.module.scss';

export interface LinkButtonProps extends BaseButtonProps {}

export const LinkButton = ({ className, children, ...props }: LinkButtonProps) => {
    return (
        <BaseButton className={classNames(styles.root, className)} {...props}>
            {children}
        </BaseButton>
    );
};
