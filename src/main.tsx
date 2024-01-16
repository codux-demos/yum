import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppContext, appContextDefaultValue } from './contexts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';
import './index.scss';

const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
    </React.StrictMode>
);
