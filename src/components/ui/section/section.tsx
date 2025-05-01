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
        'self-stretch flex flex-col lg:flex-row justify-start items-start',
        'gap-y-[30px] lg:gap-x-[30px]',
        'py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] xl:py-[140px] 2xl:py-[160px]',
        'px-4 sm:px-8 md:px-12 lg:px-[60px] xl:px-[100px] 2xl:px-[147px]',
        className,
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export { Section };
