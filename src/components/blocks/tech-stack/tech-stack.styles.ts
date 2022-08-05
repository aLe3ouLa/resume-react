import styled from 'styled-components';

export const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    padding: 0 40px 0 0;

    margin: 40px 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        display: block;
        padding: 0;

        margin: 20px 0;
    }
`;

export const Container = styled.div`
    border: 4px dashed #eee;
    padding: 16px;
    border-radius: 8px;
`;

export const ColoredSpan = styled.span`
    color: ${({ theme }) => theme.color.primary};
    font-size: 7rem;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.color.text};
    margin-bottom: 1.2rem;
    font-size: 2rem;

    & > span {
        font-size: 2rem;
    }

    & > a {
        margin: 0 10px;
    }
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.color.textLight};
    font-weight: 900;
    text-transform: uppercase;
`;

export const TechSkills = styled.ul`
    display: grid;
    place-items: center start;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 100px;

    padding-left: 100px;

    li {
        list-style-type: circle;
        font-size: 1.6rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        grid-template-columns: repeat(2, 1fr);
        padding-left: 20px;
    }
`;
