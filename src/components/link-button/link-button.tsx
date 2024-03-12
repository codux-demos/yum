import classNames from 'classnames';
import styles from './link-button.module.scss';
import { BaseButton, BaseButtonProps } from '../base-button/base-button';

export interface LinkButtonProps extends BaseButtonProps {}

export const LinkButton = ({ className, children, ...props }: LinkButtonProps) => {
    return (
        <BaseButton className={classNames(styles.root, className)} {...props}>
            {children}
        </BaseButton>
    );
};
