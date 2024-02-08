import { Address } from '@/types/address';
import AddressItem from '@/components/modal/findAddress/AddressItem';

function FindAddressWrapper({ addressData }: { addressData: Address[] }) {
  return (
    <div className='flex flex-col overflow-scroll '>
      {addressData?.map((data) => (
         <AddressItem zipNo={data.zipNo} roadAddr={data.roadAddr} jibunAddr={data.jibunAddr} />
      ))}
    </div>
  );
}

export default FindAddressWrapper;
