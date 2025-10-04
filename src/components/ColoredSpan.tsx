import React from 'react';

interface ColoredSpanProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'name';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  underline?: boolean;
  hover?: boolean;
}

const ColoredSpan = ({ 
  children, 
  variant = 'primary', 
  className = '',
  size = 'lg',
  underline = false,
  hover = true
}: ColoredSpanProps) => {
  // Base classes using CSS variables
  const baseClasses = "colored-span-base";
  
  // Size variants - using custom CSS classes instead of arbitrary values
  const sizeClasses = {
    sm: "colored-span-sm",
    md: "colored-span-md", 
    lg: "colored-span-lg",
    xl: "colored-span-xl"
  };
  
  // Variant classes using CSS variables
  const variantClasses = {
    primary: "colored-span-primary",
    secondary: "colored-span-secondary", 
    name: "colored-span-name"
  };
  
  // Additional effect classes
  const effectClasses = [
    underline ? "colored-span-underline" : "",
    hover ? (variant === 'name' ? "colored-span-name-hover" : "colored-span-hover") : ""
  ].filter(Boolean).join(" ");
  
  return (
    <span className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${effectClasses} ${className}`}>
      {children}
    </span>
  );
};

export default ColoredSpan;