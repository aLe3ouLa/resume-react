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
        id: 7,
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png',
        a11y_img: 'Spotify logo',
        company: 'Spotify',
        jobFunction: 'Frontend Engineer',
        duration: `Sep 2022 - Present · ${moment().diff(
            '2022-09-01',
            'year',
            false
        )} year ${moment(9, 'MM').fromNow(true)}`,
        responsibilities: (
            <>
                As a web engineer in Spotify, my work revolves around helping
                business users creating high-quality campaigns to promote our
                products.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Closely work with different stakeholders to optimise our
                        users workflow
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Write and review code, develop documentation, and debug
                        problems, on complex systems
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
                As a front-end engineer in HBO max TV platform, my work revolves
                around helping users to enjoy the next generation of streaming
                apps and having a direct impact on the consumer experience of
                millions of users worldwide.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Migrate the Design system to the newest version. Create
                        style guides, and showcase the components involved.
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Closely work with different stakeholders to create a web
                        accessible and pixel perfect application
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Write and review code, develop documentation, and debug
                        problems, on complex systems
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
                As a React Frontend Engineer, my work revolves around helping
                customers onboard and activate Messagebird products by providing
                helpful and web-accessible onboarding experiences.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Migrate authentication to a new react micro frontend by
                        improving performance and user experience
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Development of onboarding and signup flows to give the
                        best experience to new users, decreasing the time for
                        our users to connect to their customers from days to
                        minutes
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Integrating the design system and web accessibility
                        techniques to the platform
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Be support engineer in rotation with the other team
                        members to assist in solving client problems
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
                Worked as a React frontend developer and developed web
                applications for Strangelove digital agency both for clients and
                internal use.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Build a fully automated tool for scan, monitor and
                        report all types of cookie by utilising Node.js,
                        pupeeteer and React.js
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Develop an e-commerce shop that uses state-of-the-art
                        technologies. Setup an API mocking library and testing
                        tools in the project and write tests. Automate the
                        generation of the invoices resulting on speeding up the
                        checkout process.
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
                Worked as a frontend developer in Yabbu, a meeting management
                application. Deliver clean code and pixel-perfect results to aid
                in the target of minimizing the meeting time.
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Develop a cross-platform application that acts as a
                        remote meeting management tool by maintaining the old
                        codebase in Angular.js and migrating the features in
                        Vue.js
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Improve performance from the old UI by using the best
                        practices in Vue.js and removing costly libraries.
                    </li>

                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Assist in the project management to maximise the
                        effectiveness of the team by creating estimations &
                        organising the kanban board in 2 weeks sprints.
                    </li>

                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Aid in the CI/CD pipeline of the development team.
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
                Worked as a front-end engineer with a working knowledge of UX
                design principles. My role was to write front-end components as
                well as design user interfaces and assets for the company's
                projects. Delivered clean code and pixel-perfect results.
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
                Research and Developer engineer in Ambient Intelligent
                environments with a focus on front-end development on web,
                mobile and desktop applications. Outcomes from my work in FORTH
                are:
                <ul>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Participate in Student Design Competition in HCI
                        International 2018, Las Vegas, NV, USA.
                    </li>

                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Design and develop an interactive full-stack application
                        that composes web applications in real-time that
                        aggregate the individual UIs existing in the intelligent
                        environment by introducing new rich user interface
                        compositions. Presented as part of my Msc. thesis,
                        November 2018.
                    </li>

                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Co-develop an augmented interactive table that includes
                        serious games for children. Publicly displayed in
                        Vikelaia Library, 2017.
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Design and co-develop a cross-platform mobile
                        application that aims to guide the visitor through the
                        Rethimni Monastery via an interactive map.
                    </li>
                    <li>
                        <span role="img" aria-label="Bullet point">
                            →
                        </span>{' '}
                        Co-develop an info kiosk that exhibits the Minoan
                        Culture and different aspects of the life in that era.
                        Publicly displayed in the archaeological museum of
                        Crete, 2016.
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
