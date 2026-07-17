export const linkBaseClasses = [
    'inline-flex items-center justify-center gap-xs relative overflow-hidden',
    'px-sm py-sm uppercase',
    'text-[1.3rem] font-white uppercase',
    'border-[3px] border-black rounded-[12px] shadow-[5px_5px_0_#1A1A1A]',
    'transition-all duration-200 cursor-pointer',
    'tablet:text-[1rem] tablet:px-sm tablet:py-xs',
].join(' ');

export const linkIconClasses = 'text-[1.4rem] tablet:text-[1.2rem]';

export const getLinkClasses = (className?: string): string =>
    [linkBaseClasses, className].filter(Boolean).join(' ');
