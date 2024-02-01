import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';

function SearchInput() {
  return (
    <div className="z-10 w-3/6 relative inline-flex">
      <input
        className="w-full tablet:h-56 pc:h-56 border border-gray-1 rounded-[71px] px-20 py-2
          max-w-full pr-20"
      />
      <div
        className="absolute w-12 h-12 tablet:h-15 tablet:w-15 pc:h-15 pc:w-15 top-1/2
          mobile:right-6 right-12 transform -translate-y-1/2">
        <Image src={SearchIcon} fill alt="검색 아이콘" />
      </div>
    </div>
  );
}

export default SearchInput;
