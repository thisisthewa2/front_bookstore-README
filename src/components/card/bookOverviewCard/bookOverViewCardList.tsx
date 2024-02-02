import { BookOverviewType } from '@/types/bookOverviewType';
import BookOverviewCard from './bookOverViewCard';

interface BookOverViewCardListProps {
  bookData: BookOverviewType[];
}

function BookOverViewCardList({ bookData }: BookOverViewCardListProps) {
  if (!bookData) return;

  return (
    <>
      {bookData.map((data) => (
        <BookOverviewCard book={data.book} like={data.like} />
      ))}
    </>
  );
}

export default BookOverViewCardList;
