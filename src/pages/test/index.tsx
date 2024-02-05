import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOverviewCard from '@/components/card/bookOverviewCard/bookOverViewCard';
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
      <SkeletonPreviewBookImage size="sm" />
      <SkeletonPreviewBookImage size="md" />
      <SkeletonPreviewBookImage size="lg" />
    </div>
  );
}

export default TestPage;
