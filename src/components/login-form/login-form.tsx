import { SocialLoginButton } from '../social-login-button/social-login-button';
import { Button } from '../button/button';
import { Input } from '../input/input';
import classNames from 'classnames';
import styles from './login-form.module.scss';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                <h1 className={styles.title}>Create an account or log in</h1>
                <span className={styles.subtitle}>Create a new Yum account or log in below</span>
            </div>
            <div className={styles.socialButtonsContainer}>
                <SocialLoginButton variant="google" />
                <SocialLoginButton variant="apple" />
                <SocialLoginButton variant="facebook" />
            </div>
            <div className={styles.dividerSection}>
                <hr className={styles.divider} />
                <span className={styles.dividerText}>or continue with your email</span>
            </div>
            <div className={styles.emailSection}>
                <Input placeholder="Email" />
                <Button variant="primary">Continue</Button>
            </div>
            <div className={styles.termsSection}>
                Please visit the Yum Privacy Statement to discover more about the processing of
                personal data at Yum. You can access the local Privacy Statement associated with
                your Yum account after specifying the country and language preferences relevant to
                you during registration.
            </div>
        </div>
    );
};
