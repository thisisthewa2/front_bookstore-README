import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import Pagination from '@/components/button/pagination';
import { CurrentPageStateAtom, chooseBookIdAtom } from '@/store/state';
import { useAtom } from 'jotai';
import { useGetBook, useGetPageBook } from '@/api/book';
import { useEffect, useState } from 'react';
import { BookData} from '@/types/api/book';
import NoData from './noData';

function PreviewBookInfoPagination({ search }: { search: string}) {
  const [CurrentPage] = useAtom(CurrentPageStateAtom);
  const [bookOverviews, setBookOverviews] = useState<BookData[]>([]);
  const [_, setChooseBookId] = useAtom(chooseBookIdAtom);  //전역변수로 넘겨줄 책번호
  const [LChooseBookId, setLChooseBookId] = useState<number | null>(null)
  const [chooseBook, setChooseBook] = useState<BookData>();
  const limitValue = (typeof window !== 'undefined') ? window.innerWidth  : 0;
  
  const { data } = useGetPageBook({
    navigationMethod: 'PAGINATION',
    sortType: 'BESTSELLER',
    ascending: false,
    offset: String(CurrentPage - 1),
    limit: (limitValue && window.innerWidth <= 768) ? String(3) : String(4),
    search,
    enabled: search,
  });

  const { data: chooseBookData } = useGetBook({
    endpoint: String(LChooseBookId),
    params: {},
    enabled: LChooseBookId,
  });

  const handleChooseBook = (id:number) => {
    setChooseBookId(id);
    setLChooseBookId(id);
  }

  useEffect(() => {
    setChooseBook(chooseBookData?.data);
  }, [chooseBookData]);

  useEffect(() => {
    setBookOverviews(data?.books);
  }, [data]);
  
  if(!data) return <NoData />;

  return (
    <>
      <div className="flex w-[608px] justify-between mobile:w-291">
        {(bookOverviews && !chooseBook) &&
          bookOverviews?.map((bookOverview, index) => (
            <PreviewBookInfo
              key={index}
              size="xs"
              image={bookOverview.bookImgUrl}
              title={bookOverview.bookTitle}
              authorList={bookOverview.authors}
              alignCenter
              bookId={bookOverview.bookId}
              community={true}
              onClick={() => handleChooseBook(bookOverview.bookId)}
            />
          ))}
        {(chooseBook ) && (
          <PreviewBookInfo
            size="xs"
            image={chooseBook.bookImgUrl}
            title={chooseBook.bookTitle}
            authorList={chooseBook.authors}
            community={true}
          />
        )}
      </div>
      {!chooseBookData && bookOverviews && (
        <Pagination totalCount={data?.total} standard={4} />
      )}
    </>
  );
}

export default PreviewBookInfoPagination;
