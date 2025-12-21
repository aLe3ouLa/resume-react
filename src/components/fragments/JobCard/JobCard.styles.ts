import styled from 'styled-components';

export const Container = styled.div`
    background: #FAF8F3;
    border-radius: 0;
    padding: 0;
    margin-bottom: 40px;
    box-shadow: 
        0 4px 16px rgba(0, 0, 0, 0.12),
        0 2px 4px rgba(0, 0, 0, 0.08);
    border: 2px solid ${({ theme }) => theme.color.text};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    background-image: var(--grain-texture);
    background-blend-mode: overlay;
    font-family: 'Comfortaa', sans-serif;
    display: flex;
    min-height: 200px;

    /* Perforated edge effect on left (ticket stub side) */
    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        width: 10px;
        background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 3px,
            ${({ theme }) => theme.color.text} 3px,
            ${({ theme }) => theme.color.text} 5px
        );
        opacity: 0.4;
        z-index: 2;
    }

    /* Ticket divider line - perforated */
    &::after {
        content: '';
        position: absolute;
        left: 100px;
        top: 0;
        bottom: 0;
        width: 1px;
        background: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 6px,
            ${({ theme }) => theme.color.text} 6px,
            ${({ theme }) => theme.color.text} 8px
        );
        opacity: 0.5;
        z-index: 1;
    }

    &:hover {
        transform: translateY(-2px);
        box-shadow: 
            0 6px 24px rgba(0, 0, 0, 0.15),
            0 4px 8px rgba(0, 0, 0, 0.1);
        border-color: ${({ theme }) => theme.color.primary};
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        margin-bottom: 32px;
        flex-direction: column;
        
        &::after {
            left: 0;
            top: 100px;
            width: 100%;
            height: 1px;
            background: repeating-linear-gradient(
                to right,
                transparent 0px,
                transparent 6px,
                ${({ theme }) => theme.color.text} 6px,
                ${({ theme }) => theme.color.text} 8px
            );
            opacity: 0.4;
        }
    }
`;

export const StyleWrapper = styled.div`
    display: flex;
    align-items: stretch;
    gap: 0;
    margin: 0;
    position: relative;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: column;
    }
`;

export const CompanyLogo = styled.div`
    flex-shrink: 0;
    width: 100px;
    min-height: 100%;
    background: #F5F3ED;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    padding: 20px 12px;
    position: relative;
    border-right: 1px dashed ${({ theme }) => theme.color.text};
    opacity: 1;

    /* Ticket stub label */
    &::before {
        content: 'STUB';
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%) rotate(-90deg);
        font-size: 0.75rem;
        font-weight: 700;
        font-family: 'Fredoka', sans-serif;
        color: ${({ theme }) => theme.color.text};
        letter-spacing: 3px;
        opacity: 0.5;
        white-space: nowrap;
    }

    img {
        width: 100%;
        height: auto;
        max-height: 70px;
        object-fit: contain;
        padding: 6px;
        opacity: 0.85;
        filter: grayscale(20%);
    }

    &:hover {
        background: #F0EDE5;
        
        img {
            opacity: 1;
            filter: grayscale(0%);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        width: 100%;
        min-height: 100px;
        border-right: none;
        border-bottom: 1px dashed ${({ theme }) => theme.color.text};
        
        &::before {
            top: 8px;
            left: 16px;
            transform: none;
            font-size: 0.8rem;
        }
    }
`;

export const JobInfo = styled.div`
    flex: 1;
    padding: 28px 36px;
    position: relative;
    background: #FAF8F3;
    
    /* Ticket date stamp effect */
    &::before {
        content: '';
        position: absolute;
        top: 16px;
        right: 16px;
        width: 70px;
        height: 70px;
        border: 2px solid ${({ theme }) => theme.color.text};
        border-radius: 50%;
        opacity: 0.2;
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        padding: 24px 28px;
        
        &::before {
            width: 60px;
            height: 60px;
            top: 16px;
            right: 16px;
        }
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
    gap: 20px;
    padding-bottom: 18px;
    border-bottom: 1px solid ${({ theme }) => theme.color.text};
    opacity: 0.3;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
    }
`;

export const Title = styled.h3`
    color: ${({ theme }) => theme.color.text};
    margin: 0;
    font-size: 2.2rem;
    font-weight: 700;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    line-height: 1.3;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    position: relative;
    display: inline-block;
    flex: 1;
    opacity: 1;

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.9rem;
    }
`;

export const Subtitle = styled.div`
    color: ${({ theme }) => theme.color.text};
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'Comfortaa', sans-serif;
    margin-bottom: 20px;
    margin-top: 0;
    display: inline-block;
    font-style: normal;
    letter-spacing: 1px;
    text-transform: uppercase;
    opacity: 0.7;
    
    /* Ticket date stamp style */
    &::before {
        content: 'VALID:';
        margin-right: 10px;
        font-weight: 700;
        opacity: 0.6;
        color: ${({ theme }) => theme.color.text};
    }
`;

export const Paragraph = styled.div`
    color: ${({ theme }) => theme.color.text};
    margin-bottom: 24px;
    font-size: 1.4rem;
    line-height: 1.8;
    font-family: 'Comfortaa', sans-serif;

    ul {
        margin: 20px 0;
        padding-left: 0;
        list-style: none;
        border-left: 2px solid ${({ theme }) => theme.color.text};
        padding-left: 20px;
        margin-left: 4px;
        opacity: 0.4;
    }

    li {
        margin-bottom: 14px;
        padding-left: 0;
        position: relative;
        font-size: 1.3rem;
        line-height: 1.7;
        
        /* Ticket-style bullet */
        span[role="img"] {
            color: ${({ theme }) => theme.color.text};
            font-weight: 700;
            margin-right: 10px;
            font-size: 1.1rem;
            opacity: 0.6;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1.4rem;
        
        li {
            font-size: 1.3rem;
        }
        
        ul {
            padding-left: 18px;
        }
    }
`;

export const Technologies = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 0;
    padding-top: 20px;
    border-top: 1px solid ${({ theme }) => theme.color.text};
    opacity: 0.3;
`;

export const TechTag = styled.span`
    background: #F5F3ED;
    color: ${({ theme }) => theme.color.text};
    padding: 3px 10px;
    border: 1px solid ${({ theme }) => theme.color.text};
    border-radius: 0;
    font-size: 0.95rem;
    font-weight: 500;
    font-family: 'Comfortaa', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    transition: all 0.2s ease;
    display: inline-block;
    opacity: 0.8;

    &:hover {
        background: ${({ theme }) => theme.color.text};
        color: #FAF8F3;
        border-color: ${({ theme }) => theme.color.text};
        opacity: 1;
    }
`;

export const StyledLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: ${({ theme }) => theme.color.text};
    background: transparent;
    font-weight: 600;
    font-family: 'Comfortaa', sans-serif;
    font-size: 1rem;
    text-decoration: none;
    padding: 4px 0;
    border-bottom: 1px solid ${({ theme }) => theme.color.text};
    transition: all 0.2s ease;
    flex-shrink: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.8;

    &:hover {
        color: ${({ theme }) => theme.color.primary};
        border-bottom-color: ${({ theme }) => theme.color.primary};
        opacity: 1;
    }

    &::after {
        content: '↗';
        font-size: 0.9rem;
        margin-left: 4px;
        transition: transform 0.2s ease;
    }

    &:hover::after {
        transform: translate(2px, -2px);
    }

    @media (max-width: ${({ theme }) => theme.breakpoint.tablet}) {
        font-size: 1rem;
    }
`;
