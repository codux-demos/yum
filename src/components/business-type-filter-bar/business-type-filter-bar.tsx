import { NavLink } from '../nav-link/nav-link';
import classNames from 'classnames';
import styles from './business-type-filter-bar.module.scss';

export interface BusinessTypeFilterBarProps {
    className?: string;
}

const filterOptions = [
    { id: 'discover', label: 'Discover', path: '/discover' },
    { id: 'restaurants', label: 'Restaurants', path: '/discover/restaurants' },
    { id: 'stores', label: 'Stores', path: '/discover/stores' },
];

export const BusinessTypeFilterBar = ({ className }: BusinessTypeFilterBarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav className={styles.content}>
                <ul className={styles.list}>
                    {filterOptions.map((option) => (
                        <li key={option.id}>
                            <NavLink
                                className={styles.button}
                                isActiveClassName={styles.active}
                                to={option.path}
                                end
                            >
                                {option.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
