import { EnvType } from '@/types/carouselType';
import React from 'react';

export type CarouselCardProps = {
  imageUrl: string;
  title: string;
  authorname: string;
  env: EnvType;
};

export default function CarouselCard(props: CarouselCardProps) {
  const { imageUrl, title, authorname, env } = props;
  const sizeVariants = {
    desktop: 'w-163 h-246',
    tablet: 'w-157 h-237',
    mobile: 'w-142 h-202',
  };

  return (
    <div>
      <div
        className={`bg-black mr-20 text-white ${sizeVariants[env]} overflow-hidden relative
          select-none`}>
        <img src={imageUrl} alt="이미지" />
        {title}
        {authorname}
      </div>
    </div>
  );
}
