import Image from 'next/image';
import SearchIcon from '@/public/icons/SearchIcon.svg';
import useSearchDebounce from '@/hooks/useSearchDebounce';
import EraserSearchValueIcon from '@/public/icons/EraserSearchValue.svg';

interface SearchInput {
  placeholder: string;
  onSearch: (searchTerm: string) => void;
}

function ModalSearchInput({ placeholder, onSearch }: SearchInput) {
  const { value, handleInputChange, handleSearch, handleEraserValue } =
    useSearchDebounce(onSearch);

  return (
    <div className="focus-within:border-primary z-10 flex h-48 w-full items-center gap-18 rounded-[5px] border border-gray-1 px-18 py-12">
      <input
        className="w-full flex-shrink text-16 font-light focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
      {value && (
        <Image
          src={EraserSearchValueIcon}
          alt="검색창 지우기"
          width={18}
          height={18}
          onClick={handleEraserValue}
        />
      )}
      <div className="relative h-18 w-18" onClick={handleSearch}>
        <Image src={SearchIcon} fill alt="검색 아이콘" />
      </div>
    </div>
  );
}

export default ModalSearchInput;
