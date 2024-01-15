import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { createContext } from 'react';
import { routes } from './routes';

export const AuthContext = createContext<{ isAuthenticated: boolean }>({ isAuthenticated: false });

export const App = () => {
    const router = createBrowserRouter(routes);
    return <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />;
};

export default App;
