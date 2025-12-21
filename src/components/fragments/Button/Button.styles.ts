import styled, { css } from 'styled-components'

interface StyledButtonProps {
    theme: any
    variation: ButtonVariation
    size: ButtonSize
}

export enum ButtonVariation {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
}

export enum ButtonSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}

const ButtonVariations: Record<ButtonVariation, any> = {
    [ButtonVariation.PRIMARY]: css`
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.primary};
        font-family: 'Fredoka', 'Comfortaa', sans-serif;
        font-weight: 600;
        border: 3px solid ${({ theme }) => theme.color.primary};
        box-shadow: 
            0 4px 0 ${({ theme }) => theme.color.hoverPrimary},
            0 6px 12px rgba(0, 168, 168, 0.25);

        &:hover {
            background-color: ${({ theme }) => theme.color.hoverPrimary};
            transform: translateY(2px);
            box-shadow: 
                0 2px 0 ${({ theme }) => theme.color.hoverPrimary},
                0 4px 8px rgba(0, 168, 168, 0.3);
        }
        
        &:active {
            transform: translateY(4px);
            box-shadow: 
                0 0 0 ${({ theme }) => theme.color.hoverPrimary},
                0 2px 4px rgba(0, 168, 168, 0.2);
        }
    `,
    [ButtonVariation.SECONDARY]: css`
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.secondary};
        font-family: 'Fredoka', 'Comfortaa', sans-serif;
        font-weight: 600;
        border: 3px solid ${({ theme }) => theme.color.secondary};
        box-shadow: 
            0 4px 0 ${({ theme }) => theme.color.hoverSecondary},
            0 6px 12px rgba(255, 107, 107, 0.25);

        &:hover {
            background-color: ${({ theme }) => theme.color.hoverSecondary};
            transform: translateY(2px);
            box-shadow: 
                0 2px 0 ${({ theme }) => theme.color.hoverSecondary},
                0 4px 8px rgba(255, 107, 107, 0.3);
        }
        
        &:active {
            transform: translateY(4px);
            box-shadow: 
                0 0 0 ${({ theme }) => theme.color.hoverSecondary},
                0 2px 4px rgba(255, 107, 107, 0.2);
        }
    `,
}

const ButtonSizes = {
    [ButtonSize.sm]: css`
        padding: ${({ theme }) => theme.spacing.xxxs}
            ${({ theme }) => theme.spacing.xs};
    `,
    [ButtonSize.md]: css`
        padding: ${({ theme }) => theme.spacing.xxxs}
            ${({ theme }) => theme.spacing.sm};
    `,
    [ButtonSize.lg]: css`
        padding: ${({ theme }) => theme.spacing.xxs}
            ${({ theme }) => theme.spacing.sm};
    `,
}

export const StyledButton = styled.a<StyledButtonProps>`
    ${(props: StyledButtonProps) => css`
        ${ButtonVariations[props.variation]};
        ${ButtonSizes[props.size]};
    `}

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;

    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border-radius: 9999px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 9999px;
        opacity: 0.1;
        background-image: var(--grain-texture);
    }

    &:hover {
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
    }

    &:active {
        transition: all 0.1s ease;
    }
`
