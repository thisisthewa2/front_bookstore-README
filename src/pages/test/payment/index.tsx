import OrderCompletedSection from '@/components/container/orderCompletedSection';
import TotalPriceCard from '@/components/card/totalPaymentCard';

function Payment() {
  return (
    <div className="flex justify-center px-60 py-40 mobile:px-15 mobile:py-20">
      <OrderCompletedSection />
      <TotalPriceCard />
    </div>
  );
}

export default Payment