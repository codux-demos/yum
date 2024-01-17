import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppContext, appContextDefaultValue } from './contexts';
import { useEffect, useState } from 'react';
import { authenticationService } from './services/authentication';
import { routes } from './routes';
import './index.scss';
import './styles/_typography.scss';
import './styles/_colors.scss';

export const App = () => {
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        authenticationService.subscribe(setLoggedIn);

        return () => authenticationService.unsubscribe(setLoggedIn);
    });

    const router = createBrowserRouter(routes);

    return (
        <AppContext.Provider value={appContextDefaultValue}>
            <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        </AppContext.Provider>
    );
};

export default App;
