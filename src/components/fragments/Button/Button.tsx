import { ButtonSize, ButtonVariation, StyledButton } from './Button.styles'

interface ButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    variation?: ButtonVariation
    /**
     * How large should the button be?
     */
    size?: ButtonSize
    /**
     * Button contents
     */
    label: string
    /**
     * Optional click handler
     */
    onClick?: () => void
}

/**
 * Button UI component
 */
export const Button:React.FC <ButtonProps> = ({
    variation = ButtonVariation.PRIMARY,
    size = ButtonSize.md,
    label,
    ...props
}) => {
    return (
        <StyledButton
            type="button"
            variation={variation}
            size={size}
            {...props}
        >
            {label}
        </StyledButton>
    )
}
