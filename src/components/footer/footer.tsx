import classNames from 'classnames';
import styles from './footer.module.scss';
import { LinkButton } from '../link-button/link-button';
import { Link } from '../link/link';
import { Logo } from '../logo/logo';

export interface FooterProps {
    className?: string;
}

export interface NavColumnProps {
    category: string;
    items: NavItemProps[];
}

export interface NavItemProps {
    label: string;
    route: string;
}

export const Footer = ({ className }: FooterProps) => {
    const navItems: NavColumnProps[] = [
        {
            category: 'Partners',
            items: [
                { label: 'For couriers', route: '/couriers' },
                { label: 'For merchants', route: '/merchants' },
            ],
        },
        {
            category: 'Company',
            items: [
                { label: 'About us', route: '/about' },
                { label: 'What we stand for', route: '/values' },
                { label: 'Jobs', route: '/jobs' },
                { label: 'Sustainability', route: '/sustainability' },
                { label: 'Security', route: '/security' },
                { label: 'Investors', route: '/investors' },
            ],
        },
        {
            category: 'Products',
            items: [
                { label: 'Yum Drive', route: '/yum-drive' },
                { label: 'Yum Market', route: '/yum-market' },
                { label: 'Yum+', route: '/yum-plus' },
                { label: 'Yum for Work', route: '/yum-for-work' },
            ],
        },
        {
            category: 'Useful links',
            items: [
                { label: 'Support', route: '/support' },
                { label: 'Media', route: '/media' },
                { label: 'Contact', route: '/contact' },
                { label: 'Speak up', route: '/speak-up' },
                { label: 'Promo codes', route: '/promo-codes' },
                { label: 'Road safety', route: '/road-safety' },
                { label: 'Developers', route: '/developers' },
            ],
        },
        {
            category: 'Follow us',
            items: [
                { label: 'Blog', route: '/blog' },
                { label: 'Engineering blog', route: '/engineering-blog' },
                { label: 'Instagram', route: '/instagram' },
                { label: 'Facebook', route: '/facebook' },
                { label: 'Twitter', route: '/twitter' },
                { label: 'LinkedIn', route: '/linkedin' },
                { label: 'Yum Life', route: '/yum-life' },
            ],
        },
    ];
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.topContainer}>
                    <nav className={styles.navContainer}>
                        <div className={styles.navColumn}>
                            <Logo className={styles.logo} />
                            <Link className={styles.storeLink}>
                                <img
                                    src="https://static.wixstatic.com/media/f09b13_05651ba3da534314bed7cf4ffc8894ad~mv2.png"
                                    alt=""
                                    className={styles.appleStoreButton}
                                />
                            </Link>
                            <Link className={styles.storeLink}>
                                <img
                                    src="https://static.wixstatic.com/media/f09b13_8d7e7869d51b4af99e31bf6a28a35077~mv2.png"
                                    alt=""
                                    className={styles.googlePlayButton}
                                />
                            </Link>
                        </div>
                        {navItems.map((column) => (
                            <div className={styles.navColumn} key={column.category}>
                                <h3 className={styles.navColumnTitle}>{column.category}</h3>
                                <ul className={styles.list}>
                                    {column.items.map((item) => (
                                        <li key={item.label}>
                                            <Link to={item.route} className={styles.navItem}>
                                                {item.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </div>
                <div className={styles.bottomContainer}>
                    <div className={styles.actionsContainer}>
                        <LinkButton>United States</LinkButton>
                        <LinkButton>English</LinkButton>
                        <LinkButton>Accessibility</LinkButton>
                    </div>
                    <div className={styles.bottomLinksContainer}>
                        <Link>Terms of Service</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Accessibility Statement</Link>
                        <span>©️ Yum 2024</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
