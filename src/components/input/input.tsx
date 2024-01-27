import { InputHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    className?: string;
}

export const Input = ({ className, ...props }: InputProps) => {
    return <input className={classNames(styles.root, className)} {...props} />;
};
