import { PreviewBookInfoSizeProps } from '@/types/previewBookInfoType';
import { IMAGE_SIZE } from 'src/constants/size/previewBookImageSize';

function SkeletonPreviewBookImage({ size }: PreviewBookInfoSizeProps) {
  return (
    <div
      role="container"
      className={`bg-gray-1 border-2 border-gray-1 flex flex-col animate-pulse`}>
      <div></div>
      <div>
        <div></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default SkeletonPreviewBookImage;
