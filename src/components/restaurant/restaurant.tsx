import classNames from 'classnames';
import styles from './restaurant.module.scss';

export interface RestaurantProps {
    className?: string;
    restaurantName: string;
}

export const Restaurant = ({ className, restaurantName }: RestaurantProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>{restaurantName}</h1>
        </div>
    );
};
