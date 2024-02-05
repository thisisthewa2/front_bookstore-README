import Image, { StaticImageData } from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import { useRef, useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';
import BookLabelGrayIcon from '@/public/icons/BookLabelGrayIcon.svg';
import BookLabelGreenIcon from '@/public/icons/BookLabelIGreenIcon.svg';
import { PreviewBookInfoProps } from '@/types/previewBookInfoType';

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
  const [isLabelMove, setIsLabelMove] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [rawImageSize, setRawImageSize] = useState({ width: 0, height: 0 });
  const IMAGE_SIZE = {
    lg: {
      pc: 'w-192 h-291',
      tablet: 'tablet:w-157 tablet:h-237',
      mobile: 'mobile:w-160 mobile:h-242',
      widthOnly: 'w-192 tablet:w-157 mobile:w-160',
      heightNumber: { pc: 291, tablet: 237, mobile: 242 },
    },
    md: {
      pc: 'w-163 h-246',
      tablet: 'tablet:w-122 tablet:h-184',
      mobile: 'mobile:w-142 mobile:h-202',
      widthOnly: 'w-163 tablet:w-122 mobile:w-142',
      heightNumber: { pc: 246, tablet: 184, mobile: 202 },
    },
    sm: {
      pc: 'w-112 h-170',
      tablet: 'tablet:w-112 tablet:h-170',
      mobile: 'mobile:w-93 mobile:h-141',
      widthOnly: 'w-112 tablet:w-112 mobile:w-93',
      heightNumber: { pc: 170, tablet: 170, mobile: 141 },
    },
  };
  const imageSize = IMAGE_SIZE[size];
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
    width: `${IMAGE_SIZE[size].widthOnly}`,
    height: `h-${IMAGE_SIZE[size].heightNumber.pc} tablet:h-${IMAGE_SIZE[size].heightNumber.tablet} mobile:h-${IMAGE_SIZE[size].heightNumber.mobile} `,
  };

  interface RawImageSizeProps {
    naturalWidth: number;
    naturalHeight: number;
  }
  const handleSetting = ({
    naturalWidth,
    naturalHeight,
  }: RawImageSizeProps) => {
    setRawImageSize({ width: naturalWidth, height: naturalHeight });
  };

  const handleImageLoaded = () => {
    setImageLoaded(true);
    if (
      (bookImageRef.current?.height || 0) > imageSize.heightNumber.pc &&
      isLabelMove
    ) {
      setIsLabelMove(true);
    }
  };
  return (
    <div className={`flex ${STYLE.width} flex-col`}>
      <div
        className={`${STYLE.img} flex relative justify-center ${itemsStart ? '' : 'items-end'}`}>
        <div className="relative">
          <div
            className={`flex items-end min-w-${rawImageSize.width} ${
              imageLoaded &&
              (bookImageRef.current?.height || 0) > imageSize.heightNumber.pc
                ? `${STYLE.height}`
                : `h-${bookImageRef.current?.height}`
            } overflow-hidden`}>
            <Image
              src={image || DefaultImage}
              alt="책 미리보기 이미지"
              ref={bookImageRef}
              onLoad={handleImageLoaded}
              onLoadingComplete={(img) => handleSetting(img)}
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
