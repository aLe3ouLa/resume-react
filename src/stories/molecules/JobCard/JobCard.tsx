import {
    Container,
    Paragraph,
    StyledLink,
    StyleWrapper,
    Subtitle,
    Technologies,
    Title,
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
    return (
        <Container>
            <StyleWrapper>
                <img
                    src={img}
                    alt={a11y_img}
                    width="60"
                    height="60"
                    style={{ marginRight: '16px' }}
                />
                <div>
                    <Title>
                        <strong>
                            {company} - {jobFunction}
                        </strong>
                    </Title>
                    <Subtitle>{duration}</Subtitle>
                    <Paragraph>{responsibilities}</Paragraph>
                    <Technologies>{technologies}</Technologies>
                </div>
            </StyleWrapper>
            <StyledLink href={link}>See {company} &rarr;</StyledLink>
        </Container>
    );
};
