import BookOverViewCardList from '@/components/card/bookOverviewCard/bookOverViewCardList';
import Header from '@/components/header';
import BestSellerPageLayout from '@/components/layout/bestSellerLayout';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import Sidebar from '@/components/sidebar/sidebar';

function NewestPage() {
  return (
    <div>
      <BestSellerPageLayout
        header={<Header isLoggedIn={true} />}
        sideBar={
          <Sidebar
            pageName="newest"
          />
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
