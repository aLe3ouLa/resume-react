import { ButtonSize, ButtonVariation, getButtonClasses } from './Button.styles';

export interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    variation?: ButtonVariation;
    /**
     * How large should the button be?
     */
    size?: ButtonSize;
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Button UI component
 */
export const Button: React.FC<ButtonProps> = ({
    variation = ButtonVariation.PRIMARY,
    size = ButtonSize.md,
    label,
    ...props
}) => {
    return (
        <button
            type="button"
            className={getButtonClasses(variation, size)}
            {...props}
        >
            {label}
        </button>
    );
};
