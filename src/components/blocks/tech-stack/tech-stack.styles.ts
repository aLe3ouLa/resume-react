import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;


export const SectionContainer = styled.section`
    padding: ${({ theme }) => theme.spacing.xxl} 0;
    background: ${({ theme }) => theme.color.white};
    position: relative;
    overflow: hidden;
    background-image: var(--grain-texture);
    background-blend-mode: overlay;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 6px;
        background: ${({ theme }) => theme.color.primary};
        box-shadow: 0 2px 4px rgba(0, 168, 168, 0.2);
    }
`;

export const HeaderSection = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
    animation: ${fadeInUp} 0.8s ease-out;
`;

export const SectionTitle = styled.h2`
    font-size: 4rem;
    font-weight: 700;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    color: ${({ theme }) => theme.color.text};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    position: relative;
    display: inline-block;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3rem;
    }
`;

export const SectionSubtitle = styled.p`
    font-size: 1.8rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.textLight};
    margin-bottom: ${({ theme }) => theme.spacing.md};
    font-style: italic;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.5;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.6rem;
        margin-bottom: ${({ theme }) => theme.spacing.lg};
    }
`;


export const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.xxl};
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.xl};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing.xl};
        padding: 0 ${({ theme }) => theme.spacing.lg};
    }
`;

export const AboutCard = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 24px;
    padding: ${({ theme }) => theme.spacing.xl};
    box-shadow: 
        0 6px 0 ${({ theme }) => theme.color.hoverPrimary},
        0 8px 24px rgba(0, 168, 168, 0.15),
        inset 0 2px 4px rgba(255, 255, 255, 0.6);
    border: 4px solid ${({ theme }) => theme.color.primary};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;
    font-family: 'Comfortaa', sans-serif;
    background-image: var(--grain-texture);
    background-blend-mode: overlay;

    &:hover {
        transform: translateY(-4px);
        border-color: ${({ theme }) => theme.color.secondary};
        box-shadow: 
            0 4px 0 ${({ theme }) => theme.color.hoverSecondary},
            0 6px 20px rgba(255, 107, 107, 0.2),
            inset 0 2px 4px rgba(255, 255, 255, 0.6);
    }
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.color.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 2rem;
    line-height: 1.6;

    & > span {
        font-size: 2rem;
        display: block;
        margin-bottom: ${({ theme }) => theme.spacing.md};
    }

    & > a {
        color: ${({ theme }) => theme.color.primary};
        text-decoration: none;
        font-weight: 600;
        border-bottom: 2px solid transparent;
        transition: all 0.3s ease;
        margin: 0 ${({ theme }) => theme.spacing.xs};
        font-size: 2rem;

        &:hover {
            border-bottom-color: ${({ theme }) => theme.color.primary};
            color: ${({ theme }) => theme.color.hoverPrimary};
        }
    }
`;

export const StyledLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.primary};
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    border-radius: 9999px;
    text-decoration: none;
    font-weight: 600;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    font-size: 1.4rem;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 
        0 4px 0 ${({ theme }) => theme.color.hoverPrimary},
        0 6px 12px rgba(0, 168, 168, 0.25);
    border: 3px solid ${({ theme }) => theme.color.primary};

    &:hover {
        transform: translateY(2px);
        background: ${({ theme }) => theme.color.secondary};
        border-color: ${({ theme }) => theme.color.secondary};
        box-shadow: 
            0 2px 0 ${({ theme }) => theme.color.hoverSecondary},
            0 4px 8px rgba(255, 107, 107, 0.3);
    }

    &::after {
        content: '→';
        font-size: 1.6rem;
        transition: transform 0.3s ease;
    }

    &:hover::after {
        transform: translateX(4px);
    }
`;

export const TechSkillsCard = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    padding: ${({ theme }) => theme.spacing.xl};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(130, 158, 134, 0.1);
    transition: all 0.3s ease;
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
`;

export const SkillsTitle = styled.h3`
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.text};
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    text-align: center;
`;

export const TechSkills = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: ${({ theme }) => theme.spacing.md};
`;

export const SkillItem = styled.div`
    background: ${({ theme }) => theme.color.cream};
    border: 3px solid ${({ theme }) => theme.color.primary};
    border-radius: 16px;
    padding: ${({ theme }) => theme.spacing.md};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    color: ${({ theme }) => theme.color.text};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 3px 0 ${({ theme }) => theme.color.hoverPrimary},
        0 4px 8px rgba(0, 168, 168, 0.15);

    &:hover {
        border-color: ${({ theme }) => theme.color.secondary};
        background: ${({ theme }) => theme.color.secondary};
        color: ${({ theme }) => theme.color.white};
        transform: translateY(-2px);
        box-shadow: 
            0 2px 0 ${({ theme }) => theme.color.hoverSecondary},
            0 4px 12px rgba(255, 107, 107, 0.3);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.6rem;
        padding: ${({ theme }) => theme.spacing.sm};
    }
`;
