import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import CustomSection from '@/components/container/customSection/customSection';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
import Carousel from '@/components/carousel/carousel';
import { responsive } from '@/utils/checkResponsiveEnv';
import TodayBestSection from '@/components/container/todayBestSection/todayBestSection';
import { useGetBook } from '@/api/book';
import { BookData } from '@/types/api/book';
import EventSection from '@/components/container/eventSection/eventSection';
import { AdImage, EVENT_IMAGES } from '@/constants/eventImages';
import { useSession } from 'next-auth/react';

function Home() {
  const { status } = useSession();
  const { data: newest } = useGetBook({
    endpoint: '0/main',
    params: {
      bookId: '0',
      limit: '6',
      sort: 'NEWEST',
      ascending: false,
    },
  });

  const newestList: Array<BookData> = newest ? newest.data.books : [];

  const { data: bestsellers } = useGetBook({
    endpoint: '0/main',
    params: {
      bookId: '0',
      limit: '10',
      sort: 'BESTSELLER',
      ascending: false,
    },
  });

  const bestList: Array<BookData> = bestsellers ? bestsellers.data.books : [];

  return (
    <>
      <div
        className="flex-center mb-87 mt-20 w-[1080px] mobile:mb-20 mobile:mt-0 mobile:w-330
          mobile:flex-col mobile:gap-y-10 tablet:mb-80 tablet:w-[688px] tablet:gap-x-20
          pc:gap-x-30">
        <EventSection
          eventSize="main"
          adsImg={AdImage}
          eventImgs={EVENT_IMAGES}
        />
      </div>
      <CustomSection isLoggedIn={status === 'authenticated'} />
      <div className="mt-80 mobile:mb-80 tablet:mb-120 pc:mb-140">
        <Carousel data={newestList} responsive={responsive} />
      </div>

      <TodayBestSection />
      <BestSellerSection page="main" bookList={bestList} />
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
