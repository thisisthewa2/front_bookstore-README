/* 메인 페이지에 들어갈 실시간 인기 도서 코너 컴포넌트 */

// TODO - props 없이 내부에서 data fetching을 받도록 구현할 예정으로, 지금은 목업데이터를 쓰게끔 함

import TodayBestBook from '@/components/card/todayBestBookCard/TodayBestBookCard';
import TodayBestSlider from '@/components/container/todayBestSection/todayBestSlider';
import useWindowInnerWidth from '@/hooks/useWindowInnerWidth';

import SkeletonTodayBestBook from '@/components/skeleton/todayBestBookSkeleton/skeletonTodayBestBook';
import { TodayBestBookListMock } from '@/pages/api/mock/todayBestSectionMock';

// width, height, top, bottom, left, right 관련 속성을 모아둔 SIZE 객체
const SIZE = {
  desktop: {
    container: 'w-full h-[633px]',
    'colored-background': 'w-full h-273',
    title: 'text-24 top-60',
    'card-section': 'top-93',
  },
  tablet: {
    container: 'tablet:h-[833px]',
    'card-section': 'tablet:top-133',
  },
  mobile: {
    container: 'mobile:h-[268px]',
    'colored-background': 'mobile:h-187',
    title: 'mobile:text-20 mobile:top-40',
    'card-section': 'mobile:top-87',
  },
};

const STYLE = {
  container: `${SIZE.desktop.container} ${SIZE.tablet.container} ${SIZE.mobile.container}`,
  'colored-background': `${SIZE.desktop['colored-background']} ${SIZE.mobile['colored-background']}`,
  title: `${SIZE.desktop.title} ${SIZE.mobile.title}`,
  'card-section': `${SIZE.desktop['card-section']} ${SIZE.tablet['card-section']} ${SIZE.mobile['card-section']}`,
};

function TodayBestSection() {
  // const { data: bookList, isLoading } = useQuery({
  //     queryKey: [""],
  //     queryFn: () => { },
  // });
  const isLoading = false;
  const bookList = TodayBestBookListMock;
  const { dynamicWid } = useWindowInnerWidth();

  // isLoading 시 스켈레톤 ui 렌더링
  if (isLoading) {
    return (
      <div
        role="container"
        className={`relative flex flex-col items-center justify-start overflow-hidden
          ${STYLE.container}`}>
        <div
          role="colored-background"
          className={`flex-center bg-gray-1 ${STYLE['colored-background']}`}>
          <h1 role="title" className={`absolute font-bold ${STYLE.title}`}>
            실시간 인기 도서
          </h1>
        </div>
        <div
          role="card-section"
          className={`absolute grid grid-flow-col grid-rows-2 gap-20 tablet:grid-rows-3
            ${STYLE['card-section']}`}>
          {[0, 1, 2, 3, 4, 5].map((key) => {
            return (
              <div
                key={key}
                className={`${key === 2 || key === 3 ? `relative top-40` : ``} mobile:static tablet:static`}>
                <SkeletonTodayBestBook />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 데탑, 타블렛 환경에선 그냥 TodayBestBook map으로 렌더링, 모바일환경에선 TodayBestSlider 렌더링.
  return (
    <div
      className={`relative flex flex-col items-center justify-start overflow-hidden
        ${STYLE.container}`}>
      <div
        role="colored-background"
        className={`flex-center bg-gray-1 ${STYLE['colored-background']}`}>
        <h1 role="title" className={`absolute font-bold ${STYLE.title}`}>
          실시간 인기 도서
        </h1>
      </div>
      <div role="card-section" className={`absolute ${STYLE['card-section']}`}>
        <div className="grid grid-flow-col grid-rows-2 gap-20 mobile:hidden tablet:grid-rows-3">
          {bookList ? (
            <>
              {bookList?.map((book, ind) => {
                return (
                  <div
                    key={book.bookId}
                    className={`${ind === 2 || ind === 3 ? `relative top-40` : ``} mobile:static tablet:static`}>
                    <TodayBestBook {...book} />
                  </div>
                );
              })}
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="hidden mobile:block">
          <TodayBestSlider
            dataList={bookList}
            sliderWidth={dynamicWid}
            sliderHeight={181}
            componentWidth={320}
            auto={true}
            sec={5}
          />
        </div>
      </div>
    </div>
  );
}

export default TodayBestSection;
