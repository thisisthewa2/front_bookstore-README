import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import useGetBooks from '@/hooks/useGetBooks';
import { BookData } from '@/types/api/book';

const INITIAL_PARAMS = {
  limit: '100',
  sort: 'STAR',
  ascending: 'false',
};

function BestSellerPage() {
  const { data } = useGetBooks({
    mainId: '0',
    params: INITIAL_PARAMS,
  });
  const bookData: BookData[] = data?.books ?? [];

  return (
    <BestSellerPageLayout
      header={<Header isLoggedIn={true} />}
      sideBar={<Sidebar pageName="bestseller" />}
      main={<BookOverViewCardList title="베스트셀러" bookData={bookData} />}
    />
  );
}

export default BestSellerPage;
