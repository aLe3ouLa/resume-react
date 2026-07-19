const Logo = () => (
    <div className="group flex items-center gap-sm" aria-label="Alexandra Barka, home">
        <span
            aria-hidden="true"
            className="relative block w-[52px] h-[48px] shrink-0"
        >
            <span className="absolute inset-[5px_0_0_5px] rounded-[11px] border-[3px] border-black bg-accent" />
            <span className="absolute inset-[0_5px_5px_0] flex items-center justify-center rounded-[11px] border-[3px] border-black bg-secondary shadow-[3px_3px_0_#1A1A1A] transition-transform duration-200 ease-out group-hover:-translate-x-[2px] group-hover:-translate-y-[2px] group-hover:rotate-[-2deg]">
                <span className="!text-white font-display text-[1.8rem] font-extrabold leading-none tracking-[-0.12em] pr-[2px]">
                    AB
                </span>
            </span>
            <span className="absolute -right-[1px] -top-[3px] size-[13px] rounded-full border-2 border-black bg-tertiary transition-transform duration-200 ease-out group-hover:scale-110" />
        </span>

        <span className="hidden tablet:flex flex-col items-start font-display font-extrabold uppercase leading-[0.88] tracking-[-0.025em]">
            <span className="text-[1.45rem]">Alexandra</span>
            <span className="text-[1.45rem] !text-secondary">Barka</span>
        </span>
    </div>
);

export default Logo;
