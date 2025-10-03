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
            <FloatingElement>✨</FloatingElement>
            <FloatingElement>💫</FloatingElement>
            <FloatingElement>🎨</FloatingElement>
            
            {/* Sparkle effects */}
            <Sparkle>✨</Sparkle>
            <Sparkle>💎</Sparkle>
            <Sparkle>✨</Sparkle>
            <Sparkle>💫</Sparkle>
            
            <Title>
                <NameQuote>
                    Heyy
                    <Wave role="img" aria-labelledby="Hello, world!">
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
                        <CameraIcon>📸</CameraIcon>
                        Book Photography
                    </PhotographyCTA>
                </ButtonContainer>
            </Title>
            <img src={Profile} alt="Alexandra profile" width="380" />
        </Quotes>
    </Wrapper>
);

export default Hero;
