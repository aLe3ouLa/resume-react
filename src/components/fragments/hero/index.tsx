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
                    Welcome!
                    <Wave role="img" aria-label="Hello, world!">
                        👋🏻
                    </Wave>
                    {' '}Meet <Text>Alexandra</Text>
                </NameQuote>
                <Quote variant="primary">
                    Building the web, one pixel at a time &amp; freezing moments in time
                </Quote>
                <ButtonContainer>
                    <TrackedButton
                        onClick={handleOpenPDF}
                        variation={ButtonVariation.PRIMARY}
                        label="Download Resume"
                        trackingName="Download Resume"
                        trackingLocation="hero"
                    />
                    <TrackedLink 
                        to="/photography"
                        trackingName="Capture Memories"
                        trackingLocation="hero"
                        className="inline-flex items-center justify-center gap-xs px-md py-sm bg-secondary text-white no-underline rounded-full text-[1.1rem] font-retro font-semibold uppercase tracking-[0.5px] transition-all duration-200 relative overflow-hidden shadow-[0_4px_0_#E55A5A,0_6px_12px_rgba(255,107,107,0.25)] border-[3px] border-secondary hover:translate-y-[2px] hover:bg-[#E55A5A] hover:border-[#E55A5A] hover:shadow-[0_2px_0_#E55A5A,0_4px_8px_rgba(255,107,107,0.3)] hover:text-white hover:no-underline active:translate-y-[4px] active:shadow-[0_0_0_#E55A5A,0_2px_4px_rgba(255,107,107,0.2)] tablet:text-[1rem] tablet:px-sm tablet:py-xs"
                    >
                        <span className="text-[1.2rem] tablet:text-[1.2rem]" aria-hidden="true">📸</span>
                        Capture Memories
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
