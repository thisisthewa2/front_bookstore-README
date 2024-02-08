import ModalSearchInput from '@/components/input/modalSearchInput';
import DoFindAddress from '@/components/modal/findAddress/doFindAddress';
import NotFindAddress from '@/components/modal/findAddress/notFindAddress';
import FindAddressWrapper from '@/components/modal/findAddress/findAddressWrapper';
import { getAddress } from '@/api/address';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Pagination from '@/components/button/pagination';
import { useAtom } from 'jotai';
import {CurrentPageStateAtom } from '@/store/state';
import { QUERY_KEY } from 'src/constants/queryKey';

function FindAddressForm() {
  const [search, setSearch] = useState('')
  const [addressCurrentPage, setAddressCurrentPage] = useAtom(CurrentPageStateAtom);

  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.address, search, addressCurrentPage],
    queryFn: () => getAddress(search, addressCurrentPage),
    enabled: !!search,
  })

  const handleSearch = async (value: string) => {
    setSearch(value);
    setAddressCurrentPage(1);
  };

  useEffect(() => {
    refetch();
  },[search, addressCurrentPage, refetch])

  return (
    <div className="flex flex-col w-full gap-20 overflow-scroll">
      <ModalSearchInput
        placeholder="도로명, 지명, 건물명 검색"
        onSearch={handleSearch}
      />
      {search.length === 0 ? (
        <DoFindAddress />
      ) : data?.juso ? (
        <FindAddressWrapper addressData={data?.juso} />
      ) : (
        <NotFindAddress />
      )}
      <Pagination totalCount={data?.common.totalCount} standard={15}/>
    </div>
  );
}

export default FindAddressForm;
