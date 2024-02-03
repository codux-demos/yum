import { Input, type InputProps } from '../input/input';
import { Icon } from '../icon/icon';
import classNames from 'classnames';
import styles from './search.module.scss';

export interface SearchElementsClassNames {
    icon?: string;
    field?: string;
}
export interface SearchProps extends InputProps {
    elementsClassNames?: SearchElementsClassNames;
}

export const Search = ({ className, elementsClassNames, ...props }: SearchProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Icon
                className={classNames(styles.searchIcon, elementsClassNames?.icon)}
                icon="search"
            />
            <Input className={classNames(styles.field, elementsClassNames?.field)} {...props} />
        </div>
    );
};
