import TermsCheckbox from '@/components/container/terms/terms';
import TotalPrice from '@/components/card/totalPaymentCard/totalPrice';
import useCalculateTotalPrice from '@/hooks/common/useCalculateTotalPrice';
import useCalculateProductsPrice from '@/hooks/common/useCalculateProductsPrice';
import PaymentButton from '@/components/button/payment/paymentButton';
import { useForm, FormProvider } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { PAYMENT_TERMS_CONTENT } from '@/constants/termsContent';

interface TotalPriceCardProps {
  checkbox?: boolean;
  button?: boolean;
  color?: string;
  delivery?: number;
  discount?: number;
}

function TotalPriceCard({
  checkbox = true,
  button = true,
  color,
  discount = 0,
}: TotalPriceCardProps) {
  const bookPrice = useCalculateProductsPrice();
  const delivery = bookPrice > 30000 ? 0 : 3000;
  const totalPrice = useCalculateTotalPrice({
    delivery: delivery,
    discount: discount,
  });
  const [isAllChecked, setIsAllChecked] = useState(false);

  // 약관동이 체크가 변할때마다 감지하여 isAllChecked를 변경
  const handleCheckedChange = (checkedStates: boolean) => {
    setIsAllChecked(checkedStates);
  };

  return (
    <div className="flex w-full flex-col gap-20 rounded-[10px] border border-gray-1 p-30 mobile:static mobile:p-20 tablet:static pc:sticky pc:top-280">
      <TotalPrice
        title="총 상품 금액"
        price={`${bookPrice.toLocaleString()}원`}
      />
      <TotalPrice title="총 배송비" price={`${delivery.toLocaleString()}원`} />
      <TotalPrice
        title="총 할인 금액"
        price={`${discount.toLocaleString()}원`}
      />
      <TotalPrice
        title="결제 금액"
        price={`${totalPrice.toLocaleString()}원`}
        font="font-bold"
        text="text-20"
        color={color}
      />
      {checkbox && (
        <TermsCheckbox
          entire="전체동의(필수)"
          checkContent={[
            PAYMENT_TERMS_CONTENT.ageLimit,
            PAYMENT_TERMS_CONTENT.payment,
            PAYMENT_TERMS_CONTENT.termsOfUse,
          ]}
          useFormContextProps={false}
          onCheckedChange={handleCheckedChange}
        />
      )}
      {button && <PaymentButton isAllChecked={isAllChecked} />}
    </div>
  );
}

export default TotalPriceCard;
