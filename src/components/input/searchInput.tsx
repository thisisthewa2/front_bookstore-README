import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';

function SearchInput() {
  return (
    <div className="relative z-10 inline-flex w-3/6">
      <input
        className="w-full max-w-full rounded-[71px] border border-gray-1 px-20 py-2 pr-20
          tablet:h-56 pc:h-56"
      />
      <div
        className="absolute right-12 top-1/2 h-12 w-12 -translate-y-1/2 transform mobile:right-6
          tablet:h-15 tablet:w-15 pc:h-15 pc:w-15">
        <Image src={SearchIcon} fill alt="검색 아이콘" />
      </div>
    </div>
  );
}

export default SearchInput;
