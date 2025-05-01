import { FeaturedSection } from './components/featured-section';
import { mainSectionData } from '@/utils/mocked-api';
import { MainSection } from './components/main-section';

const Home = () => {
  return (
    <div className='max-w-[1440px] flex flex-col justify-start items-stretch p-0 mx-auto'>
      <MainSection mainSectionData={mainSectionData} />
      {/* <FeaturedSection title={featuredSectionData.title} items={featuredSectionData.items} /> */}
    </div>
  );
};

export { Home };
