import Image from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import BookLabelGrayIcon from '@/public/icons/BookLabelGrayIcon.svg';
import BookLabelGreenIcon from '@/public/icons/BookLabelIGreenIcon.svg';
import BookLabelBottomIcon from '@/public/icons/BookLabelBottomIcon.svg';
import BookLabelBottomGrayIcon from '@/public/icons/BookLabelBottomGrayIcon.svg'
import { PreviewBookInfoProps } from '@/types/previewBookInfoType';
import SkeletonPreviewBookImage from '@/components/skeleton/previewBookImage/skeleton';
import { IMAGE_SIZE } from 'src/constants/style/previewBookImageSize';
import BookTitle from './title';
import BookAuthors from './authors';
import BookPrice from './price';
import BookCategory from './category';

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
}: PreviewBookInfoProps) {
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
    width: `${IMAGE_SIZE[size].widthOnly}`,
    height: `h-${IMAGE_SIZE[size].heightNumber.pc} tablet:h-${IMAGE_SIZE[size].heightNumber.tablet} mobile:h-${IMAGE_SIZE[size].heightNumber.mobile} `,
  };
  const isLoading = false;
  // const { data: bookList, isLoading } = useQuery({
  //     queryKey: [""],
  //     queryFn: () => { },
  // });

  // isLoading 시 스켈레톤 ui 렌더링
  if (isLoading) {
    return <SkeletonPreviewBookImage size={size} />;
  }

  return (
    <div className={`relative flex flex-col ${STYLE.width}`}>
      <div
        className={`${STYLE.img} flex flex-col ${itemsStart ? 'justify-start' : 'justify-end relative'}
          overflow-hidden`}>
        <div>
          <Image
            src={image || DefaultImage}
            alt="책 미리보기 이미지"
            layout="responsive"
            width={0}
            height={0}
          />
      {ranking && (
        <div
          className={`absolute ${itemsStart ? 'top-[-2px] left-17' : ' bottom-[-2px] right-0'}`}>
          <Image
            src={
              itemsStart
                ? ranking > 10
                  ? BookLabelGrayIcon
                  : BookLabelGreenIcon
                : ranking > 10 
                  ? BookLabelBottomGrayIcon
                  : BookLabelBottomIcon
            }
            alt="순위라벨 이미지"
          />
          <span
              className={`text-white text-[13px] font-bold absolute ${itemsStart ? 'top-5 left-10' : 'bottom-5 right-9'} ${
            ranking > 99
              ? itemsStart
                ? 'tracking-[-0.5px] left-[2px]'
                : 'tracking-[-0.5px] left-17'
              : ranking > 9
              ? itemsStart
                ? 'tracking-[-0.6px] left-6'
                : 'tracking-[-0.6px] left-20'
              : ''}`}>
            {ranking}
          </span>
        </div>
      )}

        </div>
      </div>
      {title && <BookTitle title={title} alignCenter={alignCenter} />}
      {authorList && <BookAuthors authorList={authorList} alignCenter={alignCenter} />}
      {category && <BookCategory category={category} />}
      {price && <BookPrice price={price} />}
     </div>
  );
}
export default PreviewBookInfo;