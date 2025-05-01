import { FeaturedSection } from './components/featured-section';
import { featuredSectionData, mainSectionData } from '@/utils/mocked-api';
import { MainSection } from './components/main-section';

const Home = () => {
  return (
    <main className=''>
      <MainSection mainSectionData={mainSectionData} />
      <FeaturedSection title={featuredSectionData.title} items={featuredSectionData.items} />
    </main>
  );
};

export { Home };
