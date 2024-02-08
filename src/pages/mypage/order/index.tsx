import BookOrderCard from '@/components/card/bookOrderCard/bookOrderCard';
import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import OrderDate from '@/components/container/orderDate/orderDate';
import OrderOverView from '@/components/container/orderDate/orderOverView';
import Header from '@/components/header';
import MainLayout from '@/components/layout/mainLayout';
import MyOrderPageLayout from '@/components/layout/myOrderLayOut';
import { bookOrderTestData } from '@/pages/api/mock/bookOrderMock';
const { orderData } = bookOrderTestData;

function MyOrderPage() {
  return (
    // <div>주문조회페이지-버셀오류방지용</div>
    //  <MyOrderPageLayout header={<Header isLoggedIn/>} orderDate={<OrderDate />} overview={<OrderOverView />} main={<BookOrderCardList />} />
    <MainLayout>hi</MainLayout>
  );
}
export default MyOrderPage;
