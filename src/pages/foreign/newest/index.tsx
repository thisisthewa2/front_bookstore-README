import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import useGetBooks from '@/hooks/useGetBooks';
import { BookData } from '@/types/api/book';

const INITIAL_PARAMS = {
  limit: '100',
  sort: 'NEWEST',
  ascending: 'false',
};

function NewestPage() {
  const { data } = useGetBooks({
    mainId: '1',
    params: INITIAL_PARAMS,
  });
  const bookData: BookData[] = data?.books ?? [];

  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        sideBar={<Sidebar pageName="newest" />}
        main={<BookOverViewCardList bookData={bookData} title="신간 도서" />}
      />
    </div>
  );
}

export default NewestPage;
