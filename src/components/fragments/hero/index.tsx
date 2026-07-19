import Profile from '../../../assets/Profile.jpeg';
import PDF from '../../../assets/cv.pdf';

import { ButtonVariation } from '../../../design-system/components/Button/Button.styles';
import TrackedButton from '../../TrackedButton';
import Wrapper from '../wrapper';
import {
    ButtonContainer,
    Eyebrow,
    HeroContent,
    HeroLayout,
    HeroTitle,
    Portrait,
    PortraitCard,
    PortraitLabel,
    PortraitStage,
    Summary,
    TitleAccent,
} from './hero.style';

const handleOpenPDF = () => {
    window.open(PDF, '_blank');
};

const Hero = () => (
    <Wrapper>
        <HeroLayout>
            <HeroContent>
                <Eyebrow>
                    <span aria-hidden="true" />
                    Alexandra Barka · Senior Software Engineer
                </Eyebrow>

                <HeroTitle>
                    Making the web
                    <TitleAccent>a little better each day.</TitleAccent>
                </HeroTitle>

                <Summary>
                    I create fast, accessible, and thoughtful digital
                    experiences, with curiosity, care, and a focus on solving
                    problems that make a real difference.
                </Summary>

                <ButtonContainer>
                    <TrackedButton
                        onClick={handleOpenPDF}
                        variation={ButtonVariation.PRIMARY}
                        label="Download Resume"
                        trackingName="Download Resume"
                        trackingLocation="hero"
                    />
                </ButtonContainer>
            </HeroContent>

            <PortraitStage>
                <PortraitCard>
                    <Portrait
                        src={Profile}
                        alt="Alexandra Barka, Senior Software Engineer"
                        width="380"
                        height="475"
                        loading="eager"
                    />
                    <PortraitLabel>
                        <span aria-hidden="true">✦</span>
                        Engineer / maker
                    </PortraitLabel>
                </PortraitCard>
            </PortraitStage>
        </HeroLayout>
    </Wrapper>
);

export default Hero;
