import { LandingPage } from './components/landing-page/landing-page';
import './index.scss';
import './styles/_typography.scss';
import './styles/_colors.scss';
import { Router, RouterProvider } from 'react-router-dom';
import { AppContext, appContextDefaultValue } from './contexts';
import { useEffect, useState } from 'react';
import { authenticationService } from './services/authentication';

export const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        authenticationService.subscribe(setLoggedIn);

        return () => authenticationService.unsubscribe(setLoggedIn);
    });

    return (
        <AppContext.Provider value={{ authentication: authenticationService, isLoggedIn }}>
            <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        </AppContext.Provider>
    );
};

export default App;
