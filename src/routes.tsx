import { Outlet, RouteObject, redirect } from 'react-router-dom';
import { authenticationService } from './services/authentication';
import { DiscoverPageContainer } from './components/discover-page/discover-page-container';
import { RestaurantsPageContainer } from './components/restaurants-page/restaurants-page-container';
import { StoresPageContainer } from './components/stores-page/stores-page-container';
import { LandingPage } from './components/landing-page/landing-page';

export function loader() {
    if (!authenticationService.getAuthStatus()) {
        return null;
    }

    return redirect('/us/new-york');
}

export const routes: RouteObject[] = [
    {
        id: 'root',
        path: '/',
        element: <LandingPage />,
        loader,
    },
    {
        path: ':country/:city',
        element: <Outlet />,
        children: [
            {
                path: '',
                element: <DiscoverPageContainer />,
            },
            {
                path: 'restaurants',
                element: <RestaurantsPageContainer />,
            },
            {
                path: 'stores',
                element: <StoresPageContainer />,
            },
        ],
    },
    {
        path: '*',
        element: <div>404</div>,
    },
];
