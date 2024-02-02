import { ReactNode } from 'react';
import {
    Select as AriakitSelect,
    SelectLabel as AriakitSelectLabel,
    SelectProvider as AriakitSelectProvider,
    SelectItem as AriakitSelectItem,
    SelectPopover as AriakitSelectPopover,
} from '@ariakit/react';
import classNames from 'classnames';
import styles from './select.module.scss';

export interface SelectProps {
    className?: string;
    label?: ReactNode;
    items?: string[];
}

export const Select = ({ className, label, items }: SelectProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <AriakitSelectProvider defaultValue="Apple">
                {label && <AriakitSelectLabel className={styles.label}>{label}</AriakitSelectLabel>}
                <AriakitSelect className="button" />
                <AriakitSelectPopover gutter={4} sameWidth className="popover">
                    {items &&
                        items.map((item) => (
                            <AriakitSelectItem className="select-item" value={item} />
                        ))}
                </AriakitSelectPopover>
            </AriakitSelectProvider>
        </div>
    );
};
