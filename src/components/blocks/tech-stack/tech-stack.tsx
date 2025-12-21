import ColoredSpan from '../../ColoredSpan';
import Wrapper from '../../fragments/wrapper';
import {
    SectionContainer,
    HeaderSection,
    SectionTitle,
    SectionSubtitle,
    ContentGrid,
    AboutCard,
    Paragraph,
    TechSkillsCard,
    SkillsTitle,
    TechSkills,
    SkillItem,
} from './tech-stack.styles';

const TechStack = () => {
    const skills = [
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS3 / SASS',
        'React.js',
        'Next.js',
        'styled-components',
        'Emotion',
        'REST API',
        'Node.js',
        'GraphQL',
        'CSS Animations',
    ];

    return (
        <SectionContainer>
            <Wrapper>
                <HeaderSection>
                    <SectionTitle>
                        Tech Stack <ColoredSpan>.</ColoredSpan>
                    </SectionTitle>
                    <SectionSubtitle>
                        The tools & tricks I use to bring ideas to life
                    </SectionSubtitle>
                </HeaderSection>

                <ContentGrid>
                    <AboutCard>
                        <Paragraph>
                            <span>
                                With a Master's in Computer Engineering under my belt, 
                                I bring both technical depth and creative flair to 
                                every project. I'm passionate about crafting 
                                exceptional user experiences where form meets function 
                                in the most delightful way.
                            </span>
                        </Paragraph>
                        <Paragraph>
                            I'm always learning and have completed comprehensive 
                            courses in JavaScript, Data Structures & Algorithms, 
                            and Advanced CSS — because staying sharp means staying 
                            relevant in this fast-moving field.
                        </Paragraph>
                    </AboutCard>

                    <TechSkillsCard>
                        <SkillsTitle>My Toolkit</SkillsTitle>
                        <TechSkills>
                            {skills.map((skill, index) => (
                                <SkillItem key={index}>
                                    {skill}
                                </SkillItem>
                            ))}
                        </TechSkills>
                    </TechSkillsCard>
                </ContentGrid>
            </Wrapper>
        </SectionContainer>
    );
};

export default TechStack;
