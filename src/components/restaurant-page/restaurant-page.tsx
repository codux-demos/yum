import { Header } from '../header/header';
import { BusinessTypeFilterBar } from '../business-type-filter-bar/business-type-filter-bar';
import { Footer } from '../footer/footer';
import classNames from 'classnames';
import styles from './restaurant-page.module.scss';

export interface RestaurantPageProps {
    className?: string;
    restaurantName: string;
}

export const RestaurantPage = ({ className, restaurantName }: RestaurantPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header userAuthenticated={true} />
            <BusinessTypeFilterBar />
            <section className={styles.section}>
                <div className={styles.content}>
                    <h1>{restaurantName}</h1>
                </div>
            </section>
            <Footer />
        </div>
    );
};
