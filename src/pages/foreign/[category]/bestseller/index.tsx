import { useGetBook } from '@/api/book';
import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';
import { useInitialBestNewestParams } from '@/hooks/useInitialParams';
import { BookData } from '@/types/api/book';

const INITIAL_PARAMS = useInitialBestNewestParams({ sort: 'BESTSELLER' });

function BestSellerPage() {
  const { categoryId } = useCheckCategoryUrl();
  const { data, isLoading } = useGetBook({
    endpoint: `${categoryId}/sub`,
    params: INITIAL_PARAMS,
  });
  const bookData: BookData[] = data?.data?.books ?? [];

  return (
    <div>
      <BestSellerPageLayout
        sideBar={<Sidebar pageName="bestseller" />}
        main={
          <BookOverViewCardList
            bookData={bookData}
            title="베스트셀러"
            isLoading={isLoading}
            ranking
          />
        }
      />
    </div>
  );
}

export default BestSellerPage;
