import moment from 'moment';
interface Job {
    id: number;
    img: string;
    a11y_img: string;
    company: string;
    jobFunction: string;
    duration: string;
    technologies: string;
    link: string;
    responsibilities: JSX.Element;
}

const JOBS: Job[] = [
    {
        id: 8,
        img: 'https://www.mews.com/hubfs/_Project_Phoenix/images/logo/Mews%20Logo.svg',
        a11y_img: 'Mews logo',
        company: 'Mews',
        jobFunction: 'Software Engineer',
        duration: `Aug 2024 - Present · ${(() => {
            const months = moment().diff('2024-08-01', 'months', true);
            if (months >= 12) {
                const years = Math.floor(months / 12);
                const remainingMonths = Math.floor(months % 12);
                return remainingMonths > 0 ? `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}` : `${years} year${years > 1 ? 's' : ''}`;
            }
            return `${months.toFixed(1)} months`;
        })()}`,
        responsibilities: <></>,
        technologies: 'Typescript ・ Javascript ・ React.JS ・ .NET',
        link: 'https://www.mews.com',
    },
    {
        id: 7,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png',
        a11y_img: 'Spotify logo',
        company: 'Spotify',
        jobFunction: 'Web Engineer',
        duration: `Sep 2022 - Aug 2024 · 2 yrs`,
        responsibilities: (
            <>
                Web Engineer developing internal growth campaigns and marketing tools for Spotify's subscriber expansion.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Lead impactful projects and mentor junior engineers while developing features aligned with company key results
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Enhance performance and migrate to preferred technologies, maintaining modern codebase with latest technologies
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Support marketing teams driving Spotify subscriber growth through stakeholder collaboration
                    </li>
                </ul>
            </>
        ),
        technologies:
            'Typescript ・ Javascript ・ Next.JS ・ React.JS ・ GraphQL',
        link: 'https://www.spotify.com',
    },
    {
        id: 0,
        img: 'https://companieslogo.com/img/orig/WBD-09dee705.png?t=1649700090',
        a11y_img: 'Warner Bros Discovery logo',
        company: 'Warner Bros. Discovery',
        jobFunction: 'Frontend Engineer',
        duration: 'Jul 2021 - Aug 2022 · 1 yr 2 mn',
        responsibilities: (
            <>
                Frontend Engineer for HBO Max streaming platform, impacting millions of users worldwide.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Migrate design system to latest version with style guides and create web accessible applications
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Write, review code and debug complex systems for pixel-perfect user experience
                    </li>
                </ul>
            </>
        ),
        technologies:
            'JSX ・ Typescript ・ Lightning TV framework・ Javascript ・ Accessibility ・ Design Systems ・ Web accessibility',
        link: 'https://www.warnermedia.com',
    },
    {
        id: 1,
        img: 'https://developers.messagebird.com/img/glyph.svg',
        a11y_img: 'Messagebird logo',
        company: 'Messagebird',
        jobFunction: 'Frontend Engineer',
        duration: 'Aug 2020 - Jun 2021 · 1 yr',
        responsibilities: (
            <>
                React Frontend Engineer creating web-accessible onboarding experiences for Messagebird products.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Migrate authentication to React micro frontend and develop onboarding flows reducing setup time from days to minutes
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Integrate design system and accessibility techniques for improved user experience
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Provide support engineering in team rotation for client problem resolution
                    </li>
                </ul>
            </>
        ),
        technologies:
            'React.js ・ Typescript ・ Semantic HTML ・ CSS3 ・split・transifex ・segment・ Web accessibility',
        link: 'https://www.messagebird.com',
    },
    {
        id: 3,
        img: 'https://media-exp1.licdn.com/dms/image/C560BAQHmU9rDxA6bTg/company-logo_200_200/0/1614263196276?e=2147483647&v=beta&t=t8MVJD-1jRzavNyqv9GLK3m0X89N9zoaVfyZ0_megT0',
        a11y_img: 'Strangelove digital marketing logo',
        company: 'STRANGELOVE DIGITAL MARKETING',
        jobFunction: 'Frontend Developer',
        duration: 'Feb 2020 - Jul 2020 · 6 mos',
        responsibilities: (
            <>
                React Frontend Developer creating web applications for Strangelove digital agency clients and internal use.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Build automated cookie scanning tool using Node.js, Puppeteer and React.js
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Develop e-commerce shop with API mocking, testing tools and automated invoice generation
                    </li>
                </ul>
            </>
        ),
        technologies:
            'React.js | Redux | JEST | Node.js | JavaScript | HTML5 | CSS3 | styled-components | electron | pdfgenerationapi | mirage',
        link: 'https://strangelove.nl/',
    },
    {
        id: 4,
        img: 'https://uploads.magnetme-images.com/8056d99c23d1cc782fbf73efb0b493a8?auto=format&bg=white&fit=fill&h=158&w=158',
        a11y_img: 'Yabbu logo',
        company: 'Yabbu',
        jobFunction: 'Frontend Engineer',
        duration: 'Jul 2019 - Dec 2019 · 6 mos',
        responsibilities: (
            <>
                Frontend Developer for Yabbu meeting management application, delivering clean code to minimize meeting time.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Develop cross-platform meeting management tool migrating from Angular.js to Vue.js
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Improve UI performance using Vue.js best practices and removing costly libraries
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Assist project management with estimations, sprint organization and CI/CD pipeline development
                    </li>
                </ul>
            </>
        ),
        technologies: 'Vue.js ・ Angular.js ・ Semantic HTML ・ CSS3 ・ JS',
        link: 'https://yabbu.com/',
    },
    {
        id: 5,
        img: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHxCTbu9lRJTA/company-logo_200_200/0/1609770725107?e=2147483647&v=beta&t=t-rhODnHm-Us9qnoJK98bNzfFCW4bIV3mK_EC3QYOp0',
        a11y_img: 'Ubitech logo',
        company: 'Ubitech',
        jobFunction: 'Frontend Engineer',
        duration: 'Jul 2018 - Jul 2019 · 1 yr 1 mo',
        responsibilities: (
            <>
                Frontend Engineer with UX design knowledge, creating components, interfaces and assets with clean, pixel-perfect code.
            </>
        ),
        technologies:
            'Angular 2+ ┃ Vue.js ┃ AngularJS ┃ JS ┃ TypeScript ┃ Thymeleaf ┃  HTML5 ┃ CSS3 ┃ UI & UX ┃Design',
        link: 'https://ubitech.eu/',
    },
    {
        id: 6,
        img: 'https://www.iesl.forth.gr/sites/default/files/ICS%20logo.jpg',
        a11y_img: 'FORTH logo',
        company: 'FORTH',
        jobFunction: 'R&D - Frontend Engineer',
        duration: 'Jul 2015 - Jun 2018 · 3 yrs',
        responsibilities: (
            <>
                R&D Frontend Engineer in Ambient Intelligent environments, developing web, mobile and desktop applications.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Participated in HCI International 2018 Student Design Competition, Las Vegas
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Designed interactive full-stack application for real-time UI composition (MSc thesis)
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Co-developed interactive applications including augmented table for children and mobile app for monastery
                    </li>
                </ul>
            </>
        ),
        technologies:
            'Angular 6 | MEAN stack | Node.js | WPF | C# | Actionscript | Typescript | Javacript | HTML5 | CSS3 | MongoDB | JSON | REST | Android',
        link: 'https://www.forth.gr/en/home/',
    },
];
export default JOBS;
