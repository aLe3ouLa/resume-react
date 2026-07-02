import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

// Rotating card accent colors from the candy-pop palette.
export const CARD_COLORS = ['#8C9EEC', '#F6A6D6', '#FFCE2E', '#2EA84F', '#E0399B'];

// High-contrast syntax token colors (override the highlight.js theme so
// property accesses like `.ironChest` stay readable on the dark background).
const codeTokens = css`
    color: #e6edf3;

    .hljs-comment,
    .hljs-quote {
        color: #9aa7b5;
        font-style: italic;
    }
    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-built_in,
    .hljs-literal {
        color: #ff7b72;
    }
    .hljs-string,
    .hljs-regexp,
    .hljs-meta .hljs-string {
        color: #a5d6ff;
    }
    .hljs-number {
        color: #f0a35e;
    }
    .hljs-title,
    .hljs-title.function_,
    .hljs-title.class_,
    .hljs-section {
        color: #d2a8ff;
    }
    .hljs-variable,
    .hljs-property,
    .hljs-attr,
    .hljs-attribute,
    .hljs-params,
    .hljs-template-variable {
        color: #79c0ff;
    }
    .hljs-tag,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
        color: #7ee787;
    }
`;

export const BlogSection = styled.section`
    padding: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.xxl};
    background: ${({ theme }) => theme.color.cream};
    min-height: 70vh;
`;

export const HeaderBlock = styled.div`
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const BlogTitle = styled.h1`
    font-size: 5rem;
    font-weight: 800;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.text};

    @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
        font-size: 3.2rem;
    }
`;

export const BlogSubtitle = styled.p`
    font-size: 1.8rem;
    color: ${({ theme }) => theme.color.textLight};
    margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: ${({ theme }) => theme.spacing.xl};
    max-width: 1100px;
    margin: 0 auto;
`;

export const Card = styled(Link)<{ $accent: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    background: ${({ $accent }) => $accent};
    border: 3px solid ${({ theme }) => theme.color.black};
    border-radius: 20px;
    box-shadow: 8px 8px 0 ${({ theme }) => theme.color.black};
    overflow: visible;
    text-decoration: none;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translate(-3px, -3px) rotate(-0.5deg);
        box-shadow: 11px 11px 0 ${({ theme }) => theme.color.black};
        text-decoration: none;
    }

    &:hover .lang-badge {
        transform: rotate(8deg) scale(1.08);
    }

    &:active {
        transform: translate(2px, 2px);
        box-shadow: 4px 4px 0 ${({ theme }) => theme.color.black};
    }
`;

// Playful tilted language sticker in the card's top-right corner.
export const LangBadge = styled.span`
    position: absolute;
    top: -14px;
    right: -10px;
    z-index: 3;
    transform: rotate(6deg);
    background: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    border: 3px solid ${({ theme }) => theme.color.black};
    border-radius: 999px;
    padding: 4px 12px;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    letter-spacing: 0.5px;
    box-shadow: 3px 3px 0 ${({ theme }) => theme.color.black};
    transition: transform 0.2s ease;
`;

export const CodeWindow = styled.div`
    margin: ${({ theme }) => theme.spacing.md};
    background: #1e1e2e;
    border: 3px solid ${({ theme }) => theme.color.black};
    border-radius: 12px;
    overflow: hidden;
`;

