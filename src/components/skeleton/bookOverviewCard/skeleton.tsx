
import { SKELETON_COMMON_STYLE } from 'src/constants/style/skeletonCommonStyle';

SKELETON_COMMON_STYLE;

function SkeletonBookOverviewCard() {
  return (
    <div
      role="card-container"
      className="border-2 border-gray-1 flex flex-col justify-between h-220 p-30 rounded-lg
        mobile:p-15 mobile:pb-15 mobile:w-330 mobile:h-251 relative animate-pulse">
      <div role="book-info-container" className="flex relative">
        <div
          role="image"
          className="w-112 h-170 mobile:w-93 mobile:h-141"></div>
        <div
          role="book-info"
          className="flex flex-col justify-start items-start gap-8 ml-30 mr-auto mobile:max-w-185
            mobile:ml-12 mobile:gap-4">
          <div
            role="title"
            className={`${SKELETON_COMMON_STYLE} w-250 tablet:w-200 mobile:w-180 h-25 mobile:h-40`}></div>
          <div role="author-publisher" className="flex-center gap-4">
            <div
              role="author"
              className={`${SKELETON_COMMON_STYLE} w-100 h-15`}></div>
            <div
              role="publisher "
              className={`${SKELETON_COMMON_STYLE} w-100 h-15 mobile:hidden`}></div>
          </div>
          <div
            role="published-date"
            className={`${SKELETON_COMMON_STYLE} w-100 h-15`}></div>
          <div
            role="rating"
            className={`${SKELETON_COMMON_STYLE} w-100 h-15`}></div>
          <div
            role="category"
            className={`${SKELETON_COMMON_STYLE} w-100 h-15 pc:hidden tablet:hidden`}></div>
          <div
            role="price"
            className={`${SKELETON_COMMON_STYLE} w-100 h-15`}></div>
        </div>
        <div
          role="buttons"
          className="flex flex-col items-end gap-30 tablet:absolute tablet:right-0 mobile:absolute
            mobile:bottom-16 mobile:right-0">
          <div
            role="like-button"
            className="rounded-lg border-2 border-gray-1 flex-center flex-col gap-2 bg-gray-1 w-22 h-22"></div>
          <div
            role="cart-button"
            className="flex flex-col gap-12 mobile:hidden">
            <div className="rounded-lg border-2 border-gray-1 bg-gray-1 w-130 h-40 mobile:w-140"></div>
            <div className="rounded-lg border-2 border-gray-1 bg-gray-1 w-130 h-40 mobile:w-140"></div>
          </div>
        </div>
      </div>
      {/* 모바일에서만 보이는 컴포넌트(장바구니/구매하기 버튼)*/}
      <div role="mobile-section" className="pt-10 pc:hidden tablet:hidden">
        <div className="w-328 absolute left-0 bottom-70 border border-b-1 border-gray-1"></div>
        <div role="mobile-cart-button" className="flex gap-10">
          <div
            className={`${SKELETON_COMMON_STYLE} w-130 h-40 mobile:w-140`}></div>
          <div
            className={`${SKELETON_COMMON_STYLE} w-130 h-40 mobile:w-140`}></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonBookOverviewCard;

