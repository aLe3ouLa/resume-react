import {
    CompanyStamp,
    Details,
    JobArticle,
    JobHeader,
    JobMeta,
    Notes,
    Role,
    TechnologyList,
} from './JobCard.styles';

interface JobCardProps {
    img: string;
    a11y_img: string;
    company: string;
    jobFunction: string;
    duration: string;
    technologies: string;
    link: string;
    responsibilities: JSX.Element;
    index?: number;
}

export const JobCard = ({
    company,
    jobFunction,
    duration,
    technologies,
    link,
    responsibilities,
    index = 0,
}: JobCardProps) => {
    const techArray = technologies
        .split(/・|\||┃/)
        .map((tech) => tech.trim())
        .filter(Boolean);
    const isCurrent = duration.includes('Present');

    return (
        <JobArticle>
            <JobMeta>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <CompanyStamp aria-hidden="true">
                    {company.split(/\s+/).map((word) => word[0]).join('').slice(0, 3)}
                </CompanyStamp>
            </JobMeta>

            <div>
                <JobHeader>
                    <div>
                        <span>{company}</span>
                        <Role>{jobFunction}</Role>
                    </div>
                    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${company}`}>
                        Visit ↗
                    </a>
                </JobHeader>

                <div className="job-period">
                    {duration}
                    {isCurrent && <span>Current</span>}
                </div>

                <Details open={isCurrent}>
                    <summary>{isCurrent ? 'Current focus and selected work' : 'Selected work and impact'}</summary>
                    <Notes>{responsibilities}</Notes>
                </Details>

                <TechnologyList aria-label="Technologies used">
                    {techArray.map((tech) => <li key={tech}>{tech}</li>)}
                </TechnologyList>
            </div>
        </JobArticle>
    );
};
