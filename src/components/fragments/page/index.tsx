import React from 'react';

type PageProps = React.HTMLAttributes<HTMLElement>;

const Page = ({ className = '', children, ...props }: PageProps) => (
    <main className={`mt-2.5 desktop:mt-5 ${className}`} {...props}>
        {children}
    </main>
);

export default Page;
