import { useEffect } from 'react';
import appStyles from '../App.module.css';
import styles from './Products.module.css';

const PRODUCTS = [
    {
        name: 'Passion Lens',
        symbol: '◈',
        color: 'pink',
        description:
            'Discover the passion hidden in your photographs, an AI photo analysis tool built for dev.to’s Weekend Challenge: Passion Edition.',
        tech: [
            'React',
            'TypeScript',
            'Vite',
            'Express',
            'Google GenAI',
            'Framer Motion',
        ],
        link: 'https://github.com/aLe3ouLa/passion-lens',
    },
    {
        name: 'The Comfort Atlas',
        symbol: '◎',
        color: 'teal',
        description:
            'An interactive 3D globe of comfort food traditions from around the world. Spin it, pick a country, and download a personalized comfort-food stamp.',
        tech: [
            'React',
            'TypeScript',
            'Vite',
            'WebGL',
            'Three.js',
            'Framer Motion',
            'Claude code',
        ],
        link: 'https://github.com/aLe3ouLa/comfort-atlas',
    },
] as const;

export default function Products() {
    useEffect(() => {
        document.title = 'Products · Alexandra Barka';
    }, []);

    return (
        <main className={`${appStyles.section} ${appStyles.container}`}>
            <header className={appStyles.sectionHeader}>
                <div>
                    <small>Made for fun</small>
                    <h2>
                        Products<span>.</span>
                    </h2>
                </div>
                <p>
                    Small little experiments I build outside of work: learning
                    new frameworks, exploring new ideas, or just playing with
                    AI.
                </p>
            </header>
            <div className={styles.grid}>
                {PRODUCTS.map((product) => (
                    <article className={styles.card} key={product.name}>
                        <div
                            className={`${styles.icon} ${styles[product.color]}`}
                        >
                            {product.symbol}
                        </div>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <ul className={styles.tech}>
                            {product.tech.map((t) => (
                                <li key={t}>{t}</li>
                            ))}
                        </ul>
                        <a href={product.link} target="_blank" rel="noreferrer">
                            View on GitHub ↗
                        </a>
                    </article>
                ))}
            </div>
        </main>
    );
}
