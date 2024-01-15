import classNames from 'classnames';
import styles from './auth-status.module.scss';
import { Button } from '../../button/button';

export interface AuthStatusProps {
    className?: string;
    userAuthenticated?: boolean;
}

export const AuthStatus = ({ className, userAuthenticated }: AuthStatusProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            {userAuthenticated ? (
                <button>UN</button>
            ) : (
                <div className={styles.actions}>
                    <Button>Log in {null}
                    </Button>
                    <Button variant="primary">Sign up {null}
                    </Button></div>
            )}
        </div>
    );
};
