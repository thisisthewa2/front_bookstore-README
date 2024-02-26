import ShippingAddressSection from '@/components/container/shippingAddressSection/shippingAddressSection';
import BookPaymentCardList from '@/components/card/bookPaymentCard/bookPaymentCardList';
import { ReactElement } from 'react';
import MainLayout from '@/components/layout/mainLayout';
import TotalPriceCard from '@/components/card/totalPaymentCard';
import { basketItemList } from '@/store/state';
import { useAtomValue } from 'jotai';

export default function Order() {
  const items = useAtomValue(basketItemList);

  return (
    <div className="flex w-full justify-center">
      <div className=" flex h-full w-full justify-center mobile:flex-col tablet:flex-col">
        <div className="flex-center mx-60 flex-col pc:mb-[603px]">
          <ShippingAddressSection />

          <div className="mt-60">
            <BookPaymentCardList bookData={items} label="주문 상품" />
          </div>
        </div>
        <div className="sticky top-100 mx-40 mb-180 mobile:mt-100 tablet:mt-100">
          <TotalPriceCard />
        </div>
      </div>
    </div>
  );
}
Order.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
