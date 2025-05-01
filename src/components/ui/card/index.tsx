import { cn } from '@/utils/cn';
import React from 'react';
import Link from '../link';

type BaseProps = {
  children: React.ReactNode;
  isClickable?: boolean;
  className?: string;
  onClick?: () => void;
};

type ClickableCardProps = BaseProps & {
  href: string;
};

type NonClickableCardProps = BaseProps & {
  href?: never;
};

type CardProps = ClickableCardProps | NonClickableCardProps;

const Card = ({ children, className, onClick, href, isClickable = false }: CardProps) => {
  const classes = cn('card', className);

  if (isClickable) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return <div className={classes}>{children}</div>;
};

export { Card };
