/* 스켈레톤용 실시간 인기도서 책 컴포넌트 */

function SkeletonTodayBestBook() {
  return (
    <div
      role="card-container"
      className="flex h-240 max-w-350 items-start justify-start gap-20 rounded-xl border-2 border-gray-1 bg-white px-40
        pt-40 mobile:h-181 mobile:w-300 mobile:gap-10 mobile:px-20 mobile:pt-20 tablet:h-220 tablet:px-30 tablet:pt-30">
      <div
        role="img-section"
        className="relative h-170 w-112 animate-pulse rounded-xl bg-gray-1 mobile:h-141 mobile:w-93"></div>
      <div className="flex animate-pulse flex-col gap-8">
        <h1 className="h-30 w-140 rounded-xl bg-gray-1"></h1>
        <p className="h-19 w-80 rounded-xl bg-gray-1"></p>
        <p className="h-20 w-70 rounded-xl bg-gray-1"></p>
        <p className="h-18 w-50 rounded-xl bg-gray-1"></p>
        <p className="h-15 w-60 rounded-xl bg-gray-1"></p>
      </div>
    </div>
  );
}

export default SkeletonTodayBestBook;
