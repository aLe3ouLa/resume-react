import Profile from '../../../assets/Profile.jpeg';

import Wrapper from '../wrapper';
import PDF from '../../../assets/cv.pdf';

import { ButtonVariation } from '../../../design-system/components/Button/Button.styles';
import TrackedButton from '../../TrackedButton';
import {
    Quotes,
    Title,
    Wave,
    Text,
    NameQuote,
    Eyebrow,
    FloatingElement,
    Sparkle,
    ButtonContainer,
} from './hero.style';
import { Quote } from '../../Quote';

const handleOpenPDF = () => {
    window.open(PDF, '_blank');
};

const STROKE = '#1A1A1A';

const PacMan = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 100">
        <path
            d="M50 50 L90.8 31 A45 45 0 1 0 90.8 69 Z"
            fill={color}
            stroke={STROKE}
            strokeWidth={6}
            strokeLinejoin="round"
        />
    </svg>
);

const Triangle = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 100">
        <path
            d="M50 8 L92 88 L8 88 Z"
            fill={color}
            stroke={STROKE}
            strokeWidth={6}
            strokeLinejoin="round"
        />
    </svg>
);

const SemiCircle = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 65">
        <path
            d="M6 58 A44 44 0 0 1 94 58 Z"
            fill={color}
            stroke={STROKE}
            strokeWidth={6}
            strokeLinejoin="round"
        />
    </svg>
);

const Circle = ({ color }: { color: string }) => (
    <svg viewBox="0 0 100 100">
        <circle
            cx={50}
            cy={50}
            r={45}
            fill={color}
            stroke={STROKE}
            strokeWidth={7}
        />
    </svg>
);

const Hero = () => (
    <Wrapper>
        <Quotes>
             <Sparkle aria-hidden="true">
                <Triangle color="#F6A6D6" />
            </Sparkle>
            <FloatingElement aria-hidden="true">
                <PacMan color="#2EA84F" />
            </FloatingElement>
        
            <Sparkle aria-hidden="true">
                <Circle color="#FFCE2E" />
            </Sparkle>
           
            <FloatingElement aria-hidden="true">
                <SemiCircle color="#FFCE2E" />
            </FloatingElement>

            <Title>
                <Eyebrow>
                    Hi, my name is Alexandra
                    <Wave role="img" aria-label="Hello, world!">
                        👋🏻
                    </Wave>
                </Eyebrow>
                <NameQuote>
                    Meet the <Text>Engineer</Text>
                </NameQuote>
                <Quote variant="primary">
                    Making the web a little faster, a little more accessible, and a lot more enjoyable. Senior Software Engineer passionate about React, TypeScript, modern web technologies, and solving problems that make a real difference.
                </Quote>
                <ButtonContainer>
                    <TrackedButton
                        onClick={handleOpenPDF}
                        variation={ButtonVariation.PRIMARY}
                        label="Download Resume"
                        trackingName="Download Resume"
                        trackingLocation="hero"
                    />
                </ButtonContainer>
            </Title>
            <img
                src={Profile}
                alt="Alexandra Barka - Frontend Engineer and Photographer professional headshot"
                width="380"
                height="auto"
                loading="lazy"
                className="relative z-[2] rounded-[24px] transition-[transform,box-shadow] duration-300 ease-in-out border-[3px] border-black shadow-[12px_12px_0_#E0399B] animate-[pop-float_6s_ease-in-out_infinite] hover:-translate-x-[4px] hover:-translate-y-[4px] hover:rotate-[-1deg] hover:shadow-[16px_16px_0_#2EA84F] max-tablet:w-[200px] max-tablet:mt-md max-tablet:shadow-[8px_8px_0_#E0399B]"
            />
        </Quotes>
    </Wrapper>
);

export default Hero;
