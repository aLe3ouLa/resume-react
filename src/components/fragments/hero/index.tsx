import Profile from '../../../assets/1.jpeg';

import Wrapper from '../wrapper';
import PDF from '../../../assets/cv.pdf';

import { ButtonVariation } from '../../../stories/atoms/Button/Button.styles';
import { Button } from '../../../stories/atoms/Button/Button';
import { Quotes, Quote, Title, Wave, ColoredSpan, Text } from './hero.style';

const handleOpenPDF = () => {
    window.open(PDF, '_blank');
};

const Hero = () => (
    <Wrapper>
        <Quotes>
            <Title>
                <div>
                    Heyy
                    <Wave role="img" aria-labelledby="Hello, world!">
                        👋🏻
                    </Wave>
                    , I'm <Text>Alexandra</Text>
                </div>
                <Quote>
                    &amp; I'm a <ColoredSpan>Front-end</ColoredSpan> engineer
                </Quote>
                <Button
                    onClick={handleOpenPDF}
                    variation={ButtonVariation.PRIMARY}
                    label="Download CV"
                />
            </Title>
            <img src={Profile} alt="Alexandra profile" width="380" />
        </Quotes>
    </Wrapper>
);

export default Hero;
