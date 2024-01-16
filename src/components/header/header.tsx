import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './header.module.scss';
import { AuthStatus } from './auth-status/auth-status';
import { Logo } from '../logo/logo';
import { LinkButton } from '../link-button/link-button';
import { authenticationService } from '../../services/authentication';

export interface HeaderProps {
    className?: string;
    userAuthenticated?: boolean;
}

export const Header = ({ className, userAuthenticated }: HeaderProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.leftContainer}>
                    <Link to="/">
                        <Logo className={styles.logo} />
                    </Link>
                    {userAuthenticated && <LinkButton>Tel Aviv</LinkButton>}
                </div>
                {userAuthenticated ? <input placeholder="Search in Yum..." /> : <div />}
                <div className={styles.rightContainer}>
                    <AuthStatus
                        userAuthenticated={userAuthenticated}
                        logIn={() => authenticationService.login()}
                        signUp={() => null}
                    />
                </div>
            </div>
        </div>
    );
};
