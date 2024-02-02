import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/layouts/bestSellerLayout';
import { bookOverviewsMock } from '../api/mock/bestSellerMock';

function BestSellerPage() {
  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        // sideBar={ }
        main={<BookOverViewCardList bookData={bookOverviewsMock} />}
      />
    </div>
  );
}

export default BestSellerPage;
