import classNames from 'classnames';
import styles from './auth-status.module.scss';
import { Button } from '../../button/button';
import { authenticationService } from '../../../services/authentication';

export interface AuthStatusProps {
    className?: string;
    userAuthenticated?: boolean;
    logIn: () => void;
    signUp: () => void;
}

export const AuthStatus = ({ className, userAuthenticated, logIn, signUp }: AuthStatusProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {userAuthenticated ? (
                <button>UN</button>
            ) : (
                <div className={styles.actions}>
                    <Button onClick={logIn}>Log in</Button>
                    <Button variant="primary">Sign up {null}</Button>
                </div>
            )}
        </div>
    );
};
