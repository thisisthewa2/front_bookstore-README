import { useState } from 'react';
import { useGetPageBook } from '@/api/book';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import DropDown from '@/components/dropDown/dropDown';
import useCarouselEnv from '@/hooks/useCarouselEnv';
import SelectOrder from '@/utils/selectOrder';
import { BOOK_OLDER_STANDARD } from 'src/constants/orderList';
import { BookData } from '@/types/api/book';

const CURRENT_ORDER = {
  sort: 'VIEW',
  ascending: false,
};
interface SearchBookListProps {
  term?: string;
}
function SearchBookList({ term }: SearchBookListProps) {
  const { env } = useCarouselEnv();
  const [selectedOrder, setSelectedOrder] = useState('조회순');
  const [currentOrder, setCurrentOrder] = useState(CURRENT_ORDER);

  const { data } = useGetPageBook({
    navigationMethod: 'PAGINATION',
    sortType: currentOrder.sort,
    ascending: currentOrder.ascending,
    search: term,
    enabled: term,
  });
  const onSelectedOrder = SelectOrder(setSelectedOrder, setCurrentOrder);

  if (!data || (data && data.books.length === 0)) {
    return <div className="flex-center">검색어에 해당하는 도서가 없습니다</div>;
  }

  return (
    <article className="relative flex h-fit flex-col gap-50 pb-30 mobile:gap-20 tablet:gap-40">
      <div className="flex items-center justify-end">
        <div className="z-20 w-120">
          <DropDown
            menus={BOOK_OLDER_STANDARD}
            selectedItem={selectedOrder}
            onSelectedItem={onSelectedOrder}
          />
        </div>
      </div>

      <div
        className="grid h-fit w-[895px]
           grid-flow-row auto-rows-auto grid-cols-5 gap-x-20 gap-y-40 mobile:w-[330px] mobile:grid-cols-2 mobile:gap-y-0 tablet:w-[511px] tablet:grid-cols-3 ">
        {data?.books.map((book: BookData) => {
          return (
            <PreviewBookInfo
              image={book.bookImgUrl}
              title={book.bookTitle}
              authorList={book.authors}
              price={book.price}
              size={env === 'desktop' ? 'md' : 'lg'}
              bookId={book.bookId}
              key={book.bookId}
            />
          );
        })}
      </div>
    </article>
  );
}

export default SearchBookList;
