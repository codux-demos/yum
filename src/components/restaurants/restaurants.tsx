import type { Restaurant } from '../../types';
import { NavLink } from '../nav-link/nav-link';
import { BusinessTypeFilterBar } from '../business-type-filter-bar/business-type-filter-bar';
import classNames from 'classnames';
import styles from './restaurants.module.scss';

export interface RestaurantsProps {
    className?: string;
    data: Restaurant[];
}

export const Restaurants = ({ className, data }: RestaurantsProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Restaurants</h1>
            <ul>
                {data.map((restaurant) => {
                    const path = `/${restaurant.country}/${restaurant.city}/restaurant/${restaurant.id}`;
                    return (
                        <li key={restaurant.id}>
                            <NavLink to={path}>{restaurant.id}</NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
