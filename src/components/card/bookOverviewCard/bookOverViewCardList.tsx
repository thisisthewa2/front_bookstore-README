import { BookOverviewType } from '@/types/bookOverviewType';
import BookOverviewCard from './bookOverViewCard';
import useGetBooks from '@/hooks/useGetBooks';
import { BookData } from '@/types/api/book';

interface BookOverViewCardListProps {
  // bookData: BookOverviewType[];
  title: string;
}

function BookOverViewCardList({ title }: BookOverViewCardListProps) {
  const DEFAULT_PARAMS = {
    limit: '100',
    sort: 'STAR',
    ascending: 'false',
  };

  const data = useGetBooks({
    mainId: '0',
    params: { ...DEFAULT_PARAMS, bookId: undefined },
  });
  console.log(data);
  // if (!bookData) return;

  return (
    <div className="flex flex-col gap-40 pb-40 text-black">
      <h1 className="text-20 font-bold">{title}</h1>
      {/* <div className="flex flex-col gap-20 mobile:gap-10">
        {bookData.map((data) => (
          <div key={data.book.bookId}>
            <BookOverviewCard book={data.book} like={data.like} />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default BookOverViewCardList;
