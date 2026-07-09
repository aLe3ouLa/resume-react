import React from 'react';

export const SectionContainer = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={`py-[60px] bg-[rgba(130,158,134,0.02)] max-tablet:py-[40px] ${className}`}
        {...props}
    >
        {children}
    </section>
);

export const LinkedInButton = ({
    className = '',
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
        className={`flex items-center justify-center gap-2 bg-[#0077b5] text-white font-bold text-[1.2rem] uppercase tracking-[0.3px] no-underline py-3 px-6 rounded-xl border-[3px] border-black shadow-[5px_5px_0_#1A1A1A] transition-[transform,box-shadow,background] duration-200 ease-[ease] mt-[30px] mx-auto w-fit hover:bg-[#005885] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[7px_7px_0_#1A1A1A] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#1A1A1A] max-tablet:text-[1.1rem] max-tablet:py-[10px] max-tablet:px-[20px] max-tablet:mt-[25px] ${className}`}
        {...props}
    >
        {children}
    </a>
);
