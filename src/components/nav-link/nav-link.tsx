import {
    NavLink as ReactRouterNavLink,
    NavLinkProps as ReactRouterNavLinkProps,
    To,
} from 'react-router-dom';
import classNames from 'classnames';
import styles from './nav-link.module.scss';

export interface NavLinkProps extends Omit<ReactRouterNavLinkProps, 'to'> {
    statesClassNames?: Record<'isActive' | 'isPending' | 'isTransitioning', string>;
    isActiveClassName?: string;
    isPendingClassName?: string;
    isTransitioningClassName?: string;
    to?: To;
}

export const NavLink = ({
    className,
    children = 'Nav Link',
    isActiveClassName,
    isPendingClassName,
    isTransitioningClassName,
    to = '/',
    ...props
}: NavLinkProps) => {
    return (
        <ReactRouterNavLink
            className={({ isActive, isPending, isTransitioning }) =>
                classNames(
                    styles.root,
                    className,
                    isActive && styles.active,
                    isActive && isActiveClassName,
                    isPending && isPendingClassName,
                    isTransitioning && isTransitioningClassName
                )
            }
            to={to}
            {...props}
        >
            {children}
        </ReactRouterNavLink>
    );
};
