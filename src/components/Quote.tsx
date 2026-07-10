import React from 'react';

interface QuoteProps {
  variant?: 'primary' | 'secondary' | 'name';
  children: React.ReactNode;
}

export const Quote = ({ 
  children, 
  variant = 'primary',
}: QuoteProps) => {
  // Base classes for all quote variants
  const baseClasses = "max-w-[75%] mb-lg text-[1.4rem] leading-[1.5] font-medium text-textLight relative";
  
  // Variant-specific classes
  const variantClasses = {
    primary: "before:content-['\"'] before:text-[4rem] before:text-primary before:opacity-30 before:absolute before:-top-5 before:-left-5 before:font-serif after:content-['\"'] after:text-[4rem] after:text-primary after:opacity-30 after:absolute after:-bottom-8 after:-right-5 after:font-serif tablet:max-w-[75%] tablet:text-[1.2rem] tablet:before:hidden tablet:after:hidden",
    secondary: "before:content-['\"'] before:text-[4rem] before:text-secondary before:opacity-30 before:absolute before:-top-5 before:-left-5 before:font-serif after:content-['\"'] after:text-[4rem] after:text-secondary after:opacity-30 after:absolute after:-bottom-8 after:-right-5 after:font-serif tablet:max-w-full tablet:text-[1.2rem] tablet:before:hidden tablet:after:hidden",
    name: "mb-0 text-[4rem] leading-[1.1] flex items-center gap-sm font-extrabold tracking-[-0.02em] tablet:text-[3rem] tablet:justify-center"
  };
  
  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};