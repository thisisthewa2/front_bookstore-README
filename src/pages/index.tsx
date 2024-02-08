import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import CustomSection from '@/components/container/customSection/customSection';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
import Carousel from '@/components/carousel/carousel';
import { carouselMockData } from './api/mock/carouselMock';
import { responsive } from '@/utils/checkResponsiveEnv';
import TodayBestSection from '@/components/container/todayBestSection/todayBestSection';
function Home() {
  return (
    <>
      <div
        className="flex-center mb-87 mt-20 w-[1080px] mobile:mb-20 mobile:mt-0 mobile:w-330
          mobile:flex-col mobile:gap-y-10 tablet:mb-80 tablet:w-[688px] tablet:gap-x-20
          pc:gap-x-30">
        <div
          className="bg-gray-1 mobile:h-174 mobile:w-330 tablet:h-304 tablet:w-[511px] pc:h-480
            pc:w-[803px]"
        />
        <div
          className="bg-gray-1 mobile:h-90 mobile:w-330 tablet:h-304 tablet:w-157 pc:h-[480px]
            pc:w-[247px]"
        />
      </div>
      <CustomSection isLoggedIn={true} isGenreSelected={true} />
      <div className="mt-80 mobile:mb-80 tablet:mb-120 pc:mb-140">
        <Carousel data={carouselMockData} responsive={responsive} />
      </div>

      <TodayBestSection />
      <BestSellerSection />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
