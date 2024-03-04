import classNames from 'classnames';
import styles from './hero-section.module.scss';
import { AddressPicker } from '../address-picker/address-picker';
import { LinkButton } from '../link-button/link-button';

export interface HeroSectionProps {
    className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.leftSideContainer}>
                    <h1 className={styles.heading}>
                        Get your food delivered in under half an hour
                    </h1>
                    <div className={styles.locationSection}>
                        <AddressPicker />
                        <div className={styles.actions}>
                            <LinkButton>Share location{null}</LinkButton>
                            <LinkButton>Log in to see saved addresses {null}</LinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
