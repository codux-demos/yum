import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps, To } from 'react-router-dom';
import classNames from 'classnames';
import styles from './link.module.scss';

export interface LinkProps
    extends Omit<ReactRouterLinkProps, 'to'>,
        React.RefAttributes<HTMLAnchorElement> {
    to?: To;
}

export const Link = ({ className, children = 'Link', to = '/', ...props }: LinkProps) => {
    return (
        <ReactRouterLink to={to} className={classNames(styles.root, className)} {...props}>
            {children}
        </ReactRouterLink>
    );
};
