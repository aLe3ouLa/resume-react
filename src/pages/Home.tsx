import { lazy, Suspense, useEffect } from 'react';
import desk from '../assets/8.png';
import lisbon from '../assets/photography/5_lisb.jpeg';
import bali from '../assets/photography/1_bali.jpg';
import wildlife from '../assets/wildlife/wildlife_1.jpg';
import portrait from '../assets/portraits/4_portraits.jpg';
import styles from '../App.module.css';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import AiWorkflow from '../components/AiWorkflow/AiWorkflow';
import { Hero } from '../components/Hero/Hero';

const MakerDesk = lazy(() => import('../components/MakerDesk/MakerDesk'));

const tools = [
    [
        '01',
        '◒',
        'Shape',
        'Turn ideas and user needs into clear, useful interfaces.',
        'pink',
    ],
    [
        '02',
        '↔',
        'Measure',
        'Check accessibility, usability, performance, and quality.',
        'yellow',
    ],
    [
        '03',
        '⌘',
        'Build',
        'Create resilient systems that are readable and ready to evolve.',
        'teal',
    ],
    [
        '04',
        '✦',
        'Refine',
        'Test assumptions, remove friction, and improve the details.',
        'green',
    ],
    [
        '05',
        '◎',
        'Connect',
        'Collaborate openly and bring different disciplines together.',
        'coral',
    ],
] as const;

const photos = [
    [lisbon, 'Lisbon streets'],
    [bali, 'Bali landscape'],
    [wildlife, 'Wildlife photograph'],
    [portrait, 'Portrait photograph'],
];

export default function Home() {
    useEffect(() => {
        if (location.hash)
            document.querySelector(location.hash)?.scrollIntoView();
    }, []);

    return (
        <main id="top">
            <Hero />
            <section className={`${styles.section} ${styles.container}`}>
                <SectionHeader
                    kicker="Behind the work"
                    title="About me"
                    text="I care about the details people never have to think about."
                />
                <div className={styles.about}>
                    <div className={styles.meta}>
                        <span>AB / 01</span>
                        <span>IN FOCUS</span>
                        <span>2026</span>
                    </div>
                    <Note
                        color="pink"
                        tag="How I work"
                        title="Curiosity, clarity, and care."
                        text="I turn complex problems into accessible, maintainable interfaces: from modernizing legacy platforms to building design systems that scale across teams. Lately, that includes AI: building custom agent skills and MCP servers to help teams modernize their own frontends."
                    />
                    <figure>
                        <img
                            src={desk}
                            alt="Alexandra's desk with a laptop and creative tools"
                        />
                        <figcaption>
                            <b>Observe closely.</b> Make thoughtfully.
                        </figcaption>
                    </figure>
                    <Note
                        color="green"
                        tag="Beyond the screen"
                        text="Usually found with a camera, at the cinema, dancing salsa, writing, exploring somewhere new, or 3D printing and painting the pieces I make."
                    />
                    <div className={styles.companies}>
                        <small>Selected chapters</small>
                        <span>
                            <a href="https://www.mews.com/">Mews</a>
                            <a href="https://www.spotify.com/">Spotify</a>
                            <a href="https://www.wbd.com/">
                                Warner Bros. Discovery
                            </a>
                        </span>
                    </div>
                </div>
            </section>
            <section className={`${styles.section} ${styles.container}`}>
                <SectionHeader
                    kicker="My working kit"
                    title="The workbench"
                    text="Good work is not defined by one tool. It comes from knowing what to use, what to question, and what to improve."
                />
                <div className={styles.bench}>
                    <div className={styles.rail}>
                        <b>AB</b>
                        <span>TOOLS FOR THOUGHTFUL DIGITAL WORK</span>
                    </div>
                    <div className={styles.toolGrid}>
                        {tools.map(([number, symbol, title, text, color]) => (
                            <article className={styles.tool} key={title}>
                                <div
                                    className={`${styles.icon} ${styles[color]}`}
                                >
                                    {symbol}
                                </div>
                                <small>{number}</small>
                                <h3>{title}</h3>
                                <p>{text}</p>
                            </article>
                        ))}
                    </div>
                    <div className={styles.materials}>
                        <div>
                            <b>Materials drawer</b>
                            <p>A flexible toolkit, chosen to suit the work.</p>
                        </div>
                        <ul>
                            {[
                                'JavaScript',
                                'TypeScript',
                                'HTML',
                                'CSS',
                                'Node.js',
                                'APIs',
                                'GraphQL',
                                'Testing',
                                'Accessibility',
                                'AI tools',
                                'Design systems',
                            ].map((x) => (
                                <li key={x}>{x}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <AiWorkflow />
            <WorkExperience />
            <Suspense fallback={null}>
                <MakerDesk />
            </Suspense>
            <section
                id="photography"
                className={`${styles.section} ${styles.container}`}
            >
                <SectionHeader
                    kicker="Off screen"
                    title="Photography"
                    text="Small scenes, faraway places, and people worth looking twice at."
                />
                <div className={styles.gallery}>
                    {photos.map(([src, alt]) => (
                        <figure key={alt}>
                            <img src={src} alt={alt} />
                            <figcaption>{alt}</figcaption>
                        </figure>
                    ))}
                </div>
            </section>
        </main>
    );
}

function SectionHeader({
    kicker,
    title,
    text,
}: {
    kicker: string;
    title: string;
    text: string;
}) {
    return (
        <div className={styles.sectionHeader}>
            <div>
                <small>{kicker}</small>
                <h2>
                    {title}
                    <span>.</span>
                </h2>
            </div>
            <p>{text}</p>
        </div>
    );
}
function Note({
    color,
    tag,
    title,
    text,
}: {
    color: 'pink' | 'green';
    tag: string;
    title?: string;
    text: string;
}) {
    return (
        <article className={`${styles.note} ${styles[color]}`}>
            <em>{tag}</em>
            {title && <h3>{title}</h3>}
            <p>{text}</p>
        </article>
    );
}
