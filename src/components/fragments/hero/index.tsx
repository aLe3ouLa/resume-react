import Profile from '../../../assets/Profile.jpeg';

import Wrapper from '../wrapper';
import PDF from '../../../assets/cv.pdf';

import { ButtonVariation } from '../Button/Button.styles';
import TrackedButton from '../../TrackedButton';
import {
    Quotes,
    Title,
    Wave,
    Text,
    NameQuote,
    FloatingElement,
    Sparkle,
    ButtonContainer,
} from './hero.style';
import TrackedLink from '../../TrackedLink';
import ColoredSpan from '../../ColoredSpan';
import { Quote } from '../../Quote';

const handleOpenPDF = () => {
    window.open(PDF, '_blank');
};

const Hero = () => (
    <Wrapper>
        <Quotes>
            {/* Floating decorative elements */}
            <FloatingElement aria-hidden="true">✨</FloatingElement>
            <FloatingElement aria-hidden="true">💫</FloatingElement>
            <FloatingElement aria-hidden="true">🎨</FloatingElement>
            
            {/* Sparkle effects */}
            <Sparkle aria-hidden="true">✨</Sparkle>
            <Sparkle aria-hidden="true">💎</Sparkle>
            <Sparkle aria-hidden="true">✨</Sparkle>
            <Sparkle aria-hidden="true">💫</Sparkle>
            
            <Title>
                <NameQuote>
                    Heyy
                    <Wave role="img" aria-label="Hello, world!">
                        👋🏻
                    </Wave>
                    , I'm <Text>Alexandra</Text>
                </NameQuote>
                <Quote variant="primary">
                    I'm a <ColoredSpan variant="primary" underline hover>Frontend</ColoredSpan> Developer &amp;
                    passionate <ColoredSpan variant="primary" underline hover>Photographer</ColoredSpan>
                </Quote>
                <ButtonContainer>
                    <TrackedButton
                        onClick={handleOpenPDF}
                        variation={ButtonVariation.PRIMARY}
                        label="Download CV"
                        trackingName="Download CV"
                        trackingLocation="hero"
                    />
                    <TrackedLink 
                        to="/photography"
                        trackingName="Book Photography"
                        trackingLocation="hero"
                        className="inline-flex items-center justify-center gap-xs px-sm py-xs bg-gradient-to-br from-tertiary to-primary text-white no-underline rounded-lg text-[1.1rem] font-bold uppercase tracking-[0.5px] transition-all duration-300 relative overflow-hidden shadow-[0_4px_15px_rgba(255,145,66,0.3)] before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-[left] before:duration-500 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(255,145,66,0.4)] hover:text-white hover:no-underline hover:before:left-full active:-translate-y-0.5 active:scale-[1.01] tablet:text-[1rem] tablet:px-sm tablet:py-xxs"
                    >
                        <span className="text-[1.2rem] tablet:text-[1.2rem]" aria-hidden="true">📸</span>
                        Book Photography
                    </TrackedLink>
                </ButtonContainer>
            </Title>
            <img 
                src={Profile} 
                alt="Alexandra Barka - Frontend Engineer and Photographer professional headshot" 
                width="380" 
                height="auto"
                loading="eager"
            />
        </Quotes>
    </Wrapper>
);

export default Hero;
