import React from "react";
import Logo from "../../fragments/icons/logo";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.md};
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  li:first-child {
    height: 2px;
    background-color: grey;
    width: 100px;
    cursor: none;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
      display: none;
    }
  }

  li {
    cursor: pointer;
    :not(:last-child) {
      margin-right: ${({ theme }) => theme.spacing.lg};

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-right: ${({ theme }) => theme.spacing.xxs};
      }
    }
    a {
      color: ${({ theme }) => theme.color.text};
      font-weight: 400;
      font-size: 2.2rem;

      @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.6rem;
      }

      &:hover {
        color: ${({ theme }) => theme.color.primary};
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <nav>
        <NavList>
          <li>&nbsp;</li>
          <li>
            <a href="https://github.com/aLe3ouLa">github</a>
          </li>
          <li>
            <a href="https://dribbble.com/aLe3ouLa">dribbble</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexandra-barka-57075361/">
              linkedin
            </a>
          </li>
          <li>
            <a href="https://twitter.com/aLe3ouLaa">twitter</a>
          </li>
          <li>
            <a href="https://www.instagram.com/alexa.codes/">instagram</a>
          </li>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
