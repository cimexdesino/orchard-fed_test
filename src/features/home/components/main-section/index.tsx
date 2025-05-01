import { Section } from '@/components/ui/section/section';
import { MainSectionData } from '@/types';
import { ImagesList } from './images-list';

type MainSectionProps = {
  mainSectionData: MainSectionData;
};

const MainSection = ({ mainSectionData }: MainSectionProps) => {
  return (
    <Section className='mx-auto' aria-labelledby='cooking-section-heading'>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-y-[30px] lg:gap-x-[30px] items-stretch'>
        <ImagesList images={mainSectionData.images} />

        <div className='content-section col-span-12 lg:col-span-4 flex flex-col justify-between'>
          <div className='flex items-center gap-[10px] pb-[30px] border-b border-white'>
            <h2
              id='cooking-section-heading'
              className='text-left text-[30px] font-light tracking-[1.5px] leading-[33px] uppercase'
            >
              {mainSectionData.title}
            </h2>
          </div>

          <div className='content_body pt-[30px] flex flex-col justify-between grow text-left'>
            <div className='flex flex-col gap-[30px]'>
              <p className='text-[21px] font-light leading-[30px] line-clamp-[12]'>
                {mainSectionData.body}
              </p>

              <div className='w-full flex flex-col gap-[10px]'>
                <h3 className='text-[#cf1430] text-[15px] font-bold leading-[1.4] uppercase'>
                  {mainSectionData.callout.title}
                </h3>
                <p className='text-[21px] font-bold leading-[30px] line-clamp-4'>
                  {mainSectionData.callout.body}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export { MainSection };
