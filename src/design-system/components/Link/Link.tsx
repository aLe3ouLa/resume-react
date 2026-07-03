import {
    Link as RouterLink,
    LinkProps as RouterLinkProps,
} from 'react-router-dom';

import { getLinkClasses, linkIconClasses } from './Link.styles';

export interface LinkProps extends RouterLinkProps {
    /**
     * Link contents
     */
    label: string;
    /**
     * Optional leading icon (e.g. an emoji or icon element)
     */
    icon?: React.ReactNode;
}

/**
 * Link UI component — a styled call-to-action wrapping react-router's Link.
 */
export const Link: React.FC<LinkProps> = ({
    label,
    icon,
    className,
    ...props
}) => {
    return (
        <RouterLink className={getLinkClasses(className)} {...props}>
            {icon && (
                <span className={linkIconClasses} aria-hidden="true">
                    {icon}
                </span>
            )}
            {label}
        </RouterLink>
    );
};
