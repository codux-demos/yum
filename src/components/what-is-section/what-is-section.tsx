import classNames from 'classnames';
import styles from './what-is-section.module.scss';

export interface WhatIsSectionProps {
    className?: string;
}

export const WhatIsSection = ({ className }: WhatIsSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.card}>
                <div className={styles.image} />
                <div className={styles.content}>
                    <h2 className={styles.title}>What is Yum
                    </h2>
                    <div className={styles.emphasizedText}>
                        Deliveries to your doorstep </div>
                    <p>Browse through a variety of local restaurants and stores, order with just a few clicks, and easily track your delivery in real-time.</p></div>
            </div></div>
    );
};
