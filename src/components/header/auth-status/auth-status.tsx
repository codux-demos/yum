import classNames from 'classnames';
import styles from './auth-status.module.scss';
import { Button } from '../../button/button';

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
                <button>UN</button>
            ) : (
                <div className={styles.actions}>
                    <Button onClick={onLogIn}>Log in</Button>
                    <Button variant="primary" onClick={onLogIn}>
                        Sign up {null}
                    </Button>
                </div>
            )}
        </div>
    );
};
