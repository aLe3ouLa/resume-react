import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

// Rotating card accent colors from the candy-pop palette.
export const CARD_COLORS = ['#8C9EEC', '#F6A6D6', '#FFCE2E', '#2EA84F', '#E0399B'];

// High-contrast syntax token colors (override the highlight.js theme so
// property accesses like `.ironChest` stay readable on the dark background).
// String.raw keeps the escaped underscore in `hljs-built\_in` intact for both
// Tailwind's source scan and the runtime className (Tailwind treats an
// unescaped `_` inside an arbitrary variant as a descendant-combinator space).
const CODE_TOKENS = String.raw`text-[#e6edf3] [&_:is(.hljs-comment,.hljs-quote)]:text-[#9aa7b5] [&_:is(.hljs-comment,.hljs-quote)]:italic [&_:is(.hljs-keyword,.hljs-selector-tag,.hljs-built\_in,.hljs-literal)]:text-[#ff7b72] [&_:is(.hljs-string,.hljs-regexp)]:text-[#a5d6ff] [&_.hljs-meta_.hljs-string]:text-[#a5d6ff] [&_.hljs-number]:text-[#f0a35e] [&_:is(.hljs-title,.hljs-section)]:text-[#d2a8ff] [&_:is(.hljs-variable,.hljs-property,.hljs-attr,.hljs-attribute,.hljs-params,.hljs-template-variable)]:text-[#79c0ff] [&_:is(.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class)]:text-[#7ee787]`;

// Same token palette, but scoped under `pre.hljs` for the markdown article body.
const CONTENT_CODE_TOKENS = String.raw`[&_pre.hljs]:text-[#e6edf3] [&_pre.hljs_:is(.hljs-comment,.hljs-quote)]:text-[#9aa7b5] [&_pre.hljs_:is(.hljs-comment,.hljs-quote)]:italic [&_pre.hljs_:is(.hljs-keyword,.hljs-selector-tag,.hljs-built\_in,.hljs-literal)]:text-[#ff7b72] [&_pre.hljs_:is(.hljs-string,.hljs-regexp)]:text-[#a5d6ff] [&_pre.hljs_.hljs-meta_.hljs-string]:text-[#a5d6ff] [&_pre.hljs_.hljs-number]:text-[#f0a35e] [&_pre.hljs_:is(.hljs-title,.hljs-section)]:text-[#d2a8ff] [&_pre.hljs_:is(.hljs-variable,.hljs-property,.hljs-attr,.hljs-attribute,.hljs-params,.hljs-template-variable)]:text-[#79c0ff] [&_pre.hljs_:is(.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class)]:text-[#7ee787]`;

export const BlogSection = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <section className={`px-0 pt-xl pb-xxl bg-cream min-h-[70vh] ${className}`} {...props}>
        {children}
    </section>
);

export const HeaderBlock = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`text-center mb-xl ${className}`} {...props}>
        {children}
    </div>
);

export const BlogTitle = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
        className={`text-[5rem] font-extrabold font-display tracking-[-0.02em] uppercase text-text max-tablet:text-[3.2rem] ${className}`}
        {...props}
    >
        {children}
    </h1>
);

export const BlogSubtitle = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`text-[1.8rem] text-textLight mt-sm ${className}`} {...props}>
        {children}
    </p>
);

export const Grid = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-xl max-w-[1100px] mx-auto ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const Card = ({
    className = '',
    children,
    style,
    $accent,
    ...props
}: LinkProps & { $accent: string }) => (
    <Link
        className={`group relative flex flex-col border-[3px] border-black rounded-[20px] shadow-[8px_8px_0_#1A1A1A] overflow-visible no-underline transition-[transform,box-shadow] duration-200 ease-[ease] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:rotate-[-0.5deg] hover:shadow-[11px_11px_0_#1A1A1A] hover:no-underline active:translate-x-[2px] active:translate-y-[2px] active:shadow-[4px_4px_0_#1A1A1A] ${className}`}
        style={{ background: $accent, ...style }}
        {...props}
    >
        {children}
    </Link>
);

// Playful tilted language sticker in the card's top-right corner.
export const LangBadge = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`absolute top-[-14px] right-[-10px] z-[3] rotate-[6deg] bg-white text-black border-[3px] border-black rounded-full px-3 py-1 font-display text-[1.2rem] font-extrabold tracking-[0.5px] shadow-[3px_3px_0_#1A1A1A] transition-transform duration-200 ease-[ease] group-hover:rotate-[8deg] group-hover:scale-[1.08] ${className}`}
        {...props}
    >
        {children}
    </span>
);

export const CodeWindow = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`m-md bg-[#1e1e2e] border-[3px] border-black rounded-[12px] overflow-hidden ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const WindowBar = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex gap-[6px] items-center px-3 py-2 bg-[#2a2a3c] border-b-2 border-black [&_span]:w-[11px] [&_span]:h-[11px] [&_span]:rounded-full [&_span]:inline-block [&_span]:border-[1.5px] [&_span]:border-[rgba(0,0,0,0.4)] [&_span:nth-child(1)]:bg-[#ff5f56] [&_span:nth-child(2)]:bg-[#ffbd2e] [&_span:nth-child(3)]:bg-[#27c93f] ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const Snippet = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
        className={`m-0 p-md font-mono text-[1.3rem] leading-[1.5] overflow-x-auto whitespace-pre [&_code]:[font-family:inherit] ${CODE_TOKENS} ${className}`}
        {...props}
    >
        {children}
    </pre>
);

export const CardBody = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`bg-white border-t-[3px] border-black rounded-bl-[17px] rounded-br-[17px] p-md flex-1 ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const FileName = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span className={`ml-[6px] font-mono text-[1.1rem] text-[#9aa7b5] ${className}`} {...props}>
        {children}
    </span>
);

