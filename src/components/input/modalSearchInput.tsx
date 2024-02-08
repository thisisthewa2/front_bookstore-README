import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';
import useSearchDebounce from '@/hooks/useSearchDebounce';
import EraserSearchValueIcon from '@/public/icons/EraserSearchValue.svg';

interface SearchInput {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
}

function ModalSearchInput({ placeholder, onSearch }: SearchInput) {
  const { value, setValue, handleInputChange, handleSearch } = useSearchDebounce(onSearch);

  return (
    <div className='flex items-center z-10 w-full h-48 px-18 py-12 border border-gray-1 rounded-[5px] gap-18 focus-within:border-green'>
      <input
        className='w-full text-16 font-light flex-shrink focus:outline-none'
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
      {value && <Image src={EraserSearchValueIcon} alt='검색창 지우기' width={18} height={18} onClick={() => setValue('')} />}
      <div
        className="relative w-18 h-18"
        onClick={handleSearch}>
        <Image src={SearchIcon} fill alt="검색 아이콘" />
      </div>
    </div>
  );
}

export default ModalSearchInput;
