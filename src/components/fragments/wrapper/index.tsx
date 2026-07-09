import React from 'react';

type WrapperProps = React.HTMLAttributes<HTMLDivElement>;

const Wrapper = ({ className = '', children, ...props }: WrapperProps) => (
    <div
        className={`mx-auto max-w-siteWidth px-xs tablet:px-sm desktop:px-md xlarge:px-lg ${className}`}
        {...props}
    >
        {children}
    </div>
);

export default Wrapper;
