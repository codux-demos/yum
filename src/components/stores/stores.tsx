import type { Restaurant } from '../../types';
import classNames from 'classnames';
import styles from './restaurants.module.scss';

export interface StoresProps {
    className?: string;
    data: Restaurant[];
}

export const Stores = ({ className, data }: StoresProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <h1>Stores</h1>
        </div>
    );
};
