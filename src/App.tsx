import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AppContext, appContextDefaultValue } from './contexts';
import { routes } from './routes';
import './index.scss';
import './styles/_typography.scss';
import './styles/_colors.scss';
import './styles/_spacing.scss';

export const App = () => {
    const router = createBrowserRouter(routes);

    return (
        <AppContext.Provider value={appContextDefaultValue}>
            <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        </AppContext.Provider>
    );
};

export default App;
