import type { DetailsHTMLAttributes, HTMLAttributes } from 'react';

export const JobArticle = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <article className={`career-entry relative grid grid-cols-[110px_1fr] gap-lg pb-xl last:pb-0 max-tablet:grid-cols-[64px_1fr] max-tablet:gap-sm ${className}`} {...props}>{children}</article>
);

export const JobMeta = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`relative z-[2] flex flex-col items-center gap-sm [&>span]:font-mono [&>span]:text-[1rem] [&>span]:font-bold ${className}`} {...props}>{children}</div>
);

export const CompanyStamp = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`career-stamp flex items-center justify-center size-[76px] rounded-[16px] border-[3px] border-black bg-secondary shadow-[5px_5px_0_#1A1A1A] text-white text-[1.8rem] font-display font-extrabold max-tablet:size-[54px] max-tablet:text-[1.35rem] ${className}`} {...props}>{children}</div>
);

export const JobHeader = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <header className={`flex items-start justify-between gap-md mb-xs [&>div>span]:block [&>div>span]:mb-xs [&>div>span]:text-[1.25rem] [&>div>span]:font-bold [&>div>span]:uppercase [&>div>span]:tracking-[0.8px] [&>a]:shrink-0 [&>a]:px-sm [&>a]:py-xs [&>a]:rounded-full [&>a]:border-2 [&>a]:border-black [&>a]:bg-white [&>a]:text-text [&>a]:text-[1.05rem] [&>a]:font-bold [&>a]:no-underline [&>a]:transition-colors [&>a:hover]:bg-tertiary max-tablet:flex-col ${className}`} {...props}>{children}</header>
);

export const Role = ({ className = '', children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={`text-[2.8rem] leading-[1.15] font-display font-extrabold tracking-[-0.02em] text-text max-tablet:text-[2.1rem] ${className}`} {...props}>{children}</h3>
);

export const Details = ({ className = '', children, ...props }: DetailsHTMLAttributes<HTMLDetailsElement>) => (
    <details className={`career-details mt-md border-t-2 border-black ${className}`} {...props}>{children}</details>
);

export const Notes = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`pt-md text-[1.4rem] leading-[1.7] text-text [&_ul]:mt-md [&_ul]:p-0 [&_li]:relative [&_li]:mb-sm [&_li]:pl-lg [&_li]:text-[1.35rem] [&_li]:leading-[1.65] [&_li>span]:absolute [&_li>span]:left-0 [&_li>span]:font-bold ${className}`} {...props}>{children}</div>
);

export const TechnologyList = ({ className = '', children, ...props }: HTMLAttributes<HTMLUListElement>) => (
    <ul className={`flex flex-wrap gap-xs m-0 mt-md p-0 [&_li]:px-sm [&_li]:py-[4px] [&_li]:rounded-full [&_li]:border-2 [&_li]:border-black [&_li]:bg-cream [&_li]:text-[1rem] [&_li]:font-bold ${className}`} {...props}>{children}</ul>
);
