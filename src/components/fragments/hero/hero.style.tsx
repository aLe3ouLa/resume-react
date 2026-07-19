import type { HTMLAttributes, ImgHTMLAttributes } from 'react';

export const HeroLayout = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <section
        className={`grid grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] items-center gap-xl min-h-[620px] py-xl mb-xl max-tablet:grid-cols-1 max-tablet:min-h-0 max-tablet:gap-xl max-tablet:py-lg ${className}`}
        {...props}
    >
        {children}
    </section>
);

export const HeroContent = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`relative z-[2] max-w-[780px] max-tablet:text-center ${className}`} {...props}>
        {children}
    </div>
);

export const Eyebrow = ({ className = '', children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`flex items-center gap-sm mb-md text-[1.2rem] font-bold font-body uppercase tracking-[1.2px] text-textLight max-tablet:justify-center [&>span]:block [&>span]:size-[12px] [&>span]:rounded-full [&>span]:bg-primary [&>span]:border-2 [&>span]:border-black ${className}`}
        {...props}
    >
        {children}
    </p>
);

export const HeroTitle = ({ className = '', children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
        className={`flex flex-col items-start text-[7.4rem] leading-[0.95] font-extrabold font-display uppercase tracking-[-0.035em] text-text mb-lg max-desktop:text-[6.2rem] max-tablet:items-center max-tablet:text-[4.2rem] ${className}`}
        {...props}
    >
        {children}
    </h1>
);

export const TitleAccent = ({ className = '', children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`inline-block mt-md px-lg py-sm bg-secondary !text-white text-[0.68em] leading-[1.08] text-center border-[3px] border-black rounded-[14px] shadow-[6px_6px_0_#1A1A1A] rotate-[-1deg] max-tablet:max-w-[340px] max-tablet:text-[0.72em] ${className}`}
        {...props}
    >
        {children}
    </span>
);

export const Summary = ({ className = '', children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`max-w-[650px] mb-lg text-[1.7rem] leading-[1.65] font-medium text-textLight max-tablet:mx-auto max-tablet:text-[1.5rem] ${className}`}
        {...props}
    >
        {children}
    </p>
);

export const ButtonContainer = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`flex gap-md max-tablet:justify-center ${className}`} {...props}>
        {children}
    </div>
);

export const PortraitStage = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`hero-portrait-stage relative flex justify-center p-lg max-tablet:mx-auto max-tablet:w-full max-tablet:max-w-[360px] ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const PortraitCard = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`hero-portrait-card relative z-[2] w-full max-w-[380px] border-[3px] border-black rounded-[24px] bg-tertiary p-sm shadow-[14px_14px_0_#1A1A1A] transition-transform duration-300 ease-out ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const Portrait = ({ className = '', ...props }: ImgHTMLAttributes<HTMLImageElement>) => (
    <img
        className={`block w-full aspect-[4/5] object-cover rounded-[14px] border-[3px] border-black ${className}`}
        {...props}
    />
);

export const PortraitLabel = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`absolute -left-[24px] bottom-[28px] flex items-center gap-xs bg-white border-[3px] border-black rounded-[10px] px-sm py-xs shadow-[5px_5px_0_#E0399B] text-[1.2rem] font-bold uppercase tracking-[0.5px] max-tablet:left-[-10px] ${className}`}
        {...props}
    >
        {children}
    </div>
);
