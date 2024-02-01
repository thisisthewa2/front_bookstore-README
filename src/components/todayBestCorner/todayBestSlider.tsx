/* 오늘의 도서 캐러셀 컴포넌트 */

import useWithSlider from '@/hooks/useWithSlider';
import TodayBestBook from '@/components/card/todayBestBookCard/TodayBestBookCard';

interface SliderProps {
  dataList: Array<any>;
  sliderWidth: number;
  sliderHeight: number;
  componentWidth: number;
  auto?: boolean;
  sec?: number;
}

const TodayBestSlider = ({
  dataList,
  sliderWidth,
  sliderHeight,
  componentWidth,
  auto,
  sec,
}: SliderProps) =>
  useWithSlider(
    TodayBestBook,
    dataList,
    sliderWidth,
    sliderHeight,
    componentWidth,
    auto,
    sec,
  );

export default TodayBestSlider;
