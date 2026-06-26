import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;

    background: rgba(255, 249, 230, 0.82);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    transition: background 0.3s ease;

    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    }

    &:hover {
        background: rgba(255, 249, 230, 0.95);
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
        gap: ${({ theme }) => theme.spacing.xs};
    }

    li {
        position: relative;
        cursor: pointer;

        a {
            display: inline-block;
            color: ${({ theme }) => theme.color.text};
            font-weight: 700;
            font-size: 1.8rem;
            text-decoration: none;
            letter-spacing: 0.3px;
            padding: 0.6rem 1.4rem;
            border-radius: 999px;
            border: 2px solid transparent;
            transition: transform 0.2s ease, background 0.2s ease,
                box-shadow 0.2s ease, border-color 0.2s ease, color 0.2s ease;

            @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
                font-size: 1.5rem;
                padding: 0.5rem 1.1rem;
            }

            /* Neo-brutalist sticker hover: bright fill, black outline, hard offset shadow */
            &:hover {
                color: ${({ theme }) => theme.color.black};
                background: ${({ theme }) => theme.color.tertiary};
                border-color: ${({ theme }) => theme.color.black};
                box-shadow: 3px 3px 0 ${({ theme }) => theme.color.black};
                transform: translate(-1px, -1px);
            }

            &:active {
                transform: translate(1px, 1px);
                box-shadow: 1px 1px 0 ${({ theme }) => theme.color.black};
            }
        }
    }
`;
