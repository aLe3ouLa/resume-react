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

const pulse = keyframes`
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
`;

export const SectionContainer = styled.section`
    padding: ${({ theme }) => theme.spacing.xxl} 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.color.primary} 0%, 
            ${({ theme }) => theme.color.secondary} 50%, 
            ${({ theme }) => theme.color.tertiary} 100%
        );
    }
`;

export const HeaderSection = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xxl};
    animation: ${fadeInUp} 0.8s ease-out;
`;

export const SectionTitle = styled.h2`
    font-size: 4rem;
    font-weight: 800;
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

export const ColoredSpan = styled.span`
    color: ${({ theme }) => theme.color.primary};
    font-size: 4.5rem;
    animation: ${pulse} 2s infinite;
    display: inline-block;
    margin-left: ${({ theme }) => theme.spacing.sm};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3.5rem;
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
    border-radius: 20px;
    padding: ${({ theme }) => theme.spacing.xl};
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(130, 158, 134, 0.1);
    transition: all 0.3s ease;
    animation: ${fadeInUp} 0.8s ease-out 0.2s both;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
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
    background: linear-gradient(135deg, ${({ theme }) => theme.color.primary} 0%, ${({ theme }) => theme.color.hoverPrimary} 100%);
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(130, 158, 134, 0.3);

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(130, 158, 134, 0.4);
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
    background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
    border: 2px solid rgba(130, 158, 134, 0.2);
    border-radius: 12px;
    padding: ${({ theme }) => theme.spacing.md};
    text-align: center;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.text};
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(130, 158, 134, 0.1), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        border-color: ${({ theme }) => theme.color.primary};
        transform: translateY(-2px);
        box-shadow: 0 8px 20px rgba(130, 158, 134, 0.2);
    }

    &:hover::before {
        left: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.6rem;
        padding: ${({ theme }) => theme.spacing.sm};
    }
`;
