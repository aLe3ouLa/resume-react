import styled from "styled-components";

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

export const ColoredSpan = styled.span`
    color: ${({ theme }) => theme.color.primary};
    font-size: 7rem;
`;
