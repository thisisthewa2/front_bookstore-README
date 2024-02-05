import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import CustomSection from '@/components/container/customSection/customSection';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
import Carousel from '@/components/carousel/carousel';
import { carouselMockData } from './api/mock/carouselMock';
import { responsive } from '@/utils/checkResponsiveEnv';
import TodayBestCorner from '@/components/todayBestCorner/todayBestCorner';
function Home() {
  return (
    <>
      <div
        className="mobile:flex-col w-[1080px] mt-20 mobile:mt-0 mb-87 flex-center tablet:w-[688px]
          tablet:mb-80 mobile:w-330 mobile:mb-20 pc:gap-x-30 tablet:gap-x-20
          mobile:gap-y-10">
        <div
          className="bg-gray-1 pc:w-[803px] pc:h-480 tablet:w-[511px] mobile:w-330 tablet:h-304
            mobile:h-174"
        />
        <div
          className="bg-gray-1 pc:w-[247px] pc:h-[480px] tablet:w-157 tablet:h-304 mobile:w-330
            mobile:h-90"
        />
      </div>
      <CustomSection isLoggedIn={true} isGenreSelected={true} />
      <div className="mt-80 pc:mb-140 tablet:mb-120 mobile:mb-80">
        <Carousel data={carouselMockData} responsive={responsive} />
      </div>

      <TodayBestCorner />
      <BestSellerSection />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
