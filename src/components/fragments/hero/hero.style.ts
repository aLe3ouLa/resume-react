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
    font-weight: 700;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    line-height: 1.1;
    letter-spacing: -0.01em;
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
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    background: ${({ theme }) => theme.color.secondary};
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    border-radius: 9999px;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 4px 0 ${({ theme }) => theme.color.hoverSecondary},
        0 6px 12px rgba(255, 107, 107, 0.25);
    border: 3px solid ${({ theme }) => theme.color.secondary};
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 9999px;
        opacity: 0.1;
        background-image: var(--grain-texture);
    }
    
    &:hover {
        transform: translateY(2px);
        background: ${({ theme }) => theme.color.hoverSecondary};
        border-color: ${({ theme }) => theme.color.hoverSecondary};
        box-shadow: 
            0 2px 0 ${({ theme }) => theme.color.hoverSecondary},
            0 4px 8px rgba(255, 107, 107, 0.3);
        color: ${({ theme }) => theme.color.white};
        text-decoration: none;
    }
    
    &:active {
        transform: translateY(4px);
        box-shadow: 
            0 0 0 ${({ theme }) => theme.color.hoverSecondary},
            0 2px 4px rgba(255, 107, 107, 0.2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.1rem;
        padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.md};
    }
`;

export const Quotes = styled.div`
    background: ${({ theme }) => theme.color.cream};
    border: 4px solid ${({ theme }) => theme.color.primary};
    border-radius: 32px;
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.xxl};
    position: relative;
    overflow: hidden;
    box-shadow: 
        0 8px 0 ${({ theme }) => theme.color.hoverPrimary},
        0 12px 24px rgba(0, 168, 168, 0.2),
        inset 0 2px 4px rgba(255, 255, 255, 0.6);
    background-image: var(--grain-texture);
    background-blend-mode: overlay;

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 600px;
    margin: ${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.lg} 0;

    img {
        border-radius: 50%;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border: 5px solid ${({ theme }) => theme.color.primary};
        box-shadow: 
            0 6px 0 ${({ theme }) => theme.color.hoverPrimary},
            0 8px 24px rgba(0, 168, 168, 0.3),
            inset 0 2px 4px rgba(255, 255, 255, 0.5);
        
        &:hover {
            transform: scale(1.05) rotate(3deg);
            border-color: ${({ theme }) => theme.color.secondary};
            box-shadow: 
                0 4px 0 ${({ theme }) => theme.color.hoverSecondary},
                0 6px 20px rgba(255, 107, 107, 0.4),
                inset 0 2px 4px rgba(255, 255, 255, 0.5);
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

export const NameQuote = styled.span`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 4rem;
    line-height: 1.1;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    font-weight: 700;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    letter-spacing: -0.01em;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3rem;
        justify-content: center;
    }
`;

export const Text = styled.span`
    color: ${({ theme }) => theme.color.primary};
    font-size: 4rem;
    line-height: 1.1;
    font-weight: 700;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    letter-spacing: -0.01em;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 2px 2px 0 rgba(0, 168, 168, 0.1);
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 168, 168, 0.15);
        border-radius: 16px;
        z-index: -1;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover {
        transform: scale(1.05) translateY(-2px);
        color: ${({ theme }) => theme.color.secondary};
        text-shadow: 2px 2px 0 rgba(255, 107, 107, 0.15);
        
        &::before {
            opacity: 1;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3rem;
    }
`;
