import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import OrderDate from '@/components/container/orderDate/orderDate';
import OrderOverView from '@/components/container/orderDate/orderOverView';
import Header from '@/components/header';
import MainLayout from '@/components/layout/mainLayout';
import MyOrderPageLayout from '@/components/layout/myOrderLayOut';
import {
  bookOrderTestData,
  orderOverViewData,
} from '@/pages/api/mock/bookOrderMock';
const { orderData } = bookOrderTestData;

function MyOrderPage() {
  return (
    <>
      <MyOrderPageLayout
        header={<Header isLoggedIn numItemsOfCart={1} />}
        // orderDate={<OrderDate />}
        overview={<OrderOverView orderView={orderOverViewData.orderView} />}
        main={<BookOrderCardList orderData={orderData} />}
      />
    </>
  );
}
export default MyOrderPage;
