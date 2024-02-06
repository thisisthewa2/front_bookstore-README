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

  const carouselElementWidth = ref.current?.clientWidth!;

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
    <div className="relative w-[1200px] overflow-hidden bg-white mobile:w-360 tablet:w-[768px]">
      <div
        className="mx-60 mb-40 flex items-center justify-between mobile:mx-15 mobile:mb-20
          tablet:mx-40">
        <span className="text-20 text-black">신간도서</span>
        <Link href="/domestic/newest" className="text-16 text-green">
          더보기
        </Link>
      </div>
      <div className="mx-24 flex flex-row items-center mobile:mx-15 tablet:mx-14">
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
        <div className="mx-27 overflow-x-hidden scroll-smooth mobile:mx-0 tablet:mx-16">
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
                size="md"
              />
            ))}
          </div>
        </div>
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
  );
}

export default Carousel;
