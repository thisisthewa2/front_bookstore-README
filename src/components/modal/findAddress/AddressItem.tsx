import TitleContentTable from '@/components/modal/addReview/titleContentTable';
import Image from 'next/image';
import LineIcon from '@/public/icons/Line.svg';
import { useAtom } from 'jotai';
import { setAddressData } from '@/store/address';

interface AddressItemProps {
  zipNo: string;
  roadAddr: string;
  jibunAddr: string;
}

function AddressItem({ zipNo, roadAddr, jibunAddr }: AddressItemProps) {
  const [, setAddress] = useAtom(setAddressData);

  const chooseAddress = () => {
    setAddress({ zipNo, roadAddr, jibunAddr });
  };

  return (
    <>
      <TitleContentTable
        title1={zipNo}
        content1={roadAddr}
        content2={jibunAddr}
        onClick={chooseAddress}
        button={true}
        green={true}
        black="text-black font-light"
        gap={8}
      />
      <Image src={LineIcon} alt="구분선" />
    </>
  );
}

export default AddressItem;
