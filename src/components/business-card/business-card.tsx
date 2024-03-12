import { BaseCard, BaseCardElementsClassNames, BaseCardProps } from '../base-card/base-card';
import classNames from 'classnames';
import styles from './business-card.module.scss';

export interface BusinessCardElementsClassNames extends BaseCardElementsClassNames {
    footer?: string;
}

export interface BusinessCardProps extends Omit<BaseCardProps, 'children'> {
    title?: string;
    description?: string;
    elementsClassNames?: BusinessCardElementsClassNames;
}

export const BusinessCard = ({
    className,
    elementsClassNames = {},
    title = 'Business name',
    description,
    ...props
}: BusinessCardProps) => {
    return (
        <BaseCard
            className={classNames(styles.root, className)}
            elementsClassNames={{ content: styles.baseCardContent, image: styles.baseCardImage }}
            {...props}
        >
            <div className={classNames(styles.content, elementsClassNames.content)}>
                <div className={styles.restaurantDetailsContainer}>
                    <h3 className={styles.title}>{title}</h3>
                    <span className={styles.description}>{description}</span>
                </div>
                <div className={styles.deliveryTimeContainer}>
                    <span className={styles.time}>35-45 </span>
                    <span className={styles.units}>min</span>
                </div>
            </div>
            <footer className={classNames(styles.footer, elementsClassNames.footer)}>
                <span className={styles.deliveryPrice}>
                    <span>$</span>16.00
                </span>
                <span className={styles.satisfactionScore}>4.6</span>
            </footer>
        </BaseCard>
    );
};
