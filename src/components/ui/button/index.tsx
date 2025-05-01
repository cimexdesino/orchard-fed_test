import React from 'react';
import { AriaButtonOptions, useButton } from '@react-aria/button';
import { cn } from '@/utils/cn';
import { Spinner } from '../spinner/spinner';

type ButtonProps = AriaButtonOptions<'button'> & {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, isLoading, icon, ...props }, ref) => {
    const { buttonProps } = useButton(props, ref as React.RefObject<Element>);

    return (
      <button
        {...buttonProps}
        ref={ref}
        aria-busy={isLoading}
        className={cn(
          'inline-flex items-center justify-center whitespace-nowrap rounded-none text-sm font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
          className,
        )}
      >
        {isLoading ? (
          <Spinner size='sm' className='text-current' />
        ) : (
          <>
            {icon && <span className='mr-2'>{icon}</span>}
            {children}
          </>
        )}
      </button>
    );
  },
);

export { Button };
