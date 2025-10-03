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

        &:hover {
            background-color: ${({ theme }) => theme.color.hoverPrimary};
        }
    `,
    [ButtonVariation.SECONDARY]: css`
        color: ${({ theme }) => theme.color.white};
        background-color: ${({ theme }) => theme.color.tertiary};

        &:hover {
            background-color: ${({ theme }) => theme.color.hoverTertiary};
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
    font-weight: 900;
    text-transform: uppercase;
    border-radius: 5px;
    transition: all 0.3s ease;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    &:hover {
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        
        &::before {
            left: 100%;
        }
    }

    &:active {
        transform: translateY(0);
    }
`
