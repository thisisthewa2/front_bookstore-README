import CarouselCard from '@/components/carousel/carouselCard';
import useCarouselEnv from '@/hooks/useCarouselEnv';
import { NewBook, ResponSive } from '@/types/carouselType';
import { inrange } from '@/utils/inrange';
import registDragEvent from '@/utils/registerDragEvent';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
const CARD_MARGIN_VALUE = 20;

type CarouselProps = {
  data: NewBook[];
  responsive: ResponSive;
};

function Carousel({ data, responsive }: CarouselProps) {
  const { env } = useCarouselEnv();
  const [currentIndex, setCurrentIndex] = useState(0);
  const CONTENT_WIDTH = responsive[env]?.imageSize.width!;
  const ref = useRef<HTMLDivElement>(null);

  const calcContentWidthValue = Math.floor(CONTENT_WIDTH + CARD_MARGIN_VALUE);

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
    <div className="bg-white relative overflow-hidden w-[1200px] tablet:w-[768px] mobile:w-360">
      <div
        className="flex items-center justify-between mx-60 tablet:mx-40 mobile:mx-15 mb-40
          mobile:mb-20">
        <span className="text-black text-20">신간도서</span>
        <Link href="/domestic/newest" className="text-green text-16">
          더보기
        </Link>
      </div>
      <div className="flex flex-row items-center mx-24 tablet:mx-14 mobile:mx-15">
        <button
          onClick={btnpressprev}
          className="w-10 h-full flex justify-center items-center bg-transparent mobile:hidden">
          <div className="w-10 h-16 relative">
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
        <div className="mx-27 tablet:mx-16 mobile:mx-0 overflow-x-hidden scroll-smooth">
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
                marginRight={CARD_MARGIN_VALUE}
              />
            ))}
          </div>
        </div>
        <button
          onClick={btnpressnext}
          className="w-10 h-full flex justify-center items-center bg-transparent right-0
            mobile:hidden">
          <div className="w-10 h-16 relative">
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
  );
}

export default Carousel;
