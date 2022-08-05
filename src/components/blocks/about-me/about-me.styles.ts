import styled from 'styled-components';

export const TwoColumn = styled.div`
    column-count: 2;
    column-gap: 100px;

    padding: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        column-count: 1;
    }
`;

export const ColoredSpan = styled.span`
    color: ${({ theme }) => theme.color.primary};
    font-size: 7rem;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.color.text};
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
`;
