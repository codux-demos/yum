import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './base-card.module.scss';

export interface BaseCardElementsClassNames {
    image?: string;
    content?: string;
}

export interface BaseCardProps {
    children?: ReactNode;
    className?: string;
    elementsClassNames?: BaseCardElementsClassNames;
    imageSrc?: string;
}

export const BaseCard = ({
    className,
    imageSrc = 'https://static.wixstatic.com/media/f09b13_6ec13d6fe0cc4ecb8834fe856605b9f6~mv2.jpg',
    children = 'Card content',
    elementsClassNames = {},
}: BaseCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={classNames(styles.image, elementsClassNames.image)}
                style={{ backgroundImage: `url(${imageSrc})` }}
            />
            <div className={classNames(styles.content, elementsClassNames.content)}>{children}</div>
        </div>
    );
};
