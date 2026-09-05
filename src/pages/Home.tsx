import { useEffect } from 'react';
import profile from '../assets/Profile.jpeg';
import desk from '../assets/8.png';
import cv from '../assets/cv.pdf';
import { trackEvent } from '../lib/analytics';
import lisbon from '../assets/photography/5_lisb.jpeg';
import bali from '../assets/photography/1_bali.jpg';
import wildlife from '../assets/wildlife/wildlife_1.jpg';
import portrait from '../assets/portraits/4_portraits.jpg';
import styles from '../App.module.css';
import WorkExperience from '../components/WorkExperience/WorkExperience';
import MakerDesk from '../components/MakerDesk/MakerDesk';

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
const monthsAtMews = Math.floor(
    (Date.now() - new Date('2024-08-01').getTime()) /
        (1000 * 60 * 60 * 24 * 30.4375)
);
const mewsDuration = `${Math.floor(monthsAtMews / 12)} year${Math.floor(monthsAtMews / 12) === 1 ? '' : 's'}${monthsAtMews % 12 ? ` ${monthsAtMews % 12} month${monthsAtMews % 12 === 1 ? '' : 's'}` : ''}`;
const jobs = [
    {
        company: 'Mews',
        title: 'Software Engineer, Operations Engineering',
        date: `Aug 2024 - Present · ${mewsDuration}`,
        link: 'https://www.mews.com',
        technologies: ['Typescript', 'Javascript', 'React.JS', '.NET'],
        intro: 'As a Software Engineer in Operations Engineering at Mews, I work across the Events Management System stack to improve the usability, reliability, and maintainability of our Groups & Events capabilities. My work spans frontend development, backend contributions, refactoring, and operational hardening, with the goal of making Events at Mews more robust, predictable, and easier to operate so hospitality teams can focus on guests and business outcomes instead of fighting their tools.',
        points: [
            'Build, maintain, and improve core Events functionality, helping hotels manage group bookings, event spaces, and quotation flows more reliably',
            'Contribute across both frontend and backend parts of EMS, improving how features are built, integrated, and maintained end to end',
            'Drive frontend improvements across the EMS experience, including quote details and email template redesigns, with a strong focus on usability, responsiveness, and consistency',
            'Collaborate closely with product, design, backend, and QA teams to ship features that support high-volume operations, PMS integrations, and accounting and tax workflows',
            'Take ownership of complex bugs and edge cases across Groups & Events and adjacent accounting flows, turning vague symptoms into clear fixes, stronger safeguards, and long-term improvements',
            'Improve code quality through refactoring, stronger validation patterns, and better unit test coverage to make the product easier to evolve safely',
            'Use AI tools such as Claude Code to accelerate implementation, debugging, and engineering workflows',
        ],
    },
    {
        company: 'Spotify',
        title: 'Web Engineer',
        date: 'Sep 2022 - Aug 2024 · 2 yrs',
        link: 'https://www.spotify.com',
        technologies: [
            'Typescript',
            'Javascript',
            'Next.JS',
            'React.JS',
            'GraphQL',
        ],
        intro: "Web Engineer developing internal growth campaigns and marketing tools for Spotify's subscriber expansion.",
        points: [
            'Lead impactful projects and mentor junior engineers while developing features aligned with company key results',
            'Enhance performance and migrate to preferred technologies, maintaining modern codebase with latest technologies',
            'Support marketing teams driving Spotify subscriber growth through stakeholder collaboration',
        ],
    },
    {
        company: 'Warner Bros. Discovery',
        title: 'Frontend Engineer',
        date: 'Jul 2021 - Aug 2022 · 1 yr 2 mn',
        link: 'https://www.warnermedia.com',
        technologies: [
            'JSX',
            'Typescript',
            'Lightning TV framework',
            'Javascript',
            'Accessibility',
            'Design Systems',
            'Web accessibility',
        ],
        intro: 'Frontend Engineer for HBO Max streaming platform, impacting millions of users worldwide.',
        points: [
            'Migrate design system to latest version with style guides and create web accessible applications',
            'Write, review code and debug complex systems for pixel-perfect user experience',
        ],
    },
];
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
            <section className={`${styles.hero} ${styles.container}`}>
                <div>
                    <p className={styles.eyebrow}>
                        <i /> Alexandra Barka · Senior Product Engineer
                    </p>
                    <h1>
                        Making the web <span>a little better each day.</span>
                    </h1>
                    <p className={styles.lead}>
                        I create nice, accessible, and thoughtful digital
                        experiences, with curiosity, care, and a focus on
                        solving problems that make a difference.
                    </p>
                    <a
                        className={styles.button}
                        href={cv}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => trackEvent('resume_download_click')}
                    >
                        Download résumé ↓
                    </a>
                </div>
                <div className={styles.portrait}>
                    <div>
                        <img src={profile} alt="Alexandra Barka" />
                        <strong>✦ Engineer / maker</strong>
                    </div>
                </div>
            </section>
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
                        text="I turn complex problems into thoughtful, accessible experiences. My computer science background is balanced by an eye for design and the people using what I build."
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
                                'React',
                                'HTML',
                                'CSS',
                                'Node.js',
                                'APIs',
                                'GraphQL',
                                'Testing',
                                'Design systems',
                            ].map((x) => (
                                <li key={x}>{x}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
            <WorkExperience />
            <MakerDesk />
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
