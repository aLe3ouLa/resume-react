import React from 'react';
import Landscape from './landscape';
import Wrapper from '../components/fragments/wrapper';
import { ColoredSpan } from '../components/fragments/hero/hero.style';
import styled, { keyframes } from 'styled-components';
import Portraits from './portraits';
import Wildlife from './wildlife';

// Animations
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

const fadeInScale = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const shimmer = keyframes`
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
`;

const float = keyframes`
    0%, 100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
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

const PhotographyHeader = styled.div`
    text-align: center;
    margin-bottom: 80px;
    padding: 80px 0;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.primary}08, 
        ${({ theme }) => theme.color.secondary}08,
        ${({ theme }) => theme.color.tertiary}08
    );
    border-radius: 20px;
    animation: ${fadeInUp} 1s ease-out;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, 
            transparent 30%, 
            ${({ theme }) => theme.color.primary}10 50%, 
            transparent 70%
        );
        background-size: 200% 200%;
        animation: ${shimmer} 3s ease-in-out infinite;
        pointer-events: none;
    }
`;

const PhotographyTitle = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color.text};
    line-height: 1.2;
    position: relative;
    z-index: 1;
    animation: ${fadeInScale} 1.2s ease-out 0.3s both;
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.text}, 
        ${({ theme }) => theme.color.primary},
        ${({ theme }) => theme.color.secondary}
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${fadeInScale} 1.2s ease-out 0.3s both, ${gradientShift} 4s ease-in-out infinite;
`;

const PhotographySubtitle = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.text};
    opacity: 0.8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
    position: relative;
    z-index: 1;
    animation: ${fadeInUp} 1.4s ease-out 0.6s both;
`;

const SectionTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 600;
    margin: 80px 0 40px 0;
    color: ${({ theme }) => theme.color.text};
    text-align: center;
    position: relative;
    animation: ${fadeInUp} 1s ease-out;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.color.primary}, 
            ${({ theme }) => theme.color.secondary}
        );
        border-radius: 2px;
        animation: ${pulse} 2s ease-in-out infinite;
    }
`;

const SectionDescription = styled.p`
    text-align: center;
    color: ${({ theme }) => theme.color.text};
    opacity: 0.7;
    margin-bottom: 60px;
    font-size: 1.3rem;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

const BookingSection = styled.div`
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.primary}15, 
        ${({ theme }) => theme.color.secondary}15,
        ${({ theme }) => theme.color.tertiary}15
    );
    background-size: 200% 200%;
    border-radius: 20px;
    padding: 60px 40px;
    margin: 80px 0;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.color.primary}20;
    position: relative;
    overflow: hidden;
    animation: ${fadeInScale} 1s ease-out, ${gradientShift} 8s ease-in-out infinite;
    
    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(circle, 
            ${({ theme }) => theme.color.primary}05 0%, 
            transparent 70%
        );
        animation: ${float} 6s ease-in-out infinite;
        pointer-events: none;
    }
`;

const BookingTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color.text};
`;

const BookingText = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.text};
    opacity: 0.8;
    margin-bottom: 30px;
    line-height: 1.6;
`;

const EmailButton = styled.a`
    display: inline-block;
    background: ${({ theme }) => theme.color.primary};
    color: white;
    padding: 18px 40px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px ${({ theme }) => theme.color.primary}30;
    
    &:hover {
        background: ${({ theme }) => theme.color.hoverPrimary};
        transform: translateY(-2px);
        box-shadow: 0 6px 20px ${({ theme }) => theme.color.primary}40;
    }
`;

const BehindTheLensSection = styled.div`
    margin: 100px 0;
    padding: 80px 0;
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.primary}05, 
        ${({ theme }) => theme.color.secondary}05
    );
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    animation: ${fadeInUp} 1s ease-out;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at 20% 80%, 
            ${({ theme }) => theme.color.primary}08 0%, 
            transparent 50%
        ), radial-gradient(circle at 80% 20%, 
            ${({ theme }) => theme.color.secondary}08 0%, 
            transparent 50%
        );
        pointer-events: none;
    }
`;

const BehindTheLensContent = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 60px;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    position: relative;
    z-index: 1;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: 1fr 1fr;
        gap: 80px;
    }
`;

