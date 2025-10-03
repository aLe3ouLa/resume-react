import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';


const waveAnimation = keyframes`
    0% { transform: rotate( 0.0deg) }
   10% { transform: rotate(14.0deg) }
   20% { transform: rotate(-8.0deg) }
   30% { transform: rotate(12.0deg) }
   40% { transform: rotate(-6.0deg) }
   50% { transform: rotate(10.0deg) }
   60% { transform: rotate( 0.0deg) }
  100% { transform: rotate( 0.0deg) }
`;

const gradientShift = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;


const floatAnimation = keyframes`
    0%, 100% {
        transform: translateY(0px) rotate(0deg);
    }
    50% {
        transform: translateY(-20px) rotate(5deg);
    }
`;

const sparkleAnimation = keyframes`
    0%, 100% {
        opacity: 0;
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: scale(1);
    }
`;

const wiggleAnimation = keyframes`
    0%, 7%, 93%, 100% {
        transform: rotate(0deg);
    }
    15% {
        transform: rotate(5deg);
    }
    20% {
        transform: rotate(-4deg);
    }
    25% {
        transform: rotate(3deg);
    }
    30% {
        transform: rotate(-2deg);
    }
    35% {
        transform: rotate(1deg);
    }
`;

const rainbowAnimation = keyframes`
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
`;

const glowAnimation = keyframes`
    0%, 100% {
        box-shadow: 0 0 20px rgba(130, 158, 134, 0.3);
    }
    50% {
        box-shadow: 0 0 40px rgba(130, 158, 134, 0.6), 0 0 60px rgba(130, 158, 134, 0.4);
    }
`;

const morphingBackground = keyframes`
    0%, 100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    50% {
        border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
`;

export const Wave = styled.span`
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: ${waveAnimation};
    display: inline-block;
    font-size: 4rem;
    margin-left: ${({ theme }) => theme.spacing.xs};
    cursor: pointer;
    
    &:hover {
        animation: ${wiggleAnimation} 0.5s ease-in-out;
    }
`;

export const FloatingElement = styled.div`
    position: absolute;
    font-size: 2.5rem;
    animation: ${floatAnimation} 4s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.2);
        filter: drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2));
    }
    
    &:nth-child(1) {
        top: 8%;
        left: 8%;
        animation-delay: 0s;
    }
    
    &:nth-child(2) {
        top: 25%;
        right: 3%;
        animation-delay: 1s;
    }
    
    &:nth-child(3) {
        bottom: 15%;
        left: 5%;
        animation-delay: 2s;
    }
    
    &:nth-child(4) {
        top: 25%;
        right: 40%;
        animation-delay: 0.5s;
    }
    
    &:nth-child(5) {
        bottom: 15%;
        right: 8%;
        animation-delay: 1.5s;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 2rem;
        
        &:nth-child(1) {
            top: 5%;
            left: 5%;
        }
        
        &:nth-child(2) {
            top: 10%;
            right: 8%;
        }
        
        &:nth-child(3) {
            bottom: 20%;
            left: 10%;
        }
        
        &:nth-child(4) {
            top: 30%;
            right: 15%;
        }
        
        &:nth-child(5) {
            bottom: 10%;
            right: 5%;
        }
    }
`;

export const Sparkle = styled.span`
    position: absolute;
    font-size: 1.8rem;
    animation: ${sparkleAnimation} 3s ease-in-out infinite;
    pointer-events: none;
    filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8));
    
    &:nth-child(1) {
        top: 12%;
        left: 3%;
        animation-delay: 0s;
    }
    
    &:nth-child(2) {
        top: 22%;
        right: 6%;
        animation-delay: 0.8s;
    }
    
    &:nth-child(3) {
        bottom: 22%;
        left: 6%;
        animation-delay: 1.6s;
    }
    
    &:nth-child(4) {
        bottom: 12%;
        right: 3%;
        animation-delay: 2.4s;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.5rem;
        
        &:nth-child(1) {
            top: 8%;
            left: 2%;
        }
        
        &:nth-child(2) {
            top: 18%;
            right: 4%;
        }
        
        &:nth-child(3) {
            bottom: 18%;
            left: 4%;
        }
        
        &:nth-child(4) {
            bottom: 8%;
            right: 2%;
        }
    }
`;


export const Title = styled.h1`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    margin-bottom: 0px;
    margin-left: 0px;
    color: ${({ theme }) => theme.color.text};
    cursor: none;
    gap: ${({ theme }) => theme.spacing.md};
    position: relative;
    z-index: 2;

    & > span {
        font-size: 4rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        align-items: center;
        text-align: center;
        
        & > span {
            font-size: 3rem;
        }
    }
`;

