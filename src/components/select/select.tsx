import { ReactNode } from 'react';
import {
    Select as AriakitSelect,
    SelectLabel as AriakitSelectLabel,
    SelectItem as AriakitSelectItem,
    SelectPopover as AriakitSelectPopover,
    useSelectStore,
} from '@ariakit/react';
import classNames from 'classnames';
import styles from './select.module.scss';

export interface SelectElementsClassNames {
    select?: string;
    popover?: string;
    selectItem?: string;
}

export interface SelectProps {
    className?: string;
    elementsClassNames?: SelectElementsClassNames;
    label?: ReactNode;
    items?: string[];
}

export const Select = ({ className, elementsClassNames = {}, label, items }: SelectProps) => {
    const selectStore = useSelectStore({ defaultValue: 'Apple' });

    return (
        <div className={classNames(styles.root, className)}>
            {/* TODO: make `accessibleWhenDisabled` configurable */}

            {label && (
                <AriakitSelectLabel store={selectStore} className={styles.label}>
                    {label}
                </AriakitSelectLabel>
            )}
            {/* TODO: make `accessibleWhenDisabled` configurable */}
            <AriakitSelect
                store={selectStore}
                className={classNames(styles.select, elementsClassNames.select)}
                accessibleWhenDisabled
            />
            <AriakitSelectPopover
                store={selectStore}
                gutter={4}
                sameWidth
                className={classNames(styles.popover, elementsClassNames.popover)}
            >
                {items &&
                    items.map((item, index) => (
                        <AriakitSelectItem
                            key={index}
                            className={classNames(styles.selectItem, elementsClassNames.selectItem)}
                            value={item}
                        />
                    ))}
            </AriakitSelectPopover>
        </div>
    );
};