const BehindTheLensText = styled.div`
    text-align: left;
`;

const BehindTheLensTitle = styled.h2`
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 30px;
    color: ${({ theme }) => theme.color.text};
    line-height: 1.2;
    animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const BehindTheLensDescription = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.text};
    opacity: 0.8;
    line-height: 1.7;
    margin-bottom: 25px;
    animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const BehindTheLensPhilosophy = styled.p`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.color.text};
    opacity: 0.7;
    line-height: 1.6;
    margin-bottom: 30px;
    font-style: italic;
    animation: ${fadeInUp} 1s ease-out 0.6s both;
`;

const BehindTheLensSignature = styled.div`
    font-size: 1.1rem;
    color: ${({ theme }) => theme.color.primary};
    font-weight: 600;
    text-align: right;
    animation: ${fadeInUp} 1s ease-out 0.8s both;
`;

const BehindTheLensImage = styled.div`
    position: relative;
    animation: ${fadeInScale} 1s ease-out 0.5s both;
    
    img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        transition: transform 0.3s ease;
        
        &:hover {
            transform: scale(1.02);
        }
    }
    
    &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background: linear-gradient(45deg, 
            ${({ theme }) => theme.color.primary}20, 
            ${({ theme }) => theme.color.secondary}20
        );
        border-radius: 30px;
        z-index: -1;
        animation: ${pulse} 3s ease-in-out infinite;
    }
`;

const ContactSection = styled.div`
    margin: 100px 0;
    padding: 80px 0;
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.tertiary}08, 
        ${({ theme }) => theme.color.primary}08
    );
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    animation: ${fadeInUp} 1s ease-out;
`;

const ContactTitle = styled.h2`
    font-size: 2.8rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.color.text};
    animation: ${fadeInUp} 1s ease-out 0.2s both;
`;

const ContactSubtitle = styled.p`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.text};
    opacity: 0.8;
    text-align: center;
    max-width: 600px;
    margin: 0 auto 60px auto;
    line-height: 1.6;
    animation: ${fadeInUp} 1s ease-out 0.4s both;
`;

const ProcessGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 80px;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 40px;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
    }
`;

const ProcessStep = styled.div`
    background: white;
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    transition: all 0.3s ease;
    position: relative;
    animation: ${fadeInUp} 1s ease-out;
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
        border-color: ${({ theme }) => theme.color.primary}30;
    }
`;

const StepNumber = styled.div`
    font-size: 3rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 20px;
    opacity: 0.3;
`;

const StepTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.color.text};
`;

const StepDescription = styled.p`
    color: ${({ theme }) => theme.color.text};
    opacity: 0.7;
    line-height: 1.6;
`;

const FAQSection = styled.div`
    margin-bottom: 60px;
`;

const FAQTitle = styled.h3`
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 40px;
    color: ${({ theme }) => theme.color.text};
    animation: ${fadeInUp} 1s ease-out 0.6s both;
`;

const FAQGrid = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
`;

const FAQItem = styled.div`
    background: white;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    animation: ${fadeInUp} 1s ease-out;
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    }
`;

const FAQQuestion = styled.h4`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.color.text};
`;

const FAQAnswer = styled.p`
    color: ${({ theme }) => theme.color.text};
    opacity: 0.7;
    line-height: 1.6;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
    padding: 0 40px;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: row;
        gap: 30px;
    }
`;

const ContactMethod = styled.div`
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.primary}10, 
        ${({ theme }) => theme.color.secondary}10
    );
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.color.primary}20;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    animation: ${fadeInUp} 1s ease-out;
    flex: 1;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.color.primary}, 
            ${({ theme }) => theme.color.secondary}
        );
        background-size: 200% 100%;
        animation: ${gradientShift} 3s ease-in-out infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px ${({ theme }) => theme.color.primary}20;
        border-color: ${({ theme }) => theme.color.primary}40;
        
        &::before {
            opacity: 1;
        }
    }
`;

const ContactIcon = styled.div`
    font-size: 3rem;
    margin-bottom: 20px;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
    transition: transform 0.3s ease;
    
    ${ContactMethod}:hover & {
        transform: scale(1.1);
    }
`;

