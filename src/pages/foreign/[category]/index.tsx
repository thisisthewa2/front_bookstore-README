import { useGetBook } from '@/api/book';
import SidebarLayout from '@/components/layout/sidebarLayout';
import Spacing from '@/components/container/spacing/spacing';
import EventSection from '@/components/container/eventSection/eventSection';
import CategoryCarousel from '@/components/carousel/categoryCarousel';
import SubCategoryBookList from '@/components/container/categoryBookList/subCategoryBookList';
import { useCategoryCarouselParams } from '@/hooks/useInitialParams';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';
import { responsive } from '@/utils/checkResponsiveEnv';
import BestSellerSection from '@/components/container/bestsellerSection/bestsellerSection';
import { BookData } from '@/types/api/book';
import { AdImage, EVENT_IMAGES } from '@/constants/eventImages';

function CategoryPage() {
  const INITIAL_PARAMS = useCategoryCarouselParams();
  const { categoryId } = useCheckCategoryUrl();
  const { data } = useGetBook({
    endpoint: `${categoryId}/sub`,
    params: {
      ...INITIAL_PARAMS,
    },
  });
  const { data: bestsellers } = useGetBook({
    endpoint: `${categoryId}/sub`,
    params: {
      bookId: '0',
      limit: '10',
      sort: 'BESTSELLER',
      ascending: false,
    },
  });
  const bestList: Array<BookData> = bestsellers ? bestsellers.data.books : [];

  return (
    <SidebarLayout>
      <Spacing height={[0, 0, 20]} />
      <EventSection
        eventSize="category"
        adsImg={AdImage}
        eventImgs={EVENT_IMAGES}
      />
      {data && data?.data.books.length > 0 ? (
        <>
          <Spacing height={[60, 40, 40]} />
          <CategoryCarousel data={data?.data.books} responsive={responsive} />
          <Spacing height={[120, 80, 80]} />
          <BestSellerSection page="category" bookList={bestList} />
          <Spacing height={[120, 80, 80]} />
          <SubCategoryBookList />
        </>
      ) : (
        <div className="flex-center w-full pt-120 text-gray-4 mobile:pt-80">
          이 카테고리에 등록된 도서가 없어요!
        </div>
      )}
    </SidebarLayout>
  );
}

export default CategoryPage;
