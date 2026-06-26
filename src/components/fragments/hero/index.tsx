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
    Eyebrow,
    FloatingElement,
    Sparkle,
    ButtonContainer,
} from './hero.style';
import TrackedLink from '../../TrackedLink';
import { Quote } from '../../Quote';

const handleOpenPDF = () => {
    window.open(PDF, '_blank');
};

const STROKE = '#1A1A1A';

// Outlined geometric shapes — fill via prop, black outline, sized by their wrapper.
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
            {/* Floating outlined shapes */}
            <FloatingElement aria-hidden="true">
                <PacMan color="#2EA84F" />
            </FloatingElement>
            <FloatingElement aria-hidden="true">
                <Triangle color="#E0399B" />
            </FloatingElement>
            <FloatingElement aria-hidden="true">
                <SemiCircle color="#FFCE2E" />
            </FloatingElement>

            {/* Smaller scattered shapes */}
            <Sparkle aria-hidden="true">
                <Circle color="#8C9EEC" />
            </Sparkle>
            <Sparkle aria-hidden="true">
                <Triangle color="#F6A6D6" />
            </Sparkle>
            <Sparkle aria-hidden="true">
                <SemiCircle color="#E0399B" />
            </Sparkle>
            <Sparkle aria-hidden="true">
                <Circle color="#FFCE2E" />
            </Sparkle>

            <Title>
                <Eyebrow>
                    Hi, my name is Alexandra
                    <Wave role="img" aria-label="Hello, world!">
                        👋🏻
                    </Wave>
                </Eyebrow>
                <NameQuote>
                    Meet the <Text>Developer</Text>
                </NameQuote>
                <Quote variant="primary">
                    Building the web, one pixel at a time &amp; freezing moments
                    in time
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
                        className="inline-flex items-center justify-center gap-xs px-md py-sm bg-secondary text-white no-underline rounded-[12px] text-[1.1rem] font-retro font-bold uppercase tracking-[0.5px] transition-all duration-200 relative overflow-hidden border-[3px] border-black shadow-[5px_5px_0_#1A1A1A] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_#1A1A1A] hover:text-white hover:no-underline active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#1A1A1A] tablet:text-[1rem] tablet:px-sm tablet:py-xs"
                    >
                        <span
                            className="text-[1.2rem] tablet:text-[1.2rem]"
                            aria-hidden="true"
                        >
                            📸
                        </span>
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