const ContactDetails = styled.div`
    text-align: center;
`;

const ContactLabel = styled.div`
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color.text};
    opacity: 0.7;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 500;
`;

const ContactValue = styled.div`
    font-size: 1.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.text};
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.text}, 
        ${({ theme }) => theme.color.primary}
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 4s ease-in-out infinite;
`;

const PricingSection = styled.div`
    margin: 80px 0;
`;

const PricingGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 40px;
    
    @media (min-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
    
    @media (min-width: ${({ theme }) => theme.breakpoint.desktop}) {
        grid-template-columns: repeat(3, 1fr);
        gap: 50px;
    }
`;

const PricingCard = styled.div`
    background: white;
    border-radius: 20px;
    padding: 40px 30px;
    text-align: center;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
    border: 2px solid transparent;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    animation: ${fadeInUp} 1s ease-out;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.color.primary}, 
            ${({ theme }) => theme.color.secondary},
            ${({ theme }) => theme.color.tertiary}
        );
        background-size: 200% 100%;
        animation: ${gradientShift} 3s ease-in-out infinite;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover {
        transform: translateY(-12px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        border-color: ${({ theme }) => theme.color.primary}40;
        
        &::before {
            opacity: 1;
        }
    }
    
    &.featured {
        border-color: ${({ theme }) => theme.color.primary};
        transform: scale(1.05);
        background: linear-gradient(135deg, 
            white, 
            ${({ theme }) => theme.color.primary}05
        );
        
        &::before {
            opacity: 1;
        }
        
        &:hover {
            transform: scale(1.05) translateY(-12px);
            box-shadow: 0 25px 50px ${({ theme }) => theme.color.primary}20;
        }
    }
`;

const PricingTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.text};
`;

const PricingPrice = styled.div`
    font-size: 3rem;
    font-weight: 700;
    background: linear-gradient(135deg, 
        ${({ theme }) => theme.color.primary}, 
        ${({ theme }) => theme.color.secondary}
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 20px;
    animation: ${gradientShift} 3s ease-in-out infinite;
    position: relative;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, 
            ${({ theme }) => theme.color.primary}, 
            ${({ theme }) => theme.color.secondary}
        );
        transition: width 0.3s ease;
    }
    
    &:hover::after {
        width: 100%;
    }
`;

const PricingDescription = styled.p`
    color: ${({ theme }) => theme.color.text};
    opacity: 0.7;
    line-height: 1.6;
    margin-bottom: 20px;
`;

const PricingFeatures = styled.ul`
    list-style: none;
    padding: 0;
    margin: 20px 0;
    text-align: left;
`;

const PricingFeature = styled.li`
    padding: 8px 0;
    color: ${({ theme }) => theme.color.text};
    opacity: 0.8;
    
    &:before {
        content: "✓";
        color: ${({ theme }) => theme.color.primary};
        font-weight: bold;
        margin-right: 10px;
    }
`;

// Floating decorative elements
const FloatingElement = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(45deg, 
        ${({ theme }) => theme.color.primary}30, 
        ${({ theme }) => theme.color.secondary}30
    );
    border-radius: 50%;
    animation: ${float} 4s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
    
    &:nth-child(1) {
        top: 20%;
        left: 10%;
        animation-delay: 0s;
    }
    
    &:nth-child(2) {
        top: 60%;
        right: 15%;
        animation-delay: 1s;
    }
    
    &:nth-child(3) {
        bottom: 30%;
        left: 20%;
        animation-delay: 2s;
    }
`;

export default function Photography() {
    return (
        <Wrapper>
            <PhotographyHeader>
                <FloatingElement />
                <FloatingElement />
                <FloatingElement />
                <PhotographyTitle>
                    Photography <ColoredSpan>.</ColoredSpan>
                </PhotographyTitle>
                <PhotographySubtitle>
                    Capturing moments from travels around the world. 
                    From the bustling streets of Brooklyn to the charming alleys of Lisbon, 
                    each photo tells a story of discovery and wonder.
                </PhotographySubtitle>
            </PhotographyHeader>
            

            <SectionTitle>Urban Landscapes</SectionTitle>
            <SectionDescription>
                Exploring the beauty found in city streets, architecture, and urban life
            </SectionDescription>
            <Landscape />
            <BehindTheLensSection>
                <BehindTheLensContent>
                    <BehindTheLensText>
                        <BehindTheLensTitle>Behind the Lens <ColoredSpan>.</ColoredSpan></BehindTheLensTitle>
                        <BehindTheLensDescription>
                            Photography isn't just about capturing images—it's about preserving emotions, 
                            telling stories, and creating timeless memories. My journey began with a simple 
                            curiosity about the world around me, and it has evolved into a deep passion 
                            for documenting life's most precious moments.
                        </BehindTheLensDescription>
                        <BehindTheLensPhilosophy>
                            I believe every person has a unique story worth telling, every moment has 
                            its own beauty, and every photograph should evoke genuine emotion. Whether 
                            I'm exploring the vibrant streets of Lisbon or capturing intimate portraits, 
                            my goal is always the same: to create images that resonate with authenticity 
                            and artistic vision.
                        </BehindTheLensPhilosophy>
                        <BehindTheLensSignature>
                            — Alexandra Barka
                        </BehindTheLensSignature>
                    </BehindTheLensText>
                    <BehindTheLensImage>
                        <img src="/static/media/Profile.b52fb78a4c90e9a68729.jpeg" alt="Alexandra Barka with camera" />
                    </BehindTheLensImage>
                </BehindTheLensContent>
            </BehindTheLensSection>

            <BookingSection>
                <BookingTitle>Ready to Book? <ColoredSpan>.</ColoredSpan></BookingTitle>
                <BookingText>
                    Let's capture your special moments together. Whether it's a portrait session, 
                    event photography, or a custom project, I'm here to bring your vision to life.
                </BookingText>
                <EmailButton href="mailto:barka.alexandra2@gmail.com">
                    Get In Touch
                </EmailButton>
            </BookingSection>
        

            <SectionTitle>Portraits</SectionTitle>
            <SectionDescription>
                Capturing authentic moments and genuine expressions that tell your unique story. 
            </SectionDescription>
            <Portraits />

            <PricingSection>
                <SectionTitle>Pricing</SectionTitle>
                <SectionDescription>
                    Professional photography services tailored to your needs
                </SectionDescription>
                
                <PricingGrid>
                    <PricingCard style={{ animationDelay: '0.1s' }}>
                        <PricingTitle>Portrait Session</PricingTitle>
                        <PricingPrice>50€</PricingPrice>
                        <PricingDescription>
                            Perfect for individual portraits, headshots, or personal branding photos
                        </PricingDescription>
                        <PricingFeatures>
                            <PricingFeature>1 hour session</PricingFeature>
                            <PricingFeature>10-15 edited photos</PricingFeature>
                            <PricingFeature>Online gallery</PricingFeature>
                            <PricingFeature>Basic retouching</PricingFeature>
                        </PricingFeatures>
                    </PricingCard>

                    <PricingCard className="featured" style={{ animationDelay: '0.2s' }}>
                        <PricingTitle>Lifestyle Photography</PricingTitle>
                        <PricingPrice>100€</PricingPrice>
                        <PricingDescription>
                            Capture your special moments, events, or celebrations
                        </PricingDescription>
                        <PricingFeatures>
                            <PricingFeature>2-3 hours</PricingFeature>
                            <PricingFeature>50+ edited photos</PricingFeature>
                            <PricingFeature>Online gallery</PricingFeature>
                            <PricingFeature>Same-day preview</PricingFeature>
                        </PricingFeatures>
                    </PricingCard>

                    <PricingCard style={{ animationDelay: '0.3s' }}>
                        <PricingTitle>Custom Project</PricingTitle>
                        <PricingPrice>Contact</PricingPrice>
                        <PricingDescription>
                            Tailored photography services for your unique needs
                        </PricingDescription>
                        <PricingFeatures>
                            <PricingFeature>Flexible duration</PricingFeature>
                            <PricingFeature>Custom deliverables</PricingFeature>
                            <PricingFeature>Consultation included</PricingFeature>
                            <PricingFeature>Specialized editing</PricingFeature>
                        </PricingFeatures>
                    </PricingCard>
                </PricingGrid>
            </PricingSection>



            <SectionTitle>Nature & Wildlife</SectionTitle>
            <SectionDescription>
                Capturing the raw beauty of wildlife in their habitats and the serene landscapes that surround us.
            </SectionDescription>
            <Wildlife />

            <ContactSection>
                <ContactTitle>Contact & Booking Process <ColoredSpan>.</ColoredSpan></ContactTitle>
                <ContactSubtitle>
                    Ready to create beautiful memories together? Here's how we'll bring your vision to life.
                </ContactSubtitle>
                
                <ProcessGrid>
                    <ProcessStep>
                        <StepNumber>01</StepNumber>
                        <StepTitle>Initial Consultation</StepTitle>
                        <StepDescription>
                            We'll discuss your vision, preferences, and requirements. 
                            Share your ideas, and I'll provide professional guidance 
                            on locations, timing, and styling.
                        </StepDescription>
                    </ProcessStep>

                    <ProcessStep>
                        <StepNumber>02</StepNumber>
                        <StepTitle>Planning & Preparation</StepTitle>
                        <StepDescription>
                            I'll create a detailed plan including location scouting, 
                            equipment setup, and timeline. You'll receive a comprehensive 
                            guide to help you prepare for the session.
                        </StepDescription>
                    </ProcessStep>

                    <ProcessStep>
                        <StepNumber>03</StepNumber>
                        <StepTitle>Photography Session</StepTitle>
                        <StepDescription>
                            The fun part! We'll capture authentic moments in a relaxed 
                            environment. I'll guide you through poses while keeping 
                            everything natural and comfortable.
                        </StepDescription>
                    </ProcessStep>

                    <ProcessStep>
                        <StepNumber>04</StepNumber>
                        <StepTitle>Editing & Delivery</StepTitle>
                        <StepDescription>
                            Your photos will be carefully edited to perfection. 
                            You'll receive a private online gallery with high-resolution 
                            images ready for download and sharing.
                        </StepDescription>
                    </ProcessStep>
                </ProcessGrid>

                <FAQSection>
                    <FAQTitle>Frequently Asked Questions</FAQTitle>
                    <FAQGrid>
                        <FAQItem>
                            <FAQQuestion>How far in advance should I book?</FAQQuestion>
                            <FAQAnswer>
                                I recommend booking at least 2-3 weeks in advance, 
                                especially for weekend sessions or special events.
                            </FAQAnswer>
                        </FAQItem>

                        <FAQItem>
                            <FAQQuestion>What if the weather is bad?</FAQQuestion>
                            <FAQAnswer>
                                We can reschedule outdoor sessions due to weather. 
                            </FAQAnswer>
                        </FAQItem>

                        <FAQItem>
                            <FAQQuestion>How long until I receive my photos?</FAQQuestion>
                            <FAQAnswer>
                                You'll receive a preview within 48 hours and your 
                                full gallery within 1-2 weeks of the session.
                            </FAQAnswer>
                        </FAQItem>

                        <FAQItem>
                            <FAQQuestion>Do you travel for sessions?</FAQQuestion>
                            <FAQAnswer>
                                Yes! I'm available for destination photography 
                                internationally.
                            </FAQAnswer>
                        </FAQItem>
                    </FAQGrid>
                </FAQSection>

                <ContactInfo>
                    <ContactMethod>
                        <ContactIcon>📧</ContactIcon>
                        <ContactDetails>
                            <ContactLabel>Email</ContactLabel>
                            <ContactValue>barka.alexandra2@gmail.com</ContactValue>
                        </ContactDetails>
                    </ContactMethod>

                    <ContactMethod>
                        <ContactIcon>📍</ContactIcon>
                        <ContactDetails>
                            <ContactLabel>Based in</ContactLabel>
                            <ContactValue>Amsterdam, Netherlands</ContactValue>
                        </ContactDetails>
                    </ContactMethod>

                    <ContactMethod>
                        <ContactIcon>⏰</ContactIcon>
                        <ContactDetails>
                            <ContactLabel>Response Time</ContactLabel>
                            <ContactValue>Within 24 hours</ContactValue>
                        </ContactDetails>
                    </ContactMethod>
                </ContactInfo>
            </ContactSection>
        </Wrapper>
    );
}
