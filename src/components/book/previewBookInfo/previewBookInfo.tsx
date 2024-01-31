import Image, { StaticImageData } from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import { useRef, useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';

const BookLabelIcon = ({ fill ='#66C57B'}) => (
   <svg width="26" height="34" viewBox="0 0 26 34" fill="cover" xmlns="http://www.w3.org/2000/svg">
    <path id="Vector" d="M26 34L13 24.5556L0 34V3.77778C0 2.77585 0.391325 1.81496 1.08789 1.10649C1.78445 0.398015 2.7292 0 3.71429 0H22.2857C23.2708 0 24.2155 0.398015 24.9121 1.10649C25.6087 1.81496 26 2.77585 26 3.77778V34Z" fill={fill} />
  </svg>
);

interface PreviewBookInfoProps {
  image?: StaticImageData; // TODO: 테스트 후 수정하기(string타입 필요없을지도?)
  title?: string;
  alignCenter?: boolean;
  authorList?: string[];
  ranking?: number;
  size: 'sm' | 'md' | 'lg';
  price?: number;
  category?: string;
}

function PreviewBookInfo({
  image,
  title,
  authorList,
  ranking,
  alignCenter,
  size = 'md',
  price,
  category,
}: PreviewBookInfoProps) {
  const bookImageRef = useRef<HTMLImageElement>(null);
  const [isLabelMove, setIsLabelMove] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const IMAGE_SIZE = {
    lg: {
      width: 'w-192',
      height: 'h-291',
      tabletWidth: 'w-157',
      tabletHeight: 'h-239',
      mobileWidth: 'w-160',
      mobileHeight: 'h-230',
      heightNumber: 291,
    },
    md: {
      width: 'w-163',
      height: 'h-248',
      tabletWidth: 'w-122',
      tabletHeight: 'h-186',
      mobileWidth: 'w-142',
      mobileHeight: 'h-204',
      heightNumber: 248,
    },
    sm: {
      width: 'w-112',
      height: 'h-172',
      tabletWidth: 'w-122',
      tabletHeight: 'h-167',
      mobileWidth: 'w-93',
      mobileHeight: 'h-144',
      heightNumber: 172,
    },
  };

  const imageSize = IMAGE_SIZE[size];

  const handleImageLoaded = () => {
    setImageLoaded(true);
    if ((bookImageRef.current?.height || 0) > imageSize.heightNumber && isLabelMove) {
      setIsLabelMove(true);
    }
  };

  return (
    <div
      className={`flex ${imageSize.width} mobile:${imageSize.mobileWidth}
        tablet:${imageSize.tabletWidth} flex-col`}>
      <div
        className={`${imageSize.height} mobile:${imageSize.mobileWidth}
          tablet:${imageSize.tabletHeight} flex relative justify-center items-end`}>
        <div className="relative">
          <div
            className={`flex items-end h-${
              imageLoaded &&
              (bookImageRef.current?.height || 0) > imageSize.heightNumber
                ? `${imageSize.heightNumber} `
                : `${bookImageRef.current?.height} `
            } overflow-hidden`}>
            <Image
              src={image || DefaultImage}
              alt="책 미리보기 이미지"
              ref={bookImageRef}
              onLoad={handleImageLoaded}
            />
            {ranking && (
              <div
                className={`absolute left-17 ${isLabelMove && size !== 'lg' ? 'top-[-3px]' : 'top-[-2px]'}`}>
                <BookLabelIcon fill={ranking > 10 ? '#ABABAB' : undefined } />
                <span
                  className={`text-white text-13 font-bold absolute top-0 left-10 ${
                    ranking > 9 && 'tracking-[-0.5px] left-5' 
                  } ${ranking > 99 && 'tracking-[-0.5px] left-[-1px]'}`}>
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
      {category && (
        <div className="text-gray-3 text-14 ">
          [{category}]
        </div>
      )}
       {price && (
        <div className="text-black text-14 font-bold mt-4">
          {price.toString().replace(THOUSAND_UNIT,",")}
        </div>
      )}
    </div>
  );
}
export default PreviewBookInfo;
