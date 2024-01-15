import { Outlet, RouteObject, redirect, LoaderFunctionArgs } from 'react-router-dom';
import { Discover } from './components/discover/discover';
import { Restaurant } from './components/restaurant/restaurant-container';
import { Restaurants } from './components/restaurants/restaurants';
import { restaurants as restaurantsData } from './data/restaurants';
import { Home } from './components/home/home';

export const routes: RouteObject[] = [
    {
        id: 'root',
        path: '/',
        element: <Home />,
        children: [
            {
                path: 'discover',
                element: <Discover data={restaurantsData} />,
            },
            {
                path: 'discover/restaurants',
                element: <Restaurants data={restaurantsData} />,
            },
            {
                path: 'stores',
                element: <div>Stores</div>,
            },
        ],
    },

    {
        path: ':country',
        element: <Outlet />,
        children: [
            {
                path: ':city',
                element: <Outlet />,
                children: [
                    {
                        path: 'restaurant/:id',
                        element: <Restaurant />,
                    },
                    {
                        path: 'venue/:id',
                        element: <div>VenueId</div>,
                    },
                    {
                        path: 'category/:id',
                        element: <div>CategoryId</div>,
                    },
                ],
            },
        ],
    },
    {
        path: '*',
        element: <div>404</div>,
    },
];
