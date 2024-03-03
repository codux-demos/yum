import { Button } from '../button/button';
import { Dialog } from '../dialog/dialog';
import { useDialogStore } from '@ariakit/react';
import { Header } from '../header/header';
import { BusinessTypeFilterBar } from '../business-type-filter-bar/business-type-filter-bar';
import { Footer } from '../footer/footer';
import classNames from 'classnames';
import styles from './stores-page.module.scss';

export interface StoresPageProps {
    className?: string;
}

export const StoresPage = ({ className }: StoresPageProps) => {
    const dialog = useDialogStore();

    return (
        <div className={classNames(styles.root, className)}>
            <Header userAuthenticated={true} />
            <BusinessTypeFilterBar />
            <section className={styles.section}>
                <div className={classNames(styles.content, styles.firstSection)}>
                    <h1>Stores</h1>
                    <Button variant={'primary'} onClick={() => dialog.show()}>
                        Show Dialog
                    </Button>
                    <Dialog store={dialog} dismissible />
                </div>
            </section>
            <Footer />
        </div>
    );
};
