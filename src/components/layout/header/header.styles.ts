import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: ${({ theme }) => theme.spacing.md}
        ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: ${({ theme }) => theme.spacing.sm}
            ${({ theme }) => theme.spacing.md};
    }
`;

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    li:first-of-type {
        height: 2px;
        background-color: grey;
        width: 100px;
        cursor: none;
        @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
            display: none;
        }
    }

    li {
        cursor: pointer;
        :not(:last-child) {
            margin-right: ${({ theme }) => theme.spacing.lg};

            @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
                margin-right: ${({ theme }) => theme.spacing.xxs};
            }
        }
        a {
            color: ${({ theme }) => theme.color.text};
            font-weight: 400;
            font-size: 2.2rem;

            @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
                font-size: 1.6rem;
            }

            &:hover {
                color: ${({ theme }) => theme.color.secondary};
            }
        }
    }
`;
