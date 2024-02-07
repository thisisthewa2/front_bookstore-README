import { PreviewBookInfoSizeProps } from '@/types/previewBookInfoType';
import { IMAGE_SIZE } from 'src/constants/size/previewBookImageSize';

function SkeletonPreviewBookImage({ size }: PreviewBookInfoSizeProps) {
  return (
    <div
      role="book-info"
      className={`bg-gray-1 border-2 border-gray-1 flex flex-col animate-pulse`}>
      <div role="title"></div>
      <div role="author-publisher">
        <div role="author"></div>
        <div role="publisher"></div>
      </div>
      <div role="published-date"></div>
      <div role="rating"></div>
      <div role="category"></div>
      <div role="price"></div>
    </div>
  );
}

export default SkeletonPreviewBookImage;
