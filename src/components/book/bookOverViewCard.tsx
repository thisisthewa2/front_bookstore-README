import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookRating from '@/components/book/bookRating/bookRating';
import { StaticImageData } from 'next/image';
interface BookOverViewCardProps {
  ranking: number;
  image: StaticImageData;
}
function BookOverViewCard({ ranking, image }: BookOverViewCardProps) {
  return (
    <div className="flex items-center w-[897px] h-220 border border-gray-1 rounded-sm">
      <div className="flex items-center">
        <PreviewBookInfo size="sm" ranking={ranking} image={image} />
        <div>
          <div className="flex justify-between">
            <div className="flex-col justify-start">
              <div>스물 한살 생일, 1년 후 죽기로 결심하다</div>
              <div>저자 출판사</div>
              <BookRating rating={2} />
            </div>
            <div className="flex-col">
              <button className="flex">장바구니</button>
              <button className="flex">구매하기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookOverViewCard;
