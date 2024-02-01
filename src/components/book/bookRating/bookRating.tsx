import Image from 'next/image';

interface BookRatingProps {
  rating: number;
}

function BookRating({ rating }: BookRatingProps) {
  const viewRating = () => {
    const ratingImages = [];
    for (let i = 0; i < Math.floor(rating); i++) {
      ratingImages.push(
        <Image
          src="/icons/FilledStar.svg"
          key={`fill${i}`}
          alt="별점"
          width={15}
          height={15}
        />,
      );
    }
    for (let i = 0; i < 5 - rating; i++) {
      ratingImages.push(
        <Image
          src="/icons/UnfilledStar.svg"
          key={`unfill${i}`}
          alt="별점"
          width={15}
          height={15}
        />,
      );
    }
    return ratingImages;
  };
  return <div className="flex-center gap-3">{viewRating()}</div>;
}

export default BookRating;