export const ColoredSpan = styled.span`
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.primary} 0%,
        ${({ theme }) => theme.color.tertiary} 50%,
        ${({ theme }) => theme.color.tertiary} 100%
    );
    background-size: 200% 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 800;
    font-size: 4rem;
    cursor: none;
    transition: all 0.3s ease;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 3px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.color.primary}, 
            ${({ theme }) => theme.color.tertiary}
        );
        transition: width 0.3s ease;
    }
    
    &:hover {
        background-position: 100% 0;
        transform: translateY(-2px);
        
        &::after {
            width: 100%;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.md};
    flex-wrap: wrap;
    margin-top: ${({ theme }) => theme.spacing.sm};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        justify-content: center;
        gap: ${({ theme }) => theme.spacing.sm};
    }
`;

export const PhotographyCTA = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.xs};
    padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.tertiary} 0%,
        ${({ theme }) => theme.color.primary} 100%
    );
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(255, 145, 66, 0.3);
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }
    
    &:hover {
        transform: translateY(-3px) scale(1.02);
        box-shadow: 0 8px 25px rgba(255, 145, 66, 0.4);
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(-1px) scale(1.01);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.1rem;
        padding: ${({ theme }) => theme.spacing.xxs} ${({ theme }) => theme.spacing.sm};
    }
`;

export const CameraIcon = styled.span`
    font-size: 1.3rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.2rem;
    }
`;

export const Quotes = styled.div`
    background: linear-gradient(135deg, 
        rgba(255, 255, 255, 0.1) 0%,
        rgba(130, 158, 134, 0.05) 25%,
        rgba(255, 145, 66, 0.05) 50%,
        rgba(50, 85, 127, 0.05) 75%,
        rgba(255, 255, 255, 0.1) 100%
    );
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 600px;
    margin: ${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.lg} 0;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, rgba(130, 158, 134, 0.1) 0%, transparent 70%);
        animation: ${morphingBackground} 8s ease-in-out infinite;
        z-index: -1;
    }

    img {
        border-radius: 50%;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        animation: ${glowAnimation} 3s ease-in-out infinite;
        border: 3px solid rgba(255, 255, 255, 0.3);
        box-shadow: 
            0 0 0 4px rgba(130, 158, 134, 0.2),
            0 8px 32px rgba(0, 0, 0, 0.15);
        
        &:hover {
            transform: scale(1.08) rotate(8deg);
            animation: ${rainbowAnimation} 1.5s ease-in-out infinite;
            box-shadow: 
                0 0 0 8px rgba(130, 158, 134, 0.3),
                0 0 50px rgba(130, 158, 134, 0.4),
                0 16px 48px rgba(0, 0, 0, 0.2);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
        flex-direction: column;
        text-align: center;
        min-height: auto;
        border-radius: 16px;

        img {
            width: 200px;
            margin-top: ${({ theme }) => theme.spacing.sm};
        }
    }
`;

export const Quote = styled.span`
    max-width: 75%;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 1.6rem;
    line-height: 1.5;
    font-weight: 500;
    color: ${({ theme }) => theme.color.textLight};
    position: relative;
    
    &::before {
        content: '"';
        font-size: 4rem;
        color: ${({ theme }) => theme.color.primary};
        opacity: 0.3;
        position: absolute;
        top: -20px;
        left: -20px;
        font-family: serif;
    }
    
    &::after {
        content: '"';
        font-size: 4rem;
        color: ${({ theme }) => theme.color.primary};
        opacity: 0.3;
        position: absolute;
        bottom: -30px;
        right: -20px;
        font-family: serif;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        max-width: 100%;
        font-size: 1.4rem;
        text-align: center;
        
        &::before, &::after {
            display: none;
        }
    }
`;

export const NameQuote = styled.span`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 4rem;
    line-height: 1.1;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    font-weight: 800;
    letter-spacing: -0.02em;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3rem;
        justify-content: center;
    }
`;

export const Text = styled.span`
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.color.primary} 0%,
        ${({ theme }) => theme.color.tertiary} 25%,
        ${({ theme }) => theme.color.tertiary} 50%,
        ${({ theme }) => theme.color.secondary} 75%,
        ${({ theme }) => theme.color.primary} 100%
    );
    background-size: 400% 400%;
    
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.02em;
    position: relative;
    
    animation: 
        ${gradientShift} 6s ease-in-out infinite,
    
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            135deg,
            rgba(130, 158, 134, 0.1) 0%,
            rgba(255, 145, 66, 0.1) 50%,
            rgba(50, 85, 127, 0.1) 100%
        );
        border-radius: 8px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover {
        transform: scale(1.08) translateY(-2px);
        animation-play-state: paused;
        
        &::before {
            opacity: 1;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3rem;
    }
`;
