import styled from "styled-components";

export const SectionContainer = styled.section`
    padding: 80px 0;
    background: ${({ theme }) => theme.color.white};
    background-image: var(--grain-texture);
    background-blend-mode: overlay;
    position: relative;
    
    /* Classic travel poster top border */
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: ${({ theme }) => theme.color.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: 60px 0;
    }
`;

export const SectionTitle = styled.h2`
    text-align: center;
    margin-bottom: 60px;
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    color: ${({ theme }) => theme.color.text};
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    
    /* Classic travel poster underline */
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 4px;
        background: ${({ theme }) => theme.color.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3rem;
        margin-bottom: 40px;
    }
`;

export const SectionSubtitle = styled.p`
    text-align: center;
    margin-bottom: 50px;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.textLight};
    font-weight: 400;
    font-family: 'Comfortaa', sans-serif;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.7;
    font-style: italic;
    letter-spacing: 0.3px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.6rem;
        margin-bottom: 40px;
        padding: 0 20px;
    }
`;


export const LinkedInButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    background: ${({ theme }) => theme.color.primary};
    color: white;
    font-weight: 600;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 14px 28px;
    border-radius: 9999px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    margin: 30px auto 0 auto;
    box-shadow: 
        0 4px 0 ${({ theme }) => theme.color.hoverPrimary},
        0 6px 12px rgba(0, 168, 168, 0.25);
    border: 3px solid ${({ theme }) => theme.color.primary};
    width: fit-content;

    &:hover {
        background: ${({ theme }) => theme.color.secondary};
        border-color: ${({ theme }) => theme.color.secondary};
        transform: translateY(2px);
        box-shadow: 
            0 2px 0 ${({ theme }) => theme.color.hoverSecondary},
            0 4px 8px rgba(255, 107, 107, 0.3);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.1rem;
        padding: 10px 20px;
        margin: 25px auto 0 auto;
    }
`;
