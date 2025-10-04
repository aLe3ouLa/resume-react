import Profile from '../../../assets/Profile.jpeg';

import Wrapper from '../wrapper';
import PDF from '../../../assets/cv.pdf';

import { ButtonVariation } from '../Button/Button.styles';
import { Button } from '../Button/Button';
import {
    Quotes,
    Quote,
    Title,
    Wave,
    ColoredSpan,
    Text,
    NameQuote,
    FloatingElement,
    Sparkle,
    ButtonContainer,
    PhotographyCTA,
    CameraIcon,
} from './hero.style';

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
                <Quote>
                    I'm a <ColoredSpan>Frontend</ColoredSpan> Developer &amp;
                    passionate <ColoredSpan>Photographer</ColoredSpan>
                </Quote>
                <ButtonContainer>
                    <Button
                        onClick={handleOpenPDF}
                        variation={ButtonVariation.PRIMARY}
                        label="Download CV"
                    />
                    <PhotographyCTA to="/photography">
                        <CameraIcon aria-hidden="true">📸</CameraIcon>
                        Book Photography
                    </PhotographyCTA>
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
