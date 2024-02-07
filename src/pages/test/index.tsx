import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOverviewCard from '@/components/card/bookOverviewCard/bookOverViewCard';
import SkeletonPreviewBookImage from '@/components/skeleton/previewBookImage/skeleton';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { bookOrderTestData } from '../api/mock/bookOrderMock';
const bookOverviews = bookOverviewsMock;

function TestPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <BookOverviewCard
        book={bookOverviews[0]?.book}
        like={bookOverviews[0]?.like}
      />
      {/* <SkeletonPreviewBookImage size="sm" />
      <SkeletonPreviewBookImage size="md" />
      <SkeletonPreviewBookImage size="lg" /> */}
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="sm"
        ranking={100}
        // itemsStart
      />
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="md"
        ranking={20}
        // itemsStart
      />
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="lg"
        ranking={10}
        // itemsStart
      />
      <PreviewBookInfo
        size="lg"
        image={bookOverviews[1]?.book.bookImgUrl}
        ranking={bookOverviews[1]?.book.rank}
        title="야오호로어옹"
        authorList={['하이', '이작가']}
      />
      <PreviewBookInfo
        size="md"
        image={bookOverviews[1]?.book.bookImgUrl}
        ranking={bookOverviews[1]?.book.rank}
        title="야오호로어옹"
        authorList={['하이', '이작가']}
      />
      <PreviewBookInfo
        size="sm"
        image={bookOverviews[1]?.book.bookImgUrl}
        ranking={bookOverviews[1]?.book.rank}
        title="야오호로어옹"
        authorList={['하이', '이작가']}
        alignCenter
      />
    </div>
  );
}

export default TestPage;
