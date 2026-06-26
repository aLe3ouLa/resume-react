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

// Subtle bob for the photo card so the bold layout still feels alive.
const popFloat = keyframes`
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
`;

export const Wave = styled.span`
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: ${waveAnimation};
    display: inline-block;
    font-size: 2rem;
    margin-left: ${({ theme }) => theme.spacing.xxs};
    cursor: pointer;

    &:hover {
        animation: ${wiggleAnimation} 0.5s ease-in-out;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.6rem;
    }
`;

// Small intro line that sits above the big headline for a bold size contrast.
export const Eyebrow = styled.span`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.xs};
    font-size: 1.8rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.textLight};
    font-family: 'Comfortaa', sans-serif;
    letter-spacing: 0.5px;
    margin-bottom: ${({ theme }) => theme.spacing.sm};

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.5rem;
        justify-content: center;
    }
`;

export const FloatingElement = styled.div`
    position: absolute;
    width: 76px;
    height: 76px;
    animation: ${floatAnimation} 5s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
    /* Hard offset shadow follows the shape silhouette */
    filter: drop-shadow(6px 6px 0 ${({ theme }) => theme.color.black});

    svg {
        display: block;
        width: 100%;
        height: 100%;
    }

    &:nth-of-type(1) {
        top: 6%;
        left: 5%;
        animation-delay: 0s;
    }

    &:nth-of-type(2) {
        top: 14%;
        right: 4%;
        animation-delay: 1.2s;
    }

    &:nth-of-type(3) {
        bottom: 12%;
        left: 4%;
        animation-delay: 2.1s;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 50px;
        height: 50px;
        filter: drop-shadow(4px 4px 0 ${({ theme }) => theme.color.black});

        &:nth-of-type(1) {
            top: 3%;
            left: 3%;
        }

        &:nth-of-type(2) {
            top: 6%;
            right: 4%;
        }

        &:nth-of-type(3) {
            bottom: 6%;
            left: 5%;
        }
    }
`;

export const Sparkle = styled.span`
    position: absolute;
    width: 34px;
    height: 34px;
    animation: ${floatAnimation} 6s ease-in-out infinite;
    pointer-events: none;
    z-index: 1;
    filter: drop-shadow(4px 4px 0 ${({ theme }) => theme.color.black});

    svg {
        display: block;
        width: 100%;
        height: 100%;
    }

    &:nth-of-type(1) {
        top: 10%;
        right: 12%;
        animation-delay: 0.4s;
    }

    &:nth-of-type(2) {
        top: 52%;
        left: 52%;
        animation-delay: 1.1s;
    }

    &:nth-of-type(3) {
        bottom: 24%;
        right: 6%;
        animation-delay: 1.9s;
    }

    &:nth-of-type(4) {
        bottom: 6%;
        right: 32%;
        animation-delay: 2.6s;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 26px;
        height: 26px;
        filter: drop-shadow(3px 3px 0 ${({ theme }) => theme.color.black});

        &:nth-of-type(1) {
            top: 7%;
            right: 8%;
        }

        &:nth-of-type(2) {
            top: 42%;
            left: 2%;
        }

        &:nth-of-type(3) {
            bottom: 28%;
            right: 4%;
        }

        &:nth-of-type(4) {
            bottom: 4%;
            right: 30%;
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

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        align-items: center;
        text-align: center;
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
    position: relative;
    overflow: visible;
    padding: ${({ theme }) => theme.spacing.xl} 0;

    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 600px;
    margin: ${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.xl} 0;

    img {
        position: relative;
        z-index: 2;
        border-radius: 24px;
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border: 3px solid ${({ theme }) => theme.color.black};
        /* Bright colored hard shadow = the layered "sticker" look */
        box-shadow: 12px 12px 0 ${({ theme }) => theme.color.secondary};
        animation: ${popFloat} 6s ease-in-out infinite;

        &:hover {
            transform: translate(-4px, -4px) rotate(-1deg);
            box-shadow: 16px 16px 0 ${({ theme }) => theme.color.primary};
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: ${({ theme }) => theme.spacing.lg} 0;
        flex-direction: column;
        text-align: center;
        min-height: auto;

        img {
            width: 200px;
            margin-top: ${({ theme }) => theme.spacing.md};
            box-shadow: 8px 8px 0 ${({ theme }) => theme.color.secondary};
        }
    }
`;

export const NameQuote = styled.span`
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    font-size: 6.4rem;
    line-height: 1;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    font-weight: 800;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    letter-spacing: -0.02em;
    text-transform: uppercase;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 3.4rem;
        justify-content: center;
    }
`;

export const Text = styled.span`
    display: inline-block;
    font-size: inherit;
    line-height: 1;
    font-weight: 800;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    letter-spacing: -0.02em;

    /* Sticker badge: bright fill, thick black outline, hard offset shadow, playful tilt */
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.secondary};
    border: 3px solid ${({ theme }) => theme.color.black};
    border-radius: 14px;
    padding: 0 ${({ theme }) => theme.spacing.sm};
    box-shadow: 5px 5px 0 ${({ theme }) => theme.color.black};
    transform: rotate(-2deg);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        transform: rotate(-2deg) translate(-2px, -2px);
        box-shadow: 7px 7px 0 ${({ theme }) => theme.color.black};
    }
`;
