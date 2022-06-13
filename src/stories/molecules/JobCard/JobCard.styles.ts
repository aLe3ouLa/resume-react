import styled from 'styled-components';

export const StyleWrapper = styled.div`
    display: flex;
`;

export const Container = styled.div`
    border: 4px dashed #eee;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 1.6rem;
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.color.text};
    margin-bottom: 1rem;
    font-size: 2.2rem;
    font-weight: 900;
`;

export const Paragraph = styled.p`
    color: ${({ theme }) => theme.color.text};
    margin-bottom: 1.4rem;
    font-size: 1.8rem;

    & > span {
        font-size: 2.2rem;
    }

    & > a {
        margin: 0 12px;
    }
`;

export const Technologies = styled.p`
    color: ${({ theme }) => theme.color.tertiary};
    margin-bottom: 1.6rem;
    font-size: 1.2rem;
    font-weight: 900;
    text-transform: uppercase;
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.color.tertiary};
    font-size: 1.6rem;
    font-weight: 900;
    margin-bottom: 1.2rem;
`;

export const StyledLink = styled.a`
    color: ${({ theme }) => theme.color.textLight};
    font-weight: 900;
    text-transform: uppercase;
    padding: 4px;
`;
