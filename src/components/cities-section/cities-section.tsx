import classNames from 'classnames';
import styles from './cities-section.module.scss';
import { LinkButton } from '../link-button/link-button';

export interface CitiesSectionProps {
    className?: string;
}

export const CitiesSection = ({ className }: CitiesSectionProps) => {
    const cities = [
        'Acre (Akko)',
        'Ashdod',
        'Ashkelon',
        'Bat Yam',
        'Beersheba',
        'Bnei Brak',
        'Dimona',
        'Hadera',
        'Haifa',
        'Herzliya',
        'Holon',
        'Jerusalem',
        'Kiryat Bialik',
        'Kiryat Gat',
        'Kfar Saba',
        "Modi'in",
        'Nahariya',
        'Nazareth',
        'Petah Tikva',
        "Ra'anana",
        'Ramat Gan',
        'Ramat HaSharon',
        'Rehovot',
        'Rishon LeZion',
        'Tel Aviv',
    ];
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Yum cities in <LinkButton>Israel 🇮🇱</LinkButton>
                    </h2>
                    <LinkButton>
                        View all Yum cities
                    </LinkButton></div>
                <ul className={styles.list}>
                    {cities.map((city) => (
                        <li key={city}>
                            <LinkButton>{city}</LinkButton>
                        </li>
                    ))}
                </ul>
            </div></div>
    );
};
