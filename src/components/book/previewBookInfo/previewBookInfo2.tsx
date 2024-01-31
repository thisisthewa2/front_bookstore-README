import Image, { StaticImageData } from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import { useEffect, useRef, useState } from 'react';
import { THOUSAND_UNIT } from 'src/constants/price';

const BookLabelIcon = ({ fill = '#66C57B' }) => (
  <svg
    width="26"
    height="34"
    viewBox="0 0 26 34"
    fill="cover"
    xmlns="http://www.w3.org/2000/svg">
    <path
      id="Vector"
      d="M26 34L13 24.5556L0 34V3.77778C0 2.77585 0.391325 1.81496 1.08789 1.10649C1.78445 0.398015 2.7292 0 3.71429 0H22.2857C23.2708 0 24.2155 0.398015 24.9121 1.10649C25.6087 1.81496 26 2.77585 26 3.77778V34Z"
      fill={fill}
    />
  </svg>
);

interface PreviewBookInfoProps {
  image?: string | StaticImageData; // TODO: 테스트 후 수정하기(string타입 필요없을지도?)
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
  // const [isLabelMove, setIsLabelMove] = useState(false);
  const [rawImageSize, setRawImageSize] = useState({ width: 0, height: 0 });
  const [loadImageSize, setLoadImageSize] = useState({ width: 0, height: 0 });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [labelPosition, setLabelPosition] = useState('top-[-2px]'); // 라벨 위치 상태 추가

  const IMAGE_SIZE = {
    lg: {
      pc: 'w-192 h-291',
      tablet: 'tablet:w-157 tablet:h-239',
      mobile: 'mobile:w-160 mobile:h-230',
      width: 'w-192 tablet:w-157 mobile:w-160',
      heightNumber: 291,
    },
    md: {
      pc: 'w-163 h-248',
      tablet: 'tablet:w-122 tablet:h-186',
      mobile: 'mobile:w-142 mobile:h-204',
      width: 'w-163 tablet:w-122 mobile:w-142',
      heightNumber: 248,
    },
    sm: {
      pc: 'w-112 h-172',
      tablet: 'tablet:w-122 tablet:h-167',
      mobile: 'mobile:w-93 mobile:h-144',
      width: 'w-112 tablet:w-122 mobile:w-93',
      heightNumber: 172,
    },
  };
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
    width: `${IMAGE_SIZE[size].width}`,
  };

  // const imageSize = IMAGE_SIZE[size];

  // const handleImageLoaded = () => {
  //   setImageLoaded(true);
  //   if (bookImageRef.current) {
  //     setLoadImageSize({
  //       width: bookImageRef.current.offsetWidth,
  //       height: bookImageRef.current.offsetHeight,
  //     });
  //   }
  // };

  // useEffect(() => {
  //   // rawImageSize.height에 따라 라벨 위치 조정
  //   const newPosition =
  //     rawImageSize.height > imageSize.heightNumber
  //       ? 'top-[-3px]'
  //       : 'top-[-2px]';
  //   setLabelPosition(newPosition);
  //   if (imageLoaded && bookImageRef.current) {
  //     setLoadImageSize({
  //       width: bookImageRef.current.offsetWidth,
  //       height: bookImageRef.current.offsetHeight,
  //     });
  //   }
  // }, [rawImageSize, imageSize.heightNumber, imageLoaded]); // rawImageSize 또는 imageSize.heightNumber 변경 시 업데이트

  return (
    <div className={`flex flex-col`}>
      <div className={`${STYLE.img} justify-center items-end`}>
        {/* <div className="relative"> */}
        <div className={`relative flex`}>
          {ranking && (
            <div
              // className={`absolute top-${(bookImageRef.current?.height || 0) - rawImageSize.height}`}
              style={{
                position: 'absolute',
                // top: `${loadImageSize.height - rawImageSize.height}px`,
                top: '-2px',
                left: '17px',
              }}>
              {/* <div
                className={`w-${rawImageSize.width} h-${rawImageSize.height} relative`}
                // style={{
                //   position: 'relative',
                //   width: `${rawImageSize.width}px`,
                //   height: `${rawImageSize.height}px`,
                // }}
              > */}
              <div
              // className={`absolute left-17 $${labelPosition}`}
              // style={{
              //   position: 'absolute',
              //   left: 17,
              //   top: `${labelPosition}`,
              // }}
              >
                <BookLabelIcon fill={ranking > 10 ? '#ABABAB' : undefined} />
                <span
                  className={`text-white text-13 font-bold absolute top-0 left-10 ${
                    ranking > 9 && 'tracking-[-0.5px] left-5'
                  } ${ranking > 99 && 'tracking-[-0.5px] left-[-1px]'}`}>
                  {ranking}
                </span>
              </div>
            </div>
            // </div>
          )}
          <div className={`${STYLE.width} min-h-100 max-h-167 relative`}>
            <Image
              src={image || DefaultImage}
              alt="책 미리보기 이미지"
              ref={bookImageRef}
              // onLoad={handleImageLoaded}
              // onLoadingComplete={({ naturalWidth, naturalHeight }) => {
              //   setRawImageSize({ width: naturalWidth, height: naturalHeight });
              // }}
              // width={loadImageSize.width}
              // height={loadImageSize.height}
              fill
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
        {/* </div> */}
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
