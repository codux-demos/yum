import { useSwiper } from 'swiper/react';
import { IconButton } from '../../icon-button/icon-button';
import classNames from 'classnames';
import styles from './swiper-navigation.module.scss';

export interface SwiperNavigationProps {
    className?: string;
    isBeginning?: boolean;
    isEnd?: boolean;
}

export const SwiperNavigation = ({ className, isBeginning, isEnd }: SwiperNavigationProps) => {
    const swiper = useSwiper();

    return (
        <div className={classNames(styles.root, className)}>
            <IconButton
                className={styles.prevButton}
                disabled={isBeginning}
                onClick={() => swiper.slidePrev()}
                icon="chevronLeft"
            />
            <IconButton
                className={styles.nextButton}
                disabled={isEnd}
                onClick={() => swiper.slideNext()}
                icon="chevronRight"
            />
        </div>
    );
};
