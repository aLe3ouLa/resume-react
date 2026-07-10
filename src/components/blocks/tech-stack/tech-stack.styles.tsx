import React from 'react';

// neoCard mixin (inlined): white bg, radius 20px, hardOutline(3,8), transition transform+box-shadow.
const neoCard =
    'bg-white rounded-[20px] border-[3px] border-black shadow-[8px_8px_0_#1A1A1A] transition-[transform,box-shadow] duration-300 ease-out';

export const SectionContainer = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={`relative overflow-hidden py-xxl bg-[linear-gradient(135deg,#f8f9fa_0%,#ffffff_100%)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[linear-gradient(90deg,#2EA84F_0%,#E0399B_50%,#FFCE2E_100%)] ${className}`.trim()}
        {...props}
    >
        {children}
    </section>
);

export const HeaderSection = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`text-center mb-xxl animate-fade-in-up ${className}`.trim()}
        {...props}
    >
        {children}
    </div>
);

export const ContentGrid = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`grid grid-cols-2 gap-xxl max-w-[1200px] mx-auto px-xl max-tablet:grid-cols-1 max-tablet:gap-xl max-tablet:px-lg ${className}`.trim()}
        {...props}
    >
        {children}
    </div>
);

// Shared neo-brutalist card used for both the intro copy and the skills grid.
// `$hoverAccent` picks the hover shadow colour; `$delay` staggers the entrance.
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    $hoverAccent?: 'primary' | 'secondary';
    $delay?: string;
}

export const Card = ({
    className = '',
    children,
    $hoverAccent = 'primary',
    $delay = '0.2s',
    style,
    ...props
}: CardProps) => {
    const hoverShadow =
        $hoverAccent === 'secondary'
            ? 'hover:shadow-[11px_11px_0_#E0399B]'
            : 'hover:shadow-[11px_11px_0_#2EA84F]';

    return (
        <div
            className={`${neoCard} p-xl hover:-translate-x-[3px] hover:-translate-y-[3px] ${hoverShadow} ${className}`.trim()}
            style={{
                animation: `fade-in-up 0.8s ease-out ${$delay} both`,
                ...style,
            }}
            {...props}
        >
            {children}
        </div>
    );
};

export const Paragraph = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
        className={`text-text mb-lg text-[2rem] leading-[1.6] [&>span]:text-[2rem] [&>span]:block [&>span]:mb-md [&>a]:text-[2rem] [&>a]:text-primary [&>a]:no-underline [&>a]:font-semibold [&>a]:border-b-2 [&>a]:border-transparent [&>a]:transition-all [&>a]:duration-300 [&>a]:ease-out [&>a]:mx-xs [&>a:hover]:border-primary [&>a:hover]:text-hoverPrimary ${className}`.trim()}
        {...props}
    >
        {children}
    </p>
);

export const StyledLink = ({
    className = '',
    children,
    ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
        className={`inline-flex items-center gap-sm text-white bg-[linear-gradient(135deg,#2EA84F_0%,#248F42_100%)] py-md px-lg rounded-[50px] no-underline font-semibold text-[1.4rem] transition-all duration-300 ease-out shadow-[0_4px_15px_rgba(130,158,134,0.3)] hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(130,158,134,0.4)] after:content-['→'] after:text-[1.6rem] after:transition-transform after:duration-300 after:ease-out hover:after:translate-x-[4px] ${className}`.trim()}
        {...props}
    >
        {children}
    </a>
);

export const SkillsTitle = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
        className={`text-[2.4rem] font-bold text-text mb-lg text-center ${className}`.trim()}
        {...props}
    >
        {children}
    </h3>
);

export const TechSkills = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-md ${className}`.trim()}
        {...props}
    >
        {children}
    </div>
);

export const SkillItem = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`bg-white border-[3px] border-black shadow-[4px_4px_0_#1A1A1A] rounded-[12px] p-md text-center text-[1.8rem] font-bold text-text transition-[transform,box-shadow,background] duration-200 cursor-pointer relative overflow-hidden hover:bg-tertiary hover:text-black hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_#1A1A1A] max-tablet:text-[1.6rem] max-tablet:p-sm ${className}`.trim()}
        {...props}
    >
        {children}
    </div>
);
