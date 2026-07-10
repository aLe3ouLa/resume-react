import React from 'react';

export const SectionContainer = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLElement>) => (
    <section
        className={`relative overflow-hidden py-xl bg-[linear-gradient(135deg,#f8f9fa_0%,#ffffff_100%)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-[linear-gradient(90deg,#2EA84F_0%,#E0399B_50%,#FFCE2E_100%)] ${className}`.trim()}
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
        className={`text-center mb-xl animate-fade-in-up ${className}`.trim()}
        {...props}
    >
        {children}
    </div>
);

// Neo-brutalist frame that wraps the Spotify embed, matching the site's card style.
export const EmbedCard = ({
    className = '',
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
    <div
        className={`max-w-[700px] mx-auto max-tablet:mx-lg bg-white rounded-[20px] border-[3px] border-black shadow-[8px_8px_0_#1A1A1A] p-md transition-[transform,box-shadow] duration-300 ease-out hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[11px_11px_0_#2EA84F] ${className}`.trim()}
        style={{ animation: 'fade-in-up 0.8s ease-out 0.2s both' }}
        {...props}
    >
        {children}
    </div>
);
