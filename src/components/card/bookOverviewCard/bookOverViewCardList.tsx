import { BookOverviewType } from '@/types/bookOverviewType';
import BookOverviewCard from './bookOverViewCard';

interface BookOverViewCardListProps {
  bookData: BookOverviewType[];
  title: string;
}

function BookOverViewCardList({ bookData, title }: BookOverViewCardListProps) {
  if (!bookData) return;

  return (
    <div className="flex flex-col gap-40 text-black">
      <h1 className="text-20 font-bold">{title}</h1>
      <div className="flex flex-col gap-20 mobile:gap-10">
        {bookData.map((data) => (
          <div key={data.book.bookId}>
            <BookOverviewCard book={data.book} like={data.like} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookOverViewCardList;
