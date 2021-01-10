import React from "react";
import Wrapper from "../../fragments/wrapper";
import styled from "styled-components";

const TechStack = () => {
  return (
    <SectionContainer>
      <Wrapper>
        <h2>
          Work Experience <ColoredSpan>.</ColoredSpan>
        </h2>

        <Container>
          <StyleWrapper>
            <img src="https://developers.messagebird.com/img/glyph.svg" width="60" height="50" style={{ marginRight: "16px" }} />
            <div>
              <Paragraph>
                <strong>Messagebird - Frontend Engineer</strong>
              </Paragraph>
              <Paragraph>
                As a React Frontend Engineer, my work revolves around helping customers onboard on Messagebird products by providing helpful and web-accessible onboarding experiences.
              </Paragraph>
              <Paragraph> React.js ・ Typescript ・ Semantic HTML ・ CSS3 ・</Paragraph>
            </div>
          </StyleWrapper>
          <StyledLink href="hhttps://www.messagebird.com/en/">
            See MessageBird &rarr;
          </StyledLink>
        </Container>

        <Container>
          <StyleWrapper>
            <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHTaYf6uk53Xw/company-logo_100_100/0/1570660165469?e=1618444800&v=beta&t=1CGVHypZqEp8QzbEom-22xMhj32cVIYGIEfURIM6sP4" width="60" height="50" style={{ marginRight: "16px" }} />
            <div>
              <Paragraph>
                <strong>Strangelove - Frontend Engineer</strong>
              </Paragraph>
              <Paragraph>
                Worked as a React frontend developer and developed web applications for Strangelove digital agency both for clients and internal use.

                🔸 Build a fully automated tool for scan, monitor and report all types of cookie by utilising Node.js, pupeeteer and React.js
                🔸 Develop an e-commerce shop that uses state-of-the-art technologies. Setup an API mocking library and testing tools in the project and write tests. Automate the generation of the invoices resulting on speeding up the checkout process.

              </Paragraph>
              <Paragraph>React.js | Redux | JEST | Node.js | JavaScript | HTML5 | CSS3 | styled-components | electron | pdfgenerationapi | mirage</Paragraph>
            </div>
          </StyleWrapper>
          <StyledLink href="https://strangelove.nl/">
            See Strangelove &rarr;
          </StyledLink>
        </Container>

        <Container>
          <StyleWrapper>
            <img src="https://media-exp1.licdn.com/dms/image/C560BAQFA3UoQ6Q5RoQ/company-logo_100_100/0/1545654792613?e=1618444800&v=beta&t=-8uBWmSNLSegy3REkhumDFMioSLR1IAbehj7-SGxcSc" width="60" height="50" style={{ marginRight: "16px" }} />
            <div>
              <Paragraph>
                <strong>Yabbu - Frontend Engineer</strong>
              </Paragraph>
              <Paragraph>
                Worked as a frontend developer in Yabbu, a meeting management application. Deliver clean code and pixel-perfect results to aid in the target of minimizing the meeting time.

                🔸Develop a cross-platform application that acts as a remote meeting management tool by maintaining the old codebase in Angular.js and migrating the features in Vue.js
                🔸 Improve performance from the old UI by using the best practices in Vue.js and removing costly libraries.
                🔸Assist in the project management to maximise the effectiveness of the team by creating estimations & organising the kanban board in 2 weeks sprints.
                🔸Aid in the CI/CD pipeline of the development team.
              </Paragraph>
              <Paragraph> Vue.js ・ Angular.js ・ Semantic HTML ・ CSS3 ・</Paragraph>
            </div>
          </StyleWrapper>
          <StyledLink href="https://yabbu.com/">
            See Yabbu &rarr;
          </StyledLink>
        </Container>

        <Container>
          <StyleWrapper>
            <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQHxCTbu9lRJTA/company-logo_100_100/0/1609770725107?e=1618444800&v=beta&t=Hg5HExJ8d6VKaxuMazb1-hkGDtt0NSGDzcg-x59s17c" width="60" height="50" style={{ marginRight: "16px" }} />
            <div>
              <Paragraph>
                <strong>Ubitech - Frontend Engineer</strong>
              </Paragraph>
              <Paragraph>
                Worked as a front-end engineer with a working knowledge of UX design principles. My role was to write front-end components as well as design user interfaces and assets for the company's projects. Delivered clean code and pixel-perfect results.
              </Paragraph>
              <Paragraph> Angular 2+ ┃ Vue.js ┃ JavaScript ┃ TypeScript ┃ Thymeleaf ┃ AngularJS┃ HTML5┃ CSS3┃ UI ┃UX ┃Design ┃Java </Paragraph>
            </div>
          </StyleWrapper>
          <StyledLink href="hhttps://ubitech.eu/">
            See Ubitech &rarr;
          </StyledLink>
        </Container>

      </Wrapper>
    </SectionContainer>
  );
};

export default TechStack;

const StyleWrapper = styled.div`
  display: flex;
`

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
