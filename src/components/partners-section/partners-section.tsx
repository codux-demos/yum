import classNames from 'classnames';
import styles from './partners-section.module.scss';
import { PartnerCard } from '../partner-card/partner-card';

export interface PartnersSectionProps {
    className?: string;
}

export const PartnersSection = ({ className }: PartnersSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <h2 className={styles.title}>Partner with Yum</h2>
                <PartnerCard
                    title="Become a courier"
                    imageSrc="https://static.wixstatic.com/media/f09b13_cc65552b1f204b308eced8021c9d34c6~mv2.jpg "
                />
                <PartnerCard
                    title="Join Yum as a restaurant owner"
                    imageSrc="https://static.wixstatic.com/media/f09b13_ad2dcbc153d549a4bebf8c0ba391d09b~mv2.jpg"
                />
                <PartnerCard
                    title="Yum for work"
                    imageSrc="https://static.wixstatic.com/media/f09b13_1a15e075502247da999b424c2bd61a24~mv2.jpg "
                />
            </div>
        </div>
    );
};
