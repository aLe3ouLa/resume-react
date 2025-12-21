import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    background: ${({ theme }) => theme.color.cream};
    backdrop-filter: blur(10px);
    border-bottom: 4px solid ${({ theme }) => theme.color.primary};
    transition: all 0.3s ease;
    box-shadow: 
        0 4px 0 ${({ theme }) => theme.color.hoverPrimary},
        0 6px 12px rgba(0, 168, 168, 0.15);
    background-image: var(--grain-texture);
    background-blend-mode: overlay;

    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    }

    &:hover {
        background: ${({ theme }) => theme.color.white};
        border-bottom-color: ${({ theme }) => theme.color.secondary};
        box-shadow: 
            0 4px 0 ${({ theme }) => theme.color.hoverSecondary},
            0 6px 12px rgba(255, 107, 107, 0.15);
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
        gap: ${({ theme }) => theme.spacing.md};
    }

    li {
        position: relative;
        cursor: pointer;
        
        a {
            color: ${({ theme }) => theme.color.text};
            font-weight: 600;
            font-family: 'Fredoka', 'Comfortaa', sans-serif;
            font-size: 1.8rem;
            text-decoration: none;
            position: relative;
            transition: all 0.3s ease;
            letter-spacing: 0.3px;
            padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
            border-radius: 12px;

            @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
                font-size: 1.5rem;
            }

            &::after {
                content: '';
                position: absolute;
                bottom: 2px;
                left: ${({ theme }) => theme.spacing.sm};
                width: 0;
                height: 3px;
                background: ${({ theme }) => theme.color.secondary};
                border-radius: 2px;
                transition: width 0.3s ease;
            }

            &:hover {
                color: ${({ theme }) => theme.color.secondary};
                background: rgba(255, 107, 107, 0.1);
                transform: translateY(-2px);

                &::after {
                    width: calc(100% - ${({ theme }) => theme.spacing.md});
                }
            }

            &:active {
                transform: translateY(0);
            }
        }
    }
`;
