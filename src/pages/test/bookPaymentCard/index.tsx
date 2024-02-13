import BookPaymentCardList from '@/components/card/bookPaymentCard/bookPaymentCardList';
import { bookOrderTestData } from '@/pages/api/mock/bookOrderMock';
const testData = bookOrderTestData;

// orderId에 해당하는 데이터를 넘겨주기
export default function TestBookPaymentCard() {
  return (
    <BookPaymentCardList
      bookData={testData.orderData[0].bookData}
      label="주문상품"
    />
  );
}
