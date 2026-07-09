import React from 'react';

export const Section = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={`py-xl bg-cream relative overflow-hidden ${className}`}
        {...props}
    >
        {children}
    </section>
);

export const TimelineContainer = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`relative max-w-[1000px] mx-auto py-lg grid grid-cols-1 gap-lg items-stretch tablet:grid-cols-2 tablet:gap-xl desktop:grid-cols-2 desktop:gap-xl ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const TimelineContent = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`p-lg bg-white border-[3px] border-black shadow-[8px_8px_0_#1A1A1A] rounded-[24px] transition-[transform,box-shadow] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] relative overflow-hidden text-center flex-1 flex flex-col justify-center font-body hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[11px_11px_0_#E0399B] ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const TimelineIcon = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`w-[70px] h-[70px] bg-secondary border-[3px] border-black rounded-full flex items-center justify-center text-[2.2rem] mx-auto mb-md transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[4px_4px_0_#1A1A1A] hover:scale-110 hover:rotate-[5deg] hover:bg-primary ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const TimelineItem = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`relative flex flex-col h-full animate-[slide-in-left_0.6s_ease-out_both] [&:nth-child(1)]:[animation-delay:0.1s] [&:nth-child(2)]:[animation-delay:0.2s] [&:nth-child(3)]:[animation-delay:0.3s] [&:nth-child(4)]:[animation-delay:0.4s] ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const AnimatedParagraph = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-text text-[1.4rem] leading-[1.6] mb-md transition-all duration-300 ease-[ease] tablet:text-[1.5rem] desktop:text-[1.6rem] last:mb-0 ${className}`}
        {...props}
    >
        {children}
    </p>
);

export const GradientText = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`text-primary font-semibold font-display ${className}`}
        {...props}
    >
        {children}
    </span>
);

export const CompanyLink = ({
    className = '',
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
        className={`text-secondary font-bold no-underline relative inline-block border-2 border-transparent px-3 py-1 rounded-[15px] transition-all duration-[400ms] ease-[cubic-bezier(0.175,0.885,0.32,1.275)] before:content-[''] before:absolute before:inset-0 before:bg-secondary before:rounded-[15px] before:opacity-0 before:transition-opacity before:duration-300 before:-z-10 after:content-['✨'] after:absolute after:right-[-20px] after:top-1/2 after:-translate-y-1/2 after:opacity-0 after:transition-all after:duration-300 after:text-[1rem] hover:text-white hover:-translate-y-[3px] hover:scale-105 hover:shadow-[0_8px_20px_rgba(212,165,165,0.4)] hover:animate-[bounce-soft_0.6s_ease-in-out] hover:before:opacity-100 hover:after:opacity-100 hover:after:right-[-25px] hover:after:animate-[sparkle_1s_ease-in-out_infinite] focus:outline focus:outline-[3px] focus:outline-secondary focus:outline-offset-[3px] ${className}`}
        {...props}
    >
        {children}
    </a>
);

export const SkillContainer = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`flex flex-wrap gap-sm mt-md ${className}`} {...props}>
        {children}
    </div>
);

export const SkillTag = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`bg-secondary text-white py-xs px-md rounded-full text-[1.2rem] font-semibold font-display transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-default animate-[fade-in-up_0.6s_ease-out_both] relative overflow-hidden border-[3px] border-black shadow-[3px_3px_0_#1A1A1A] [&:nth-child(1)]:[animation-delay:0.1s] [&:nth-child(1)]:bg-secondary [&:nth-child(2)]:[animation-delay:0.2s] [&:nth-child(2)]:bg-primary [&:nth-child(3)]:[animation-delay:0.3s] [&:nth-child(3)]:bg-tertiary [&:nth-child(3)]:text-black [&:nth-child(4)]:[animation-delay:0.4s] [&:nth-child(4)]:bg-accent [&:nth-child(4)]:text-black [&:nth-child(5)]:[animation-delay:0.5s] [&:nth-child(5)]:bg-coral hover:-translate-x-[2px] hover:-translate-y-[2px] hover:rotate-[-2deg] hover:shadow-[5px_5px_0_#1A1A1A] ${className}`}
        {...props}
    >
        {children}
    </span>
);
