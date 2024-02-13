import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import Sidebar from '@/components/sidebar/sidebar';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';

function BestSellerPage() {
  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        sideBar={
          <Sidebar
            pageName="bestseller"
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
