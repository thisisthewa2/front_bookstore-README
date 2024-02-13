import BookOverviewCard from './bookOverViewCard';
import useGetBooks from '@/hooks/useGetBooks';
import { BookData } from '@/types/api/book';

interface BookOverViewCardListProps {
  // bookData: BookOverviewType[];
  title: string;
}

function BookOverViewCardList({ title }: BookOverViewCardListProps) {
  const INITIAL_PARAMS = {
    limit: '100',
    sort: 'STAR',
    ascending: 'false',
  };

  const { data } = useGetBooks({
    mainId: '0',
    params: INITIAL_PARAMS,
  });
  const bookData: BookData[] = data?.books ?? [];

  console.log(bookData);

  return (
    <div className="flex flex-col gap-40 pb-40 text-black">
      <h1 className="text-20 font-bold">{title}</h1>
      <div className="flex flex-col gap-20 mobile:gap-10">
        {bookData.map((data, index) => (
          <div key={data?.bookId}>
            <BookOverviewCard book={data} rank={index + 1} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookOverViewCardList;
