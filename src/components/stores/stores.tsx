import type { Restaurant } from '../../types';
import classNames from 'classnames';
import styles from './stores.module.scss';
import { Button } from '../button/button';
import { Dialog } from '../dialog/dialog';
import { useDialogStore } from '@ariakit/react';

export interface StoresProps {
    className?: string;
    data: Restaurant[];
}

export const Stores = ({ className, data }: StoresProps) => {
    const dialog = useDialogStore();

    return (
        <div className={classNames(styles.root, className)}>
            <h1>Stores</h1>
            <Button variant={"primary"} onClick={()=> dialog.show()}>Show Dialog</Button>
            <Dialog store={dialog} dismissible/>
        </div>
    );
};
