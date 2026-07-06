import React from 'react';

export const Container = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`relative overflow-hidden p-6 mb-lg bg-white rounded-[20px] border-[3px] border-black shadow-[8px_8px_0_#1A1A1A] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[11px_11px_0_#2EA84F] before:content-[''] before:absolute before:top-0 before:left-0 before:w-[10px] before:h-full before:bg-primary before:border-r-[3px] before:border-black max-tablet:p-[18px] max-tablet:mb-md ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const StyleWrapper = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex items-start gap-md mb-md max-tablet:flex-col max-tablet:gap-4 ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const CompanyLogo = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex-shrink-0 w-20 h-20 rounded-[12px] bg-white border-[3px] border-black shadow-[4px_4px_0_#1A1A1A] flex items-center justify-center overflow-hidden transition-all duration-300 ease-out [&_img]:w-full [&_img]:h-full [&_img]:object-contain [&_img]:p-2 hover:-translate-x-[2px] hover:-translate-y-[2px] hover:rotate-[-2deg] hover:shadow-[6px_6px_0_#1A1A1A] max-tablet:w-[60px] max-tablet:h-[60px] max-tablet:self-start ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const JobInfo = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`flex-1 ${className}`} {...props}>
        {children}
    </div>
);

export const TitleContainer = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`flex items-center justify-between mb-2 gap-4 max-tablet:flex-col max-tablet:items-start max-tablet:gap-2 ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const Title = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
        className={`text-text m-0 text-[2.4rem] font-bold leading-[1.2] max-tablet:text-[2rem] ${className}`}
        {...props}
    >
        {children}
    </h3>
);

export const Subtitle = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-tertiary text-[1.4rem] font-semibold mb-4 flex items-center gap-2 before:content-['📅'] before:text-[1.2rem] ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const Paragraph = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-text mb-md text-[1.6rem] leading-[1.6] [&_ul]:my-4 [&_ul]:pl-0 [&_ul]:list-none [&_li]:mb-sm [&_li]:pl-0 [&_li]:relative [&_li]:text-[1.5rem] [&_li]:leading-[1.5] max-tablet:text-[1.5rem] max-tablet:[&_li]:text-[1.4rem] ${className}`}
        {...props}
    >
        {children}
    </div>
);

export const Technologies = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={`flex flex-wrap gap-2 mb-md ${className}`} {...props}>
        {children}
    </div>
);

export const TechTag = ({ className = '', children, ...props }: React.HTMLAttributes<HTMLSpanElement>) => (
    <span
        className={`bg-white text-black py-[5px] px-[10px] rounded-[8px] border-2 border-black shadow-[2px_2px_0_#1A1A1A] text-[1.1rem] font-bold normal-case tracking-[0.2px] transition-all duration-200 ease-out hover:bg-primary hover:text-white hover:-translate-x-[1px] hover:-translate-y-[1px] hover:shadow-[3px_3px_0_#1A1A1A] ${className}`}
        {...props}
    >
        {children}
    </span>
);

export const StyledLink = ({ className = '', children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
        className={`inline-flex items-center gap-1 text-textLight font-normal text-[1.2rem] underline decoration-transparent transition-all duration-200 ease-out flex-shrink-0 hover:text-primary hover:decoration-primary after:content-['↗'] after:text-[1rem] after:transition-transform after:duration-200 after:ease-out hover:after:translate-x-[2px] hover:after:-translate-y-[2px] max-tablet:text-[1.1rem] ${className}`}
        {...props}
    >
        {children}
    </a>
);
