import classNames from 'classnames';
import styles from './more-than-delivery-section.module.scss';

export interface MoreThanDeliverySectionProps {
    className?: string;
}

export const MoreThanDeliverySection = ({ className }: MoreThanDeliverySectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <h2 className={styles.title}>More than delivery</h2>
                <p className={styles.text}>
                    With every order, you&apos;re not just satisfying your cravings – you&apos;re
                    making a meaningful impact on the lives of passionate restaurant owners and
                    dedicated couriers.
                </p>
            </div>
        </div>
    );
};
