import BookPaymentCard from '@/components/card/bookPaymentCard.tsx/bookPaymentCard';
import { bookOrderTestData } from '@/pages/api/mock/bookOrderMock';
const testData = bookOrderTestData.orderData;

export default function TestBookPaymentCard() {
  return (
    <BookPaymentCard
      book={testData[0].bookData[0].book}
      order={testData[0].bookData[0].order}
    />
  );
}
