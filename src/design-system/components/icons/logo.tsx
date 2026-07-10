import React from 'react';

const Logo = () => {
    return (
        <div className="group flex items-center gap-2.5 cursor-pointer transition-transform duration-200 ease-in hover:-translate-x-px hover:-translate-y-px active:translate-x-px active:translate-y-px">
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary border-[3px] border-black shadow-[3px_3px_0_#1A1A1A] transition-[transform,box-shadow] duration-200 ease-in group-hover:rotate-[-4deg] group-hover:shadow-[5px_5px_0_#1A1A1A] after:content-['A'] after:text-white after:font-extrabold after:text-[22px] after:leading-none after:font-display" />

            <span className="text-text font-extrabold text-[1.8rem] tracking-[-0.02em] font-display hidden tablet:inline">
                alexandra
            </span>
        </div>
    );
};

export default Logo;
