import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';

export const SectionContainer = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <section className={`py-xxl bg-white ${className}`} {...props}>{children}</section>
);

export const CareerHeader = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`max-w-[1060px] mx-auto mb-xl grid grid-cols-[0.9fr_1.1fr] items-end gap-xl border-b-[3px] border-black pb-lg max-tablet:grid-cols-1 max-tablet:gap-md [&>div>span]:block [&>div>span]:mb-sm [&>div>span]:text-[1.1rem] [&>div>span]:font-mono [&>div>span]:font-bold [&>div>span]:uppercase [&>div>span]:tracking-[1.4px] [&>div>span]:text-secondary [&_h2]:text-[6.4rem] [&_h2]:leading-[0.9] [&_h2]:font-display [&_h2]:font-extrabold [&_h2]:uppercase [&_h2]:tracking-[-0.04em] [&_h2>span]:!text-primary [&_h2>span]:text-[inherit] max-tablet:[&_h2]:text-[4.3rem] ${className}`} {...props}>{children}</div>
);

export const CareerIntro = ({ className = '', children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`max-w-[600px] justify-self-end text-[2rem] leading-[1.5] font-display font-medium text-textLight max-tablet:justify-self-start max-tablet:text-[1.7rem] ${className}`} {...props}>{children}</p>
);

export const CareerTimeline = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`career-timeline relative max-w-[960px] mx-auto ${className}`} {...props}>{children}</div>
);

export const LinkedInButton = ({ className = '', children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className={`flex items-center justify-center gap-xs w-fit mt-xl ml-auto mr-[80px] px-md py-sm bg-primary !text-white text-[1.15rem] font-bold uppercase tracking-[0.5px] no-underline border-[3px] border-black rounded-[12px] shadow-[5px_5px_0_#1A1A1A] transition-transform duration-200 hover:-translate-y-[2px] max-tablet:mx-auto ${className}`} {...props}>{children}</a>
);
