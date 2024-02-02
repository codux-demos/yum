import {
    BaseCard,
    type BaseCardElementsClassNames,
    type BaseCardProps,
} from '../base-card/base-card';
import classNames from 'classnames';
import styles from './teaser-card.module.scss';

export interface TeaserCardElementsClassNames extends BaseCardElementsClassNames {
    title?: string;
    description?: string;
}

export interface TeaserCardProps extends Omit<BaseCardProps, 'children'> {
    title?: string;
    description?: string;
    elementsClassNames?: TeaserCardElementsClassNames;
}

export const TeaserCard = ({
    className,
    elementsClassNames,
    title = 'Card title',
    description,
    ...props
}: TeaserCardProps) => {
    return (
        <BaseCard
            className={classNames(styles.root, className)}
            elementsClassNames={{
                image: classNames(styles.image, elementsClassNames?.image),
                content: classNames(styles.content, elementsClassNames?.content),
            }}
            {...props}
        >
            <h3 className={classNames(styles.title, elementsClassNames?.title)}>{title}</h3>
            {description !== undefined && <span className={classNames(styles.description, elementsClassNames?.description)}>{description}</span>}
        </BaseCard>
    );
};
