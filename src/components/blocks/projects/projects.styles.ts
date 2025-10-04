import styled from "styled-components";

export const SectionContainer = styled.section`
    padding: 60px 0;
    background: rgba(130, 158, 134, 0.02);

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: 40px 0;
    }
`;

export const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 60px;
    font-size: 4rem;
    font-weight: 700;
    color: #191919;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3rem;
        margin-bottom: 40px;
    }
`;

export const SectionSubtitle = styled.p`
    text-align: center;
    margin-bottom: 40px;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.textLight};
    font-weight: 400;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.6rem;
        margin-bottom: 30px;
        padding: 0 20px;
    }
`;


export const LinkedInButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: linear-gradient(135deg, #0077B5 0%, #005885 100%);
    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 8px;
    transition: all 0.3s ease;
    margin: 30px auto 0 auto;
    box-shadow: 0 4px 15px rgba(0, 119, 181, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: fit-content;

    &:hover {
        background: linear-gradient(135deg, #005885 0%, #003d5c 100%);
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0, 119, 181, 0.35);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.1rem;
        padding: 10px 20px;
        margin: 25px auto 0 auto;
    }
`;
