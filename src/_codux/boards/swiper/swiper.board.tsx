import { createBoard } from '@wixc3/react-board';
import { Swiper } from '../../../components/swiper/swiper';
import styles from './swiper.board.module.scss';

export default createBoard({
    name: '🔩 Swiper',
    Board: () => (
        <div className={styles.root}>
            <Swiper />
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        canvasMargin: {
            left: 0,
            top: 1,
            right: 0,
        },
    },
});
