import React from 'react';
import { cn } from '@/utils/cn';

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode;
};

const Section = ({ children, className = '', ...rest }: SectionProps) => {
  return (
    <section
      className={cn(
        'BlockImage-Text',
        'max-w-[1146px] mx-auto',
        'py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] xl:py-[120px] 2xl:py-[120px]',
        'px-8 xl:px-0 2xl:px-0',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export { Section };
