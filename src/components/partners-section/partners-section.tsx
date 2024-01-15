import classNames from 'classnames';
import styles from './partners-section.module.scss';
import { PartnerCard } from '../partner-card/partner-card';

export interface PartnersSectionProps {
    className?: string;
}

export const PartnersSection = ({ className }: PartnersSectionProps) => {
    return <div className={classNames(styles.root, className)}>
        <div className={styles.content}>
            <PartnerCard title="Become a courier" />
            <PartnerCard title="Join Yum as a restaurant owner" />
            <PartnerCard />
        </div></div>;
};
