import Image, { StaticImageData } from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import { useRef, useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';
import BookLabelGrayIcon from '@/public/icons/BookLabelGrayIcon.svg';
import BookLabelGreenIcon from '@/public/icons/BookLabelIGreenIcon.svg';
import { PreviewBookInfoProps } from '@/types/previewBookInfoType';
import { IMAGE_SIZE } from 'src/constants/previewBookSize';

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
  const bookImageRef = useRef<HTMLImageElement>(null);
  // const [isLabelMove, setIsLabelMove] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loadImageSize, setLoadImageSize] = useState({ width: 0, height: 0 });

  const imageSize = IMAGE_SIZE[size];
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
    width: `${IMAGE_SIZE[size].widthOnly}`,
    height: `h-${IMAGE_SIZE[size].heightNumber.pc} tablet:h-${IMAGE_SIZE[size].heightNumber.tablet} mobile:h-${IMAGE_SIZE[size].heightNumber.mobile} `,
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
    setLoadImageSize({
      width: bookImageRef.current?.width || 0,
      height: bookImageRef.current?.height || 0,
    });
  };
  return (
    <div className={`flex flex-col`}>
      <div className={`${STYLE.img} relative`}>
        <div
          className={`flex overflow-hidden items-end min-w-${bookImageRef.current?.width} ${
            imageLoaded && `min-h-${loadImageSize.height}`
          }`}>
          <Image
            src={image || DefaultImage}
            alt="책 미리보기 이미지"
            ref={bookImageRef}
            onLoad={handleImageLoaded}
            layout="responsive"
            width={192}
            height={291}
            sizes={`max-height:${bookImageRef.current?.height} max-width:${bookImageRef.current?.width}`}
            className={`max-${imageSize.widthOnly}`}
            priority
          />
          {ranking && (
            <div className="absolute left-17 top-[-2px]">
              <Image
                src={ranking > 10 ? BookLabelGrayIcon : BookLabelGreenIcon}
                alt="순위라벨 이미지"
              />
              <span
                className={`text-white text-[13px] font-bold absolute top-5 left-10 ${
                  ranking > 9 && 'tracking-[-0.6px] left-6'
                } ${ranking > 99 && 'tracking-[-0.5px] left-[2px]'}`}>
                {ranking}
              </span>
            </div>
          )}
        </div>
      </div>
      {title && (
        <p
          className={`text-black text-15 font-medium text-overflow2 mb-4 mt-12 ${
            alignCenter ? 'text-center font-bold' : ''
          }`}>
          {title}
        </p>
      )}
      {authorList && (
        <div className="text-gray-3 text-14 truncate">
          {authorList.join(', ')}
        </div>
      )}
      {category && <div className="text-gray-3 text-14">[{category}]</div>}
      {price && (
        <div className="text-black text-14 font-bold mt-4">
          {price.toString().replace(THOUSAND_UNIT, ',')}
        </div>
      )}
    </div>
  );
}
export default PreviewBookInfo;
