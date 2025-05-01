import { cn } from '@/utils/cn';
import React from 'react';
import Link from '../link';

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

// Single point of entry for Card
const Card = ({ children, onClick, className }: CardProps) => {
  return (
    <Link className={cn('card', className)} onClick={onClick}>
      {children}
    </Link>
  );
};

export { Card };
