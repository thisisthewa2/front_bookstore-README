import BookPaymentCardList from '@/components/card/bookPaymentCard/bookPaymentCardList';
import InfoCard from '@/components/card/infoCard';
import TitleContentCard from '@/components/card/titleContentCard';
import { bookOrderTestData2 } from '@/pages/api/mock/bookOrderMock';
import { DELIVERY_INFO, PAYMENT_INFO } from 'src/constants/payment';
import TotalPriceCard from '@/components/card/totalPaymentCard';
import { deliveryIdAtom } from '@/store/deliveryInfo';
import { useAtom } from 'jotai';
import { useGetDelivery } from '@/api/delivery';
//TODO : data 받을 예정. 예시임

function OrderCompletedSection({
  paymentDetail = true,
}: {
  paymentDetail?: boolean;
}) {
  const [deliveryId, setDeliveryId] = useAtom(deliveryIdAtom);
  const data = useGetDelivery(deliveryId?.data);
  const DcontentData = [
    data?.data?.data?.name,
    data?.data?.data?.phone,
    data?.data?.data?.address,
    data?.data?.data?.message,
  ];

  const PcontentData = [
    data?.data?.data?.paymentMethod,
    data?.data?.data?.paymentAmount,
  ];
  const orderDate = data?.data?.data?.createDate;
  return (
    <div className="flex w-[1084px] flex-col gap-60 mobile:w-330 tablet:w-[688px] ">
      {paymentDetail && (
        <InfoCard
          title="결제가 완료되었습니다!"
          content={`주문일자 ${orderDate}`}
        />
      )}
      <div className="flex gap-34">
        <div
          className={`flex w-[618px] flex-col gap-60 mobile:w-full tablet:w-full ${paymentDetail ? 'mt-0' : 'mt-45'}`}>
          <TitleContentCard
            title="배송지 정보"
            titleData={DELIVERY_INFO}
            contentData={DcontentData}
          />
          <TitleContentCard
            title="결제 정보"
            titleData={PAYMENT_INFO}
            contentData={PcontentData}
          />
          <BookPaymentCardList
            bookData={data?.data?.data?.orderDto.orderBook}
            label="주문상품"
          />
          <div className="w-full pc:hidden">
            <TotalPriceCard
              checkbox={false}
              button={false}
              color="text-primary"
            />
          </div>
        </div>
        <div className="w-full mobile:hidden tablet:hidden pc:mt-47 pc:h-screen">
          <TotalPriceCard
            checkbox={false}
            button={false}
            color="text-primary"
          />
        </div>
      </div>
    </div>
  );
}

export default OrderCompletedSection;
