import { Card } from '@/components/ui/card';
import { FeaturedItem } from '@/types';
import { cn } from '@/utils/cn';
import React from 'react';

type ProductCardProps = {
  product: FeaturedItem;
  onClick?: () => void;
  className?: string;
};

const Text = ({ className, children }: { className: string; children: React.ReactNode }) => {
  return (
    <span
      className={cn(
        'self-stretch flex-grow-0 text-[21px] font-light leading-[1.43] text-center',
        className,
      )}
    >
      {children}
    </span>
  );
};

const ProductCard = ({ product, className, onClick }: ProductCardProps) => {
  return (
    <Card
      className={cn(
        'w-[375px] h-[460px] grow-0 flex flex-col justify-start items-center gap-[30px] p-0',
        className,
      )}
      onClick={onClick}
    >
      {/* @TODO: use PreviableImage here */}
      <div
        className='Tight-Top pc-image w-[375px] h-[300px] flex-grow-0'
        style={{
          backgroundImage: `url(${product.imageUrl})`,
          backgroundColor: '#FFF',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className='pc-body h-[130px] self-stretch flex flex-col justify-start items-stretch gap-[10px] px-[30px] flex-grow-0'>
        <Text className='pc-title h-[30px] font-bold'>{product.title}</Text>
        <Text className='pc-description h-[90px]'>{product.description}</Text>
      </div>
    </Card>
  );
};

export { ProductCard };
