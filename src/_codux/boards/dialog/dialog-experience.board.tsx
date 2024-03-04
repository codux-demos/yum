import { useDialogStore } from '@ariakit/react';
import { createBoard } from '@wixc3/react-board';
import { Dialog } from '../../../components/dialog/dialog';
import { useState } from 'react';
import { Button } from '../../../components/button/button';
import styles from './dialog-experience.board.module.scss';
import classNames from 'classnames';

export default createBoard({
    name: '🗂️ DialogExperience',
    Board: () => {
        const dialog = useDialogStore();
        const [dialogOpen, setDialogOpen] = useState(false);
        return (
            <div className={styles.root}>
                <div className={classNames(styles.section, styles.header)}>
                    <h1>Dialogs</h1>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Using dialog store</h2>
                    <Button variant="primary" onClick={() => dialog.show()}>
                        Open dialog using dialog store
                    </Button>
                    <Dialog store={dialog} dismissible>
                        <div>
                            <h1 className={styles.dialogTitle}>DialogStore</h1>
                            <p>
                                Great food is a symphony of flavors, a dance of textures, and a
                                journey for the senses. It transcends the mundane, elevating
                                nourishment to an art form that speaks to the soul. In every bite,
                                it tells a story of passion, creativity, and the timeless joy of
                                savoring life's delicious moments.
                            </p>
                        </div>
                    </Dialog>
                </div>
                <div className={styles.section}>
                    <h2 className={styles.sectionTitle}>Using react state</h2>
                    <Button variant="primary" onClick={() => setDialogOpen(true)}>
                        Open dialog using state
                    </Button>
                    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} dismissible>
                        <div>
                            <h1 className={styles.dialogTitle}>React state</h1>
                            <p>
                                Great food is a symphony of flavors, a dance of textures, and a
                                journey for the senses. It transcends the mundane, elevating
                                nourishment to an art form that speaks to the soul. In every bite,
                                it tells a story of passion, creativity, and the timeless joy of
                                savoring life's delicious moments.
                            </p>
                        </div>
                    </Dialog>
                </div>
            </div>
        );
    },
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 0,
        },
        windowWidth: 1024,
        windowBackgroundColor: '#eeeeee',
    },
});
