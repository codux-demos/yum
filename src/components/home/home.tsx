import { Header } from '../header/header';
import { BusinessTypeFilterBar } from '../business-type-filter-bar/business-type-filter-bar';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames';
import styles from './home.module.scss';

export interface HomeProps {
    className?: string;
}

export const Home = ({ className }: HomeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header />
            <BusinessTypeFilterBar />
            <Outlet />
        </div>
    );
};
