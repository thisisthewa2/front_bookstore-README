import { getDeliveryList } from '@/api/delivery';
import BookOrderCardList from '@/components/card/bookOrderCard/bookOrderCardList';
import BookOrderEmptyCard from '@/components/card/bookOrderCard/bookOrderEmptyCard';
import OrderDate from '@/components/container/orderDate/orderDate';
import OrderOverView from '@/components/container/orderDate/orderOverView';
import DropDown from '@/components/dropDown/dropDown';
import MyOrderPageLayout from '@/components/layout/myOrderLayOut';
import { ORDER_DROPDOWN_MENUS } from '@/constants/ORDER_DROPDOWN_MENUS';
import { myOrderStatus } from '@/constants/myOrderStatus';
import { QUERY_KEY } from '@/constants/queryKey';
import { DeliveryItem, OrderOverViewItem } from '@/types/deliveryType';
import { convertDate } from '@/utils/convertDate';
import { useQuery } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

function MyOrderPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState(ORDER_DROPDOWN_MENUS[0]);
  const onSelectedItem = (menu: string) => setSelectedItem(menu);
  const onStartDate = (startDate: Date) => setStartDate(startDate);
  const onEndDate = (endDate: Date) => setEndDate(endDate);
  const startDateFormat = convertDate(startDate.toString());
  const endDateFormat = convertDate(endDate.toString());

  const getMyOrderQuery = useQuery({
    queryKey: [QUERY_KEY.delivery, startDate.toString(), endDate.toString()],
    queryFn: () => getDeliveryList(startDateFormat, endDateFormat),
    select: (data) => data.data,
    initialData: { data: [] },
  });

  const myOrderList = useMemo(() => {
    try {
      const result = getMyOrderQuery?.data?.reduce(
        (acc: OrderOverViewItem, item: DeliveryItem) => {
          acc[item.deliveryStatus] += 1;
          return acc;
        },

        { ...myOrderStatus },
      );
      return result;
    } catch (error) {
      return { ...myOrderStatus };
    }
  }, [getMyOrderQuery.data]);

  const orderData = getMyOrderQuery?.data?.map((item: DeliveryItem) => {
    return {
      ...item.orderDto,
      deliveryStatus: item.deliveryStatus,
    };
  });

  return (
    <MyOrderPageLayout
      dropDown={
        <DropDown
          menus={ORDER_DROPDOWN_MENUS}
          selectedItem={selectedItem}
          onSelectedItem={onSelectedItem}
        />
      }
      orderDate={
        <OrderDate
          pastDate={selectedItem}
          startDate={startDate}
          endDate={endDate}
          setSelectedItem={setSelectedItem}
          setStartDate={onStartDate}
          setEndDate={onEndDate}
        />
      }
      overview={<OrderOverView orderView={myOrderList} />}
      main={
        orderData.length > 0 ? (
          <BookOrderCardList orderData={orderData} />
        ) : (
          <BookOrderEmptyCard />
        )
      }
    />
  );
}
export default MyOrderPage;
