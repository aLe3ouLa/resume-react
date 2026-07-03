import styled from 'styled-components';

export const SectionContainer = styled.section`
    padding: 60px 0;
    background: rgba(130, 158, 134, 0.02);

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: 40px 0;
    }
`;

export const LinkedInButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    background: #0077b5;
    color: ${({ theme }) => theme.color.white};
    font-weight: 700;
    font-size: 1.2rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 12px;
    border: 3px solid ${({ theme }) => theme.color.black};
    box-shadow: 5px 5px 0 ${({ theme }) => theme.color.black};
    transition:
        transform 0.2s ease,
        box-shadow 0.2s ease,
        background 0.3s ease;
    margin: 30px auto 0 auto;
    width: fit-content;

    &:hover {
        background: #005885;
        transform: translate(-2px, -2px);
        box-shadow: 7px 7px 0 ${({ theme }) => theme.color.black};
    }

    &:active {
        transform: translate(2px, 2px);
        box-shadow: 2px 2px 0 ${({ theme }) => theme.color.black};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.1rem;
        padding: 10px 20px;
        margin: 25px auto 0 auto;
    }
`;
