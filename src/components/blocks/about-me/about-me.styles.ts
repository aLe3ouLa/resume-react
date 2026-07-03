import styled, { keyframes } from 'styled-components';

// Playful Animations
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

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
`;

const slideInLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const sparkle = keyframes`
    0%, 100% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.xl} 0;
    background: ${({ theme }) => theme.color.cream};
    position: relative;
    overflow: hidden;
`;

export const TimelineContainer = styled.div`
    position: relative;
    max-width: 1000px;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing.lg} 0;
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    align-items: stretch;

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: ${({ theme }) => theme.spacing.xl};
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        grid-template-columns: repeat(2, 1fr);
        gap: ${({ theme }) => theme.spacing.xl};
    }
`;

export const TimelineContent = styled.div`
    padding: ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.color.white};
    border: 3px solid ${({ theme }) => theme.color.black};
    border-radius: 24px;
    box-shadow: 8px 8px 0 ${({ theme }) => theme.color.black};
    transition:
        transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Comfortaa', sans-serif;

    &:hover {
        transform: translate(-3px, -3px);
        box-shadow: 11px 11px 0 ${({ theme }) => theme.color.secondary};
    }
`;

export const TimelineIcon = styled.div`
    width: 70px;
    height: 70px;
    background: ${({ theme }) => theme.color.secondary};
    border: 3px solid ${({ theme }) => theme.color.black};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.2rem;
    margin: 0 auto ${({ theme }) => theme.spacing.md} auto;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 4px 4px 0 ${({ theme }) => theme.color.black};

    &:hover {
        transform: scale(1.1) rotate(5deg);
        background: ${({ theme }) => theme.color.primary};
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    animation: ${slideInLeft} 0.6s ease-out;
    animation-fill-mode: both;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:nth-child(1) {
        animation-delay: 0.1s;
    }
    &:nth-child(2) {
        animation-delay: 0.2s;
    }
    &:nth-child(3) {
        animation-delay: 0.3s;
    }
    &:nth-child(4) {
        animation-delay: 0.4s;
    }
`;

export const AnimatedParagraph = styled.p`
    color: ${({ theme }) => theme.color.text};
    font-size: 1.4rem;
    line-height: 1.6;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    transition: all 0.3s ease;

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.5rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        font-size: 1.6rem;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

export const GradientText = styled.span`
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
`;

export const CompanyLink = styled.a`
    color: ${({ theme }) => theme.color.secondary};
    font-weight: 700;
    text-decoration: none;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 4px 12px;
    border-radius: 15px;
    display: inline-block;
    border: 2px solid transparent;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: ${({ theme }) => theme.color.secondary};
        border-radius: 15px;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: -1;
    }

    &::after {
        content: '✨';
        position: absolute;
        right: -20px;
        top: 50%;
        transform: translateY(-50%);
        opacity: 0;
        transition: all 0.3s ease;
        font-size: 1rem;
    }

    &:hover {
        color: white;
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 8px 20px rgba(212, 165, 165, 0.4);
        animation: ${bounce} 0.6s ease-in-out;

        &::before {
            opacity: 1;
        }

        &::after {
            opacity: 1;
            right: -25px;
            animation: ${sparkle} 1s ease-in-out infinite;
        }
    }

    &:focus {
        outline: 3px solid ${({ theme }) => theme.color.secondary};
        outline-offset: 3px;
        border-radius: 15px;
    }
`;

export const SkillContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.sm};
    margin-top: ${({ theme }) => theme.spacing.md};
`;

export const SkillTag = styled.span`
    background: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.white};
    padding: ${({ theme }) => theme.spacing.xs}
        ${({ theme }) => theme.spacing.md};
    border-radius: 9999px;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: default;
    animation: ${fadeInUp} 0.6s ease-out;
    animation-fill-mode: both;
    position: relative;
    overflow: hidden;
    box-shadow: 3px 3px 0 ${({ theme }) => theme.color.black};
    border: 3px solid ${({ theme }) => theme.color.black};

    &:nth-child(1) {
        animation-delay: 0.1s;
        background: ${({ theme }) => theme.color.secondary};
    }
    &:nth-child(2) {
        animation-delay: 0.2s;
        background: ${({ theme }) => theme.color.primary};
    }
    &:nth-child(3) {
        animation-delay: 0.3s;
        background: ${({ theme }) => theme.color.tertiary};
        color: ${({ theme }) => theme.color.black};
    }
    &:nth-child(4) {
        animation-delay: 0.4s;
        background: ${({ theme }) => theme.color.accent};
        color: ${({ theme }) => theme.color.black};
    }
    &:nth-child(5) {
        animation-delay: 0.5s;
        background: ${({ theme }) => theme.color.coral};
    }

    &:hover {
        transform: translate(-2px, -2px) rotate(-2deg);
        box-shadow: 5px 5px 0 ${({ theme }) => theme.color.black};
    }
`;
