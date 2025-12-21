import ColoredSpan from '../../ColoredSpan';
import Wrapper from '../../fragments/wrapper';
import { 
    Section, 
    Heading, 
    TimelineContainer, 
    TimelineItem, 
    TimelineIcon, 
    TimelineContent, 
    CompanyLink,
    SkillTag,
    SkillContainer,
    GradientText,
    AnimatedParagraph,
    FloatingStar,
    DriftingStar
} from './about-me.styles';

const AboutMe = () => {
    return (
        <Section aria-labelledby="about-me-heading">
            {/* Floating Stars */}
            <FloatingStar aria-hidden="true">⭐</FloatingStar>
            <FloatingStar aria-hidden="true">✨</FloatingStar>
            <FloatingStar aria-hidden="true">⭐</FloatingStar>
            <FloatingStar aria-hidden="true">✨</FloatingStar>
            
            {/* Drifting Stars */}
            <DriftingStar aria-hidden="true">⭐</DriftingStar>
            <DriftingStar aria-hidden="true">✨</DriftingStar>
            <DriftingStar aria-hidden="true">⭐</DriftingStar>
            
            <Wrapper>
                <Heading id="about-me-heading" as="h2">
                    The Story So Far <ColoredSpan>.</ColoredSpan>
                </Heading>

                <TimelineContainer>
                    <TimelineItem>
                        <TimelineIcon>👋</TimelineIcon>
                        <TimelineContent>
                            <AnimatedParagraph>
                                I'm a <GradientText>Frontend Engineer</GradientText> with a computer science
                                background and working knowledge of UX design and web
                                accessibility principles.
                            </AnimatedParagraph>
                            <AnimatedParagraph>
                                I contributed to{' '}
                                <CompanyLink href="https://www.mews.com/" target="_blank" rel="noopener noreferrer external">
                                    Mews
                                </CompanyLink>
                                ,{' '}
                                <CompanyLink href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer external">
                                    Spotify
                                </CompanyLink>
                                {' '}and{' '}
                                <CompanyLink href="https://www.wbd.com/" target="_blank" rel="noopener noreferrer external">
                                    Warner Bros. Discovery
                                </CompanyLink>
                                .
                            </AnimatedParagraph>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineIcon>💻</TimelineIcon>
                        <TimelineContent>
                            <AnimatedParagraph>
                                I love bringing ideas to life through clean, creative 
                                interfaces using the latest web technologies. Whether 
                                it's a sleek dashboard or an interactive experience, 
                                I'm all about making it feel effortless and fun.
                            </AnimatedParagraph>
                            <SkillContainer>
                                <SkillTag>JavaScript</SkillTag>
                                <SkillTag>React</SkillTag>
                                <SkillTag>TypeScript</SkillTag>
                                <SkillTag>CSS</SkillTag>
                                <SkillTag>UX Design</SkillTag>
                            </SkillContainer>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineIcon>✍️</TimelineIcon>
                        <TimelineContent>
                            <AnimatedParagraph>
                                When I'm not coding, you'll find me sharing what I've 
                                learned through articles on{' '}
                                <CompanyLink href="https://dev.to/ale3oula" target="_blank" rel="noopener noreferrer">
                                    Dev.to
                                </CompanyLink>
                                {' '}and capturing the world through my lens on{' '}
                                <CompanyLink href="https://www.instagram.com/ale3oula/" target="_blank" rel="noopener noreferrer">
                                    @ale3oula
                                </CompanyLink>
                                . Knowledge shared is knowledge multiplied!
                            </AnimatedParagraph>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineIcon>🎬</TimelineIcon>
                        <TimelineContent>
                            <AnimatedParagraph>
                                Off the clock? You'll catch me at the cinema watching 
                                sci-fi flicks, dancing salsa 💃, exploring new places 
                                with my camera, or simply being creative. Life's too 
                                short not to enjoy the journey!
                            </AnimatedParagraph>
                        </TimelineContent>
                    </TimelineItem>
                </TimelineContainer>
            </Wrapper>
        </Section>
    );
};

export default AboutMe;