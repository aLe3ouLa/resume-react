import styles from './WorkExperience.module.css';

const currentMewsDuration = () => {
    const months = Math.floor(
        (Date.now() - new Date('2024-08-01').getTime()) /
            (1000 * 60 * 60 * 24 * 30.4375)
    );
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return remainingMonths
        ? `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`
        : `${years} year${years > 1 ? 's' : ''}`;
};

const jobs = [
    {
        company: 'Mews',
        role: 'Software Engineer, Operations Engineering',
        duration: `Aug 2024 - Present · ${currentMewsDuration()}`,
        technologies: ['Typescript', 'Javascript', 'React.JS', '.NET'],
        link: 'https://www.mews.com',
        intro: 'As a Software Engineer in Operations Engineering at Mews, I work across the Events Management System stack to improve the usability, reliability, and maintainability of our Groups & Events capabilities. My work spans frontend development, backend contributions, refactoring, and operational hardening, with the goal of making Events at Mews more robust, predictable, and easier to operate so hospitality teams can focus on guests and business outcomes instead of fighting their tools.',
        bullets: [
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
        role: 'Web Engineer',
        duration: 'Sep 2022 - Aug 2024 · 2 yrs',
        technologies: [
            'Typescript',
            'Javascript',
            'Next.JS',
            'React.JS',
            'GraphQL',
        ],
        link: 'https://www.spotify.com',
        intro: "Web Engineer developing internal growth campaigns and marketing tools for Spotify's subscriber expansion.",
        bullets: [
            'Lead impactful projects and mentor junior engineers while developing features aligned with company key results',
            'Enhance performance and migrate to preferred technologies, maintaining modern codebase with latest technologies',
            'Support marketing teams driving Spotify subscriber growth through stakeholder collaboration',
        ],
    },
    {
        company: 'Warner Bros. Discovery',
        role: 'Frontend Engineer',
        duration: 'Jul 2021 - Aug 2022 · 1 yr 2 mn',
        technologies: [
            'JSX',
            'Typescript',
            'Lightning TV framework',
            'Javascript',
            'Accessibility',
            'Design Systems',
            'Web accessibility',
        ],
        link: 'https://www.warnermedia.com',
        intro: 'Frontend Engineer for HBO Max streaming platform, impacting millions of users worldwide.',
        bullets: [
            'Migrate design system to latest version with style guides and create web accessible applications',
            'Write, review code and debug complex systems for pixel-perfect user experience',
        ],
    },
];

export default function WorkExperience() {
    return (
        <section
            id="work"
            className={styles.section}
            aria-labelledby="work-experience-heading"
        >
            <div className={styles.wrapper}>
                <header className={styles.heading}>
                    <div>
                        <span>Selected chapters</span>
                        <h2 id="work-experience-heading">
                            Work, over time<span>.</span>
                        </h2>
                    </div>
                    <p>
                        A record of building useful products, improving systems,
                        and growing alongside thoughtful teams.
                    </p>
                </header>
                <div className={styles.timeline}>
                    {jobs.map((job, index) => (
                        <article className={styles.entry} key={job.company}>
                            <div className={styles.meta}>
                                <span>
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className={styles.stamp}>
                                    {job.company
                                        .split(/\s+/)
                                        .map((word) => word[0])
                                        .join('')
                                        .slice(0, 3)}
                                </div>
                            </div>
                            <div className={styles.card}>
                                <header>
                                    <div>
                                        <span>{job.company}</span>
                                        <h3>{job.role}</h3>
                                    </div>
                                    <a
                                        href={job.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`Visit ${job.company}`}
                                    >
                                        Visit ↗
                                    </a>
                                </header>
                                <div className={styles.period}>
                                    {job.duration}
                                    {index === 0 && <span>Current</span>}
                                </div>
                                <details open={index === 0}>
                                    <summary>
                                        {index === 0
                                            ? 'Current focus and selected work'
                                            : 'Selected work and impact'}
                                    </summary>
                                    <div className={styles.notes}>
                                        <p>{job.intro}</p>
                                        <ul>
                                            {job.bullets.map((bullet) => (
                                                <li key={bullet}>
                                                    <span>→</span>
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </details>
                                <ul className={styles.technologies}>
                                    {job.technologies.map((technology) => (
                                        <li key={technology}>{technology}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
                <a
                    className={styles.button}
                    href="https://www.linkedin.com/in/alexandra-barka/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Full career archive <span>↗</span>
                </a>
            </div>
        </section>
    );
}
