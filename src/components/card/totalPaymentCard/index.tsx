import TermsCheckbox from "@/components/container/terms/terms";
import TotalPrice from "@/components/card/totalPaymentCard/totalPrice"
import RegisterButton from "@/components/button/register/registerButton";
import { REQUIRED_FOR_PAYMENT } from "src/constants/sign";

//TODO : TotalPrice컴포넌트의 price props, RegisterButton 가격 TotalPriceCardProps로 받아야함
function TotalPriceCard() {
  return (
    <div className="flex flex-col w-432 gap-20 p-30 tablet:w-688 mobile:w-330 mobile:p-20">
      <TotalPrice title="총 상풒 금액" price="23500" />
      <TotalPrice title="총 배송비" price="+3000" />
      <TotalPrice title="총 할일 금액" price="-3000" />
      <TotalPrice title="결제 금액" price="23500" font="font-bold" text='text-20'/>
      <TermsCheckbox entire="전체동의(필수)" checkContent={REQUIRED_FOR_PAYMENT} useFormContextProps={false} showLastButton={false} />
      <div className="tablet:hidden mobile:hidden">
        <RegisterButton>23500원 결제하기</RegisterButton>
      </div>
    </div>
  );
}

export default TotalPriceCard