export const CardTitle = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
        className={`text-[2.2rem] font-extrabold font-display text-text mb-xs ${className}`}
        {...props}
    >
        {children}
    </h2>
);

export const CardExcerpt = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`text-[1.4rem] leading-[1.5] text-textLight mb-sm ${className}`} {...props}>
        {children}
    </p>
);

export const TagRow = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`flex flex-wrap gap-xs items-center ${className}`} {...props}>
        {children}
    </div>
);

export const Tag = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`bg-tertiary text-black border-2 border-black rounded-full px-2.5 py-0.5 text-[1.1rem] font-bold ${className}`}
        {...props}
    >
        {children}
    </span>
);

export const DateText = ({ className = '', children, ...props }: React.TimeHTMLAttributes<HTMLTimeElement>) => (
    <time
        className={`block text-[1.2rem] font-semibold text-textLight mt-sm ${className}`}
        {...props}
    >
        {children}
    </time>
);

/* ---------- Single article ---------- */

export const ArticleWrapper = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <article className={`max-w-[760px] mx-auto ${className}`} {...props}>
        {children}
    </article>
);

export const BackLink = ({ className = '', children, ...props }: LinkProps) => (
    <Link
        className={`inline-flex items-center gap-[6px] text-[1.4rem] font-bold text-text no-underline mb-lg border-2 border-black rounded-full px-[14px] py-1 bg-white shadow-[3px_3px_0_#1A1A1A] transition-[transform,box-shadow] duration-200 ease-[ease] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0_#1A1A1A] hover:no-underline ${className}`}
        {...props}
    >
        {children}
    </Link>
);

export const ArticleTitle = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
        className={`text-[4rem] font-extrabold font-display tracking-[-0.02em] leading-[1.05] text-text max-tablet:text-[2.8rem] ${className}`}
        {...props}
    >
        {children}
    </h1>
);

export const MetaRow = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex flex-wrap items-center gap-sm mt-sm mb-xl ${className}`}
        {...props}
    >
        {children}
    </div>
);

// Styles the HTML produced by markdown-it (+ highlight.js).
export const Content = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`font-body [&_h2]:text-[2.4rem] [&_h2]:font-extrabold [&_h2]:mt-xl [&_h2]:mb-sm [&_h2]:text-text [&_h3]:text-[1.9rem] [&_h3]:font-bold [&_h3]:mt-lg [&_h3]:mb-sm [&_p]:text-[1.6rem] [&_p]:leading-[1.75] [&_p]:mb-md [&_p]:text-text [&_:is(ul,ol)]:mb-md [&_:is(ul,ol)]:pl-lg [&_ul]:list-disc [&_ol]:list-decimal [&_li]:text-[1.6rem] [&_li]:leading-[1.7] [&_li]:mb-xs [&_a]:text-primary [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-[3px] [&_:not(pre)>code]:bg-cream [&_:not(pre)>code]:border-2 [&_:not(pre)>code]:border-black [&_:not(pre)>code]:rounded-[6px] [&_:not(pre)>code]:px-[6px] [&_:not(pre)>code]:py-[1px] [&_:not(pre)>code]:font-mono [&_:not(pre)>code]:text-[0.9em] [&_pre.hljs]:border-[3px] [&_pre.hljs]:border-black [&_pre.hljs]:rounded-[12px] [&_pre.hljs]:shadow-[6px_6px_0_#1A1A1A] [&_pre.hljs]:mb-lg [&_pre.hljs]:p-md [&_pre.hljs]:text-[1.4rem] [&_pre.hljs]:leading-[1.6] [&_pre.hljs]:overflow-x-auto [&_pre.hljs]:bg-[#161b22] ${CONTENT_CODE_TOKENS} [&_pre.hljs_code]:font-mono [&_img]:max-w-full [&_img]:h-auto [&_img]:border-[3px] [&_img]:border-black [&_img]:rounded-[12px] [&_img]:shadow-[6px_6px_0_#1A1A1A] [&_img]:my-md [&_.demo]:flex [&_.demo]:flex-wrap [&_.demo]:gap-xl [&_.demo]:bg-white [&_.demo]:border-[3px] [&_.demo]:border-black [&_.demo]:rounded-[12px] [&_.demo]:shadow-[6px_6px_0_#1A1A1A] [&_.demo]:p-lg [&_.demo]:mb-lg [&_.demo]:items-center [&_.demo]:justify-center [&_.demo-item]:flex [&_.demo-item]:flex-col [&_.demo-item]:items-center [&_.demo-item]:gap-sm [&_.demo-label]:font-mono [&_.demo-label]:text-[1.2rem] [&_.demo-label]:font-bold [&_.demo-label]:text-textLight [&_.demo-label]:bg-transparent [&_.demo-label]:border-none [&_.demo-label]:shadow-none [&_.demo-label]:p-0 [&_blockquote]:mb-md [&_blockquote]:py-sm [&_blockquote]:px-md [&_blockquote]:bg-tertiary [&_blockquote]:border-[3px] [&_blockquote]:border-black [&_blockquote]:rounded-[12px] [&_blockquote]:shadow-[4px_4px_0_#1A1A1A] [&_blockquote_p]:m-0 [&_blockquote_p]:text-[1.5rem] ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const NotFound = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-center py-xxl text-[2rem] font-bold text-text ${className}`}
        {...props}
    >
        {children}
    </div>
);
