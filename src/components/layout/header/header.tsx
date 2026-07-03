import { Link } from 'react-router-dom';
import Logo from '../../fragments/icons/logo';

const navLinkClass =
    'inline-block no-underline font-bold tracking-[0.3px] text-text ' +
    'text-[1.5rem] py-[0.5rem] px-[1.1rem] ' +
    'sm:text-[1.8rem] sm:py-[0.6rem] sm:px-[1.4rem] ' +
    'rounded-full border-2 border-transparent ' +
    'transition-all duration-200 ' +
    'hover:text-black hover:bg-tertiary hover:border-black hover:shadow-[3px_3px_0_#1A1A1A] hover:-translate-x-px hover:-translate-y-px ' +
    'active:translate-x-px active:translate-y-px active:shadow-[1px_1px_0_#1A1A1A]';

const Header = () => {
    return (
        <header className="flex items-center justify-between sticky top-0 z-50 bg-[#fff9e6] bg-opacity-[0.82] backdrop-blur-md transition-colors duration-300 ease-in-out p-4 md:p-6">
            <Link to={'/'} style={{ textDecoration: 'none' }}>
                <Logo />
            </Link>

            <nav>
                <ul className="flex items-center gap-4 md:gap-6">
                    <li className="relative">
                        <Link className={navLinkClass} to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className="relative">
                        <Link className={navLinkClass} to="/photography">
                            Photography
                        </Link>
                    </li>
                    <li className="relative">
                        <a
                            href="https://github.com/aLe3ouLa"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={navLinkClass}
                        >
                            GitHub
                        </a>
                    </li>
                    <li className="relative">
                        <a
                            href="https://www.instagram.com/ale3oula/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={navLinkClass}
                        >
                            Instagram
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
