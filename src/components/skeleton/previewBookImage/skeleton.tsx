import { PreviewBookInfoSizeProps } from '@/types/previewBookInfoType';

const IMAGE_SIZE = {
  lg: {
    pc: 'w-192 h-291',
    tablet: 'tablet:w-157 tablet:h-237',
    mobile: 'mobile:w-160 mobile:h-242',
    widthOnly: 'w-192 tablet:w-157 mobile:w-160',
    heightNumber: { pc: 291, tablet: 237, mobile: 242 },
  },
  md: {
    pc: 'w-163 h-246',
    tablet: 'tablet:w-122 tablet:h-184',
    mobile: 'mobile:w-142 mobile:h-215',
    widthOnly: 'w-163 tablet:w-122 mobile:w-142',
    heightNumber: { pc: 246, tablet: 184, mobile: 215 },
  },
  sm: {
    pc: 'w-112 h-170',
    tablet: 'tablet:w-112 tablet:h-170',
    mobile: 'mobile:w-93 mobile:h-141',
    widthOnly: 'w-112 tablet:w-112 mobile:w-93',
    heightNumber: { pc: 170, tablet: 170, mobile: 141 },
  },
};

function SkeletonPreviewBookImage({ size }: PreviewBookInfoSizeProps) {
  const STYLE = {
    img: `${IMAGE_SIZE[size].pc} ${IMAGE_SIZE[size].tablet} ${IMAGE_SIZE[size].mobile}`,
    width: `${IMAGE_SIZE[size].widthOnly}`,
    height: `h-${IMAGE_SIZE[size].heightNumber.pc} tablet:h-${IMAGE_SIZE[size].heightNumber.tablet} mobile:h-${IMAGE_SIZE[size].heightNumber.mobile} `,
  };
  return (
    <div
      role="container"
      className={`bg-gray-1 border-2 border-gray-1 flex flex-col animate-pulse ${STYLE.img}`}></div>
  );
}

export default SkeletonPreviewBookImage;
