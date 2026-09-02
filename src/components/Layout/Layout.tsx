import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from '../../App.module.css';

export default function Layout() {
    const [open, setOpen] = useState(false);
    return (
        <>
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
                    <Link to="/blog" onClick={() => setOpen(false)}>
                        Blog
                    </Link>
                    <Link to="/products" onClick={() => setOpen(false)}>
                        Products
                    </Link>
                    <a href="/#work">Work</a>
                    <a href="/#photography">Photography</a>
                    <a
                        href="https://github.com/aLe3ouLa"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.instagram.com/the.coding.diaries/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Instagram
                    </a>
                </nav>
            </header>
            <Outlet />
            <footer className={styles.footer}>
                <span>© {new Date().getFullYear()} Alexandra Barka</span>
                <a href="/#top">Back to top ↑</a>
            </footer>
        </>
    );
}
