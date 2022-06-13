import Logo from "../../fragments/icons/logo";
import { HeaderContainer, NavList } from "./header.styles";

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
            <a href="https://codepen.io/ale3oula-the-styleful">codepen</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/alexandra-barka-57075361/">
              linkedin
            </a>
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
