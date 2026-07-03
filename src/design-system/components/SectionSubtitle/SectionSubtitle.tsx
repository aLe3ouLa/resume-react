import React from 'react';

interface SectionSubtitleProps {
    children: React.ReactNode;
    /** Extra utility classes for per-section tweaks (margins, leading, italic…). */
    className?: string;
}

// Shared visual core for the supporting copy that sits under a SectionHeader:
// centered, muted, width-capped, and responsive (1.6rem on mobile → 1.8rem up).
const baseClasses =
    'text-center font-normal text-textLight max-w-[600px] mx-auto text-[1.6rem] tablet:text-[1.8rem]';

export const SectionSubtitle = ({
    children,
    className = '',
}: SectionSubtitleProps) => {
    return <p className={`${baseClasses} ${className}`.trim()}>{children}</p>;
};
