import { PreviewBookInfoSizeProps } from '@/types/previewBookInfoType';
import { IMAGE_SIZE } from 'src/constants/style/previewBookImageSize';


function SkeletonPreviewBookImage({ size }: PreviewBookInfoSizeProps) {
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
  };
  return (
    <div
      role="container"
      className={`bg-gray-1 border-2 border-gray-1 flex flex-col animate-pulse ${STYLE.img}`}></div>
  );
}

export default SkeletonPreviewBookImage;
