import { BaseCard, type BaseCardProps } from '../base-card/base-card';
import classNames from 'classnames';
import styles from './category-card.module.scss';

export interface CategoryCardProps extends Omit<BaseCardProps, 'children'> {
    counter?: number;
    title?: string;
}

export const CategoryCard = ({
    className,
    counter = 1,
    title = 'Category',
    ...props
}: CategoryCardProps) => {
    const label = counter === 1 ? 'place' : 'places';
    return (
        <BaseCard className={classNames(styles.root, className)} elementsClassNames={{image: styles.baseCardImage}} {...props}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.counterContainer}>
                {counter} {label}
            </span>
        </BaseCard>
    );
};
