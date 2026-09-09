import { useEffect, useState } from 'react';
import { Link, Outlet, useRouter } from '@tanstack/react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import styles from './Layout.module.css';
import { trackPageView } from '../../lib/analytics';

export default function Layout() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        return router.subscribe('onResolved', (event) => {
            trackPageView(event.toLocation.pathname);
        });
    }, [router]);

    return (
        <>
            <a className={styles.skipLink} href="#main-content">
                Skip to content
            </a>
            <header className={styles.header}>
                <a className={styles.logo} href="/#top">
                    AB<span>.</span>
                </a>
                <button
                    className={styles.menu}
                    onClick={() => setOpen(!open)}
                    aria-expanded={open}
                >
                    Menu
                </button>
                <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
                    <menu>
                        <li>
                            <Link to="/blog" onClick={() => setOpen(false)}>
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link to="/products" onClick={() => setOpen(false)}>
                                Products
                            </Link>
                        </li>
                        <li>
                            <a href="/#work">Work</a>
                        </li>
                        <li>
                            <a href="/#photography">Photography</a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/aLe3ouLa"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    size="lg"
                                    aria-hidden="true"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/the.coding.diaries/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram"
                            >
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    size="lg"
                                    aria-hidden="true"
                                />
                            </a>
                        </li>
                    </menu>
                </nav>
            </header>
            <div id="main-content" tabIndex={-1}>
                <Outlet />
            </div>
            <footer className={styles.footer}>
                <span>© {new Date().getFullYear()} Alexandra Barka</span>
                <a href="/#top">Back to top ↑</a>
            </footer>
        </>
    );
}
