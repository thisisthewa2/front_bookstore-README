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
    <div className="mb-40 mt-20 flex h-27 w-169 items-center justify-between mobile:mb-27 mobile:mt-6 tablet:mb-36 tablet:mt-16">
      <Link
        href={originHref}
        className={`text-20 font-bold hover:text-black text-${
          isSelected === origin ? 'black' : 'gray-2'
        }`}>
        {origin}
      </Link>
      <div className="mt-4 inline-block h-14 w-1 border-r border-gray-1" />
      <Link
        href={addHref}
        className={`text-20 font-bold hover:text-black text-${
          isSelected === add ? 'black' : 'gray-2'
        }`}>
        {add}
      </Link>
    </div>
  );
}

export default PageTab;
