import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { useGetBook } from '@/api/book';
import { BookData } from '@/types/api/book';
import { useInitialBestNewestParams } from '@/hooks/useInitialParams';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';

const INITIAL_PARAMS = useInitialBestNewestParams({ sort: 'NEWEST' });

function NewestPage() {
  const { categoryId } = useCheckCategoryUrl();
  const { data, isLoading } = useGetBook({
    endpoint: `${categoryId}/sub`,
    params: INITIAL_PARAMS,
    staleTime: 60,
    gcTime: 120,
  });
  const bookData: BookData[] = data?.data?.books ?? [];

  return (
    <div>
      <BestSellerPageLayout
        sideBar={<Sidebar pageName="newest" />}
        main={
          <BookOverViewCardList
            bookData={bookData}
            title="신간 도서"
            isLoading={isLoading}
          />
        }
      />
    </div>
  );
}

export default NewestPage;
