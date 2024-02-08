import TitleContentTable from '@/components/modal/addReview/titleContentTable';
import Image from 'next/image';
import LineIcon from '@/public/icons/Line.svg';
import Radio from '@/components/input/radio';
import RegisterButton from '@/components/button/register/registerButton';
import Textarea from '@/components/input/textarea';
import useFormControl from '@/hooks/useFormControl';
import DropDown from '@/components/dropDown/dropDown';

function GetRefundForm() {
  const {
    control,
    handleSubmit,
    isButtonActive,
    onSubmit,
  } = useFormControl();


  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleContentTable title1='책 제목' content1='스물 아홉 생일, 1년 후 죽기로 결심하다' title2='저자' content2='이제니'/>
        <Image src={LineIcon} alt="구분선"/>
        <div className='flex'>
          <Radio label='신청 유형 선택' control={control} name='application' title1='교환' title2='환불'/>
          <Radio label='회수 방법' control={control} name='return' title1='직접 발송' title2='상품 회수'/>
        </div>
        <Textarea control={control} name='description' /> 
        <div>
          환불금액
          얼마
        </div>
      </form> 
      <RegisterButton>교환/환불 신청하기</RegisterButton>
    </>
  )
}

export default GetRefundForm