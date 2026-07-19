import Wrapper from '../../fragments/wrapper';
import { JobCard } from '../../fragments/JobCard/JobCard';
import JOBS from './utils';
import {
    CareerHeader,
    CareerIntro,
    CareerTimeline,
    LinkedInButton,
    SectionContainer,
} from './projects.styles';

const WorkExperience = () => {
    const displayedJobs = JOBS.slice(0, 3);

    return (
        <SectionContainer aria-labelledby="work-experience-heading">
            <Wrapper>
                <CareerHeader>
                    <div>
                        <span>Selected chapters</span>
                        <h2 id="work-experience-heading">Work, over time<span>.</span></h2>
                    </div>
                    <CareerIntro>
                        A record of building useful products, improving systems,
                        and growing alongside thoughtful teams.
                    </CareerIntro>
                </CareerHeader>

                <CareerTimeline>
                    {displayedJobs.map((job, index) => (
                        <JobCard key={job.id} {...job} index={index} />
                    ))}
                </CareerTimeline>

                <LinkedInButton href="https://www.linkedin.com/in/alexandra-barka/" target="_blank" rel="noopener noreferrer">
                    Full career archive <span aria-hidden="true">↗</span>
                </LinkedInButton>
            </Wrapper>
        </SectionContainer>
    );
};

export default WorkExperience;
