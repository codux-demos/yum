import type { FoodCategory } from '../../types';
import { Header } from '../header/header';
import { BusinessTypeFilterBar } from '../business-type-filter-bar/business-type-filter-bar';
import { Footer } from '../footer/footer';
import classNames from 'classnames';
import styles from './discover-page.module.scss';

export interface DiscoverPageProps {
    className?: string;
    foodCategories: FoodCategory[];
}

export const DiscoverPage = ({ className, foodCategories }: DiscoverPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header userAuthenticated={true} />
            <BusinessTypeFilterBar />
            <Footer />
        </div>
    );
};
