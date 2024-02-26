import AdvertisementCard from '@/components/card/advertisementCard/advertisementCard';
import EventCarousel from '@/components/carousel/eventCarousel';
import { EVENT_IMAGES } from '@/constants/eventImages';
import { EVENT_SECTION_SIZE } from '@/constants/style/eventSectionSize';
import { StaticImageData } from 'next/image';

interface EventSectionProps {
  adsLink?: string;
  adsImg: {
    main: string | StaticImageData;
    category: string | StaticImageData;
  };
  eventLink?: string;
  eventImgs?: {
    pc: StaticImageData[] | string[];
    mobile: StaticImageData[] | string[];
  };
  eventSize: 'main' | 'category';
}

function EventSection({
  adsLink,
  adsImg,
  eventLink,
  eventImgs,
  eventSize,
}: EventSectionProps) {
  const STYLE = {
    ad: `${EVENT_SECTION_SIZE[eventSize]?.ad}`,
    event: `${EVENT_SECTION_SIZE[eventSize]?.event}`,
  };
  return (
    <section className="flex-center h-fit w-fit gap-30 mobile:flex-col mobile:gap-10 tablet:gap-20">
      <AdvertisementCard
        adsImg={adsImg[eventSize]}
        adsLink={adsLink}
        classNames={STYLE.ad}
      />

      <EventCarousel eventImages={eventImgs} classNames={STYLE.event} />
    </section>
  );
}

export default EventSection;
