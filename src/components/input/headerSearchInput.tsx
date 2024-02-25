import { useRouter } from 'next/router';
import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';
import { useState } from 'react';

function HeaderSearchInput() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    router.push(`/search?term=${encodeURIComponent(searchTerm)}`);
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="relative z-10 inline-flex w-3/6">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full max-w-full rounded-[71px] border border-gray-1 px-20 py-2 pr-20
          tablet:h-56 pc:h-56"
      />
      <button
        className="absolute right-12 top-1/2 h-12 w-12 -translate-y-1/2 transform mobile:right-6
          tablet:h-15 tablet:w-15 pc:h-15 pc:w-15"
        onClick={handleSearch}>
        <Image src={SearchIcon} fill alt="검색 아이콘" />
      </button>
    </div>
  );
}

export default HeaderSearchInput;
