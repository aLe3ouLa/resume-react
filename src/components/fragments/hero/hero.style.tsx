import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import type { HTMLAttributes } from 'react';

export const Wave = ({ className = '', children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`animate-wave inline-block text-[2rem] ml-xxs cursor-pointer hover:animate-wiggle max-tablet:text-[1.6rem] ${className}`}
        {...props}
    >
        {children}
    </span>
);

// Small intro line that sits above the big headline for a bold size contrast.
export const Eyebrow = ({ className = '', children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`flex items-center gap-xs text-[1.3rem] uppercase font-semibold text-textLight font-body tracking-[0.5px] mb-sm max-tablet:text-[1.5rem] max-tablet:justify-center ${className}`}
        {...props}
    >
        {children}
    </span>
);

export const FloatingElement = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`absolute w-[70px] h-[70px] pointer-events-none z-[1] drop-shadow-[6px_6px_0_#1A1A1A] [&_svg]:block [&_svg]:w-full [&_svg]:h-full [&:nth-of-type(1)]:top-[6%] [&:nth-of-type(1)]:left-[-5%] [&:nth-of-type(1)]:animate-[float_5s_ease-in-out_0s_infinite] [&:nth-of-type(2)]:top-[14%] [&:nth-of-type(2)]:right-[4%] [&:nth-of-type(2)]:animate-[float_5s_ease-in-out_1.2s_infinite] [&:nth-of-type(3)]:bottom-[12%] [&:nth-of-type(3)]:left-[4%] [&:nth-of-type(3)]:animate-[float_5s_ease-in-out_2.1s_infinite] max-tablet:w-[50px] max-tablet:h-[50px] max-tablet:drop-shadow-[4px_4px_0_#1A1A1A] max-tablet:[&:nth-of-type(1)]:top-[3%] max-tablet:[&:nth-of-type(1)]:left-[3%] max-tablet:[&:nth-of-type(2)]:top-[6%] max-tablet:[&:nth-of-type(2)]:right-[4%] max-tablet:[&:nth-of-type(3)]:bottom-[6%] max-tablet:[&:nth-of-type(3)]:left-[5%] ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const Sparkle = ({ className = '', children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`absolute w-[28px] h-[28px] pointer-events-none z-[1] drop-shadow-[4px_4px_0_#1A1A1A] [&_svg]:block [&_svg]:w-full [&_svg]:h-full [&:nth-of-type(1)]:top-[4%] [&:nth-of-type(1)]:right-[12%] [&:nth-of-type(1)]:animate-[float_6s_ease-in-out_0.4s_infinite] [&:nth-of-type(2)]:top-[62%] [&:nth-of-type(2)]:left-[42%] [&:nth-of-type(2)]:animate-[float_6s_ease-in-out_1.1s_infinite] [&:nth-of-type(3)]:bottom-[24%] [&:nth-of-type(3)]:right-[6%] [&:nth-of-type(3)]:animate-[float_6s_ease-in-out_1.9s_infinite] [&:nth-of-type(4)]:bottom-[6%] [&:nth-of-type(4)]:right-[32%] [&:nth-of-type(4)]:animate-[float_6s_ease-in-out_2.6s_infinite] max-tablet:w-[26px] max-tablet:h-[26px] max-tablet:drop-shadow-[3px_3px_0_#1A1A1A] max-tablet:[&:nth-of-type(1)]:top-[7%] max-tablet:[&:nth-of-type(1)]:right-[8%] max-tablet:[&:nth-of-type(2)]:top-[42%] max-tablet:[&:nth-of-type(2)]:left-[2%] max-tablet:[&:nth-of-type(3)]:bottom-[28%] max-tablet:[&:nth-of-type(3)]:right-[4%] max-tablet:[&:nth-of-type(4)]:bottom-[4%] max-tablet:[&:nth-of-type(4)]:right-[30%] ${className}`}
        {...props}
    >
        {children}
    </span>
);

export const Title = ({ className = '', children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
    <h1
        className={`flex items-start flex-col font-bold font-display leading-[1.1] tracking-[-0.01em] mb-0 ml-0 text-text cursor-none gap-md relative z-[2] max-tablet:items-center max-tablet:text-center ${className}`}
        {...props}
    >
        {children}
    </h1>
);

export const ButtonContainer = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex gap-md flex-wrap mt-sm max-tablet:justify-center max-tablet:gap-sm ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const PhotographyCTA = ({ className = '', children, ...props }: LinkProps) => (
    <Link
        className={`inline-flex items-center justify-center gap-xs py-sm px-lg bg-secondary text-white no-underline rounded-full text-[1.2rem] font-semibold font-display uppercase tracking-[0.5px] transition-all duration-200 ease-in-out relative overflow-hidden shadow-[0_4px_0_#C42585,0_6px_12px_rgba(255,107,107,0.25)] border-[3px] border-secondary before:content-[''] before:absolute before:inset-0 before:rounded-full before:opacity-10 before:[background-image:var(--grain-texture)] hover:translate-y-[2px] hover:bg-hoverSecondary hover:border-hoverSecondary hover:shadow-[0_2px_0_#C42585,0_4px_8px_rgba(255,107,107,0.3)] hover:text-white hover:no-underline active:translate-y-[4px] active:shadow-[0_0_0_#C42585,0_2px_4px_rgba(255,107,107,0.2)] max-tablet:text-[1.1rem] max-tablet:py-xs max-tablet:px-md ${className}`}
        {...props}
    >
        {children}
    </Link>
);

export const Quotes = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`relative overflow-visible py-xl flex items-center justify-between min-h-[600px] mt-sm mb-xl max-tablet:py-lg max-tablet:flex-col max-tablet:text-center max-tablet:min-h-0 ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const NameQuote = ({ className = '', children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`mb-lg text-[6.4rem] leading-none flex flex-wrap items-center gap-sm font-extrabold font-display tracking-[-0.02em] uppercase max-tablet:text-[3.4rem] max-tablet:justify-center ${className}`}
        {...props}
    >
        {children}
    </span>
);

export const Text = ({ className = '', children, ...props }: HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`inline-block [font-size:inherit] leading-none font-extrabold font-display tracking-[-0.02em] text-white bg-secondary border-[3px] border-black rounded-[14px] px-sm py-sm shadow-[5px_5px_0_#1A1A1A] rotate-[-2deg] transition-[transform,box-shadow] duration-300 ease-in-out hover:rotate-[-2deg] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_#1A1A1A] ${className}`}
        {...props}
    >
        {children}
    </span>
);
