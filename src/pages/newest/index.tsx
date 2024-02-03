import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { useRouter } from 'next/router';
import Sidebar from '@/components/sidebar/sidebar';
import { BestSellerPageProps } from '@/pages/bestseller';

function NewestPage({ isDomestic = true }: BestSellerPageProps) {
  const router = useRouter();
  const { category } = router?.query;

  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        sideBar={
          <Sidebar isDomestic={isDomestic} location={category as string} />
        }
        main={
          <BookOverViewCardList
            bookData={bookOverviewsMock}
            title="신간 도서"
          />
        }
      />
    </div>
  );
}

export default NewestPage;
