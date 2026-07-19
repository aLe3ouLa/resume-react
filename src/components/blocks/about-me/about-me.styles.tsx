import type { AnchorHTMLAttributes, HTMLAttributes } from 'react';

export const Section = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <section className={`py-xl bg-cream relative ${className}`} {...props}>{children}</section>
);

export const AboutIntro = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`max-w-[1160px] mx-auto mb-xl grid grid-cols-[0.8fr_1.2fr] items-end gap-xl border-b-[3px] border-black pb-lg max-tablet:grid-cols-1 max-tablet:gap-md ${className}`} {...props}>
        {children}
    </div>
);

export const AboutKicker = ({ className = '', children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`mb-sm text-[1.1rem] font-mono font-bold uppercase tracking-[1.4px] text-secondary ${className}`} {...props}>
        {children}
    </p>
);

export const AboutHeading = ({ className = '', children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={`text-[6.4rem] leading-[0.9] font-display font-extrabold uppercase tracking-[-0.04em] text-text [&>span]:!text-secondary [&>span]:text-[inherit] max-tablet:text-[4.6rem] ${className}`} {...props}>
        {children}
    </h2>
);

export const Statement = ({ className = '', children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p className={`max-w-[660px] justify-self-end text-[2.2rem] leading-[1.45] font-display font-medium tracking-[-0.015em] text-textLight max-tablet:justify-self-start max-tablet:text-[1.8rem] ${className}`} {...props}>
        {children}
    </p>
);

export const EvidenceBoard = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`about-evidence-board relative max-w-[1160px] mx-auto grid grid-cols-[0.9fr_1.25fr_0.85fr] grid-rows-[auto_1fr_auto] gap-md p-lg bg-white border-[3px] border-black rounded-[26px] shadow-[12px_12px_0_#1A1A1A] max-desktop:grid-cols-[0.9fr_1.1fr] max-tablet:grid-cols-1 max-tablet:p-md max-tablet:shadow-[7px_7px_0_#1A1A1A] ${className}`} {...props}>
        {children}
    </div>
);

export const FrameMeta = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`col-span-3 flex items-center justify-between pb-sm border-b-[3px] border-black font-mono text-[1.1rem] font-bold tracking-[1px] max-desktop:col-span-2 max-tablet:col-span-1 ${className}`} {...props}>{children}</div>
);

export const EvidenceTag = ({ className = '', children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span className={`inline-block mb-md px-sm py-xs rounded-full border-2 border-black bg-tertiary text-[1.05rem] font-bold uppercase tracking-[0.8px] ${className}`} {...props}>{children}</span>
);

export const ApproachNote = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <article className={`self-start p-lg bg-coral border-[3px] border-black rounded-[18px] rotate-[-1deg] shadow-[6px_6px_0_#1A1A1A] [&_h3]:mb-md [&_h3]:text-[2.2rem] [&_h3]:leading-tight [&_h3]:font-display [&_h3]:font-bold [&_p]:text-[1.45rem] [&_p]:leading-[1.7] max-tablet:rotate-0 ${className}`} {...props}>{children}</article>
);

export const FocusFrame = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <figure className={`relative row-span-2 m-0 p-sm bg-black border-[3px] border-black rounded-[18px] overflow-hidden [&>img]:block [&>img]:w-full [&>img]:h-[460px] [&>img]:object-cover [&>img]:rounded-[9px] max-desktop:[&>img]:h-[420px] max-tablet:row-span-1 max-tablet:[&>img]:h-[420px] ${className}`} {...props}>{children}</figure>
);

export const FrameCorners = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`about-frame-corners absolute inset-lg pointer-events-none ${className}`} {...props}>{children}</div>
);

export const FrameCaption = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <figcaption className={`absolute left-md right-md bottom-md flex items-center justify-between gap-sm px-sm py-xs bg-cream border-[3px] border-black rounded-[9px] text-[1.15rem] font-mono uppercase [&_strong]:text-[1.15rem] [&_strong]:font-bold max-tablet:flex-col max-tablet:items-start ${className}`} {...props}>{children}</figcaption>
);

export const PersonalNote = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <aside className={`self-end p-lg bg-accent border-[3px] border-black rounded-[18px] rotate-[1.5deg] shadow-[6px_6px_0_#E0399B] [&_p]:mb-md [&_p]:text-[1.45rem] [&_p]:leading-[1.7] [&>span:last-child]:font-mono [&>span:last-child]:text-[1rem] [&>span:last-child]:font-bold [&>span:last-child]:tracking-[0.7px] max-desktop:col-start-1 max-tablet:col-start-auto max-tablet:rotate-0 ${className}`} {...props}>{children}</aside>
);

export const CompanyLink = ({ className = '', children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a className={`inline-block px-sm py-xs text-text text-[1.2rem] font-bold no-underline border-2 border-black rounded-full bg-white transition-[transform,background-color] duration-200 hover:-translate-y-[2px] hover:bg-tertiary focus:outline focus:outline-[3px] focus:outline-secondary focus:outline-offset-2 ${className}`} {...props}>{children}</a>
);
