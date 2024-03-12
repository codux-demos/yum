import { useState } from 'react';
import { Dialog } from '../dialog/dialog';
import { LoginForm } from '../login-form/login-form';
import { Header } from './header';
import { authenticationService } from '../../services/authentication';

export interface HeaderContainerProps {
    userAuthenticated?: boolean;
}

export const HeaderContainer = ({ userAuthenticated }: HeaderContainerProps) => {
    const [isDialogOpen, toggleLoginDialog] = useState(false);

    const handleLogin = () => {
        toggleLoginDialog(true);
        authenticationService.login();
    };
    return (
        <>
            <Header
                userAuthenticated={userAuthenticated}
                onLogIn={handleLogin}
                onSignUp={handleLogin}
            />
            <Dialog open={isDialogOpen} onClose={() => toggleLoginDialog(false)} dismissible>
                <LoginForm />
            </Dialog>
        </>
    );
};
