/** 카테고리 페이지 > 국내 > 전체*/
import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import MainCategoryBookList from '@/components/container/categoryBookList/mainCategoryBookList';
import EventSection from '@/components/container/eventSection/eventSection';
import { useCategoryCarouselParams } from '@/hooks/useInitialParams';
import { responsive } from '@/utils/checkResponsiveEnv';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
import { useGetBook } from '@/api/book';
import { BookData } from '@/types/api/book';
import { AdImage, EVENT_IMAGES } from '@/constants/eventImages';

export default function DomesticPage() {
  const { data: bestsellers } = useGetBook({
    endpoint: `0/main`,
    params: {
      bookId: '0',
      limit: '10',
      sort: 'BESTSELLER',
      ascending: false,
    },
  });
  const bestList: Array<BookData> = bestsellers ? bestsellers.data.books : [];
  const INITIAL_PARAMS = useCategoryCarouselParams();
  const { data } = useGetBook({
    endpoint: '0/main',
    params: {
      ...INITIAL_PARAMS,
    },
  });

  return (
    <SidebarLayout>
      <Spacing height={[0, 0, 20]} />

      <EventSection
        eventSize="category"
        adsImg={AdImage}
        eventImgs={EVENT_IMAGES}
      />
      <Spacing height={[60, 40, 40]} />
      {data ? (
        <CategoryCarousel data={data?.data.books} responsive={responsive} />
      ) : null}
      <Spacing height={[120, 80, 80]} />
      <BestSellerSection page="category" bookList={bestList} />
      <Spacing height={[120, 80, 80]} />
      <MainCategoryBookList />
    </SidebarLayout>
  );
}
