import {
    AppleLogoIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CloseIcon,
    FacebookLogoIcon,
    GoogleLogoIcon,
} from '../../assets/icons';
import classNames from 'classnames';
import styles from './icon.module.scss';

export type IconOptions =
    | 'appleLogo'
    | 'chevronLeft'
    | 'chevronRight'
    | 'close'
    | 'facebookLogo'
    | 'googleLogo';

const iconDictionary = {
    appleLogo: <AppleLogoIcon />,
    chevronLeft: <ChevronLeftIcon />,
    chevronRight: <ChevronRightIcon />,
    close: <CloseIcon />,
    facebookLogo: <FacebookLogoIcon />,
    googleLogo: <GoogleLogoIcon />,
};

export interface IconProps {
    className?: string;
    icon?: IconOptions;
}

export const Icon = ({ className, icon = 'close' }: IconProps) => {
    const iconGlyph = iconDictionary[icon];
    return <div className={classNames(styles.root, className)}>{iconGlyph}</div>;
};
