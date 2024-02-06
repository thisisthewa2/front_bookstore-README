/* 캐러셀 hook

params: 
  - InnerComponent: required, 컴포넌트, 캐러셀 안에 들어갈 컴포넌트
  - dataList: required, Array, 캐러셀에 넣을 배열, 최소 length 가 2 이상만 가능
  - sliderWidth: required, number, 캐러셀 컴포넌트 크기
  - sliderHeight: required, number, 캐러셀 컴포넌트 높이
  - componentWidth: required, number, 캐러셀 안에 들어갈 img나 컴포넌트의 크기(만약 캐러셀 안에 꽉 차게 요소를 넣을 거면 sliderWidth와 같은 값을 넣으면 됨)
  - auto: optional, boolean, 자동으로 캐러셀이 넘겨지게 하려면 true 값을 주세요
  - sec: optional, number, auto true 속성을 줄 때 몇 초 간격으로 넘겨줄지 초단위로 값을 주세요, 예를 들어 5초면 5만 입력 (5000 아님)

returns: component
*/

import { useEffect, useMemo, useState } from 'react';

import registDragEvent from '@/utils/registerDragEvent';
import { inrange } from '@/utils/inrange';

export default function useWithSlider(
  InnerComponent: any,
  dataList: Array<any>,
  sliderWidth: number,
  sliderHeight: number,
  componentWidth: number,
  auto = false,
  sec = 0,
) {
  const slideList = useMemo(
    () => [dataList.at(-1), ...dataList, dataList.at(0)],
    [dataList],
  );
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transX, setTransX] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (sec && auto) {
      const len = slideList.length;
      let time = setTimeout(() => {
        if (currentIndex == 1) {
          setCurrentIndex(currentIndex - 1);
          setAnimate(true);
        } else if (currentIndex == 0) {
          setCurrentIndex(len - 3);
          setAnimate(true);
        } else {
          setCurrentIndex(currentIndex - 1);
          setAnimate(true);
        }
      }, sec * 1000);
      return () => {
        clearInterval(time);
      };
    }
  }, [currentIndex, sec, auto, slideList]);

  if (dataList.length < 2) return;

  return (
    <>
      <div
        className="flex items-center overflow-hidden"
        style={{
          width: sliderWidth,
          height: sliderHeight,
        }}>
        <div
          className="flex"
          style={{
            transform: `translateX(${-currentIndex * componentWidth + transX + Math.floor(sliderWidth / 2) - Math.floor(componentWidth / 2)}px)`,
            transition: `transform ${animate ? 300 : 0}ms ease-in-out 0s`,
          }}
          {...registDragEvent({
            onDragChange: (deltaX: number) => {
              setTransX(
                inrange(deltaX, -componentWidth + 10, componentWidth - 10),
              );
            },
            onDragEnd: (deltaX: number) => {
              const maxIndex = slideList.length - 1;

              if (deltaX < -100)
                setCurrentIndex(inrange(currentIndex + 1, 0, maxIndex));
              if (deltaX > 100)
                setCurrentIndex(inrange(currentIndex - 1, 0, maxIndex));

              setAnimate(true);
              setTransX(0);
            },
          })}
          onTransitionEnd={() => {
            setAnimate(false);

            if (currentIndex === 0) {
              setCurrentIndex(slideList.length - 2);
            } else if (currentIndex === slideList.length - 1) {
              setCurrentIndex(1);
            }
          }}>
          {slideList.map((el, i) => (
            <div
              key={i}
              className="flex-center"
              style={{
                width: componentWidth,
              }}>
              <InnerComponent {...el} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
