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
    elementsClassNames,
    title = 'Buiness name',
    description,
    ...props
}: BusinessCardProps) => {
    return (
        <BaseCard
            className={classNames(styles.root, className)}
            elementsClassNames={{ content: styles.baseCardContent, image: styles.baseCardImage }}
            {...props}
        >
            <div className={classNames(styles.content, elementsClassNames?.content)}>
                <h3 className={styles.title}>{title}</h3>
                <span>{description}</span>
            </div>
            <footer className={classNames(styles.footer, elementsClassNames?.footer)}></footer>
        </BaseCard>
    );
};
