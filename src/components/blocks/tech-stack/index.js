import React from "react";
import Wrapper from "../../fragments/wrapper";
import styled from "styled-components";

const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 0 40px 0 0;

  margin: 40px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    display: block;
    padding: 0;

    margin: 20px 0;
  }
`;

const Container = styled.div`
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 10px;
`;

const ColoredSpan = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 7rem;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.text};
  margin-bottom: 1.2rem;
  font-size: 1.6rem;

  & > span {
    font-size: 2rem;
  }

  & > a {
    margin: 0 10px;
  }
`;

const StyledLink = styled.a`
  color: #ccc;
  font-weight: 900;
  text-transform: uppercase;
`;

const TechSkills = styled.ul`
  column-count: 4;
  column-gap: 100px;
  padding: 20px;
  margin: 20px;
  li {
    list-style-type: circle;
    font-size: 1.6rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    column-count: 2;
  }
`;

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
              I studied Computer Science & HCI and currently I am enjoying
              learning more about front-end frameworks
            </span>
          </Paragraph>
          <Paragraph>
            My favorite online courses include
            <a href="https://www.udemy.com/course/complete-react-developer-zero-to-mastery/">
              Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)
            </a>
            ,{" "}
            <a href="https://www.udemy.com/course/the-complete-javascript-course/">
              The complete Javascript Course
            </a>
            and{" "}
            <a href="https://www.udemy.com/course/advanced-css-and-sass/">
              Advanced CSS and Sass: Flexbox, Grid, Animations and More!
            </a>
          </Paragraph>
          <StyledLink href="https://www.linkedin.com/in/alexandra-barka-57075361/">
            See my LinkedIn &rarr;
          </StyledLink>
        </Container>

        <TechSkills>
          <li>HTML5</li>
          <li>CSS3 / SASS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Redux</li>
          <li>styled-components</li>
          <li>Angular 4+</li>
          <li>Vue.js</li>
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
