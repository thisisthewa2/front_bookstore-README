import Image from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import BookLabelGrayIcon from '@/public/icons/BookLabelGrayIcon.svg';
import BookLabelSecondaryIcon from '@/public/icons/BookLabelSecondaryIcon.png';
import BookLabelBottomIcon from '@/public/icons/BookLabelBottomIcon.svg';
import BookLabelBottomGrayIcon from '@/public/icons/BookLabelBottomGrayIcon.svg';
import { PreviewBookInfoProps } from '@/types/previewBookInfoType';
import { IMAGE_SIZE } from 'src/constants/style/previewBookImageSize';
import BookTitle from './title';
import BookAuthors from './authors';
import BookPrice from './price';
import BookCategory from './category';
import Link from 'next/link';

function PreviewBookInfo({
  image,
  title,
  authorList,
  ranking,
  alignCenter,
  size = 'md',
  price,
  category,
  itemsStart,
  bookId,
  isUnit,
  community = false,
  onClick,
}: PreviewBookInfoProps) {
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
    width: `${IMAGE_SIZE[size].widthOnly}`,
    height: `h-${IMAGE_SIZE[size].heightNumber.pc} tablet:h-${IMAGE_SIZE[size].heightNumber.tablet} mobile:h-${IMAGE_SIZE[size].heightNumber.mobile} `,
  };

  return (
    <Link href={community ? '#' : `/bookdetail/${bookId}`}>
      <div
        className={`relative flex flex-col ${STYLE.width}`}
        onClick={onClick}>
        <div
          className={`${STYLE.img} flex flex-col ${itemsStart ? 'justify-start' : 'relative justify-end'} ${!ranking ? 'overflow-hidden' : ''}`}>
          <Image
            src={image || DefaultImage}
            alt="책 미리보기 이미지"
            layout="responsive"
            width={0}
            height={0}
          />
          {ranking && (
            <div
              className={`shadow-indigo-500/40 absolute shadow-lg ${itemsStart ? 'left-17 top-[-2px]' : ' bottom-[-2px] right-0'}`}>
              <Image
                src={
                  itemsStart
                    ? ranking > 10
                      ? BookLabelGrayIcon
                      : BookLabelSecondaryIcon
                    : ranking > 10
                      ? BookLabelBottomGrayIcon
                      : BookLabelBottomIcon
                }
                alt="순위라벨 이미지"
              />
              <span
                className={`absolute text-[13px] font-bold text-white ${itemsStart ? 'left-10 top-5' : 'bottom-5 right-9'} ${
                  ranking > 99
                    ? itemsStart
                      ? 'left-[2px] tracking-[-0.5px]'
                      : 'left-17 tracking-[-0.5px]'
                    : ranking > 9
                      ? itemsStart
                        ? 'left-6 tracking-[-0.6px]'
                        : 'left-20 tracking-[-0.6px]'
                      : ''
                }`}>
                {ranking}
              </span>
            </div>
          )}
        </div>
        {title && <BookTitle title={title} alignCenter={alignCenter} />}
        {authorList && (
          <BookAuthors authorList={authorList} alignCenter={alignCenter} />
        )}
        {category && <BookCategory category={category} />}
        {price && <BookPrice price={price} isUnit={isUnit} />}
      </div>
    </Link>
  );
}
export default PreviewBookInfo;
