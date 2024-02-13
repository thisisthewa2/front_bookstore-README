import BookOverviewCard from './bookOverViewCard';
import { BookData } from '@/types/api/book';

interface BookOverViewCardListProps {
  bookData: BookData[];
  title: string;
}

function BookOverViewCardList({ title, bookData }: BookOverViewCardListProps) {
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
