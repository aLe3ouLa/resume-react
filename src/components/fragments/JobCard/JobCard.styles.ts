import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 28px;
    border: 3px solid ${({ theme }) => theme.color.black};
    box-shadow: 8px 8px 0 ${({ theme }) => theme.color.black};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translate(-3px, -3px);
        box-shadow: 11px 11px 0 ${({ theme }) => theme.color.primary};
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        background: ${({ theme }) => theme.color.primary};
        border-right: 3px solid ${({ theme }) => theme.color.black};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: 18px;
        margin-bottom: 20px;
    }
`;

export const StyleWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: column;
        gap: 16px;
    }
`;

export const CompanyLogo = styled.div`
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: ${({ theme }) => theme.color.white};
    border: 3px solid ${({ theme }) => theme.color.black};
    box-shadow: 4px 4px 0 ${({ theme }) => theme.color.black};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s ease;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 8px;
    }

    &:hover {
        transform: translate(-2px, -2px) rotate(-2deg);
        box-shadow: 6px 6px 0 ${({ theme }) => theme.color.black};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 60px;
        height: 60px;
        align-self: flex-start;
    }
`;

export const JobInfo = styled.div`
    flex: 1;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.color.text};
    margin: 0;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.2;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 2rem;
    }
`;

export const Subtitle = styled.div`
    color: ${({ theme }) => theme.color.tertiary};
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;

    &::before {
        content: '📅';
        font-size: 1.2rem;
    }
`;

export const Paragraph = styled.div`
    color: ${({ theme }) => theme.color.text};
    margin-bottom: 20px;
    font-size: 1.6rem;
    line-height: 1.6;

    ul {
        margin: 16px 0;
        padding-left: 0;
        list-style: none;
    }

    li {
        margin-bottom: 12px;
        padding-left: 0;
        position: relative;
        font-size: 1.5rem;
        line-height: 1.5;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.5rem;
        
        li {
            font-size: 1.4rem;
        }
    }
`;

export const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
`;

export const TechTag = styled.span`
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    padding: 5px 10px;
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 8px;
    box-shadow: 2px 2px 0 ${({ theme }) => theme.color.black};
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: none;
    letter-spacing: 0.2px;
    transition: all 0.2s ease;

    &:hover {
        background: ${({ theme }) => theme.color.primary};
        color: ${({ theme }) => theme.color.white};
        transform: translate(-1px, -1px);
        box-shadow: 3px 3px 0 ${({ theme }) => theme.color.black};
    }
`;

export const StyledLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: ${({ theme }) => theme.color.textLight};
    font-weight: 400;
    font-size: 1.2rem;
    text-decoration: underline;
    text-decoration-color: transparent;
    transition: all 0.2s ease;
    flex-shrink: 0;

    &:hover {
        color: ${({ theme }) => theme.color.primary};
        text-decoration-color: ${({ theme }) => theme.color.primary};
    }

    &::after {
        content: '↗';
        font-size: 1rem;
        transition: transform 0.2s ease;
    }

    &:hover::after {
        transform: translate(2px, -2px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.1rem;
    }
`;
