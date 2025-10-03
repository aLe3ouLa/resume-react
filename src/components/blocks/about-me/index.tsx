import Wrapper from '../../fragments/wrapper';
import { 
    Section, 
    Heading, 
    ColoredSpan, 
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
            <FloatingStar>⭐</FloatingStar>
            <FloatingStar>✨</FloatingStar>
            <FloatingStar>⭐</FloatingStar>
            <FloatingStar>✨</FloatingStar>
            
            {/* Drifting Stars */}
            <DriftingStar>⭐</DriftingStar>
            <DriftingStar>✨</DriftingStar>
            <DriftingStar>⭐</DriftingStar>
            
            <Wrapper>
                <Heading id="about-me-heading">
                    About me <ColoredSpan>.</ColoredSpan>
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
                                I enjoy creating simple, clean and creative user
                                interfaces using the latest web technologies.
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
                                I like content creation and as a hobby I write articles
                                about various web programming topics on{' '}
                                <CompanyLink href="https://dev.to/ale3oula" target="_blank" rel="noopener noreferrer">
                                    Dev.to
                                </CompanyLink>
                                {' '}and I share my photos on{' '}
                                <CompanyLink href="https://www.instagram.com/ale3oula/" target="_blank" rel="noopener noreferrer">
                                    @ale3oula
                                </CompanyLink>
                                .
                            </AnimatedParagraph>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineIcon>🎬</TimelineIcon>
                        <TimelineContent>
                            <AnimatedParagraph>
                                When not working, I'm likely watching sci-fi movies in
                                cinema, being creative, dancing salsa 💃, travelling the
                                world or taking strolls with my camera!
                            </AnimatedParagraph>
                        </TimelineContent>
                    </TimelineItem>
                </TimelineContainer>
            </Wrapper>
        </Section>
    );
};

export default AboutMe;