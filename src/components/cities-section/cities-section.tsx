import { LinkButton } from '../link-button/link-button';
import { Country } from '../../types';
import classNames from 'classnames';
import styles from './cities-section.module.scss';

export interface CitiesSectionProps {
    className?: string;
    country: Country;
}

export const CitiesSection = ({ className, country }: CitiesSectionProps) => {
    const cities = country.cities;
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Yum cities in <LinkButton>{country.name}</LinkButton>
                    </h2>
                    <LinkButton>View all Yum cities</LinkButton>
                </div>
                <ul className={styles.list}>
                    {cities.map((city) => (
                        <li key={city.id}>
                            <LinkButton>{city.name}</LinkButton>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
