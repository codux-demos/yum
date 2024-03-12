import classNames from 'classnames';
import styles from './address-picker.module.scss';

export interface AddressPickerProps {
    className?: string;
}

export const AddressPicker = ({ className }: AddressPickerProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <svg width="18" viewBox="0 0 18 24" className={styles.locationIcon}>
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 .747a9 9 0 0 0-9 9v.395c0 2.321.86 4.56 2.412 6.285l5.845 6.495a1 1 0 0 0 1.486 0l5.845-6.495A9.395 9.395 0 0 0 18 10.142v-.395a9 9 0 0 0-9-9Zm0 5a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                />
            </svg>
            <input placeholder={'Enter delivery address'} className={styles.input} />
        </div>
    );
};
