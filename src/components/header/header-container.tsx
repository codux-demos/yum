import { useState } from 'react';
import { Dialog } from '../dialog/dialog';
import { LoginForm } from '../login-form/login-form';
import { Header } from './header';
import { authenticationService } from '../../services/authentication';

export interface HeaderContainerProps {
    userAuthenticated?: boolean;
}

export const HeaderContainer = ({ userAuthenticated }: HeaderContainerProps) => {
    const [showLoginDialogOpen, setShowLoginDialogOpen] = useState(false);

    const handleLogin = () => {
        setShowLoginDialogOpen(true);
        authenticationService.login();
    };
    return (
        <>
            <Header
                userAuthenticated={userAuthenticated}
                onLogIn={handleLogin}
                onSignUp={handleLogin}
            />
            <Dialog
                open={showLoginDialogOpen}
                onClose={() => setShowLoginDialogOpen(false)}
                dismissible
            >
                <LoginForm />
            </Dialog>
        </>
    );
};
