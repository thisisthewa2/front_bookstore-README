import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { ImageSize } from '@/types/carouselType';
import React from 'react';

export type CarouselCardProps = {
  size: 'sm' | 'md' | 'lg';
  imageUrl: string;
  title: string;
  authorname: string;
  imageSize: ImageSize;
  marginRight: number;
};

function CarouselCard(props: CarouselCardProps) {
  const { imageUrl, title, authorname, imageSize, marginRight, size } = props;
  const { width } = imageSize;
  return (
    <div>
      <div
        className={`text-white relative select-none`}
        style={{ width, marginRight }}>
        <PreviewBookInfo size={size} title={title} authorList={[authorname]} />

      </div>
    </div>
  );
}

export default CarouselCard;
