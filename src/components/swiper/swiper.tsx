import { ReactNode, useState } from 'react';
import { Swiper as ReactSwiper, SwiperSlide as ReactSwiperSlide, SwiperClass } from 'swiper/react';
import { SwiperNavigation } from './swiper-navigation/swiper-navigation';
import 'swiper/scss';

import classNames from 'classnames';
import styles from './swiper.module.scss';

const defaultSlideStyle = {
    display: 'flex',
    padding: '24px',
    backgroundColor: 'whiteSmoke',
    borderRadius: '12px',
};
const defaultSlides = [
    <div style={defaultSlideStyle}>First slide</div>,
    <div style={defaultSlideStyle}>Second slide</div>,
    <div style={defaultSlideStyle}>Third slide</div>,
    <div style={defaultSlideStyle}>Fourth slide</div>,
    <div style={defaultSlideStyle}>Fifth slide</div>,
    <div style={defaultSlideStyle}>Sixth slide</div>,
    <div style={defaultSlideStyle}>Seventh slide</div>,
];

export interface SwiperProps {
    className?: string;
    slides?: ReactNode[];
    title?: string;
    slidesPerView?: number;
}

export const Swiper = ({
    className,
    title = 'Slider title',
    slides = defaultSlides,
    slidesPerView = 5,
}: SwiperProps) => {
    const [isBeginning, setIsBeginning] = useState(false);
    const [isEnd, setIsEnd] = useState(false);

    const handleNavigation = (event: SwiperClass) => {
        setIsBeginning(event.isBeginning);
        setIsEnd(event.isEnd);
    };

    return (
        <ReactSwiper
            className={classNames(styles.root, className)}
            slidesPerView={slidesPerView}
            slidesPerGroup={slidesPerView}
            spaceBetween={16}
            updateOnWindowResize
            onSlideChange={handleNavigation}
            onSwiper={handleNavigation}
            resizeObserver={true}
        >
            <div className={styles.header} slot="container-start">
                <h3 className={styles.title}>{title}</h3>
                <SwiperNavigation isBeginning={isBeginning} isEnd={isEnd} />
            </div>
            {slides.map((slide, index) => (
                <ReactSwiperSlide key={index} tag="li">
                    {slide}
                </ReactSwiperSlide>
            ))}
        </ReactSwiper>
    );
};
