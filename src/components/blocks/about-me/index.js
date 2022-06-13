import React from 'react';
import Wrapper from '../../fragments/wrapper';
import styled from 'styled-components';

const AboutMe = () => {
  return (
    <section>
      <Wrapper>
        <h2>
          About me <ColoredSpan>.</ColoredSpan>
        </h2>

        <TwoColumn>
          <Paragraph>
            Hello,
            <span role="img" aria-label="Hello, world">
              👋
            </span>
            I'm Alexandra, a Front-end Javascript Engineer with a working
            knowledge of UX design principles. Born in Greece and live in the
            Netherlands. I contrubuted to
            <a
              href="www.warnermedia.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Warnermedia
            </a>
            , {' '}
            <a
              href="www.messagebird.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Messagebird
            </a>
            and {' '}
            <a
              href="https://strangelove.nl/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Strangelove Group
            </a>
            .
          </Paragraph>
          <Paragraph>
            I enjoy creating simple, clean and creative user interfaces using
            the latest web technologies. I specialize in JavaScript and have
            professional experience working with modern frameworks.
          </Paragraph>
          <Paragraph>
            I also like content creation and as a hobby I write some articles
            about various JS topics on{' '}
            <a
              href="https://dev.to/ale3oula"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev.to
            </a>
            . I also have my tech Instagram account where I create imagery
            content covering a number of topics, like UIs, setup, code bits and
            more{' '}
            <a
              href="https://www.instagram.com/alexa.codes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @alexa.codes
            </a>
          </Paragraph>
          <Paragraph>
            When not working, I'm likely watching Superhero movies in cinema or
            series on Netflix, re-reading Neil Gaiman books, travelling the
            world or taking strolls with my camera!
          </Paragraph>
        </TwoColumn >
      </Wrapper >
    </section >
  );
};

export default AboutMe;

const TwoColumn = styled.div`
  column-count: 2;
  column-gap: 100px;

  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    column-count: 1;
  }
`;

const ColoredSpan = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-size: 7rem;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => theme.color.text};
  font-size: 1.6rem;
  margin-bottom: 1.2rem;
`;
