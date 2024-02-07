import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOrderCard from '@/components/card/bookOrderCard/bookOrderCard';
import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { bookOrderTestData } from '@/pages/api/mock/bookOrderMock';
const { orderData } = bookOrderTestData;

function TestOrderPage() {
  return (
    <div className="flex flex-col gap-20 p-20">
      <BookOrderCardList orderData={orderData} />
    </div>
  );
}

export default TestOrderPage;
