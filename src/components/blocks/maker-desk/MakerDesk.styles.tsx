import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

export const Section = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <section className={`py-xxl bg-cream ${className}`} {...props}>{children}</section>
);

export const DeskHeader = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`max-w-[1160px] mx-auto mb-xl grid grid-cols-[1.1fr_0.9fr] items-end gap-xl border-b-[3px] border-black pb-lg max-tablet:grid-cols-1 max-tablet:gap-md [&>div>span]:block [&>div>span]:mb-sm [&>div>span]:text-[1.1rem] [&>div>span]:font-mono [&>div>span]:font-bold [&>div>span]:uppercase [&>div>span]:tracking-[1.4px] [&>div>span]:text-primary [&_h2]:text-[6rem] [&_h2]:leading-[0.92] [&_h2]:font-display [&_h2]:font-extrabold [&_h2]:uppercase [&_h2]:tracking-[-0.04em] [&_h2>span]:!text-secondary [&_h2>span]:text-[inherit] [&>p]:max-w-[520px] [&>p]:justify-self-end [&>p]:text-[2rem] [&>p]:leading-[1.5] [&>p]:font-display [&>p]:font-medium [&>p]:text-textLight max-tablet:[&_h2]:text-[4.2rem] max-tablet:[&>p]:justify-self-start max-tablet:[&>p]:text-[1.7rem] ${className}`} {...props}>{children}</div>
);

export const DeskShell = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`relative max-w-[1160px] mx-auto overflow-hidden rounded-[24px] border-[3px] border-black bg-accent shadow-[12px_12px_0_#1A1A1A] max-tablet:shadow-[7px_7px_0_#1A1A1A] ${className}`} {...props}>{children}</div>
);

export const DeskCanvas = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className = '', ...props }, ref) => (
    <div ref={ref} className={`w-full min-h-[380px] [&>canvas]:block ${className}`} {...props} />
));

DeskCanvas.displayName = 'DeskCanvas';

export const SelectionPanel = ({ className = '', children, ...props }: HTMLAttributes<HTMLElement>) => (
    <aside className={`absolute left-md bottom-md max-w-[330px] p-md rounded-[14px] border-[3px] border-black bg-white shadow-[5px_5px_0_#E0399B] [&>span]:text-[1rem] [&>span]:font-mono [&>span]:font-bold [&>span]:uppercase [&>span]:tracking-[0.8px] [&_h3]:mt-xs [&_h3]:mb-xs [&_h3]:text-[2rem] [&_h3]:font-display [&_h3]:font-extrabold [&_p]:text-[1.2rem] [&_p]:leading-[1.55] [&_a]:inline-block [&_a]:mt-sm [&_a]:text-[1.1rem] [&_a]:font-bold [&_a]:text-primary [&_a]:no-underline max-tablet:relative max-tablet:left-auto max-tablet:bottom-auto max-tablet:m-md max-tablet:max-w-none ${className}`} {...props}>{children}</aside>
);

export const ObjectMenu = ({ className = '', children, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={`max-w-[1160px] mx-auto mt-lg grid grid-cols-5 gap-sm max-tablet:grid-cols-2 [&_button]:flex [&_button]:items-center [&_button]:gap-xs [&_button]:p-sm [&_button]:rounded-[10px] [&_button]:border-[3px] [&_button]:border-black [&_button]:bg-white [&_button]:text-[1.1rem] [&_button]:font-bold [&_button]:shadow-[3px_3px_0_#1A1A1A] [&_button]:transition-transform [&_button:hover]:-translate-y-[2px] [&_button[aria-pressed=true]]:bg-tertiary [&_button>span]:font-mono [&_button>span]:text-[0.9rem] ${className}`} {...props}>{children}</div>
);
