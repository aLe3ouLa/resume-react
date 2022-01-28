import React from "react";
import styled from "styled-components";

import Profile from "../../../assets/1.jpeg";

import Wrapper from "../wrapper";
import CustomButton from "../custom-button";

const Title = styled.h1`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  font-weight: 700;
  line-height: 129.69%;
  letter-spacing: 0.03em;
  margin-bottom: 0px;
  margin-left: 0px;
  color: ${({ theme }) => theme.color.text};

  & > span {
    font-size: 4rem;
  }
`;

const ColoredSpan = styled.span`
  color: ${({ theme }) => theme.color.primary};
  font-weight: 700;
  font-size: 4rem;
  &:hover {
    color: ${({ theme }) => theme.color.secondary};
    text-decoration: underline ${({ theme }) => theme.color.tertiary} wavy;
  }
`;

const Quotes = styled.div`
  background-image: url(https://pluspng.com/img-png/quotation-png-file-quote-background-transparent-png-512.png);
  padding-left: 100px;
  padding-right: 100px;
  background-position: 0px 0px;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: column;

    img {
      width: 200px;
      margin-top: 40px;
    }
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Quotes>
        <Title>
          <span>Hello, I'm Alexandra</span>
          <span>
            &amp; I'm a <ColoredSpan>Front-end</ColoredSpan> engineer
          </span>
          <CustomButton>Download CV</CustomButton>
        </Title>
        <img src={Profile} alt="Alexandra profile" width="380" />
      </Quotes>
    </Wrapper>
  );
};

export default Hero;
