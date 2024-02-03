import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layouts/bestSellerLayout';
import { bookOverviewsMock } from '../api/mock/bestSellerMock';

function NewestPage() {
  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        // sideBar={ }
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
