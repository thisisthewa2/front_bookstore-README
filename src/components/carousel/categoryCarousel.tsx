import CarouselCard from '@/components/carousel/carouselCard';
import useCarouselEnv from '@/hooks/useCarouselEnv';
import { EnvType, NewBook, ResponSive } from '@/types/carouselType';
import { inrange } from '@/utils/inrange';
import registDragEvent from '@/utils/registerDragEvent';
import Image from 'next/image';

import { useEffect, useMemo, useRef, useState } from 'react';
const DESKTOP_MARGIN_VALUE = 30; // 캐러셀 컨테이너 895
const TABLET_MARGIN_VALUE = 20; // 캐러셀컨테이너 511
const MOBILE_MARGIN_VALUE = 10; // 캐럴셀 컨테이너 330

const calcMarginValue = (env: EnvType) => {
  switch (env) {
    case 'desktop':
      return DESKTOP_MARGIN_VALUE;
    case 'tablet':
      return TABLET_MARGIN_VALUE;
    case 'mobile':
      return MOBILE_MARGIN_VALUE;
    default:
      return 0;
  }
};

type CarouselProps = {
  data: NewBook[];
  responsive: ResponSive;
};

function CategoryCarousel({ data, responsive }: CarouselProps) {
  const { env } = useCarouselEnv();
  const [currentIndex, setCurrentIndex] = useState(0);
  const CONTENT_WIDTH = responsive[env]?.imageSize.width!;
  const ref = useRef<HTMLDivElement>(null);

  const calcContentWidthValue = Math.floor(
    CONTENT_WIDTH + calcMarginValue(env),
  );

  const transformCarousel = (currentIndex: number) => {
    if (ref.current) {
      ref.current.style.transform = `translateX(${currentIndex * (calcContentWidthValue * -1)}px)`;
    }
  };

  let carouselElementWidth = ref.current?.clientWidth!;

  const visibleItemsCount = useMemo(() => {
    return Math.round(carouselElementWidth / calcContentWidthValue);
  }, [carouselElementWidth, calcContentWidthValue]);

  const maxPage = useMemo(() => {
    return data.length - visibleItemsCount;
  }, [data, visibleItemsCount]);

  const btnpressprev = () => {
    if (currentIndex < 1) return;
    const prevIndex = currentIndex - 1;
    setCurrentIndex(prevIndex);
    transformCarousel(prevIndex);
  };
  const btnpressnext = () => {
    if (currentIndex === maxPage) return;
    const nextIndex = currentIndex + 1;
    setCurrentIndex(nextIndex);
    transformCarousel(nextIndex);
  };

  const resetCurrentIndex = () => {
    setCurrentIndex(0);
    transformCarousel(0);
  };

  const onDragEndTransform = (carouselIndex: number) => {
    const boundaryIndex = inrange(carouselIndex, 0, maxPage);
    setCurrentIndex(boundaryIndex);
    transformCarousel(boundaryIndex);
  };
  useEffect(resetCurrentIndex, [env]);

  return (
    <div className="relative w-[895px] overflow-hidden bg-white mobile:w-330 tablet:w-[511px]">
      <div className="mb-40 flex items-center justify-between mobile:mb-20">
        <span className="text-20 text-black">신간도서</span>
        <div className="flex gap-x-30">
          <button
            onClick={btnpressprev}
            className="flex h-full w-10 items-center justify-center bg-transparent mobile:hidden">
            <div className="relative h-16 w-10">
              <Image
                className="cursor-pointer"
                src={
                  currentIndex === 0
                    ? '/icons/CarouselLeftInActivateArrow.svg'
                    : '/icons/CarouselLeftActivateArrow.svg'
                }
                alt="왼쪽화살표"
                fill
              />
            </div>
          </button>
          <button
            onClick={btnpressnext}
            className="right-0 flex h-full w-10 items-center justify-center bg-transparent
              mobile:hidden">
            <div className="relative h-16 w-10">
              <Image
                src={
                  currentIndex === maxPage && maxPage !== 0
                    ? '/icons/CarouselRightInActivateArrow.svg'
                    : '/icons/CarouselRightActivateArrow.svg'
                }
                alt="오른쪽화살표"
                fill
              />
            </div>
          </button>
        </div>
      </div>
      <div className="flex flex-row items-center">
        <div className="overflow-x-hidden scroll-smooth">
          <div
            className="flex scroll-smooth transition-transform"
            ref={ref}
            {...registDragEvent({
              onDragChange: (deltaX) => {
                const boundaryDelta = inrange(
                  deltaX,
                  -calcContentWidthValue,
                  calcContentWidthValue,
                );
                if (ref.current) {
                  ref.current.style.transform = `translateX(${boundaryDelta + calcContentWidthValue * -currentIndex}px)`;
                }
              },
              onDragEnd: (deltaX) => {
                if (deltaX < 0) {
                  onDragEndTransform(currentIndex + 1);
                }
                if (deltaX > 0) {
                  onDragEndTransform(currentIndex - 1);
                }
              },
            })}>
            {data.map((item, index) => (
              <CarouselCard
                key={index}
                {...item}
                imageSize={responsive[env].imageSize}
                marginRight={calcMarginValue(env)}
                size="sm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCarousel;
