import Link from 'next/link';
import { useRouter } from 'next/router';

interface PageTabProps {
  origin: string;
  originHref: string;
  add: string;
  addHref: string;
  isSelected: string;
}

//본문 container내에서 이동할 때 사용
function PageTab({
  origin,
  originHref,
  add,
  addHref,
  isSelected,
}: PageTabProps) {
  return (
    <div className="flex items-center justify-between w-169 h-27 mb-40 mt-20 tablet:mb-36 tablet:mt-16 mobile:mb-27 mobile:mt-6">
      <Link
        href={originHref}
        className={`hover:text-black font-bold text-20 text-${
          isSelected === origin ? 'black' : 'gray-2'
        }`}>
        {origin}
      </Link>
      <div className="inline-block border-r w-1 h-14 mt-4 border-gray-1" />
      <Link
        href={addHref}
        className={`hover:text-black font-bold text-20 text-${
          isSelected === add ? 'black' : 'gray-2'
        }`}>
        {add}
      </Link>
    </div>
  );
}

export default PageTab;
