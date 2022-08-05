import Wrapper from '../../fragments/wrapper';
import {
    SectionContainer,
    ColoredSpan,
    Container,
    Paragraph,
    StyledLink,
    TechSkills,
} from './tech-stack.styles';

const TechStack = () => {
    return (
        <SectionContainer>
            <Wrapper>
                <h2>
                    Tech Stack <ColoredSpan>.</ColoredSpan>
                </h2>

                <Container>
                    <Paragraph>
                        <span>
                            I have graduated with a Bsc. in Computer Science and
                            a Msc. in Computer Engineering. Currently I am
                            enjoying learning more about front-end technologies.
                        </span>
                    </Paragraph>
                    <Paragraph>
                        My favorite online courses include
                        <a href="https://www.udemy.com/course/the-complete-javascript-course/">
                            The complete Javascript Course
                        </a>
                        ,
                        <a href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/">
                            Master the Coding Interview: Data Structures +
                            Algorithms
                        </a>{' '}
                        and
                        <a href="https://www.udemy.com/course/advanced-css-and-sass/">
                            Advanced CSS and Sass: Flexbox, Grid, Animations and
                            More!
                        </a>
                    </Paragraph>
                    <StyledLink href="https://www.linkedin.com/in/alexandra-barka-57075361/">
                        See my LinkedIn &rarr;
                    </StyledLink>
                </Container>

                <TechSkills>
                    <li>JavaScript</li>
                    <li>Typescript</li>
                    <li>HTML5</li>
                    <li>CSS3 / SASS</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>styled-components</li>
                    <li>Emotion</li>
                    <li>REST api</li>
                    <li>Node.js</li>
                    <li>GraphQL</li>
                    <li>CSS Animations</li>
                </TechSkills>
            </Wrapper>
        </SectionContainer>
    );
};

export default TechStack;
