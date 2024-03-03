import type { Restaurant } from '../../types';
import { NavLink } from '../nav-link/nav-link';
import { Header } from '../header/header';
import { BusinessTypeFilterBar } from '../business-type-filter-bar/business-type-filter-bar';
import { Footer } from '../footer/footer';
import classNames from 'classnames';
import styles from './restaurants-page.module.scss';

export interface RestaurantsPageProps {
    className?: string;
    restaurants: Restaurant[];
}

export const RestaurantsPage = ({ className, restaurants }: RestaurantsPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header userAuthenticated={true} />
            <BusinessTypeFilterBar />
            <section className={styles.section}>
                <div className={styles.content}>
                    <h1>Restaurants</h1>
                    <ul>
                        {restaurants.map((restaurant) => {
                            const path = `/${restaurant.country}/${restaurant.city}/restaurant/${restaurant.id}`;
                            return (
                                <li key={restaurant.id}>
                                    <NavLink to={path}>{restaurant.id}</NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
            <Footer />
        </div>
    );
};
