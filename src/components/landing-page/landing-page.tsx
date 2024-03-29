import { HeroSection } from '../hero-section/hero-section';
import { WhatIsSection } from '../what-is-section/what-is-section';
import { CitiesSection } from '../cities-section/cities-section';
import { Footer } from '../footer/footer';
import { MoreThanDeliverySection } from '../more-than-delivery-section/more-than-delivery-section';
import { HeaderContainer } from '../header/header-container';
import { PartnersSection } from '../partners-section/partners-section';
import { countries } from '../../data/coutries';
import { Country } from '../../types';
import classNames from 'classnames';
import styles from './landing-page.module.scss';

export interface LandingPageProps {
    className?: string;
}

export const LandingPage = ({ className }: LandingPageProps) => {
    const country = countries.find((country) => country.id === 'US') as Country;
    return (
        <div className={classNames(styles.root, className)}>
            <HeaderContainer userAuthenticated={false} />
            <HeroSection />
            <CitiesSection country={country} />
            <WhatIsSection />
            <MoreThanDeliverySection />
            <PartnersSection />
            <Footer />
        </div>
    );
};
