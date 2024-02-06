import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { useRouter } from 'next/router';

export interface BestSellerPageProps {
  isDomestic: boolean;
  category?: string;
}

function BestSellerPage({ isDomestic = true }: BestSellerPageProps) {
  const router = useRouter();
  const { category } = router?.query;
  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        sideBar={
          <Sidebar
            pageName="bestseller"
            isDomestic={isDomestic}
            location={category as string}
          />
        }
        main={
          <BookOverViewCardList
            bookData={bookOverviewsMock}
            title="베스트셀러"
          />
        }
      />
    </div>
  );
}

export default BestSellerPage;
