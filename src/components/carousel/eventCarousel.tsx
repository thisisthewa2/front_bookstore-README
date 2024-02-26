import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import EventDefaultImageMobile from '@/public/images/EventImageMobileDefault.png';
import EventDefaultImage from '@/public/images/EventImageDefault.png';

interface EventCarouselProps {
  eventImages?: {
    pc: StaticImageData[] | string[];
    mobile: StaticImageData[] | string[];
  };
  eventLink?: string;
  classNames: string;
}

function EventCarousel({
  eventImages = { pc: [], mobile: [] },
  classNames,
}: EventCarouselProps) {
  const [currIndex, setCurrIndex] = useState(0);
  const [fullImageList, setFullImageList] = useState<
    (string | StaticImageData)[]
  >([]); // 전체 이미지 리스트 (버퍼 이미지 포함)
  const [currList, setCurrList] = useState<(string | StaticImageData)[]>([]); // 화면에 표시될 이미지 리스트 (버퍼 이미지 제외)
  const [ButtonActiveIndex, setButtonActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);
  let noEventImage: StaticImageData | string;

  const updateIndex = (index: number) => {
    // 버튼 클릭시 보여줄 이미지와 button 상태 변경
    setCurrIndex(index + 1);
    setButtonActiveIndex(index);
  };

  useEffect(() => {
    // 브라우저 사이즈에 따라 pc/mobile용 이미지를 currList에 저장
    const updateImageLists = () => {
      const width = window.innerWidth;
      const isMobile = width < 768;
      const selectedImages = isMobile ? eventImages.mobile : eventImages.pc;
      noEventImage = isMobile ? EventDefaultImageMobile : EventDefaultImage;

      if (selectedImages.length > 0) {
        const firstImage = selectedImages[0];
        const lastImage = selectedImages[selectedImages.length - 1];
        // 전체 이미지 리스트 업데이트 (버퍼 이미지 포함)
        const newList = [lastImage, ...selectedImages, firstImage];
        setFullImageList(newList);
        // 화면에 표시될 이미지 리스트 업데이트 (버퍼 이미지 제외)
        setCurrList(selectedImages);
      }
    };

    updateImageLists();
    window.addEventListener('resize', updateImageLists);

    return () => {
      window.removeEventListener('resize', updateImageLists);
    };
  }, [eventImages.mobile, eventImages.pc]);

  useEffect(() => {
    // 이미지 슬라이드 기능
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${currIndex * 100}%)`;
    }
    const intervalId = setInterval(() => {
      setCurrIndex((prevIndex) => {
        const nextIndex = prevIndex >= currList.length ? 1 : prevIndex + 1;
        setButtonActiveIndex(nextIndex - 1); // 버튼 상태 업데이트
        return nextIndex; // 다음 슬라이드로 이동
      });
    }, 3000); // 3초마다 실행

    // 클린업 함수
    return () => {
      clearInterval(intervalId);
    };
  }, [currIndex, currList.length, ButtonActiveIndex]);

  return (
    <div
      className={`relative flex flex-col items-center justify-end rounded-[10px] bg-gray-5 ${classNames} overflow-x-hidden`}>
      <div className="flex-center left-30% absolute bottom-20 z-10 h-20 w-100 gap-10 mobile:bottom-8">
        {currList.map((_, idx) => (
          <button
            className={`h-10 w-10 rounded-full bg-gray-1 hover:bg-primary active:bg-primary ${ButtonActiveIndex === idx ? 'bg-primary' : ''} mobile:h-5 mobile:w-5`}
            onClick={() => updateIndex(idx)}
            key={idx}
          />
        ))}
      </div>
      <ul
        className="relative flex h-full w-full scroll-smooth transition-transform"
        ref={carouselRef}>
        {fullImageList.map((image, idx) => (
          <li key={idx} className="relative flex w-full flex-shrink-0">
            <Image
              src={image || noEventImage}
              alt={`이벤트 이미지 ${idx}`}
              fill
              objectFit="cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventCarousel;
