import Wrapper from '../../fragments/wrapper';
import {
    SectionContainer,
    HeaderSection,
    SectionTitle,
    SectionSubtitle,
    ColoredSpan,
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
                        Building modern web experiences with cutting-edge technologies
                    </SectionSubtitle>
                </HeaderSection>

                <ContentGrid>
                    <AboutCard>
                        <Paragraph>
                            <span>
                                With a Master's degree in Computer Engineering, I bring a strong 
                                technical foundation to every project. My passion lies in crafting 
                                exceptional user experiences through modern front-end technologies, 
                                where I combine analytical thinking with creative problem-solving.
                            </span>
                        </Paragraph>
                        <Paragraph>
                            I'm committed to continuous learning and have completed several 
                            comprehensive courses, including
                            <a href="https://www.udemy.com/course/the-complete-javascript-course/" target="_blank" rel="noopener noreferrer">
                                The Complete JavaScript Course
                            </a>
                            ,
                            <a href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/" target="_blank" rel="noopener noreferrer">
                                Master the Coding Interview: Data Structures + Algorithms
                            </a>{' '}
                            and
                            <a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank" rel="noopener noreferrer">
                                Advanced CSS and Sass: Flexbox, Grid, Animations and More!
                            </a>
                            . These courses have deepened my understanding of both fundamental 
                            concepts and cutting-edge techniques in web development.
                        </Paragraph>
                    </AboutCard>

                    <TechSkillsCard>
                        <SkillsTitle>Technical Skills</SkillsTitle>
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
