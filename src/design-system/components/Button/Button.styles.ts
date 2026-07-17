export enum ButtonVariation {
    PRIMARY = 'PRIMARY',
    SECONDARY = 'SECONDARY',
}

export enum ButtonSize {
    sm = 'sm',
    md = 'md',
    lg = 'lg',
}

export const buttonVariationClasses: Record<ButtonVariation, string> = {
    [ButtonVariation.PRIMARY]: 'text-white bg-primary hover:bg-hoverPrimary',
    [ButtonVariation.SECONDARY]:
        'text-black bg-tertiary hover:bg-hoverTertiary',
};

export const buttonSizeClasses: Record<ButtonSize, string> = {
    [ButtonSize.sm]: 'py-xxxs px-xs',
    [ButtonSize.md]: 'py-xxxs px-sm',
    [ButtonSize.lg]: 'py-xxs px-sm',
};

export const buttonBaseClasses = [
    'flex items-center justify-center relative overflow-hidden',
    'text-[1.3rem] font-white uppercase',
    'border-[3px] border-black rounded-[12px] shadow-[5px_5px_0_#1A1A1A]',
    'transition-all duration-200 cursor-pointer',
].join(' ');

export const getButtonClasses = (
    variation: ButtonVariation,
    size: ButtonSize
): string =>
    [
        buttonBaseClasses,
        buttonVariationClasses[variation],
        buttonSizeClasses[size],
    ].join(' ');
