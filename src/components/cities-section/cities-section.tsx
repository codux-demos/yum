import classNames from 'classnames';
import styles from './cities-section.module.scss';
import { LinkButton } from '../link-button/link-button';

export interface CitiesSectionProps {
    className?: string;
}

export const CitiesSection = ({ className }: CitiesSectionProps) => {
    const cities = [
        'Austin',
        'Baltimore',
        'Boston',
        'Charlotte',
        'Columbus',
        'Dallas',
        'Denver',
        'Detroit',
        'El Paso',
        'Fort Worth',
        'Indianapolis',
        'Jacksonville',
        'Las Vegas',
        'Louisville',
        'Memphis',
        'Nashville',
        'New York',
        'Oklahoma City',
        'Philadelphia',
        'Phoenix',
        'Portland',
        'San Antonio',
        'San Diego',
        'San Francisco',
        'San Jose',
        'Seattle',
        'Washington',
    ];
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Yum cities in <LinkButton>United States 🇺🇸</LinkButton>
                    </h2>
                    <LinkButton>View all Yum cities</LinkButton>
                </div>
                <ul className={styles.list}>
                    {cities.map((city) => (
                        <li key={city}>
                            <LinkButton>{city}</LinkButton>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
