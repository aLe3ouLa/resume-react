import type { HTMLAttributes } from 'react';

export const SectionContainer = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <section className={`relative py-xxl bg-cream ${className}`} {...props}>{children}</section>
);

export const BenchHeader = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`max-w-[1160px] mx-auto mb-xl grid grid-cols-[0.9fr_1.1fr] items-end gap-xl border-b-[3px] border-black pb-lg max-tablet:grid-cols-1 max-tablet:gap-md [&>div>span]:block [&>div>span]:mb-sm [&>div>span]:text-[1.1rem] [&>div>span]:font-mono [&>div>span]:font-bold [&>div>span]:uppercase [&>div>span]:tracking-[1.4px] [&>div>span]:text-primary [&_h2]:text-[6.4rem] [&_h2]:leading-[0.9] [&_h2]:font-display [&_h2]:font-extrabold [&_h2]:uppercase [&_h2]:tracking-[-0.04em] [&_h2>span]:!text-secondary [&_h2>span]:text-[inherit] max-tablet:[&_h2]:text-[4.6rem] ${className}`} {...props}>{children}</div>
);

export const BenchIntro = ({ className = '', children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`max-w-[620px] justify-self-end text-[2rem] leading-[1.5] font-display font-medium text-textLight max-tablet:justify-self-start max-tablet:text-[1.7rem] ${className}`} {...props}>{children}</p>
);

export const Pegboard = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`tech-pegboard max-w-[1160px] mx-auto p-lg border-[3px] border-black rounded-[24px] bg-tertiary shadow-[12px_12px_0_#1A1A1A] max-tablet:p-md max-tablet:shadow-[7px_7px_0_#1A1A1A] ${className}`} {...props}>{children}</div>
);

export const Tools = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`grid grid-cols-5 gap-md py-xl max-desktop:grid-cols-3 max-tablet:grid-cols-1 ${className}`} {...props}>{children}</div>
);

export const Tool = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <article className={`tech-tool relative flex flex-col gap-md min-h-[280px] p-md bg-white border-[3px] border-black rounded-[16px] shadow-[5px_5px_0_#1A1A1A] transition-transform duration-200 ease-out hover:-translate-y-[3px] [&>div:last-child>span]:font-mono [&>div:last-child>span]:text-[1rem] [&>div:last-child>span]:font-bold [&_h3]:mt-xs [&_h3]:mb-md [&_h3]:text-[2.2rem] [&_h3]:font-display [&_h3]:font-extrabold [&_p]:text-[1.3rem] [&_p]:leading-[1.65] max-tablet:min-h-0 max-tablet:flex-row ${className}`} {...props}>{children}</article>
);

export const ToolIcon = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`tech-tool-icon flex items-center justify-center size-[62px] shrink-0 border-[3px] border-black rounded-[14px] text-[2.6rem] font-bold shadow-[3px_3px_0_#1A1A1A] ${className}`} {...props}>{children}</div>
);

export const Materials = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`grid grid-cols-[0.45fr_1.55fr] gap-lg items-center p-md bg-white border-[3px] border-black rounded-[16px] shadow-[5px_5px_0_#E0399B] [&>div>span]:text-[1.3rem] [&>div>span]:font-display [&>div>span]:font-extrabold [&>div>span]:uppercase [&>div>p]:mt-xs [&>div>p]:text-[1.15rem] [&>div>p]:leading-relaxed [&>ul]:flex [&>ul]:flex-wrap [&>ul]:gap-xs [&>ul]:m-0 [&>ul]:p-0 [&_li]:px-sm [&_li]:py-xs [&_li]:border-2 [&_li]:border-black [&_li]:rounded-full [&_li]:bg-cream [&_li]:text-[1.05rem] [&_li]:font-bold max-tablet:grid-cols-1 ${className}`} {...props}>{children}</div>
);
