import { Card } from '@/components/ui/card';
import { FeaturedItem } from '@/types';
import { cn } from '@/utils/cn';
import React from 'react';
import { PreviewableImage } from '../images/previewable-image/previewable-image';
import Link from '@/components/ui/link';

type ProductCardProps = {
  product: FeaturedItem;
  onClick?: () => void;
  className?: string;
};

const Text = ({ className, children }: { className: string; children: React.ReactNode }) => {
  return (
    <p className={cn('text-[21px] font-light leading-[1.43] text-center', className)}>{children}</p>
  );
};

const ProductCard = ({ product, className, onClick }: ProductCardProps) => {
  return (
    <Card className={cn('w-full max-w-[375px]', className)}>
      <PreviewableImage
        src={product.image.src}
        alt={product.image.description}
        className='w-full h-[300px] object-cover'
        containerClassName='h-[300px]'
      />

      <Link onClick={onClick}>
        <div className='pc-body flex flex-col flex-grow gap-[10px] px-[30px] '>
          <Text className='pc-title font-bold '>{product.title}</Text>
          <Text className='pc-description line-clamp-5'>{product.description}</Text>
        </div>
      </Link>
    </Card>
  );
};

export { ProductCard };
