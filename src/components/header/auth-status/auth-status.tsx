import { Button } from '../../button/button';
import classNames from 'classnames';
import styles from './auth-status.module.scss';

export interface AuthStatusProps {
    className?: string;
    userAuthenticated?: boolean;
    onLogIn?: () => void;
    onSignUp?: () => void;
}

export const AuthStatus = ({
    className,
    userAuthenticated,
    onLogIn,
    onSignUp,
}: AuthStatusProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {userAuthenticated ? (
                <Button variant="unstyled">UN</Button>
            ) : (
                <div className={styles.actions}>
                    <Button onClick={onLogIn} variant="secondary">
                        Log in
                    </Button>
                    <Button variant="secondary" onClick={onLogIn}>
                        Sign up {null}
                    </Button>
                </div>
            )}
        </div>
    );
};
