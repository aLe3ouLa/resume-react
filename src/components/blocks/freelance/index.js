import React from "react";
import Wrapper from "../../fragments/wrapper";
import styled from "styled-components";

const ColoredSpan = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: inherit;
  font-weight: 900;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: 2rem;
  margin-top: 1.2rem;
  margin-bottom: 1.2rem;
`;

const Section = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Freelance = () => {
  return (
    <Section>
      <Wrapper>
        <h2>
          Want to work together <ColoredSpan>?</ColoredSpan>
        </h2>

        <Paragraph>
          Contact me if you're looking for a developer, have a question, or just
          want to connect.
        </Paragraph>
        <a href="mailto:barka.alexandra2@gmail.com">
          barka.alexandra2@gmail.com
        </a>
        <ul>
          <li></li>
        </ul>
      </Wrapper>
    </Section>
  );
};

export default Freelance;
