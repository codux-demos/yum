import { createBoard } from '@wixc3/react-board';
import { Icon } from '../../../components/icon/icon';
import classNames from 'classnames';
import styles from './icons.board.module.scss';

export default createBoard({
    name: '🗂️ Icons',
    Board: () => (
        <div className={styles.root}>
            <div className={classNames(styles.section, styles.header)}>
                <h1>Icons</h1>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Actions</h2>
                <div className={styles.iconsGrid}>
                    <Icon icon="close" />
                </div>
            </div>
            <div className={styles.section}>
                <h2 className={styles.sectionTitle}>Social</h2>
                <div className={styles.iconsGrid}>
                    <Icon icon="appleLogo" />
                    <Icon icon="facebookLogo" />
                    <Icon icon="googleLogo" />
                </div>
            </div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            right: 0,
            top: 1,
        },
    },
});
