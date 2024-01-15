import classNames from 'classnames';
import { To } from 'react-router-dom';
import { Link } from '../link/link';
import styles from './partner-card.module.scss';

export interface PartnerCardProps {
    imageSrc?: string;
    imageAltText?: string;
    title?: string;
    link?: string;
    to?: To;
    className?: string;
}

export const PartnerCard = ({
    className,
    title = 'Card title',
    link = 'Link label',
    to = '/',
    imageSrc = 'https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg',
    imageAltText = ""
}: PartnerCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={imageSrc}
                alt={imageAltText}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <Link className={styles.link} to={to}>
                {link}
            </Link>
        </div>
    );
};
