import classNames from 'classnames';
import styles from './logo.module.scss';

export interface LogoProps {
    className?: string;
}

export const Logo = ({ className }: LogoProps) => {
    return (
        <svg width="112" viewBox="0 0 112 48" className={classNames(styles.root, className)}>
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="m21.137 26.303-2.672 20.904-8.93-1.155L12.17 25.43 0 11.437l6.776-5.965 10.588 12.174L37.138.793l5.82 6.911-21.82 18.6Zm34.522 3.154L54.574 33.2c-4.175 14.402-24.51 14.244-28.463-.22l-.981-3.59 8.682-2.402.98 3.59c1.548 5.66 9.505 5.721 11.139.086l1.085-3.743 8.643 2.536ZM112 37.375 94.826 10.672l-16.09 16.187-13.786-7.113-8.404 18.18 8.164 3.82 4.458-9.644 11.297 5.829L93.317 25l11.124 17.295 7.559-4.92Z"
            />
        </svg>
    );
};
