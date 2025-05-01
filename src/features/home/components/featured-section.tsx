import { ProductCard } from '@/components/common/product-card/product-card';
import { Section } from '@/components/ui/section/section';
import { FeaturedItem } from '@/types';
import { featuredSectionData } from '@/utils/mocked-api';

type FeaturedSectionProps = {
  items: FeaturedItem[];
  title: string;
};

const FeaturedSection = ({ title, items }: FeaturedSectionProps) => {
  return (
    <Section className='featured-section h-[793px]'>
      <div className='Content h-[553px] flex flex-col justify-start items-center gap-[30px] p-0 flex-grow'>
        <div className='Headline w-[312px] h-[63px] flex flex-row justify-center items-center gap-[10px] pb-[30px] border-b border-white uppercase'>
          <span className='fs-title w-[312px] h-[33px] flex-grow-0 text-[30px] font-light leading-[1.1] tracking-[1.5px] text-left'>
            {featuredSectionData.title}
          </span>
        </div>
        {/* <Link href='#'>Hey</Link> */}
        {/* FeaturedCards Component */}
        <div className='Card-List h-[460px] self-stretch grow-0 flex flex-row justify-center items-center gap-[10px] p-0'>
          {items.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
        </div>
      </div>
    </Section>
  );
};

export { FeaturedSection };
