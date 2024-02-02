import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOverviewCard from '@/components/card/bookOverviewCard/bookOverViewCard';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
const bookOverviews = bookOverviewsMock;

function TestPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <BookOverviewCard
        book={bookOverviews[0]?.book}
        like={bookOverviews[0]?.like}
      />
      <BookOverviewCard
        book={bookOverviews[1]?.book}
        like={bookOverviews[1]?.like}
      />
      <BookOverviewCard
        book={bookOverviews[2]?.book}
        like={bookOverviews[2]?.like}
      />
      <BookOverviewCard
        book={bookOverviews[3]?.book}
        like={bookOverviews[3]?.like}
      />
      <BookOverviewCard
        book={bookOverviews[4]?.book}
        like={bookOverviews[4]?.like}
      />
    </div>
  );
}

export default TestPage;