export const WindowBar = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    padding: 8px 12px;
    background: #2a2a3c;
    border-bottom: 2px solid ${({ theme }) => theme.color.black};

    span {
        width: 11px;
        height: 11px;
        border-radius: 50%;
        display: inline-block;
        border: 1.5px solid rgba(0, 0, 0, 0.4);
    }
    span:nth-child(1) { background: #ff5f56; }
    span:nth-child(2) { background: #ffbd2e; }
    span:nth-child(3) { background: #27c93f; }
`;

export const Snippet = styled.pre`
    margin: 0;
    padding: ${({ theme }) => theme.spacing.md};
    font-family: 'Fira Code', 'SF Mono', Menlo, Consolas, monospace;
    font-size: 1.3rem;
    line-height: 1.5;
    overflow-x: auto;
    white-space: pre;

    ${codeTokens}

    code {
        font-family: inherit;
    }
`;

export const CardBody = styled.div`
    background: ${({ theme }) => theme.color.white};
    border-top: 3px solid ${({ theme }) => theme.color.black};
    border-bottom-left-radius: 17px;
    border-bottom-right-radius: 17px;
    padding: ${({ theme }) => theme.spacing.md};
    flex: 1;
`;

export const FileName = styled.span`
    margin-left: 6px;
    font-family: 'Fira Code', 'SF Mono', Menlo, Consolas, monospace;
    font-size: 1.1rem;
    color: #9aa7b5;
`;

export const CardTitle = styled.h2`
    font-size: 2.2rem;
    font-weight: 800;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    color: ${({ theme }) => theme.color.text};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const CardExcerpt = styled.p`
    font-size: 1.4rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.color.textLight};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const TagRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xs};
    align-items: center;
`;

export const Tag = styled.span`
    background: ${({ theme }) => theme.color.tertiary};
    color: ${({ theme }) => theme.color.black};
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 999px;
    padding: 2px 10px;
    font-size: 1.1rem;
    font-weight: 700;
`;

export const DateText = styled.time`
    display: block;
    font-size: 1.2rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.textLight};
    margin-top: ${({ theme }) => theme.spacing.sm};
`;

/* ---------- Single article ---------- */

export const ArticleWrapper = styled.article`
    max-width: 760px;
    margin: 0 auto;
`;

export const BackLink = styled(Link)`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.text};
    text-decoration: none;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 999px;
    padding: 4px 14px;
    background: ${({ theme }) => theme.color.white};
    box-shadow: 3px 3px 0 ${({ theme }) => theme.color.black};
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translate(-2px, -2px);
        box-shadow: 5px 5px 0 ${({ theme }) => theme.color.black};
        text-decoration: none;
    }
`;

export const ArticleTitle = styled.h1`
    font-size: 4rem;
    font-weight: 800;
    font-family: 'Fredoka', 'Comfortaa', sans-serif;
    letter-spacing: -0.02em;
    line-height: 1.05;
    color: ${({ theme }) => theme.color.text};

    @media (max-width: ${({ theme }) => theme.breakpoint.upToTablet}) {
        font-size: 2.8rem;
    }
`;

export const MetaRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.sm};
    margin: ${({ theme }) => theme.spacing.sm} 0 ${({ theme }) => theme.spacing.xl};
`;

// Styles the HTML produced by markdown-it (+ highlight.js).
export const Content = styled.div`
    font-family: 'Comfortaa', 'Nunito', sans-serif;

    h2 {
        font-size: 2.4rem;
        font-weight: 800;
        margin: ${({ theme }) => theme.spacing.xl} 0 ${({ theme }) => theme.spacing.sm};
        color: ${({ theme }) => theme.color.text};
    }

    h3 {
        font-size: 1.9rem;
        font-weight: 700;
        margin: ${({ theme }) => theme.spacing.lg} 0 ${({ theme }) => theme.spacing.sm};
    }

    p {
        font-size: 1.6rem;
        line-height: 1.75;
        margin-bottom: ${({ theme }) => theme.spacing.md};
        color: ${({ theme }) => theme.color.text};
    }

    ul,
    ol {
        margin: 0 0 ${({ theme }) => theme.spacing.md};
        padding-left: ${({ theme }) => theme.spacing.lg};
    }

    li {
        font-size: 1.6rem;
        line-height: 1.7;
        margin-bottom: ${({ theme }) => theme.spacing.xs};
    }

    a {
        color: ${({ theme }) => theme.color.primary};
        font-weight: 700;
        text-decoration: underline;
        text-underline-offset: 3px;
    }

    /* Inline code (not fenced blocks) */
    :not(pre) > code {
        background: ${({ theme }) => theme.color.cream};
        border: 2px solid ${({ theme }) => theme.color.black};
        border-radius: 6px;
        padding: 1px 6px;
        font-family: 'Fira Code', 'SF Mono', Menlo, Consolas, monospace;
        font-size: 0.9em;
    }

    pre.hljs {
        border: 3px solid ${({ theme }) => theme.color.black};
        border-radius: 12px;
        box-shadow: 6px 6px 0 ${({ theme }) => theme.color.black};
        margin: 0 0 ${({ theme }) => theme.spacing.lg};
        padding: ${({ theme }) => theme.spacing.md};
        font-size: 1.4rem;
        line-height: 1.6;
        overflow-x: auto;
        background: #161b22;
        ${codeTokens}
    }

    pre.hljs code {
        font-family: 'Fira Code', 'SF Mono', Menlo, Consolas, monospace;
    }

    img {
        max-width: 100%;
        height: auto;
        border: 3px solid ${({ theme }) => theme.color.black};
        border-radius: 12px;
        box-shadow: 6px 6px 0 ${({ theme }) => theme.color.black};
        margin: ${({ theme }) => theme.spacing.md} 0;
    }

    .demo {
        display: flex;
        flex-wrap: wrap;
        gap: ${({ theme }) => theme.spacing.xl};
        background: ${({ theme }) => theme.color.white};
        border: 3px solid ${({ theme }) => theme.color.black};
        border-radius: 12px;
        box-shadow: 6px 6px 0 ${({ theme }) => theme.color.black};
        padding: ${({ theme }) => theme.spacing.lg};
        margin-bottom: ${({ theme }) => theme.spacing.lg};
        align-items: center;
        justify-content: center;
    }

    .demo-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: ${({ theme }) => theme.spacing.sm};
    }

    .demo-label {
        font-family: 'Fira Code', 'SF Mono', Menlo, Consolas, monospace;
        font-size: 1.2rem;
        font-weight: 700;
        color: ${({ theme }) => theme.color.textLight};
        background: none;
        border: none;
        box-shadow: none;
        padding: 0;
    }

    blockquote {
        margin: 0 0 ${({ theme }) => theme.spacing.md};
        padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
        background: ${({ theme }) => theme.color.tertiary};
        border: 3px solid ${({ theme }) => theme.color.black};
        border-radius: 12px;
        box-shadow: 4px 4px 0 ${({ theme }) => theme.color.black};

        p {
            margin: 0;
            font-size: 1.5rem;
        }
    }
`;

export const NotFound = styled.div`
    text-align: center;
    padding: ${({ theme }) => theme.spacing.xxl} 0;
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.text};
`;
