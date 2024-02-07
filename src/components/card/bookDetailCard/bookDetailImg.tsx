import Image from 'next/image';
import TestImage1 from '@/public/images/SampleBookCover1.jpeg';

function BookDetailImg({ imageUrl }: { imageUrl?: string | null }) {
  return (
    <article
      role="img"
      className="bg-gray-5 relative w-[525px] h-[797px] tablet:min-w-[334px] tablet:max-w-[334px]
        tablet:h-[526px] mobile:min-w-[330px] mobile:max-w-[330px] mobile:h-[500px]">
      <Image
        src={imageUrl ?? TestImage1}
        alt="책 표지 이미지"
        fill
        objectFit="contain"
        objectPosition="top"
      />
    </article>
  );
}

export default BookDetailImg;
