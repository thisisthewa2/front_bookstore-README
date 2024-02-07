import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOverviewCard from '@/components/card/bookOverviewCard/bookOverViewCard';
import SkeletonBookOverviewCard from '@/components/skeleton/bookOverviewCard/skeleton';
import SkeletonPreviewBookImage from '@/components/skeleton/previewBookImage/skeleton';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
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
        ranking={1}
        itemsStart

      />
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="lg"
        ranking={10}
        // itemsStart
      />
      <SkeletonBookOverviewCard />
      <div className="flex gap-10">
        <SkeletonPreviewBookImage size="lg" />
        <SkeletonPreviewBookImage size="md" />
        <SkeletonPreviewBookImage size="sm" />
      </div>
    </div>
  );
}

export default TestPage;
