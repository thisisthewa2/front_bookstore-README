import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface AdvertisementCardProps {
  adsLink?: string;
  adsImg?: string | StaticImageData;
  classNames: string;
}

function AdvertisementCard({
  adsImg,
  adsLink,
  classNames,
}: AdvertisementCardProps) {
  return (
    <>
      <Link href={adsLink || '/'}>
        <div
          className={`flex-center relative rounded-[10px] bg-gray-5 ${classNames}`}>
          {adsImg ? (
            <Image src={adsImg} alt="" fill />
          ) : (
            <span className="text-[13px] font-bold text-gray-2">
              광고 준비 중입니다.
            </span>
          )}
        </div>
      </Link>
    </>
  );
}

export default AdvertisementCard;
