import {
    Container,
    Paragraph,
    StyledLink,
    StyleWrapper,
    Subtitle,
    Technologies,
    TechTag,
    Title,
    TitleContainer,
    CompanyLogo,
    JobInfo,
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
}

export const JobCard = ({
    img,
    a11y_img,
    company,
    jobFunction,
    duration,
    technologies,
    link,
    responsibilities,
}: JobCardProps) => {
    const techArray = technologies.split(/・|\||┃/).map(tech => tech.trim()).filter(tech => tech.length > 0);

    return (
        <Container>
            <StyleWrapper>
                <CompanyLogo>
                    <img
                        src={img}
                        alt={a11y_img}
                    />
                </CompanyLogo>
                <JobInfo>
                    <TitleContainer>
                        <Title>
                            {company} - {jobFunction}
                        </Title>
                        <StyledLink href={link} target="_blank" rel="noopener noreferrer">
                            Visit {company}
                        </StyledLink>
                    </TitleContainer>
                    <Subtitle>{duration}</Subtitle>
                    <Paragraph>{responsibilities}</Paragraph>
                    <Technologies>
                        {techArray.map((tech, index) => (
                            <TechTag key={index}>{tech}</TechTag>
                        ))}
                    </Technologies>
                </JobInfo>
            </StyleWrapper>
        </Container>
    );
};
