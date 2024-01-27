import { Link } from 'react-router-dom';
import { AuthStatus } from './auth-status/auth-status';
import { Logo } from '../logo/logo';
import { LinkButton } from '../link-button/link-button';
import classNames from 'classnames';
import styles from './header.module.scss';

export interface HeaderProps {
    className?: string;
    userAuthenticated?: boolean;
    onLogIn?: () => void;
    onSignUp?: () => void;
}

export const Header = ({ className, userAuthenticated, onLogIn, onSignUp }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <Link to="/">
                        <Logo className={styles.logo} />
                    </Link>
                    {userAuthenticated && <LinkButton>New York</LinkButton>}
                </div>
                {userAuthenticated ? <input placeholder="Search in Yum..." /> : <div />}
                <div className={styles.rightContainer}>
                    <AuthStatus
                        userAuthenticated={userAuthenticated}
                        onLogIn={onLogIn}
                        onSignUp={onSignUp}
                    />
                </div>
            </div>
        </div>
    );
};
