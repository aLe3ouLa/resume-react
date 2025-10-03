import { Link } from 'react-router-dom';
import Logo from '../../fragments/icons/logo';
import { HeaderContainer, NavList } from './header.styles';

const Header = () => {
    return (
        <HeaderContainer>
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Logo />
            </Link>

            <nav>
                <NavList>
                    <li>
                        <Link to="/photography">Photography</Link>
                    </li>
                    <li>
                        <a 
                            href="https://github.com/aLe3ouLa" 
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a 
                            href="https://www.instagram.com/ale3oula/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    </li>
                </NavList>
            </nav>
        </HeaderContainer>
    );
};

export default Header;
