import Image from 'next/image';

interface BookRatingProps {
  rating: number;
  size?: 'sm' | 'md';
}

function BookRating({ rating, size = 'sm' }: BookRatingProps) {
  const iconSize = {
    sm: 15,
    md: 20,
  };

  const viewRating = () => {
    const ratingImages = [];
    for (let i = 0; i < Math.round(rating); i++) {
      ratingImages.push(
        <Image
          src="/icons/FilledStar.svg"
          key={`fill${i}`}
          alt="별점"
          width={iconSize[size]}
          height={iconSize[size]}
        />,
      );
    }
    for (let i = 0; i < 5 - Math.round(rating); i++) {
      ratingImages.push(
        <Image
          src="/icons/UnfilledStar.svg"
          key={`unfill${i}`}
          alt="별점"
          width={iconSize[size]}
          height={iconSize[size]}
        />,
      );
    }
    return ratingImages;
  };
  return <div className="flex-center gap-3">{viewRating()}</div>;
}

export default BookRating;
