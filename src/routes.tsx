import { Outlet, RouteObject, redirect } from 'react-router-dom';
import App from './App';
import { authenticationService } from './services/authentication';
import { DiscoverContainer } from './components/discover/discover-container';
import { RestaurantsContainer } from './components/restaurants/restaurants-container';
import { LandingPage } from './components/landing-page/landing-page';

export function loader() {
    if (!authenticationService.getAuthStatus()) {
        return null;
    }

    return redirect('/il/tel-aviv');
}

export const routes: RouteObject[] = [
    {
        id: 'root',
        path: '/',
        element: <App />,
        loader,
    },
    {
        path: ':country/:city',
        element: <Outlet />,
        children: [
            {
                path: '',
                element: <DiscoverContainer />,
            },
            {
                path: 'restaurants',
                element: <RestaurantsContainer />,
            },
            {
                path: 'stores',
                element: <RestaurantsContainer />,
            },
        ],

        // children: [
        //     {
        //         index: true,
        //         path: 'restaurant/:id',
        //         element: <RestaurantContainer />,
        //     },
        //     {
        //         path: 'venue/:id',
        //         element: <div>VenueId</div>,
        //     },
        //     {
        //         path: 'category/:id',
        //         element: <div>CategoryId</div>,
        //     },
        // ],
    },
    {
        path: '*',
        element: <div>404</div>,
    },
];
