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

const wiggle = keyframes`
    0%, 100% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(5deg);
    }
    75% {
        transform: rotate(-5deg);
    }
`;

const rainbow = keyframes`
    0% { filter: hue-rotate(0deg); }
    100% { filter: hue-rotate(360deg); }
`;

const float = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-8px);
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

const twinkle = keyframes`
    0%, 100% {
        opacity: 0.3;
        transform: scale(0.8) rotate(0deg);
    }
    50% {
        opacity: 1;
        transform: scale(1.2) rotate(180deg);
    }
`;

const drift = keyframes`
    0% {
        transform: translateX(-100px) translateY(0px);
    }
    25% {
        transform: translateX(25vw) translateY(-20px);
    }
    50% {
        transform: translateX(50vw) translateY(10px);
    }
    75% {
        transform: translateX(75vw) translateY(-15px);
    }
    100% {
        transform: translateX(100vw) translateY(0px);
    }
`;

export const Section = styled.section`
    padding: ${({ theme }) => theme.spacing.xl} 0;
    background: linear-gradient(135deg, 
        #fef7ff 0%, 
        #e8f5e8 25%,
        #fff0f5 50%,
        #f0f8ff 75%,
        #fef7ff 100%
    );
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 80%, rgba(255, 182, 193, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(173, 216, 230, 0.1) 0%, transparent 50%),
                    radial-gradient(circle at 40% 40%, rgba(255, 218, 185, 0.1) 0%, transparent 50%);
        animation: ${float} 6s ease-in-out infinite;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 1.5rem;
        color: rgba(255, 107, 107, 0.3);
        animation: ${float} 8s ease-in-out infinite reverse;
        pointer-events: none;
        z-index: 1;
        white-space: nowrap;
        overflow: hidden;
    }
`;

export const Heading = styled.h2`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    animation: ${fadeInUp} 0.8s ease-out;
`;

export const ColoredSpan = styled.span`
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-size: 3rem;
    transition: all 0.3s ease;
    display: inline-block;
    animation: ${gradientShift} 3s ease-in-out infinite, ${bounce} 2s ease-in-out infinite;

    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 4rem;
    }

    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        font-size: 5rem;
    }

    &:hover {
        transform: scale(1.2) rotate(10deg);
        animation: ${wiggle} 0.5s ease-in-out infinite, ${rainbow} 1s linear infinite;
        filter: drop-shadow(0 0 10px rgba(255, 107, 107, 0.5));
    }
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
    background: linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%);
    border-radius: 25px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    text-align: center;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57, #ff9ff3);
        background-size: 300% 300%;
        border-radius: 25px;
        padding: 6px;
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        mask-composite: xor;
        animation: ${gradientShift} 3s ease-in-out infinite;
        z-index: -1;
    }

    &:hover {
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        animation: ${bounce} 0.6s ease-in-out;
    }

    &:hover::before {
        animation: ${rainbow} 1s linear infinite;
    }
`;

export const TimelineIcon = styled.div`
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    border: 4px solid #ffffff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin: 0 auto ${({ theme }) => theme.spacing.md} auto;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

    &:hover {
        transform: scale(1.1);
        background: linear-gradient(135deg, #4ecdc4, #45b7d1);
        box-shadow: 0 8px 25px rgba(78, 205, 196, 0.5);
    }
`;

export const TimelineItem = styled.div`
    position: relative;
    animation: ${slideInLeft} 0.6s ease-out;
    animation-fill-mode: both;
    display: flex;
    flex-direction: column;
    height: 100%;

    &:nth-child(1) { animation-delay: 0.1s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.3s; }
    &:nth-child(4) { animation-delay: 0.4s; }
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
    background: linear-gradient(
        45deg,
        ${({ theme }) => theme.color.primary} 0%,
        ${({ theme }) => theme.color.primary} 50%,
        ${({ theme }) => theme.color.tertiary} 100%
    );
    background-size: 300% 300%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 600;
    animation: ${gradientShift} 3s ease-in-out infinite;
`;

export const CompanyLink = styled.a`
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
    text-decoration: none;
    position: relative;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    padding: 4px 12px;
    border-radius: 15px;
    display: inline-block;
    animation: ${gradientShift} 3s ease-in-out infinite;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
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
        box-shadow: 0 8px 20px rgba(255, 107, 107, 0.4);
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
        outline: 3px solid #ff6b6b;
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
    background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
    color: ${({ theme }) => theme.color.white};
    padding: ${({ theme }) => theme.spacing.xxxs} ${({ theme }) => theme.spacing.sm};
    border-radius: 25px;
    font-size: 1.2rem;
    font-weight: 600;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: default;
    animation: ${fadeInUp} 0.6s ease-out, ${bounce} 2s ease-in-out infinite;
    animation-fill-mode: both;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        transition: left 0.5s;
    }

    &:nth-child(1) { 
        animation-delay: 0.1s; 
        background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
    }
    &:nth-child(2) { 
        animation-delay: 0.2s; 
        background: linear-gradient(135deg, #4ecdc4, #6dd5d5);
    }
    &:nth-child(3) { 
        animation-delay: 0.3s; 
        background: linear-gradient(135deg, #45b7d1, #6bc5d8);
    }
    &:nth-child(4) { 
        animation-delay: 0.4s; 
        background: linear-gradient(135deg, #96ceb4, #a8d5c4);
    }
    &:nth-child(5) { 
        animation-delay: 0.5s; 
        background: linear-gradient(135deg, #feca57, #fed976);
    }

    &:hover {
        transform: translateY(-5px) scale(1.1) rotate(5deg);
        box-shadow: 0 8px 25px rgba(255, 107, 107, 0.5);
        animation: ${wiggle} 0.5s ease-in-out infinite, ${rainbow} 1s linear infinite;
    }

    &:hover::before {
        left: 100%;
    }
`;

// Floating Stars Components
export const FloatingStar = styled.div`
    position: absolute;
    font-size: 1.2rem;
    color: rgba(255, 107, 107, 0.6);
    pointer-events: none;
    z-index: 1;
    animation: ${twinkle} 3s ease-in-out infinite;
    
    &:nth-child(1) {
        top: 10%;
        left: 10%;
        animation-delay: 0s;
        animation-duration: 4s;
    }
    
    &:nth-child(2) {
        top: 20%;
        right: 15%;
        animation-delay: 1s;
        animation-duration: 3.5s;
    }
    
    &:nth-child(3) {
        top: 60%;
        left: 5%;
        animation-delay: 2s;
        animation-duration: 4.5s;
    }
    
    &:nth-child(4) {
        top: 70%;
        right: 10%;
        animation-delay: 0.5s;
        animation-duration: 3s;
    }
    
    &:nth-child(5) {
        top: 40%;
        left: 20%;
        animation-delay: 1.5s;
        animation-duration: 4s;
    }
    
    &:nth-child(6) {
        top: 30%;
        right: 25%;
        animation-delay: 2.5s;
        animation-duration: 3.5s;
    }
`;

export const DriftingStar = styled.div`
    position: absolute;
    font-size: 1rem;
    color: rgba(78, 205, 196, 0.5);
    pointer-events: none;
    z-index: 1;
    animation: ${drift} 15s linear infinite;
    
    &:nth-child(1) {
        top: 15%;
        animation-delay: 0s;
    }
    
    &:nth-child(2) {
        top: 45%;
        animation-delay: 5s;
    }
    
    &:nth-child(3) {
        top: 75%;
        animation-delay: 10s;
    }
`;