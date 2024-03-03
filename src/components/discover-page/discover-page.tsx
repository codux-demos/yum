import type { FoodCategory, Restaurant } from '../../types';
import { CategoryCard } from '../category-card/category-card';
import { Swiper } from '../swiper/swiper';
import { BusinessCard } from '../business-card/business-card';
import { BaseCard } from '../base-card/base-card';
import { TeaserCard } from '../teaser-card/teaser-card';
import { Header } from '../header/header';
import { BusinessTypeFilterBar } from '../business-type-filter-bar/business-type-filter-bar';
import { Footer } from '../footer/footer';
import classNames from 'classnames';
import styles from './discover-page.module.scss';

export interface DiscoverPageProps {
    className?: string;
    foodCategories: FoodCategory[];
}

export const DiscoverPage = ({ className, foodCategories }: DiscoverPageProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Header userAuthenticated={true} />
            <BusinessTypeFilterBar />
            <section className={styles.section}>
                <div className={styles.content}>
                    <Swiper
                        title="Lunch near you"
                        slides={foodCategories.map((category) => (
                            <BusinessCard
                                title="Yum Cafe"
                                description="A snug spot for friends, coffee, and conversation"
                            />
                        ))}
                        slidesPerView={3}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.content}>
                    <Swiper
                        title="Teasy offers"
                        slides={foodCategories.map((category) => (
                            <BusinessCard
                                title="Yum Cafe"
                                description="A snug spot for friends, coffee, and conversation"
                            />
                        ))}
                        slidesPerView={3}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.content}>
                    <Swiper
                        title="Grocery list"
                        slides={foodCategories.map((category) => (
                            <CategoryCard title={category.name} />
                        ))}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.content}>
                    <Swiper
                        title="Food categories"
                        slides={foodCategories.map((category) => (
                            <CategoryCard title={category.name} />
                        ))}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.content}>
                    <Swiper
                        title="Retail categories"
                        slides={foodCategories.map((category) => (
                            <CategoryCard title={category.name} />
                        ))}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.content}>
                    <Swiper
                        title="Our brands"
                        slides={foodCategories.map((category) => (
                            <BaseCard
                                elementsClassNames={{
                                    image: styles.baseCardImage,
                                    content: styles.baseCardTitle,
                                }}
                            >
                                {category.name}
                            </BaseCard>
                        ))}
                    />
                </div>
            </section>
            <section className={styles.section}>
                <div className={styles.content}>
                    <Swiper
                        title="All about us"
                        slides={foodCategories.map((category) => (
                            <TeaserCard
                                title="Teaser card title"
                                description="Yum: A symphony of tastes, delivered directly to your door"
                                elementsClassNames={{ image: styles.teaserCardImage }}
                            />
                        ))}
                        slidesPerView={2}
                    />
                </div>
            </section>
            <Footer />
        </div>
    );
};
