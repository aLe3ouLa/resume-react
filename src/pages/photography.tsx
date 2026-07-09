import React from 'react';
import Landscape from './landscape';
import Wrapper from '../components/fragments/wrapper';
import Portraits from './portraits';
import Wildlife from './wildlife';
import Profile from '../assets/Profile.jpeg';
import SectionTracker from '../components/SectionTracker';
import { SectionHeader } from '../design-system/components/SectionHeader/SectionHeader';

const PhotographyHeader = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-center mb-[80px] py-[80px] relative overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#2EA84F08,#E0399B08,#FFCE2E08)] animate-[fade-in-up_1s_ease-out] before:content-[''] before:absolute before:inset-0 before:bg-[linear-gradient(45deg,transparent_30%,#2EA84F10_50%,transparent_70%)] before:bg-[length:200%_200%] before:animate-[shimmer_3s_ease-in-out_infinite] before:pointer-events-none ${className}`}
        {...props}
    >
        {children}
    </div>
);

const PhotographySubtitle = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-[1.2rem] text-text/80 max-w-[600px] mx-auto leading-[1.6] relative z-[1] animate-[fade-in-up_1.4s_ease-out_0.6s_both] ${className}`}
        {...props}
    >
        {children}
    </p>
);

const SectionTitle = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
        className={`text-[2.5rem] font-semibold mt-[80px] mx-0 mb-[40px] text-text text-center relative animate-[fade-in-up_1s_ease-out] after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-[60px] after:h-[4px] after:bg-gradient-to-r after:from-primary after:to-secondary after:rounded-[2px] after:animate-[pulse-scale_2s_ease-in-out_infinite] ${className}`}
        {...props}
    >
        {children}
    </h2>
);

const SectionDescription = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-center text-text/70 mb-[60px] text-[1.3rem] max-w-[500px] mx-auto ${className}`}
        {...props}
    >
        {children}
    </p>
);

const BookingSection = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`bg-[linear-gradient(135deg,#2EA84F15,#E0399B15,#FFCE2E15)] bg-[length:200%_200%] rounded-[20px] py-[60px] px-[40px] my-[80px] text-center border-2 border-[#2EA84F20] relative overflow-hidden animate-[fade-in-scale_1s_ease-out,gradient-shift_8s_ease-in-out_infinite] before:content-[''] before:absolute before:top-[-50%] before:left-[-50%] before:w-[200%] before:h-[200%] before:bg-[radial-gradient(circle,#2EA84F05_0%,transparent_70%)] before:animate-[float-soft_6s_ease-in-out_infinite] before:pointer-events-none ${className}`}
        {...props}
    >
        {children}
    </div>
);

const BookingText = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-[1.2rem] text-text/80 mb-[30px] leading-[1.6] ${className}`}
        {...props}
    >
        {children}
    </p>
);

const EmailButton = ({
    className = '',
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
        className={`inline-block bg-primary text-white py-[18px] px-[40px] rounded-[50px] no-underline font-semibold text-[1.1rem] transition-all duration-300 ease-out shadow-[0_4px_15px_#2EA84F30] hover:bg-hoverPrimary hover:-translate-y-[2px] hover:shadow-[0_6px_20px_#2EA84F40] ${className}`}
        {...props}
    >
        {children}
    </a>
);

const BehindTheLensSection = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`my-[100px] py-[80px] bg-[linear-gradient(135deg,#2EA84F05,#E0399B05)] rounded-[30px] relative overflow-hidden animate-[fade-in-up_1s_ease-out] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_20%_80%,#2EA84F08_0%,transparent_50%),radial-gradient(circle_at_80%_20%,#E0399B08_0%,transparent_50%)] before:pointer-events-none ${className}`}
        {...props}
    >
        {children}
    </div>
);

const BehindTheLensContent = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`grid grid-cols-1 gap-[60px] items-center max-w-[1200px] mx-auto px-[40px] relative z-[1] tablet:grid-cols-2 tablet:gap-[80px] ${className}`}
        {...props}
    >
        {children}
    </div>
);

const BehindTheLensText = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`text-left ${className}`} {...props}>
        {children}
    </div>
);

const BehindTheLensDescription = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-[1.2rem] text-text/80 leading-[1.7] mb-[25px] animate-[fade-in-up_1s_ease-out_0.4s_both] ${className}`}
        {...props}
    >
        {children}
    </p>
);

const BehindTheLensPhilosophy = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-[1.1rem] text-text/70 leading-[1.6] mb-[30px] italic animate-[fade-in-up_1s_ease-out_0.6s_both] ${className}`}
        {...props}
    >
        {children}
    </p>
);

