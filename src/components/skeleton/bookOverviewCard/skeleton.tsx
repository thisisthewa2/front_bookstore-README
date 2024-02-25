import { PreviewBookInfoSizeProps } from '@/types/previewBookInfoType';
import { SKELETON_COMMON_STYLE } from 'src/constants/style/skeletonCommonStyle';
import SkeletonPreviewBookImage from '@/components/skeleton/previewBookImage/skeleton';

function SkeletonBookOverviewCard({ size }: PreviewBookInfoSizeProps) {
  return (
    <div
      role="card-container"
      className="relative flex h-220 animate-pulse flex-col justify-between rounded-lg border-2 border-gray-1
        p-30 mobile:h-251 mobile:w-330 mobile:p-15 mobile:pb-15 tablet:w-[511px]">
      <div role="book-info-container" className="relative flex">
        <SkeletonPreviewBookImage size={size} />
        <div
          role="book-info"
          className="ml-30 mr-auto flex flex-col items-start justify-start gap-8 mobile:ml-12
            mobile:max-w-185 mobile:gap-4">
          <div
            role="title"
            className={`${SKELETON_COMMON_STYLE} h-25 w-250 mobile:h-40 mobile:w-180 tablet:w-200`}></div>
          <div role="author-publisher" className="flex-center gap-4">
            <div
              role="author"
              className={`${SKELETON_COMMON_STYLE} h-15 w-100`}></div>
            <div
              role="publisher "
              className={`${SKELETON_COMMON_STYLE} h-15 w-100 mobile:hidden`}></div>
          </div>
          <div
            role="published-date"
            className={`${SKELETON_COMMON_STYLE} h-15 w-100`}></div>
          <div
            role="rating"
            className={`${SKELETON_COMMON_STYLE} h-15 w-100`}></div>
          <div
            role="category"
            className={`${SKELETON_COMMON_STYLE} h-15 w-100 tablet:hidden pc:hidden`}></div>
          <div
            role="price"
            className={`${SKELETON_COMMON_STYLE} h-15 w-100`}></div>
        </div>
        <div
          role="buttons"
          className="flex flex-col items-end gap-30 mobile:absolute mobile:bottom-16 mobile:right-0
            tablet:absolute tablet:right-0">
          <div
            role="like-button"
            className="flex-center h-22 w-22 flex-col gap-2 rounded-lg border-2 border-gray-1 bg-gray-1"></div>
          <div
            role="cart-button"
            className="flex flex-col gap-12 mobile:hidden">
            <div className="h-40 w-130 rounded-lg border-2 border-gray-1 bg-gray-1 mobile:w-140"></div>
            <div className="h-40 w-130 rounded-lg border-2 border-gray-1 bg-gray-1 mobile:w-140"></div>
          </div>
        </div>
      </div>
      {/* 모바일에서만 보이는 컴포넌트(장바구니/구매하기 버튼)*/}
      <div role="mobile-section" className="pt-10 tablet:hidden pc:hidden">
        <div className="border-b-1 absolute bottom-70 left-0 w-328 border border-gray-1"></div>
        <div role="mobile-cart-button" className="flex gap-10">
          <div
            className={`${SKELETON_COMMON_STYLE} h-40 w-130 mobile:w-140`}></div>
          <div
            className={`${SKELETON_COMMON_STYLE} h-40 w-130 mobile:w-140`}></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonBookOverviewCard;
