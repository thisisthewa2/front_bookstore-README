import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import { ImageSize } from '@/types/carouselType';
import React from 'react';

export type CarouselCardProps = {
  size: 'sm' | 'md' | 'lg';
  imageUrl: string;
  title: string;
  authorname: string[];
  imageSize: ImageSize;
  marginRight: number;
  bookId?: number;
};

function CarouselCard(props: CarouselCardProps) {
  const { imageUrl, bookId, title, authorname, imageSize, marginRight, size } =
    props;
  const { width } = imageSize;
  return (
    <div>
      <div
        className={`relative select-none text-white`}
        style={{ width, marginRight }}>
        <PreviewBookInfo
          image={imageUrl}
          size={size}
          title={title}
          authorList={authorname}
          bookId={bookId}
        />
      </div>
    </div>
  );
}

export default CarouselCard;
