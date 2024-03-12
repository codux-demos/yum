import { Button } from '../button/button';
import classNames from 'classnames';
import styles from './profile-button.module.scss';

export interface ProfileButtonProps {
    className?: string;
}

export const ProfileButton = ({ className }: ProfileButtonProps) => {
    return <Button className={classNames(styles.root, className)} />;
};
