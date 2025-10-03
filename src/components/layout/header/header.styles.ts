import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(130, 158, 134, 0.1);
    transition: all 0.3s ease;

    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    }

    &:hover {
        background: rgba(255, 255, 255, 0.98);
        border-bottom-color: rgba(130, 158, 134, 0.2);
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
            font-weight: 500;
            font-size: 1.8rem;
            text-decoration: none;
            position: relative;
            transition: all 0.3s ease;
            letter-spacing: 0.5px;

            @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
                font-size: 1.5rem;
            }

            &::after {
                content: '';
                position: absolute;
                bottom: -4px;
                left: 0;
                width: 0;
                height: 2px;
                background: linear-gradient(90deg, ${({ theme }) => theme.color.secondary}, ${({ theme }) => theme.color.primary});
                transition: width 0.3s ease;
            }

            &:hover {
                color: ${({ theme }) => theme.color.secondary};
                transform: translateY(-1px);

                &::after {
                    width: 100%;
                }
            }

            &:active {
                transform: translateY(0);
            }
        }
    }
`;
