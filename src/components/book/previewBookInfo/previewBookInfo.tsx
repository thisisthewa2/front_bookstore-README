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
  image?: string | StaticImageData; 
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
  const [rawImageSize, setRawImageSize] = useState({width: 0, height:0})
 const IMAGE_SIZE = {
    lg: {
      pc: 'w-192 h-291',
      tablet: 'tablet:w-157 tablet:h-239',
     mobile: 'mobile:w-160 mobile:h-230',
      widthOnly : 'w-192 tablet:w-157 mobile:w-160',
     heightNumber: {pc: 291, tablet: 239, mobile: 160},
    },
    md: {
      pc: 'w-163 h-248',
      tablet: 'tablet:w-122 tablet:h-186',
      mobile: 'mobile:w-142 mobile:h-204',
      widthOnly: 'w-163 tablet:w-122 mobile:w-142',
       heightNumber: {pc: 248, tablet: 186, mobile: 142},
    },
    sm: {
      pc: 'w-112 h-172',
      tablet: 'tablet:w-122 tablet:h-167',
      mobile: 'mobile:w-93 mobile:h-144',
      widthOnly: 'w-112 tablet:w-122 mobile:w-93',
       heightNumber: {pc: 172, tablet: 167, mobile: 93},
    },
  };
  const imageSize = IMAGE_SIZE[size];
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
    width: `${IMAGE_SIZE[size].widthOnly}`,
    height: `h${IMAGE_SIZE[size].heightNumber.pc} tablet:h-${IMAGE_SIZE[size].heightNumber.tablet} mobile:h-${IMAGE_SIZE[size].heightNumber.mobile} `
};
  
  interface RawImageSize {
    naturalWidth: number;
    naturalHeight: number;
  }
   const handleSetting = ({naturalWidth,naturalHeight}: RawImageSize) => {
    setRawImageSize({width: naturalWidth, height: naturalHeight});
  }

  const handleImageLoaded = () => {
    setImageLoaded(true);
    if ((bookImageRef.current?.height || 0) > imageSize.heightNumber.pc && isLabelMove) {
      setIsLabelMove(true);
    }
  };

  return (
    <div
      className={`flex ${STYLE.width} flex-col`}>
      <div
        className={`${STYLE.img} flex relative justify-center items-end`}>
        <div className="relative">
          <div
            className={`flex items-end min-w-${rawImageSize.width} h-${
              imageLoaded &&
              (bookImageRef.current?.height || 0) > imageSize.heightNumber.pc
                ? `${STYLE.height} `
                : `${bookImageRef.current?.height} `
            } overflow-hidden`}>
            <Image
              src={image || DefaultImage}
              alt="책 미리보기 이미지"
              ref={bookImageRef}
              onLoad={handleImageLoaded}
              onLoadingComplete={(img) => handleSetting(img)}
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
