import Wrapper from '../../fragments/wrapper';
import { JobCard } from '../../fragments/JobCard/JobCard';
import { SectionContainer, ColoredSpan, SectionTitle, SectionSubtitle, LinkedInButton } from './projects.styles';

import JOBS from './utils';

const TechStack = () => {
    const displayedJobs = JOBS.slice(0, 3);
    
    return (
        <SectionContainer>
            <Wrapper>
                <SectionTitle>
                    Work Experience <ColoredSpan>.</ColoredSpan>
                </SectionTitle>
                <SectionSubtitle>
                    A journey through my professional experience, showcasing growth, innovation, and impact across various industries and technologies.
                </SectionSubtitle>

                {displayedJobs.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
                
                <LinkedInButton href="https://www.linkedin.com/in/alexandra-barka/" target="_blank" rel="noopener noreferrer">
                    View Full Experience on LinkedIn ↗
                </LinkedInButton>
            </Wrapper>
        </SectionContainer>
    );
};

export default TechStack;