const BehindTheLensSignature = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-[1.1rem] text-primary font-semibold text-right animate-[fade-in-up_1s_ease-out_0.8s_both] ${className}`}
        {...props}
    >
        {children}
    </div>
);

const BehindTheLensImage = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`relative animate-[fade-in-scale_1s_ease-out_0.5s_both] before:content-[''] before:absolute before:top-[-10px] before:left-[-10px] before:right-[-10px] before:bottom-[-10px] before:bg-[linear-gradient(45deg,#2EA84F20,#E0399B20)] before:rounded-[30px] before:-z-[1] before:animate-[pulse-scale_3s_ease-in-out_infinite] ${className}`}
        {...props}
    >
        {children}
    </div>
);

const Image = ({
    className = '',
    alt = '',
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img
        alt={alt}
        className={`w-full h-[400px] object-cover rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-transform duration-300 ease-out hover:scale-[1.02] ${className}`}
        {...props}
    />
);

const ContactSection = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`my-[100px] py-[80px] bg-[linear-gradient(135deg,#FFCE2E08,#2EA84F08)] rounded-[30px] relative overflow-hidden animate-[fade-in-up_1s_ease-out] ${className}`}
        {...props}
    >
        {children}
    </div>
);

const ContactSubtitle = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-[1.2rem] text-text/80 text-center max-w-[600px] mx-auto mb-[60px] leading-[1.6] animate-[fade-in-up_1s_ease-out_0.4s_both] ${className}`}
        {...props}
    >
        {children}
    </p>
);

const ContactInfo = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex flex-col gap-[20px] max-w-[800px] mx-auto px-[40px] tablet:flex-row tablet:gap-[30px] ${className}`}
        {...props}
    >
        {children}
    </div>
);

const ContactMethod = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`group relative flex-1 overflow-hidden text-center rounded-[20px] py-[40px] px-[30px] border-2 border-[#2EA84F20] bg-[linear-gradient(135deg,#2EA84F10,#E0399B10)] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] animate-[fade-in-up_1s_ease-out] hover:-translate-y-[8px] hover:scale-[1.02] hover:shadow-[0_20px_40px_#2EA84F20] hover:border-[#2EA84F40] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-[4px] before:bg-gradient-to-r before:from-primary before:to-secondary before:bg-[length:200%_100%] before:animate-[gradient-shift_3s_ease-in-out_infinite] before:opacity-0 before:transition-opacity before:duration-300 before:ease-out hover:before:opacity-100 ${className}`}
        {...props}
    >
        {children}
    </div>
);

const ContactIcon = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-[3rem] mb-[20px] [filter:drop-shadow(0_4px_8px_rgba(0,0,0,0.1))] transition-transform duration-300 ease-out group-hover:scale-110 ${className}`}
        {...props}
    >
        {children}
    </div>
);

const ContactDetails = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`text-center ${className}`} {...props}>
        {children}
    </div>
);

const ContactLabel = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-[0.9rem] text-text/70 mb-[8px] uppercase tracking-[1.5px] font-medium ${className}`}
        {...props}
    >
        {children}
    </div>
);

const ContactValue = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-[1.2rem] font-bold text-text bg-[linear-gradient(135deg,#1A1A1A,#2EA84F)] bg-[length:200%_200%] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent] animate-[gradient-shift_4s_ease-in-out_infinite] ${className}`}
        {...props}
    >
        {children}
    </div>
);

// Floating decorative elements. The styled version positioned each instance via
// :nth-child; positions/delays are now passed per instance through className.
const FloatingElement = ({
    className = '',
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`absolute w-[20px] h-[20px] bg-[linear-gradient(45deg,#2EA84F30,#E0399B30)] rounded-full animate-[float-soft_4s_ease-in-out_infinite] pointer-events-none z-0 ${className}`}
        {...props}
    />
);

export default function Photography() {
    return (
        <Wrapper>
            <SectionTracker sectionName="Photography Header">
                <PhotographyHeader>
                    <FloatingElement className="top-[20%] left-[10%]" />
                    <FloatingElement className="top-[60%] right-[15%] [animation-delay:1s]" />
                    <FloatingElement className="bottom-[30%] left-[20%] [animation-delay:2s]" />
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
