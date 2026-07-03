import Landscape from './landscape';
import Wrapper from '../components/fragments/wrapper';
import styled, { keyframes } from 'styled-components';
import Portraits from './portraits';
import Wildlife from './wildlife';
import Profile from '../assets/Profile.jpeg';
import SectionTracker from '../components/SectionTracker';
import { SectionHeader } from '../design-system/components/SectionHeader/SectionHeader';
import { fadeInUp } from '../styles/keyframes';

// Animations
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
    background: linear-gradient(
        135deg,
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
        background: linear-gradient(
            45deg,
            transparent 30%,
            ${({ theme }) => theme.color.primary}10 50%,
            transparent 70%
        );
        background-size: 200% 200%;
        animation: ${shimmer} 3s ease-in-out infinite;
        pointer-events: none;
    }
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
        background: linear-gradient(
            90deg,
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
    background: linear-gradient(
        135deg,
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
    animation:
        ${fadeInScale} 1s ease-out,
        ${gradientShift} 8s ease-in-out infinite;

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: radial-gradient(
            circle,
            ${({ theme }) => theme.color.primary}05 0%,
            transparent 70%
        );
        animation: ${float} 6s ease-in-out infinite;
        pointer-events: none;
    }
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
    background: linear-gradient(
        135deg,
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
        background:
            radial-gradient(
                circle at 20% 80%,
                ${({ theme }) => theme.color.primary}08 0%,
                transparent 50%
            ),
            radial-gradient(
                circle at 80% 20%,
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
        background: linear-gradient(
            45deg,
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
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.color.tertiary}08,
        ${({ theme }) => theme.color.primary}08
    );
    border-radius: 30px;
    position: relative;
    overflow: hidden;
    animation: ${fadeInUp} 1s ease-out;
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
    background: linear-gradient(
        135deg,
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
        background: linear-gradient(
            90deg,
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
    background: linear-gradient(
        135deg,
        ${({ theme }) => theme.color.text},
        ${({ theme }) => theme.color.primary}
    );
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${gradientShift} 4s ease-in-out infinite;
`;

// Floating decorative elements
const FloatingElement = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    background: linear-gradient(
        45deg,
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

const Image = styled.img``;

export default function Photography() {
    return (
        <Wrapper>
            <SectionTracker sectionName="Photography Header">
                <PhotographyHeader>
                    <FloatingElement />
                    <FloatingElement />
                    <FloatingElement />
                    <SectionHeader
                        id="photography-heading"
                        text="Photography"
                    />
                    <PhotographySubtitle>
                        Capturing moments from travels around the world. From
                        the bustling streets of Brooklyn to the charming alleys
                        of Lisbon, each photo tells a story of discovery and
                        wonder.
                    </PhotographySubtitle>
                </PhotographyHeader>
            </SectionTracker>

            <SectionTracker sectionName="Urban Landscapes">
                <SectionTitle>Urban Landscapes</SectionTitle>
                <SectionDescription>
                    Exploring the beauty found in city streets, architecture,
                    and urban life
                </SectionDescription>
                <Landscape />
            </SectionTracker>

            <SectionTracker sectionName="Behind the Lens">
                <BehindTheLensSection>
                    <BehindTheLensContent>
                        <BehindTheLensText>
                            <SectionHeader
                                id="behind-the-lens-heading"
                                text="Behind the Lens"
                            />

                            <BehindTheLensDescription>
                                Photography isn't just about capturing
                                images—it's about preserving emotions, telling
                                stories, and creating timeless memories. My
                                journey began with a simple curiosity about the
                                world around me, and it has evolved into a deep
                                passion for documenting life's most precious
                                moments.
                            </BehindTheLensDescription>
                            <BehindTheLensPhilosophy>
                                I believe every person has a unique story worth
                                telling, every moment has its own beauty, and
                                every photograph should evoke genuine emotion.
                                Whether I'm exploring the vibrant streets of
                                Lisbon or capturing intimate portraits, my goal
                                is always the same: to create images that
                                resonate with authenticity and artistic vision.
                            </BehindTheLensPhilosophy>
                            <BehindTheLensSignature>
                                — Alexandra Barka
                            </BehindTheLensSignature>
                        </BehindTheLensText>
                        <BehindTheLensImage>
                            <Image
                                src={Profile}
                                alt="Alexandra Barka with camera"
                            />
                        </BehindTheLensImage>
                    </BehindTheLensContent>
                </BehindTheLensSection>
            </SectionTracker>

            <SectionTracker sectionName="Booking Section">
                <BookingSection>
                    <SectionHeader
                        id="booking-section-heading"
                        text="Booking & Contact"
                    />
                    <BookingText>
                        Let's capture your special moments together. Whether
                        it's a portrait session, event photography, or a custom
                        project, I'm here to bring your vision to life.
                    </BookingText>
                    <EmailButton href="mailto:barka.alexandra2@gmail.com">
                        Get In Touch
                    </EmailButton>
                </BookingSection>
            </SectionTracker>

            <SectionTracker sectionName="Portraits">
                <SectionTitle>Portraits</SectionTitle>
                <SectionDescription>
                    Capturing authentic moments and genuine expressions that
                    tell your unique story.
                </SectionDescription>
                <Portraits />
            </SectionTracker>

            <SectionTracker sectionName="Nature & Wildlife">
                <SectionTitle>Nature & Wildlife</SectionTitle>
                <SectionDescription>
                    Capturing the raw beauty of wildlife in their habitats and
                    the serene landscapes that surround us.
                </SectionDescription>
                <Wildlife />
            </SectionTracker>

            <SectionTracker sectionName="Contact & Booking Process">
                <ContactSection>
                    <SectionHeader
                        id="contact-section-heading"
                        text="Contact & Booking Process"
                    />
                    <ContactSubtitle>
                        Ready to create beautiful memories together? Here's how
                        we'll bring your vision to life.
                    </ContactSubtitle>

                    <ContactInfo>
                        <ContactMethod>
                            <ContactIcon>📧</ContactIcon>
                            <ContactDetails>
                                <ContactLabel>Email</ContactLabel>
                                <ContactValue>
                                    barka.alexandra2@gmail.com
                                </ContactValue>
                            </ContactDetails>
                        </ContactMethod>

                        <ContactMethod>
                            <ContactIcon>📍</ContactIcon>
                            <ContactDetails>
                                <ContactLabel>Based in</ContactLabel>
                                <ContactValue>
                                    Amsterdam, Netherlands
                                </ContactValue>
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
            </SectionTracker>
        </Wrapper>
    );
}
