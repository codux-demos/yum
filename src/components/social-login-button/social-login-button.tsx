import { Button } from '../button/button';
import { ButtonHTMLAttributes } from 'react';
import { Icon, IconOptions } from '../icon/icon';
import classNames from 'classnames';
import styles from './social-login-button.module.scss';

export type socialButtonOptions = 'apple' | 'facebook' | 'google';

const labelsDictionary: Record<socialButtonOptions, string> = {
    apple: 'Continue with Apple',
    facebook: 'Continue with Facebook',
    google: 'Continue with Google',
};

export interface SocialLoginButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: socialButtonOptions;
}

export const SocialLoginButton = ({ className, variant = 'apple' }: SocialLoginButtonProps) => {
    const icon = `${variant}Logo` as IconOptions;
    return (
        <Button className={classNames(styles.root, styles[variant], className)} variant="unstyled">
            <Icon icon={icon} />
            {labelsDictionary[variant]}
        </Button>
    );
};
