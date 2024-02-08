import TitleContentTable from "@/components/modal/addReview/titleContentTable"
import Image from "next/image";
import LineIcon from '@/public/icons/Line.svg';
import { Address } from "@/types/address";


function AddressItem({ zipNo, roadAddr, jibunAddr }: Address) {
  //TODO:선택버튼 누른 후 결제페이지 반영하는 거 추가해야함. 임시 console
  const chooseAddress = () => {
    console.log(zipNo, roadAddr, jibunAddr)
  }

  return (
    <>
      <TitleContentTable title1={zipNo} content1={roadAddr} content2={jibunAddr} onClick={chooseAddress} button={true} green={true} black='text-black font-light' gap={8} />
      <Image src={LineIcon} alt="구분선" />
    </>
  )
}

export default AddressItem