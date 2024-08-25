import Wrapper from '../../fragments/wrapper';
import { JobCard } from '../../fragments/JobCard/JobCard';
import { SectionContainer, ColoredSpan } from './projects.styles';

import JOBS from './utils';

const TechStack = () => {
    return (
        <SectionContainer>
            <Wrapper>
                <h2>
                    Work Experience <ColoredSpan>.</ColoredSpan>
                </h2>

                {JOBS.map((job) => (
                    <JobCard key={job.id} {...job} />
                ))}
            </Wrapper>
        </SectionContainer>
    );
};

export default TechStack;
