import classNames from 'classnames';
import styles from './landing-page.module.scss';
import { HeroSection } from '../hero-section/hero-section';
import { Header } from '../header/header';
import { MemoryRouter } from 'react-router-dom';
import { WhatIsSection } from '../what-is-section/what-is-section';
import { CitiesSection } from '../cities-section/cities-section';
import { Footer } from '../footer/footer';
import { MoreThanDeliverySection } from '../more-than-delivery-section/more-than-delivery-section';

export interface LandingPageProps {
    className?: string;
}

export const LandingPage = ({ className }: LandingPageProps) => {
    return (
        <MemoryRouter>
            <div className={classNames(styles.root, className)}>
                <Header userAuthenticated={false} />
                <HeroSection />
                <CitiesSection />
                <WhatIsSection />
                <MoreThanDeliverySection />
                <Footer />
            </div>
        </MemoryRouter>
    );
};
