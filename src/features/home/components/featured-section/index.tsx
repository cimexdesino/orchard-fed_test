import { ProductCard } from '@/components/common/product-card/product-card';
import { Section } from '@/components/ui/section/section';
import { FeaturedItem } from '@/types';

type FeaturedSectionProps = {
  items: FeaturedItem[];
  title: string;
};

const FeaturedSection = ({ title, items }: FeaturedSectionProps) => {
  return (
    <Section className='featured-section' aria-labelledby='taste-the-colours-heading'>
      <div className='content-section flex flex-col items-center gap-[30px] w-full'>
        <div className='Headline flex flex-row justify-center items-center gap-[10px] pb-[30px] border-b border-white uppercase'>
          <h2
            id='taste-the-colours-heading'
            className='fs-title text-[30px] font-light leading-[1.1] tracking-[1.5px] text-center'
          >
            {title}
          </h2>
        </div>
        {/* 3 card layout */}
        <div className='Card-List flex flex-wrap justify-center gap-[10px] w-full'>
          {items.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export { FeaturedSection };
